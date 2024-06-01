# <span style="color:blue">Todo App</span>

A simple Todo application built using Express.js, EJS, and MongoDB. This application allows users to add, delete, and update tasks. The tasks are displayed in a table with the most recent ones shown at the top.

## <span style="color:blue">Features</span>

- Add a new task
- Delete a task
- Update a task
- Display tasks with the most recent at the top

## <span style="color:blue">Getting Started</span>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### <span style="color:blue">Prerequisites</span>

Make sure you have the following installed on your local machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

### <span style="color:blue">Installation</span>

1. **Clone the repository:**

   ```bash
   git clone https://github.com/gihanchamila/Todo-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Todo-app
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Set up the environment variables:**

   Create a `.env` file in the root directory of the project and add your MongoDB connection string:

   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

5. **Start the MongoDB server:**

   Make sure your MongoDB server is running. You can start it using the following command if it's installed locally:

   ```bash
   mongod
   ```

6. **Run the application:**

   ```bash
   npm start
   ```

7. **Visit the application:**

   Open your web browser and go to `http://localhost:3000`.

## <span style="color:blue">Usage</span>

- **Add Task:** Use the input field to add a new task and click the "Add" button.
- **Update Task:** Click the "Edit" button next to a task to update its content.
- **Delete Task:** Click the "Delete" button next to a task to remove it from the list.

## <span style="color:blue">Acknowledgments</span>

- Thanks to the Express, EJS, and MongoDB communities for their amazing tools.
```
