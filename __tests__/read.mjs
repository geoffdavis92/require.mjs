import require from "../dist/index.mjs";

const json = require("x.json");

console.log({ json });

/*

import callsites from 'callsites';

	const path = callsites()[0].getFileName()

	const callingFile = path.substr(path.lastIndexOf('/')+1)

	// console.log({ path: path.split('/').filter(i => i !== ''), callingFile });


 */
