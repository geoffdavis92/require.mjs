import fs from "fs";

const require = (filepath: string, encoding: string = "utf8"): Object => {
	return JSON.parse(fs.readFileSync(filepath, { encoding }));
};

export default require;
