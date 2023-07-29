<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![tests][tests]][tests-url]
[![cover][cover]][cover-url]
[![discussion][discussion]][discussion-url]
[![size][size]][size-url]

# html-minimizer-webpack-plugin

This plugin can use 3 tools to optimize and minify your HTML:

- [`swc`](https://github.com/swc-project/swc) - very fast Rust-based platform for the Web.
- [`html-minifier-terser`](https://github.com/terser/html-minifier-terser) (by default) - JavaScript-based HTML minifier.
- [`@minify-html/node`](https://github.com/wilsonzlin/minify-html) - A Rust HTML minifier meticulously optimised for speed and effectiveness, with bindings for other languages.

## Getting Started

To begin, you'll need to install `html-minimizer-webpack-plugin`:

```console
npm install html-minimizer-webpack-plugin --save-dev
```

or

```console
yarn add -D html-minimizer-webpack-plugin
```

or

```console
pnpm add -D html-minimizer-webpack-plugin
```

**Additional step**: If you want to use `@swc/html` you need to install it:

```console
npm install @swc/html --save-dev
```

or

```console
yarn add -D @swc/html
```

or

```console
pnpm add -D @swc/html
```

**Additional step**: If you want to use `@minify-html/node` you need to install it:

```console
npm install @minify-html/node --save-dev
```

or

```console
yarn add -D @minify-html/node
```

or

```console
pnpm add -D @minify-html/node
```

Then add the plugin to your `webpack` configuration. For example:

**webpack.config.js**

```js
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          context: path.resolve(__dirname, "dist"),
          from: "./src/*.html",
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`

      // For `html-minifier-terser`:
      //
      new HtmlMinimizerPlugin(),

      // For `@swc/html`:
      //
      // HTML documents - HTML documents with `Doctype` and `<html>/`<head>`/`<body>` tags
      //
      // Options - https://github.com/swc-project/bindings/blob/main/packages/html/index.ts#L5
      //
      // new HtmlMinimizerPlugin({
      //   minify: HtmlMinimizerPlugin.swcMinify,
      //   minimizerOptions: {}
      // })
      //
      //
      // HTML fragments - HTML fragments, i.e. HTML files without doctype or used in `<template>` tags or HTML parts which injects into another HTML parts
      //
      // Options - https://github.com/swc-project/bindings/blob/main/packages/html/index.ts#L38
      //
      // new HtmlMinimizerPlugin({
      //   minify: HtmlMinimizerPlugin.swcMinifyFragment,
      //   minimizerOptions: {}
      // })
    ],
  },
};
```

This will enable HTML optimization only in production mode.
If you want to run it also in development set the `optimization.minimize` option to `true`.

And run `webpack` via your preferred method.

> **Note**
>
> Removing and collapsing spaces in the tools differ (by default).
>
> - `@swc/html` - remove and collapse whitespaces only in safe places (for example - around `html` and `body` elements, inside the `head` element and between metadata elements - `<meta>`/`script`/`link`/etc.)
> - `html-minifier-terser` - always collapse multiple whitespaces to 1 space (never remove it entirely), but you can change it using [`options`](https://github.com/terser/html-minifier-terser#options-quick-reference)
> - `@minify-html/node` - please read documentation https://github.com/wilsonzlin/minify-html#whitespace

## Options

- **[`test`](#test)**
- **[`include`](#include)**
- **[`exclude`](#exclude)**
- **[`parallel`](#parallel)**
- **[`minify`](#minify)**
- **[`minimizerOptions`](#minimizerOptions)**

### `test`

Type:

```ts
type test = string | RegExp | Array<string | RegExp>;
```

Default: `/\.html(\?.*)?$/i`

Test to match files against.

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new HtmlMinimizerPlugin({
        test: /\.foo\.html/i,
      }),
    ],
  },
};
```

### `include`

Type:

```ts
type include = string | RegExp | Array<string | RegExp>;
```

Default: `undefined`

