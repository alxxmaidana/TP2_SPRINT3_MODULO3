import { body } from "express-validator";

export const superheroValidationRules = () => [
	// Validar nombreSuperheroe
	body("nombreSuperheroe")
		.trim() // Sanitizar que no tenga espacios en blanco al inicio/final
		.notEmpty() // validar que no esté vacio
		.withMessage("El nombre del Superhéroe es requerido.")
		.isLength({ min: 3, max: 60 }) // validar minimo y máximo de carácteres
		.withMessage(
			"El nombre del Superhéroe debe tener entre 3 y 60 caracteres.",
		),
	body("nombreReal")
		.trim()
		.notEmpty()
		.withMessage("El nombre real del Superhéroe es requerido.")
		.isLength({ min: 3, max: 60 })
		.withMessage(
			"El nombre real del Superhéroe debe tener entre 3 y 60 caracteres.",
		),
	body("edad")
		.notEmpty()
		.withMessage("El campo edad no puede quedar vacío.")
		.isInt({ min: 0 }) // No admite edad negativa
		.withMessage("La edad no puede ser negativa."),
	body("poderes")
		.isArray({ min: 1 }) // Validar que el array no esté vacío
		.withMessage("Los poderes del Superhéroe son requeridos."),
		
	body("poderes.*") // El asterisco aplica la regla a CADA los elementos del array
		.trim()
		.notEmpty()
		.withMessage("Ningún poder puede quedar vacío.")
		.isLength({ min: 3, max: 60 })
		.withMessage("Cada poder debe tener entre 3 y 60 caracteres")
		.isString()
		.withMessage("Todos los poderes debe ser un texto"),
];
