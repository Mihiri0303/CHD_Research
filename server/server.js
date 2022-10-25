const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
var logger = require("morgan");
const { sequelize } = require("./models/index");

const app = express();

const PORT = process.env.HTTP_PORT || 4000;

const initialCorsOptions = {
	methods: ["GET", "POST", "DELETE", "PUT"],
};

var allowlist = [process.env.WEB_URL];
var corsOptionsDelegate = function (req, callback) {
	var corsOptions;
	if (allowlist.indexOf(req.header("Origin")) !== -1) {
		corsOptions = { origin: true, ...initialCorsOptions };
	} else {
		corsOptions = { origin: false, ...initialCorsOptions };
	}
	callback(null, corsOptions);
};

app.use(cors(corsOptionsDelegate));
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "100mb" }));
app.use(
	fileUpload({
		limits: { fileSize: 50 * 1024 * 1024 },
		createParentPath: true,
	})
);

// app.use((req, res, next) => {
// 	next(createError(404));
// });

app.get("/sync", async (req, res) => {
	await sequelize.sync({ force: true });
	res.send("done");
});

app.listen(PORT, () => {
	console.log("Server is live on: http://localhost:" + PORT);
});
