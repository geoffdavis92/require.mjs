import fs from "fs";
const require = (a, b = "utf8") =>
	JSON.parse(fs.readFileSync(a, { encoding: b }));
export default require;
