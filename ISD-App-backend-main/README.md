# ISD-app

## Prerequisites

Make sure you have the following installed:

Node.js (version 20.10.0 or higher)
npm

## Installation

1. Clone the repository:
   git clone https://github.com/keelworks/isd-app.git
2. Navigate to the parent directory:
   cd isd-app
3. Install dependencies:
   npm install

## Running the Application

### Development Mode

To run the application in development mode, use the following command

Inside the parent directory run:

npm run dev <br>
This will start the Node/Express backend using nodemon. Access the application at http://localhost:3000.

Note: Sequelize will use a local automated database called sqlite3 in development mode.

### Production Mode

To build and run the application in production mode, use the following commands

Inside the parent directory run:

npm start <br>
This will build the application and start the Node/Express server in production mode.

### Environment varibles

All environment variable files will be secure DO NOT PUSH THEM INTO THE REPO.

License
This project is licensed under the MIT License - see the LICENSE file for details.

### Connecting to Database

-   Create .env file that contains:

DB_NAME='db_name'
DB_USER=username
DB_PASSWORD=password

-   Run mysql shell:
    mysql -u username -p
    enter password
   
    SOURCE db/schema.sql;

-   Upon server startup the tables will be created if they dont exist through sequelize.

-   Run the application:
    npm run dev
