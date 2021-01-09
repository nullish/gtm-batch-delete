// Deletes tags from uer specified GTM container JSON file, based on a comma seperated list of tag IDs
const gtmBatchDelete = (...args) => {
	const yargs = require('yargs');
	const fs = require('fs');

	// Command line arguments from yargs
	const argv = yargs
	.option('container', {
		alias: 'c',
		describe: 'Path to GTM container JSON file',
		type: 'string'
	})
	.option('tags', {
		alias: 't',
		describe: 'Comma separated list of tag IDs',
		type: 'string'
	})
	.argv

	// Get parameters from CLI or module function call
	const containerFile = args[0] || argv.container;
	const tagList = args[1] || argv.tags;

	// Load container to JS object
	const gtm = JSON.parse(fs.readFileSync(containerFile));
	
	// Load tag IDs 
	const arrTags = tagList.split(",");

	// Check tags against list and remove
	let arrIndexes = [];
	for (tag of tagList) {
		for (i = 0; i < gtm.containerVersion.tag.length; i++) {
			if (gtm.containerVersion.tag[i].tagId == tag) {
				// console.log(gtm.containerVersion.tag[i]);
				arrIndexes.push(i);
			}
		}
	}
	console.log(arrIndexes);
	arrIndexes.forEach(e => delete gtm.containerVersion.tag[e]);
	console.log(gtm.containerVersion.tag);
}

module.exports = gtmBatchDelete;