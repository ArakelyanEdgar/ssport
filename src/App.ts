import express from "express";
import dotenv from "dotenv";

dotenv.config();

// Create Express server
const App = express();

// Express configuration
App.set("port", process.env.PORT || 3000);

export default App;