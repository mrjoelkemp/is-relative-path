### is-relative-path [![npm](http://img.shields.io/npm/v/is-relative-path.svg)](https://npmjs.org/package/is-relative-path) [![npm](http://img.shields.io/npm/dm/is-relative-path.svg)](https://npmjs.org/package/is-relative-path)

> Sometimes I just want to scream

`npm install is-relative-path`

### Usage

#### `isRelative(path)`

- `path` `<string>`
- Returns: `<boolean>`

```js
var isRelative = require('is-relative-path');

isRelative('../'); // true
isRelative('/'); // false
```

### Breaking change

#### Code

| Version | Code                               |
| ------- | -----------------------------------|
| 1.x     | `(path) => path[0] === '.'`        |
| 2.x     | `(path) => !path.isAbsolute(path)` |

#### Test

| path      | v1.x     | v2.x     |
| --------- | -------- | -------- |
| `"" `     | false    | **true** |
| `"."`     | true     | true     |
| `".."`    | true     | true     |
| `"foo"`   | false    | **true** |
| `"/foo"`  | false    | false    |

