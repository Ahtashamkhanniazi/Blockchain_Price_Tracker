# Blockchain Price Tracker

A NestJS application that tracks cryptocurrency prices and sends alerts when the price exceeds a set threshold. The app integrates PostgreSQL for data storage and uses MailDev to simulate email notifications during development.

## Features

- Tracks prices of cryptocurrencies (Ethereum and Polygon)
- Sets price alerts for upward/downward movement
- Sends email alerts when price exceeds the set threshold
- Uses MailDev for email previews during development
- Built using NestJS, TypeORM, PostgreSQL, and Nodemailer

---

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v18.x or higher)
- **PostgreSQL** (for the database)

---

## Installation

Follow these steps to set up and run the project locally:

### 1. Install Dependencies

  - yarn install

### 2. Install PostgreSQL

  You need to have PostgreSQL installed to store the price tracker data. If PostgreSQL is not installed, you can install it using the following commands:

  **On Ubuntu:** 

  - sudo apt update
  - sudo apt install postgresql postgresql-contrib

  **On macOS (using Homebrew):** 

  - brew install postgresql

  **On Windows:** 
  Download and install PostgreSQL from the official website:
  https://www.postgresql.org/download/windows/

### 3. Create a PostgreSQL Database

  After installing PostgreSQL, create a database named "price_tracker"

### 4. Running the Application

  - yarn run start:dev  \\ This command starts the application in development mode.

### 5. Accessing the Application

  **Swagger UI**
    Once the app is running, you can access the Swagger UI to explore the API at:

    http://localhost:5000/api/

  **MailDev Email Preview**
    For email testing, visit:

    http://localhost:1080/
  
    MailDev intercepts all emails sent by the app and displays them in the browser. No emails will be sent to real recipients during development.


### 6.  Environment Variables
  In order to properly connect to your PostgreSQL database and external services, you need to configure the environment variables in the .env file. Here's what you'll need to do:

  **1**. Database Configuration:
    Add your own PostgreSQL credentials in the .env file. Specifically, you'll need to update the following:
    - DB_USERNAME: Your PostgreSQL username (default is often postgres).
    - DB_PASSWORD: The password for your PostgreSQL user.
    - DB_HOST: The host where your database is running (typically localhost for local development).
    - DB_DATABASE: The name of the database, which should be price_tracker (or any name you have chosen).

