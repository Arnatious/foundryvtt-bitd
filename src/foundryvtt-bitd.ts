/**
 * This is your TypeScript entry file for Foundry VTT.
 * Register custom settings, sheets, and constants using the Foundry API.
 * Change this heading to be more descriptive to your system, or remove it.
 * Author: [your name]
 * Content License: [copyright and-or license] If using an existing system
 * 					you may want to put a (link to a) license or copyright
 * 					notice here (e.g. the OGL).
 * Software License: [your license] Put your desired license here, which
 * 					 determines how others may use and modify your system
 */

// Import TypeScript modules
import { registerSettings } from './module/settings.js';
import { preloadTemplates } from './module/preloadTemplates.js';
import { loadHelpers } from "./module/helpers.js";
import { BITDActor } from './module/actors/BITDActor.js';
import { BITDActorSheet } from './module/sheets/BITDActorSheet.js';

/* ------------------------------------ */
/* Initialize system					*/
/* ------------------------------------ */
Hooks.once('init', async function() {
	console.log('foundryvtt-bitd | Initializing foundryvtt-bitd');

	// Assign custom classes and constants here
	CONFIG.Actor.entityClass =  BITDActor;
	// CONFIG.Item.entityClass = BITDItem;

	// Register custom system settings
	registerSettings();

	// Preload Handlebars helpers
	await loadHelpers();

	// Preload Handlebars templates
	await preloadTemplates();

	// Register custom sheets (if any)
	Actors.unregisterSheet("core", ActorSheet);
	Actors.registerSheet("foundryvtt-bitd", BITDActorSheet, { makeDefault: true })
});

/* ------------------------------------ */
/* Setup system							*/
/* ------------------------------------ */
Hooks.once('setup', function() {
	// Do anything after initialization but before
	// ready
});

/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once('ready', function() {
	// Do anything once the system is ready
});

// Add any additional hooks if necessary
