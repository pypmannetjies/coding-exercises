# coding-challenges
A collection of coding exercises and their solutions

## Setup

The project is optimised for use with Visual Studio Code. 

## Languages

Challenges were solved in a variety of programming langues for practice and variety. 

## Python

[Version 3.x](https://docs.python.org/3/) is used for all Python scripts in the project.

The scripts can be run on the command line:

`python3 check_permutation.py`

Or through the configured VS Code test task `Run open Python script` in `tasks.json`

Debugging Python files is also supported through the VS Code Python plugins.

## JavaScript

The [JavaScript standard style](https://standardjs.com/) is followed and enforced through `eslint`.

The use of ECMAScript modules (e.g. `import` and `export`) is supported through the `--experimental-modules` flag and the use of the `.mjs` extension. Read more in the [Node.js documentation](https://nodejs.org/api/esm.html).

The scripts can be run on the command line:

`node --experimental-modules minimalTree.mjs `

Or through the configured VS Code test task `Run open Node script` in `tasks.json`
