const express = require("express");
const compression = require("compression");

const sequelize = require("sequelize");
const db = require("./models");

require("dotenv").config();

const routes = require("./routes");

const app = express();

db.sequelize
	.sync({ force: true })
	.then(() => {
		// create roles
		db.role.create({
			name: "user",
		});

		db.role.create({
			name: "admin",
		});

		// create users
		db.user.create({
			name: "john",
			email: "john@gmail.com",
			password: "user",
			roleId: 1,
		});

		db.user.create({
			name: "jane",
			email: "jane@gmail.com",
			password: "user",
			roleId: 1,
		});

		db.user.create({
			name: "jack",
			email: "jack@gmail.com",
			password: "user",
			roleId: 1,
		});

		db.user.create({
			name: "admin",
			email: "arandomadmin@gmail.com",
			password: "admin",
			roleId: 2,
		});

		// create cars
		db.car.create({
			brand: "Audi",
			model: "A3",
			year: 2019,
			color: "black",
			price: 200,
		});

		db.car.create({
			brand: "Audi",
			model: "A4",
			year: 2019,
			color: "black",
			price: 200,
		});

		db.car.create({
			brand: "Renault",
			model: "Clio",
			year: 2019,
			color: "black",
			price: 100,
		});

		console.log("Database & tables created!");
	})
	.catch((err) => {
		console.log(err);
	});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

routes(app);

app.listen(process.env.PORT || 8080, () => {
	console.log(`Server is running on port ${process.env.PORT || 8080}`);
});
