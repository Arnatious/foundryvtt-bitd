export const preloadTemplates = async function() {
	const templatePaths = [
		"systems/foundryvtt-bitd/templates/sheets/parts/attr-field.hbs"
	];

	return loadTemplates(templatePaths);
}