Files to include.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new HtmlMinimizerPlugin({
        include: /\/includes/,
      }),
    ],
  },
};
```

### `exclude`

Type:

```ts
type exclude = string | RegExp | Array<string | RegExp>;
```

Default: `undefined`

Files to exclude.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new HtmlMinimizerPlugin({
        exclude: /\/excludes/,
      }),
    ],
  },
};
```

### `parallel`

Type:

```ts
type parallel = undefined | boolean | number;
```

Default: `true`

Use multi-process parallel running to improve the build speed.
Default number of concurrent runs: `os.cpus().length - 1`.

> **Note**
>
> Parallelization can speed up your build significantly and is therefore **highly recommended**.

#### `boolean`

Enable/disable multi-process parallel running.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new HtmlMinimizerPlugin({
        parallel: true,
      }),
    ],
  },
};
```

#### `number`

Enable multi-process parallel running and set number of concurrent runs.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new HtmlMinimizerPlugin({
        parallel: 4,
      }),
    ],
  },
};
```

### `minify`

Type:

```ts
type minify =
  | ((
      data: { [file: string]: string },
      minimizerOptions: {
        [key: string]: any;
      }
    ) => {
      code: string;
      errors?: unknown[] | undefined;
      warnings?: unknown[] | undefined;
    })
  | ((
      data: { [file: string]: string },
      minimizerOptions: {
        [key: string]: any;
      }
    ) => {
      code: string;
      errors?: unknown[] | undefined;
      warnings?: unknown[] | undefined;
    })[];
```

Default: `HtmlMinimizerPlugin.htmlMinifierTerser`

Allows you to override default minify function.
By default, plugin uses [html-minifier-terser](https://github.com/terser/html-minifier-terser) package.

We currently support:

- `HtmlMinimizerPlugin.swcMinify` (used to compress HTML documents, i.e. with HTML doctype and `<html>`/`<body>`/`<head>` tags)
- `HtmlMinimizerPlugin.swcMinifyFragment` (used to compress HTML fragments, i.e. when you have part of HTML which will be inserted into another HTML parts)
- `HtmlMinimizerPlugin.htmlMinifierTerser`
- `HtmlMinimizerPlugin.minifyHtmlNode`

> **Note**
>
> The difference between `swcMinify` and `swcMinifyFragment` is the error reporting.
> You will get errors (invalid or broken syntax) if you have them in your HTML document or fragment. Which allows you to see all the errors and problems at the build stage.

Useful for using and testing unpublished versions or forks.

> **Warning**
>
> **Always use `require` inside `minify` function when `parallel` option enabled**.

#### `function`

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new HtmlMinimizerPlugin({
        minimizerOptions: {
          collapseWhitespace: true,
        },
        minify: (data, minimizerOptions) => {
          const htmlMinifier = require("html-minifier-terser");
          const [[filename, input]] = Object.entries(data);

          return {
            code: htmlMinifier.minify(input, minimizerOptions),
            warnings: [],
            errors: [],
          };
        },
      }),
    ],
  },
};
```

#### `array`

If an array of functions is passed to the `minify` option, the `minimizerOptions` can be an array or an object.
If `minimizerOptions` is array, the function index in the `minify` array corresponds to the options object with the same index in the `minimizerOptions` array.
If you use `minimizerOptions` like object, all `minify` function accept it.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new HtmlMinimizerPlugin({
        minimizerOptions: [
          // Options for the first function (HtmlMinimizerPlugin.htmlMinifierTerser)
          {
            collapseWhitespace: true,
          },
          // Options for the second function
          {},
        ],
        minify: [
          HtmlMinimizerPlugin.htmlMinifierTerser,
          (data, minimizerOptions) => {
            const [[filename, input]] = Object.entries(data);
            // To do something
            return {
              code: `optimised code`,
              warnings: [],
              errors: [],
            };
          },
        ],
      }),
    ],
  },
};
```

### `minimizerOptions`

Type:

```ts
type minimizerOptions =
  | {
      [key: string]: any;
    }
  | Array<{
      [key: string]: any;
    }>;
```

