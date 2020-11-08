mxGraph Type Definitions
====

[![Build](https://github.com/hungtcs/mxgraph-type-definitions/workflows/Build/badge.svg)](https://github.com/hungtcs/mxgraph-type-definitions/actions)
[![npm version](https://badge.fury.io/js/mxgraph-type-definitions.svg)](https://badge.fury.io/js/mxgraph-type-definitions)

This project is typescript definitions for [mxGraph].

**This project provide global type definitions for mxgraph, if you are working with [official mxgraph npm package](https://www.npmjs.com/package/mxgraph), please see our new package [`typed-mxgraph`](https://github.com/typed-mxgraph/typed-mxgraph) which design for mxgraph npm package.**

### Usage

~~install `mxgraph-type-definitions` dependencie and append `node_modules/mxgraph-type-definitions` to `typeRoots` in `tsconfig.json`~~
```shell
npm install --save-dev mxgraph-type-definitions
```
```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "esModuleInterop": true,
    "typeRoots": [
      "node_modules/@types",
      "node_modules/mxgraph-type-definitions"
    ]
  }
}
```
**As [#29](https://github.com/hungtcs/mxgraph-type-definitions/issues/29) said, `mxClient` will not work if installed via npm. It is recommended to add this project as a submodule to you project. Here is a [demo](https://github.com/hungtcs/angular-with-mxgraph). If you are using [this npm package][mxGraph], [`typed-mxgraph`](https://github.com/typed-mxgraph/typed-mxgraph) may be more appropriate.**


### Progress

The definitions currently target mxGraph `4.1.1`. See the implementation status in the following table.
- progress: initial support
  - not yet: no support at all
  - partial: implementation started but some classes/fields/methods are missing
  - completed: all classes/fields/methods should exist (fill an issue and/or provide a Pull Request if you detect an issue) but
    - TSDoc is not fully accurate
    - some type declaration may be wrong
- checked: a finest review has been conducted about TSDoc, mxGraph types used by functions/methods, fields, ...

| Module         | Progress  | Checked |
|:---------------|:---------:|:-------:|
| editor         | not yet   | no      |
| handler        | completed | no      |
| io             | completed | no      |
| layout         | completed | no      |
| model          | completed | no      |
| shape          | completed | no      |
| util           | partial   | no      |
| view           | partial   | no      |
| mxClient.d.ts  | completed | no      |

### Also See

We are actively developing,
if you want to be a contributor,
please refer to the following links

- [mxgraph-road-to-DefinitelyTyped]
- https://github.com/jgraph/mxgraph/issues/81
- https://github.com/DefinitelyTyped/DefinitelyTyped/issues/5317

[mxGraph]: https://www.npmjs.com/package/mxgraph
[mxgraph-road-to-DefinitelyTyped]: https://github.com/process-analytics/mxgraph-road-to-DefinitelyTyped

### Some Useful Regular Expressions
- [helpers.md](./helpers.md)
