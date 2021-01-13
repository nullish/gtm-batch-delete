# gtm-batch-delete
Node gadget to delete elements from a GTM container JSON file, specified by an array of element IDs or element names.

[Export a Google Tag Manager container](https://support.google.com/tagmanager/answer/6106997) then import a new version minus the elements you've specified.

## Pre-requisits

Requires [NodeJS](https://nodejs.org/)

## Optional installation via NPM

`npm i gtm-batch-delete`

### Imported as a package

```javascript
const gtmBatchDelete = require('gtm-batch-delete')
// To delete tags by ID
const cleansedContainer = gtmBatchDelete("./path/to/container.json", "tag", "1,2,3")
// To delete triggers by ID
const cleansedContainer = gtmBatchDelete("./path/to/container.json", "trigger", "1,2,3")
// Or if you want to use tag names instead.
const cleansedContainer = gtmBatchDelete("./path/to/container.json", "tag", "tag one,tag two,tag three")
```

### Run via CLI

```bash
# To delete tags
node gtmBatchDelete.js --container ./path/to/container.json --type 'tag' --elements 1,2,3
# To delete triggers
node gtmBatchDelete.js --container ./path/to/container.json --type 'trigger' --elements 1,2,3
# Or if you want to use tag names instead
node gtmBatchDelete.js --container ./path/to/container.json --type 'tag' --elements 'tag one,tag two,tag three'
```

