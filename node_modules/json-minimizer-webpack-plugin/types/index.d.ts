export = JsonMinimizerPlugin;
/** @typedef {import("schema-utils/declarations/validate").Schema} Schema */
/** @typedef {import("webpack").Compiler} Compiler */
/** @typedef {import("webpack").Compilation} Compilation */
/** @typedef {import("webpack").Asset} Asset */
/** @typedef {import("webpack").WebpackError} WebpackError */
/** @typedef {RegExp | string} Rule */
/** @typedef {Rule[] | Rule} Rules */
/**
 * @typedef {Object} JSONOptions
 * @property {(this: any, key: string, value: any) => any | (number | string)[] | null} [replacer]
 * @property {string | number} [space]
 */
/**
 * @typedef {Object} BasePluginOptions
 * @property {Rules} [test]
 * @property {Rules} [include]
 * @property {Rules} [exclude]
 * @property {JSONOptions} [minimizerOptions]
 */
/**
 * @typedef {Object} MinimizedResult
 * @property {string} code
 */
/**
 * @typedef {Object} InternalOptions
 * @property {string} input
 * @property {JSONOptions} [minimizerOptions]
 */
/**
 * @typedef {BasePluginOptions} InternalPluginOptions
 */
declare class JsonMinimizerPlugin {
  /**
   * @param {any} error
   * @param {string} file
   * @param {string} context
   * @returns {Error}
   */
  static buildError(error: any, file: string, context: string): Error;
  /**
   * @param {BasePluginOptions} [options]
   */
  constructor(options?: BasePluginOptions | undefined);
  /**
   * @private
   * @type {InternalPluginOptions}
   */
  private options;
  /**
   * @private
   * @param {Compiler} compiler
   * @param {Compilation} compilation
   * @param {Record<string, import("webpack").sources.Source>} assets
   * @returns {Promise<void>}
   */
  private optimize;
  /**
   * @param {Compiler} compiler
   * @returns {void}
   */
  apply(compiler: Compiler): void;
}
declare namespace JsonMinimizerPlugin {
  export {
    Schema,
    Compiler,
    Compilation,
    Asset,
    WebpackError,
    Rule,
    Rules,
    JSONOptions,
    BasePluginOptions,
    MinimizedResult,
    InternalOptions,
    InternalPluginOptions,
  };
}
type Compiler = import("webpack").Compiler;
type BasePluginOptions = {
  test?: Rules | undefined;
  include?: Rules | undefined;
  exclude?: Rules | undefined;
  minimizerOptions?: JSONOptions | undefined;
};
type Schema = import("schema-utils/declarations/validate").Schema;
type Compilation = import("webpack").Compilation;
type Asset = import("webpack").Asset;
type WebpackError = import("webpack").WebpackError;
type Rule = RegExp | string;
type Rules = Rule[] | Rule;
type JSONOptions = {
  replacer?:
    | ((this: any, key: string, value: any) => any | (number | string)[] | null)
    | undefined;
  space?: string | number | undefined;
};
type MinimizedResult = {
  code: string;
};
type InternalOptions = {
  input: string;
  minimizerOptions?: JSONOptions | undefined;
};
type InternalPluginOptions = BasePluginOptions;
