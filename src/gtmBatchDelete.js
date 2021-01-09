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

}

module.exports = gtmBatchDelete;