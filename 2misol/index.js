import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import routes_b from "./routes/index_b.js";



dotenv.config();
const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/users", routes);
app.use("/boards", routes_b);


// start project
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));