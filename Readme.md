# CED Makers Lab Scheduling Web Application

## Overview

This project is a full-stack web application developed for scheduling resources at the CED Makers Lab at Anna University. The application allows users to view available lab resources, book them, and manage their bookings. The app also includes user authentication and authorization features to ensure secure access.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User Registration and Login with JWT Authentication
- Secure Password Storage with bcrypt
- View Available Lab Resources
- Book Resources
- Manage Bookings
- Protected Routes for Authorized Users
- Responsive Design

## Technologies Used

### Frontend

- React.js: Library for building user interfaces
- Axios: Promise-based HTTP client for making requests
- Custom CSS for styling

### Backend

- Node.js: JavaScript runtime for building server-side applications
- Express.js: Web framework for Node.js
- PostgreSQL: Relational database for storing user and resource data
- bcrypt: Library for hashing passwords
- jsonwebtoken (JWT): Library for generating and verifying JSON Web Tokens

## Installation

To set up the project locally, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine
- PostgreSQL database setup

### Backend Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ced-makers-lab-scheduling.git
cd ced-makers-lab-scheduling
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add the following:

```env
DATABASE_USER=your_db_user
DATABASE_HOST=your_db_host
DATABASE_NAME=CED
DATABASE_PASSWORD=your_db_password
DATABASE_PORT=5432
SECRET_KEY=your_jwt_secret
```

4. Start the server:

```bash
nodemon server.js
```

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The application should now be running on `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## Usage

### Register

- Navigate to the registration page and create a new account.
- Fill in the required details, including email, password, and whether you are an Anna University CEG/AC-Tech Campus student.

### Login

- Navigate to the login page and enter your credentials.
- Upon successful login, you will be redirected to the dashboard.

### Viewing and Booking Resources

- View available lab resources on the resources page.
- Select a resource to book and complete the booking process.

### Managing Bookings

- View your bookings on the dashboard.
- Cancel or modify bookings as needed.

## API Endpoints

### Public Endpoints

- `POST /api/register`: Register a new user
- `POST /api/login`: Login a user and receive a JWT

### Protected Endpoints

- `GET /api/protected`: Access a protected route (example)
- `GET /api`: View all lab resources
- `GET /api/resources`: View all IoT components

### Middleware

- `authenticateToken`: Middleware to verify JWT and protect routes

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes and commit (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License.

## Contact

For any questions or issues, please contact:

- Your Name: [abdulsaleem.cse21@mamcet.com](mailto:abdulsaleem.cse21@mamcet.com)
- GitHub: [AbdulSalimSparta](https://github.com/AbdulSalimSparta)

---

This README file provides a comprehensive guide to setting up, using, and contributing to the project. Adjust the placeholders with your actual information and ensure all sections are accurate and up to date.