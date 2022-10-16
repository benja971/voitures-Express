import { resa as Reservations } from "../../models";

async function readResas(req, res) {
	try {
		return res.status(200).send(await Reservations.findAll());
	} catch (error) {
		return res.status(500).send({ message: error.message });
	}
}

async function readResa(req, res) {
	const { id } = req.params;

	if (!id) return res.status(400).send({ message: "Id is required" });

	if (isNaN(id)) return res.status(400).send({ message: "Id must be a number" });

	try {
		// find reservation
		return res.status(200).send(await Reservations.findOne({ where: { id } }));
	} catch (error) {
		return res.status(500).send({ message: error.message });
	}
}

export default { readResa, readResas };
