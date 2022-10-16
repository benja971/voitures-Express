import { Sequelize } from "sequelize";
/**
 * @type {Sequelize.Model}
 */
import { car as Cars } from "../../models";

/**
 * Add a car to the database
 *
 * @group Cars
 * @route POST /car
 *
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
export default async function createCar(req, res) {
	/**
	 * @type {Car}
	 */
	const { brand, model, year, color, price } = req.body;

	if (!(brand && model && year && color && price))
		return res.status(400).send({
			message: "Content cannot be empty!",
		});

	try {
		/**
		 * add car to database
		 *	@type {Car}
		 */
		await Cars.create({
			brand,
			model,
			year,
			color,
			price,
		});

		return res.status(201);
	} catch (error) {
		return res.status(500).send({ message: "Error while creating car" });
	}
}
