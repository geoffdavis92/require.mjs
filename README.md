# require.mjs

*Require local JSON files in files utilizing the Node.js v8.5.0 `.mjs`/`--experimental module` system*

**Note:** to get this functionality, please use [this snippet](https://github.com/geoffdavis92/require.mjs/blob/master/snippet.js). 

## Why not a module?

As I was working to get this functionality in place, I was running into issues with the lack of metavariables like `__dirname` (as referenced [here](http://2ality.com/2017/09/native-esm-node.html#checklist-things-to-watch-out-for)) that would prove useful for use with `path.resolve` and `fs.readFileSync`.

The issue I was coming across was that the function would attempt to look for a file relative to wherever the function was declared. In my module, using `index.mjs` as a module imported into `__tests__/requireDataJson.mjs` would look for the required JSON file, `data.json`, at the project root (as a sibling of `index.mjs`); in a published package, this would result in the `require()` function looking in `path/to/node_modules/require.mjs/dist/`. (I've set the `main` property in the package to `/dist/index.mjs`)

If you think you can fix this issue, please feel free to file a Pull Request, or to discuss this further, file an Issue.

## Contributing

Please fork this repo, and work under a branch titled `fork`. 

### Installing Dependencies

This project uses `Yarn` to manage dependencies. (More info [here](https://yarnpkg.com/))

Run `$ yarn` to install dependencies.

### Building

For development, run `$ yarn run babel` to build to `/dist`

For release, run `$ yarn run build` to check Flow types, run Prettier over files, and strips Flow types and minifies the code using Babel.

### Other scripts

Run Flow to check type annotations: `$ yarn run flow`
Run Prettier to auto-format `.js`, `.mjs`, and `.json` files: `$ yarn run prettier`

## License

[MIT](https://github.com/geoffdavis92/require.mjs/blob/master/LICENSE)