Default: `{ caseSensitive: true, collapseWhitespace: true, conservativeCollapse: true, keepClosingSlash: true, minifyCSS: true, minifyJS: true, removeComments: true, removeScriptTypeAttributes: true, removeStyleLinkTypeAttributes: true, }`

`Html-minifier-terser` optimizations [options](https://github.com/terser/html-minifier-terser#options-quick-reference).

#### `object`

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new HtmlMinimizerPlugin({
        minimizerOptions: {
          collapseWhitespace: false,
        },
      }),
    ],
  },
};
```

#### `array`

The function index in the `minify` array corresponds to the options object with the same index in the `minimizerOptions` array.
If you use `minimizerOptions` like object, all `minify` function accept it.

**webpack.config.js**

```js
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new HtmlMinimizerPlugin({
        minimizerOptions: [
          // Options for the first function (HtmlMinimizerPlugin.htmlMinifierTerser)
          {
            collapseWhitespace: true,
          },
          // Options for the second function
          {},
        ],
        minify: [
          HtmlMinimizerPlugin.htmlMinifierTerser,
          (data, minimizerOptions) => {
            const [[filename, input]] = Object.entries(data);
            // To do something
            return {
              code: `optimised code`,
              warnings: [],
              errors: [],
            };
          },
        ],
      }),
    ],
  },
};
```

## Examples

### `swc/html`

Available [`options`](https://github.com/swc-project/bindings/blob/main/packages/html/index.ts#L5).

HTML Documents:

```js
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          context: path.resolve(__dirname, "dist"),
          from: "./src/*.html",
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new HtmlMinimizerPlugin({
        minify: HtmlMinimizerPlugin.swcMinify,
        minimizerOptions: {
          // Options - https://github.com/swc-project/bindings/blob/main/packages/html/index.ts#L5
        },
      }),
    ],
  },
};
```

HTML Fragments:

```js
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          context: path.resolve(__dirname, "dist"),
          from: "./src/*.html",
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new HtmlMinimizerPlugin({
        test: /\.template\.html$/i,
        minify: HtmlMinimizerPlugin.swcMinifyFragment,
        minimizerOptions: {
          // Options - https://github.com/swc-project/bindings/blob/main/packages/html/index.ts#L38
        },
      }),
    ],
  },
};
```

### `@minify-html/node`

Available [`options`](https://github.com/wilsonzlin/minify-html#minification).

HTML Documents:

```js
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          context: path.resolve(__dirname, "dist"),
          from: "./src/*.html",
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new HtmlMinimizerPlugin({
        minify: HtmlMinimizerPlugin.minifyHtmlNode,
        minimizerOptions: {
          // Options - https://github.com/wilsonzlin/minify-html#minification
        },
      }),
    ],
  },
};
```

You can use multiple `HtmlMinimizerPlugin` plugins to compress different files with the different `minify` function.

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

[CONTRIBUTING](./.github/CONTRIBUTING.md)

## License

[MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/html-minimizer-webpack-plugin.svg
[npm-url]: https://npmjs.com/package/html-minimizer-webpack-plugin
[node]: https://img.shields.io/node/v/html-minimizer-webpack-plugin.svg
[node-url]: https://nodejs.org
[tests]: https://github.com/webpack-contrib/html-minimizer-webpack-plugin/workflows/html-minimizer-webpack-plugin/badge.svg
[tests-url]: https://github.com/webpack-contrib/html-minimizer-webpack-plugin/actions
[cover]: https://codecov.io/gh/webpack-contrib/html-minimizer-webpack-plugin/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/html-minimizer-webpack-plugin
[discussion]: https://img.shields.io/github/discussions/webpack/webpack
[discussion-url]: https://github.com/webpack/webpack/discussions
[size]: https://packagephobia.now.sh/badge?p=html-minimizer-webpack-plugin
[size-url]: https://packagephobia.now.sh/result?p=html-minimizer-webpack-plugin
