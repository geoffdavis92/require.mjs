// Add this line at the top of the module with other `import` statements. If you are already using the `fs` module, you do not need to include this line
import fs from "fs";

/**
 * @name require
 * @description Read local JSON file to use in `.mjs` files as a Javascript object
 * @param  {String} filepath Path to the JSON file.
 * @param  {String} encoding Encoding of the target JSON file; defaults to UTF-8.
 * @return {Object} JSON parsed into a Javascript object.
 */
const require = (filepath, encoding = "utf8") =>
	JSON.parse(fs.readFileSync(filepath, { encoding }));
