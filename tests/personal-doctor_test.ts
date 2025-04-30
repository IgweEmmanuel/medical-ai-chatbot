import { Clarinet, Tx, Chain, Account, types } from 'clarinet-sdk'

Clarinet.test({
  name: 'Patient can submit symptoms and admin can diagnose',
  async fn(chain: Chain, accounts: Map<string, Account>) {
    const user = accounts.get('wallet_1')!
    const admin = accounts.get('deployer')!

    // User submits symptoms
    let block = chain.mineBlock([
      Tx.contractCall(
        'personal-doctor',
        'submit-symptoms',
        [types.utf8('Severe headache')],
        user.address
      ),
    ])
    block.receipts[0].result.expectOk().expectAscii('Symptoms submitted')

    // Admin updates diagnosis
    block = chain.mineBlock([
      Tx.contractCall(
        'personal-doctor',
        'update-diagnosis',
        [types.principal(user.address), types.utf8('Migraine')],
        admin.address
      ),
    ])
    block.receipts[0].result.expectOk().expectAscii('Diagnosis updated')

    // Verify the medical record
    const result = chain.callReadOnlyFn(
      'personal-doctor',
      'get-medical-record',
      [types.principal(user.address)],
      user.address
    )
    result.result.expectOk().expectTuple({
      symptoms: types.utf8('Severe headache'),
      diagnosis: types.utf8('Migraine'),
    })
  },
})
