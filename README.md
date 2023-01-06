# Build instructions

Pull the repository, and go to the folder in your local computer. Start a terminal in this folder (hiot-todo) and do as follows:

If you have Docker installed on your system, you can simply run the following command:

### `docker-compose -f deploy.yml up`

If you do not have Docker installed on your system, you have to run a series of these commands:

### `cd backend && npm install && npm start`

In a new terminal window:

### `cd frontend && npm install && npm start`

It will compile both the frontend and backend. When it has finished loading, you may open your browser and
visit http://localhost:3000

