// @flowflow-ignore
import fs from "fs";

const require = (filepath: string, encoding: string = "utf8"): Object =>
	JSON.parse(fs.readFileSync(filepath, { encoding }));

// flow-ignore
export default require;
