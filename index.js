const express = require("express");
const mongoose = require("mongoose");
const courseRoutes = require("./src/routes/courseRoutes");

const app = express();
const port = process.env.PORT || 3000;
const mongoUri =
	process.env.MONGO_URI ||
	"mongodb+srv://patrickhany990_db_user:Aassdd11%40@lab8.4lc9bs2.mongodb.net/?appName=lab8";

app.use(express.json());

app.get("/", (req, res) => {
	res.json({ message: "Courses API" });
});

app.use("/api/courses", courseRoutes);

mongoose
	.connect(mongoUri)
	.then(() => {
		app.listen(port, () => {
			console.log(`Server running on port ${port}`);
		});
	})
	.catch((error) => {
		console.error("Mongo connection error:", error.message);
		process.exit(1);
	});
