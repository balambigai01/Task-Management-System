import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";


connectDB();

const PORT = 8000;
app.listen(PORT, () => console.log("Backend running on the port",PORT ))