// Deletes tags from uer specified GTM container JSON file, based on a comma seperated list of tag IDs
const gtmBatchDelete = (...args) => {
	const yargs = require('yargs');
	const fs = require('fs');
	const path = require('path');
	const cleanDeep = require('clean-deep');
	const colors = require('colors'); // Colours for console output

	// Command line arguments from yargs
	const argv = yargs
	.option('container', {
		alias: 'c',
		describe: 'Path to GTM container JSON file',
		type: 'string'
	})
	.option('tags', {
		alias: 't',
		describe: 'Comma separated list of tag IDs or tag names. Ensure you enclose the list in invderted commas.',
		type: 'string'
	})
	.argv

	// Get parameters from CLI or module function call
	const containerFile = args[0] || argv.container;
	const fname = path.basename(containerFile);
	const tagList = args[1] || argv.tags;

	// Load container to JS object
	const gtm = JSON.parse(fs.readFileSync(containerFile));
	
	// Load tag IDs 
	const arrTags = tagList.split(",");

	// Check tags against list and remove
	let arrIndexes = [];
	console.log("Removing tags... ");
	for (tag of arrTags) {
		for (i = 0; i < gtm.containerVersion.tag.length; i++) {
			// Try to match tag in container either by ID or by name
			if (gtm.containerVersion.tag[i].tagId == tag || gtm.containerVersion.tag[i].name == tag) {
				arrIndexes.push(i);
				console.log(`${gtm.containerVersion.tag[i].tagId},${gtm.containerVersion.tag[i].name}`);
			}
		}
	}

	arrIndexes.forEach(e => delete gtm.containerVersion.tag[e]);
	const cleanGTM = cleanDeep(gtm); // removes residual null values after tags have been deleted.
	const gtmOut = JSON.stringify(cleanGTM);

	if (argv.container) {
		// If launched from CLI, output is written to local file system.
	fs.writeFileSync(`./output/${fname}`, gtmOut); // write to local file
	console.log("Your cleansed GTM container file is here: ".green +  "./output/" + fname);
}
// Return JS object to be used by functions
return cleanGTM;
}

module.exports = gtmBatchDelete;