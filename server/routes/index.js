const express = require("express");
const childRoutes = express.Router();
const parentRoutes = express.Router();
const BaseRouter = express.Router();
const { Child, ChildGrowth, Parent } = require("../models");

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

childRoutes.get("/", async (req, res) => {
	try {
		const children = await Child.findAll({
			include: Parent,
		});
		res.json(children);
	} catch (error) {
		console.error(error);
	}
});

childRoutes.get("/:childId/growth", async (req, res) => {
	const { childId } = req.params;
	try {
		const childGrowth = await ChildGrowth.findAll({
			where: {
				childId: childId,
			},
			order: [["createdAt", "ASC"]],
		});
		res.json(childGrowth);
	} catch (error) {
		console.error(error);
	}
});

childRoutes.post("/:childId/growth", async (req, res) => {
	try {
		const childGrowth = await ChildGrowth.create({
			...req.body,
		});
		res.json(childGrowth);
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
