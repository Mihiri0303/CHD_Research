const express = require("express");
const childRoutes = express.Router();
const parentRoutes = express.Router();
const BaseRouter = express.Router();
const { Child, Parent } = require("../models");

childRoutes.post("/", async (req, res) => {
	try {
		const child = await Child.create({
			...req.body,
		});
		res.json(child);
	} catch (error) {
		console.error(error);
	}
});

parentRoutes.get("/", async (req, res) => {
	try {
		const parents = await Parent.findAll();
		res.json(parents);
	} catch (error) {
		console.error(error);
	}
});

parentRoutes.post("/", async (req, res) => {
	try {
		const parent = await Parent.create({
			...req.body,
		});
		res.json(parent);
	} catch (error) {
		console.error(error);
	}
});

BaseRouter.use("/child", childRoutes);
BaseRouter.use("/parent", parentRoutes);
module.exports = BaseRouter;
