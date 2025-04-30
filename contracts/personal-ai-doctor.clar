(define-map medical-records
  ((patient principal))
  ((symptoms (string-utf8 256)) (diagnosis (string-utf8 256))))

(define-public (submit-symptoms (symptoms (string-utf8 256)))
  (begin
    (map-set medical-records
      ((patient tx-sender))
      ((symptoms symptoms) (diagnosis "Pending diagnosis")))
    (ok "Symptoms submitted")
  )
)

(define-public (update-diagnosis (patient principal) (diagnosis (string-utf8 256)))
  (begin
    (asserts! (is-eq tx-sender 'ST000000000000000000002AMW42H) "Unauthorized")
    (match (map-get medical-records ((patient patient)))
      record
        (begin
          (map-set medical-records
            ((patient patient))
            ((symptoms (get symptoms record)) (diagnosis diagnosis)))
          (ok "Diagnosis updated"))
      (err "Record not found")
    )
  )
)

(define-read-only (get-medical-record (user principal))
  (match (map-get medical-records ((patient user)))
    record (ok record)
    (err "No record found")
  )
)
