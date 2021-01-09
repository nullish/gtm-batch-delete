# gtm-batch-delete
Node gadget to delete tags from a GTM container JSON file, specified by an array of tag IDs.

[Export a Google Tag Manager container](https://support.google.com/tagmanager/answer/6106997) then import a new version minus the tags you've specified.

## Pre-requisits

Requires [NodeJS](https://nodejs.org/)

## Optional installation via NPM

`npm i gtm-batch-delete`

### Imported as a package

```javascript
const gtmBatchDelete = require('gtm-batch-delete')
const cleansedContainer = gtmBatchDelete("./path/to/container.json", "1,2,3")
```

### Run via CLI

```bash
node gtmBatchDelete.js --container ./path/to/container.json --tags 1,2,3
```

