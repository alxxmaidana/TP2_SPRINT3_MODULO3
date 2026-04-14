import { body } from "express-validator";

export const superheroValidationRules = () => [
	// Validar nombreSuperheroe
	body("nombreSuperheroe")
		.isString()
		.withMessage("El nombre del superhéroe debe ser un texto")
		.trim() // Sanitizar que no tenga espacios en blanco al inicio/final
		.notEmpty() // validar que no esté vacio
		.withMessage("El nombre del Superhéroe es requerido.")
		.isLength({ min: 3, max: 60 }) // validar minimo y máximo de carácteres
		.withMessage(
			"El nombre del Superhéroe debe tener entre 3 y 60 caracteres.",
		),
	body("nombreReal")
		.isString()
		.withMessage("El nombre real del superhéroe debe ser un texto")
		.trim()
		.notEmpty()
		.withMessage("El nombre real del Superhéroe es requerido.")
		.isLength({ min: 3, max: 60 })
		.withMessage(
			"El nombre real del Superhéroe debe tener entre 3 y 60 caracteres.",
		),
	body("edad")
		.notEmpty()
		.withMessage("La edad es requerida")
		.isNumeric()
		.withMessage("La edad deber ser un número")
		.custom((value) => { // validar que se un número mayor a 0
			if (value < 0) {
				throw new Error("La edad no puede ser negativa");
			}
			return true; // Indica que se cumplió la validación.
		})
		.trim(),
	body("poderes")
		.isArray({ min: 1 }) // Validar que el array no esté vacío
		.withMessage("Los poderes del Superhéroe son requeridos."),
	body("poderes.*") // El asterisco aplica la regla a CADA elemento del array
		.notEmpty()
		.withMessage("Ningún poder puede quedar vacío.")
		.isLength({ min: 3, max: 60 })
		.withMessage("Cada poder debe tener entre 3 y 60 caracteres")
		.isString()
		.withMessage("Todos los poderes deben ser un texto")
		.trim(),
];
