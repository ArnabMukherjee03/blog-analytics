# Blog Analytics and Search Tool

This project is a web application built using Express.js and Lodash that provides blog analytics and search capabilities. It fetches data from a third-party blog API, analyzes the data to provide statistics, and allows users to search for blog posts based on specific queries.


## Prerequisites

- Node.js and npm installed on your local machine.



## Environment Variables

Environment variables are used to configure various aspects of the application. It's important to set these variables correctly to ensure the proper functioning of the project. You can use a `.env` file to manage these variables locally.

Create a `.env` file in the root of the project directory and add the following variables:

```dotenv
# API URL and API Key for fetching blog data
API=https://api.example.com/data
API_SECRET=YOUR_API_KEY_HERE

# Port for the Express.js server (optional, defaults to 5000)
PORT=5000
```



## Getting Started

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/ArnabMukherjee03/blog-analytics.git
   ```

2. Navigate to the project directory:
   ```bash
   cd blog-analytics
   ```

3. Install project dependencies:
   ```bash
   npm install
   ```

4. Start the Express.js server:
```bash
npm start
```



## API Endpoints

The following API endpoints are available:

### 1. Get Blog Statistics

- **Endpoint**: `api/blog-stats`
- **HTTP Method**: GET
- **Description**: This endpoint provides statistics about the blogs, including the total number of blogs, the title of the longest blog, the number of blogs with "privacy" in the title, and an array of unique blog titles.

#### Example Request:

```bash
curl http://localhost:5000/api/blog-stats
```

### 2. Search Blogs

- **Endpoint**: `api/blog-search?query=searchItem`
- **HTTP Method**: GET
- **Description**: This endpoint provides a search functionality that filters the blogs based on the provided query string 
#### Example Request:

```bash
curl http://localhost:5000/api/blog-search?query=watch
```


