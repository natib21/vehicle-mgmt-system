Car Management System

Table of Contents

Description

Installation

Usage

Features

API Endpoints

Technologies

Contributing

License

Description

The Car Management System is a backend API project for managing cars. It allows users to create, read, update, and delete car records. Each car has attributes like name, make, model, status, and color. The system is built using Node.js, Express.js, and MongoDB.

Installation

Follow these steps to set up the project:

# Clone the repository

git clone https://github.com/natib21/vehicle-mgmt-system

# Navigate to the project directory

cd vehicle-mgmt-system

# Install dependencies

npm install

Set up the environment variables by creating a .env file in the root directory and adding the following:

DATABASE= mongodb+srv://nathnaelzelalem:wN59VTa2pAZurmMh@car.9nwv6.mongodb.net/?retryWrites=true&w=majority&appName=car
PORT=8080

Usage

Start the server by running:

npm start

The server will run on the specified port (default is 8080). Access the API endpoints using a tool like Postman or cURL.

Features

Add new car records.

Retrieve all cars or a specific car by ID.

Update car details.

Delete car records.

Enum-based status field with default value "available."

API Endpoints

Method

Endpoint

Description

GET

/api/car

Get all cars

POST

/api/car

Add a new car

PATCH

/api/:id

Update car by ID

DELETE

/api/:id

Delete car by ID

Technologies

Node.js

Express.js

MongoDB

Mongoose

dotenv

Contributing

Contributions are welcome! Here's how you can help:

Fork the repository.

Create a new branch for your feature or bug fix:

git checkout -b feature-name

Commit your changes:

git commit -m "Add new feature"

Push your branch:

git push origin feature-name

Open a pull request.
