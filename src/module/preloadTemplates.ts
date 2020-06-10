export const preloadTemplates = async function() {
	const templatePaths = [
		// Add paths to "systems/foundryvtt-bitd/templates"
	];

	return loadTemplates(templatePaths);
}
