<<<<<<< HEAD

# medical-ai-chatbot

# Medical ai chatbot for basic use, smart contract in clarity

# Medical AI Chatbot – Personal Doctor on Stacks Blockchain

The **Medical AI Chatbot** project demonstrates the creation of a **decentralized medical AI system** using the **Clarity language** on the **Stacks blockchain**. The system allows patients to store their medical records on-chain, submit their symptoms, receive diagnoses, and maintain their medical history in a secure and transparent environment.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Setup](#project-setup)
  - [Install Prerequisites](#install-prerequisites)
  - [Running the Project](#running-the-project)
  - [Running Tests](#running-tests)
- [Contract Details](#contract-details)
  - [submit-symptoms](#submit-symptoms)
  - [update-diagnosis](#update-diagnosis)
  - [get-medical-record](#get-medical-record)
- [Configuration](#configuration)
  - [Devnet Configuration](#devnet-configuration)
- [License](#license)

---

## Overview

This project uses **Stacks blockchain** to manage the data of patients using a **smart contract** built in **Clarity**. The **personal-doctor** contract allows users (patients) to submit their symptoms, while an admin (authorized personnel) can update the diagnosis based on the submitted symptoms. All data is stored on-chain, ensuring transparency, security, and immutability.

The project is developed using the **Clarinet framework** for testing and deploying Clarity contracts.

## Features

- **Submit Symptoms**: Patients can submit symptoms using the `submit-symptoms` function, which stores the symptoms on the blockchain.
- **Diagnosis Update**: An admin (authorized user) can update the diagnosis for a patient using the `update-diagnosis` function.
- **Retrieve Medical Record**: Patients can retrieve their stored medical records through the `get-medical-record` read-only function.

---

## Project Setup

### Install Prerequisites

Before you can run this project, you need to install a few tools:

1. **Clarinet**: Clarinet is a framework for building and testing smart contracts on the Stacks blockchain.

   Follow the installation guide for **Clarinet** on your system from the official documentation: [Install Clarinet](https://docs.hiro.so/clarinet/install)

2. **Node.js** (for running tests and project setup):  
   You can download and install Node.js from [here](https://nodejs.org/).

### Running the Project

Once the dependencies are installed, follow the steps below to get started with the project:

1. **Clone this Repository**:

   ```bash
   git clone https://github.com/IgweEmmanuel/medical-ai-chatbot.git
   cd medical-ai-chatbot
   ```

> > > > > > > 295f82b (medicatl ai chatbot)
