# User Management API

This is a simple user management API, developed in Node.js (v16.20) and Express (v4). The API provides five basic endpoints for CRUD (Create, Read, Update, Delete) operations on users.

## Endpoints

1. **GET /users/**
   - Returns the list of all users.

2. **GET /users/:id**
   - Retrieves details of a specific user based on the provided ID.

3. **POST /users/**
   - Creates a new user. User data should be provided in the request body.

4. **PUT /users/:id**
   - Updates data for a specific user based on the provided ID. Updated data should be provided in the request body.

5. **DELETE /users/:id**
   - Deletes a specific user based on the provided ID.

## Database Configuration

The necessary environment variables for database configuration are listed in the `.env` file. Make sure to fill them with the appropriate information before starting the application.

Example content of the `.env` file:

```env
DB_HOST = localhost
DB_PORT = database_port
DB_USER = your_username
DB_PWD = your_password
DB_NAME = database_name
```

**Important:** Create a `.env` file in the project root and fill in the variables with your specific information.

## How to Use

Follow these steps to download, configure, and start the application:

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/repository-name.git
   ```

2. Navigate to the project directory:

   ```bash
   cd repository-name
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file and fill in the environment variables with your database information.

5. Start the application:

   ```bash
   npm run start
   ```

The application will be available at `http://localhost:3000` by default. Ensure that the database is correctly configured before starting the application.

## Contributions

Feel free to contribute to this project. Open issues to report problems or submit pull requests with improvements.

This is a free and open repository for collaboration.
