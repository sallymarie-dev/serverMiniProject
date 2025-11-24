# Express Snacks API

## Project Description

This project is a RESTful API built with Express.js that manages a collection of snacks.
 It allows users to perform core CRUD operations—Create, Read, and Delete—on in-memory snack data. Each snack has a unique ID, a name, a price, and optional tags to describe its type or category. The API is designed to be lightweight, easy to understand, and serves as a foundational project for learning Express routes, HTTP status codes, and JSON responses.

The server uses middleware to parse JSON requests and logs all incoming requests, including method, path, query, route parameters, and request body for POST, PUT, and PATCH methods. All endpoints return consistent JSON responses, and errors such as missing resources or invalid input are handled with proper status codes and JSON error messages. The data is stored in memory and seeded with a few sample snacks for testing purposes, which allows you to experiment without needing a database.

## Setup Instructions

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
4. Start the server in development mode:

   ```bash
   npm run dev
   ```

   The server will run on `http://localhost:3000`.

## API Endpoints

### GET `/snacks`

Returns a list of all snacks.
**Response:**

```json
{
  "snacks": [
    {
      "id": "uuid",
      "name": "Cheezit",
      "price": 4.99,
      "tags": ["crackers", "cheese snack"]
    },
    ...
  ]
}
```

### GET `/snacks/:id`

Returns a single snack by ID.
**Response if found:**

```json
{
  "id": "uuid",
  "name": "Pringles",
  "price": 2.49,
  "tags": ["potato", "flavored crisp"]
}
```

**Response if not found:**

```json
{
  "error": "Snack not found"
}
```

### POST `/snacks`

Creates a new snack. Required fields: `name`, `price`. Optional field: `tags`.
**Request body:**

```json
{
  "name": "PopTarts",
  "price": 2.59,
  "tags": ["chocolate", "breakfast snack"]
}
```

**Response:**

```json
{
  "id": "uuid",
  "name": "PopTarts",
  "price": 2.59,
  "tags": ["chocolate", "breakfast snack"]
}
```

**Error response:**

```json
{
  "error": "Snack name is required"
}
```

or

```json
{
  "error": "Snack price is required and must be a number"
}
```

### DELETE `/snacks/:id`

Deletes a snack by ID.
**Response if deleted successfully:**

```json
{
  "message": "Snack deleted successfully"
}
```

**Response if not found:**

```json
{
  "error": "Snack not found"
}
```

### POST `/echo`

Echoes back the request body for testing purposes.
**Request body example:**

```json
{
  "example": "data"
}
```

**Response:**

```json
{
  "received": {
    "example": "data"
  },
  "message": "Echo successful!"
}
```

## Technologies Used

* Node.js
* Express.js
* Crypto module (for generating unique IDs)
* Nodemon (optional, for development)

## Notes

* All data is stored in memory; restarting the server will reset the dataset.
* The API includes logging middleware that prints each request and response status to the console.
* All endpoints return consistent JSON responses for both success and error cases.

## Testing Instructions

You can test the API using Postman, cURL, or any HTTP client:

```bash
curl -X GET http://localhost:3000/snacks
curl -X POST http://localhost:3000/snacks -H "Content-Type: application/json" -d '{"name":"Snack","price":1.99}'
```

For automated testing, Vitest and Supertest can be set up (optional).


Author: Sally M.Watson