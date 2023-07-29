export = HtmlMinimizerPlugin;
/**
 * @template [T=HtmlMinifierTerserOptions]
 */
declare class HtmlMinimizerPlugin<T = import("html-minifier-terser").Options> {
  /**
   * @private
   * @param {any} warning
   * @param {string} file
   * @returns {Error}
   */
  private static buildWarning;
  /**
   * @private
   * @param {any} error
   * @param {string} file
   * @returns {Error}
   */
  private static buildError;
  /**
   * @private
   * @param {Parallel} parallel
   * @returns {number}
   */
  private static getAvailableNumberOfCores;
  /**
   * @param {BasePluginOptions & DefinedDefaultMinimizerAndOptions<T>} [options]
   */
  constructor(
    options?:
      | (BasePluginOptions & DefinedDefaultMinimizerAndOptions<T>)
      | undefined
  );
  /**
   * @private
   * @type {InternalPluginOptions<T>}
   */
  private options;
  /**
   * @private
   * @param {Compiler} compiler
   * @param {Compilation} compilation
   * @param {Record<string, import("webpack").sources.Source>} assets
   * @param {{availableNumberOfCores: number}} optimizeOptions
   * @returns {Promise<void>}
   */
  private optimize;
  /**
   * @param {Compiler} compiler
   * @returns {void}
   */
  apply(compiler: Compiler): void;
}
declare namespace HtmlMinimizerPlugin {
  export {
    htmlMinifierTerser,
    swcMinify,
    swcMinifyFragment,
    minifyHtmlNode,
    Schema,
    Compiler,
    Compilation,
    WebpackError,
    Asset,
    JestWorker,
    HtmlMinifierTerserOptions,
    Rule,
    Rules,
    MinimizedResult,
    Input,
    CustomOptions,
    InferDefaultType,
    MinimizerOptions,
    MinimizerImplementation,
    Minimizer,
    InternalOptions,
    InternalResult,
    MinimizerWorker,
    Parallel,
    BasePluginOptions,
    InternalPluginOptions,
    DefinedDefaultMinimizerAndOptions,
  };
}
type Compiler = import("webpack").Compiler;
type BasePluginOptions = {
  test?: Rule | undefined;
  include?: Rule | undefined;
  exclude?: Rule | undefined;
  parallel?: Parallel;
};
type DefinedDefaultMinimizerAndOptions<T> =
  T extends import("html-minifier-terser").Options
    ? {
        minify?: MinimizerImplementation<T> | undefined;
        minimizerOptions?: MinimizerOptions<T> | undefined;
      }
    : T extends any[]
    ? {
        minify: { [P in keyof T]: MinimizerImplementation<T[P]> };
        minimizerOptions?:
          | { [P_1 in keyof T]?: MinimizerOptions<T[P_1]> }
          | undefined;
      }
    : {
        minify: MinimizerImplementation<T>;
        minimizerOptions?: MinimizerOptions<T> | undefined;
      };
import { htmlMinifierTerser } from "./utils";
import { swcMinify } from "./utils";
import { swcMinifyFragment } from "./utils";
import { minifyHtmlNode } from "./utils";
type Schema = import("schema-utils/declarations/validate").Schema;
type Compilation = import("webpack").Compilation;
type WebpackError = import("webpack").WebpackError;
type Asset = import("webpack").Asset;
type JestWorker = import("jest-worker").Worker;
type HtmlMinifierTerserOptions = import("./utils.js").HtmlMinifierTerserOptions;
type Rule = RegExp | string;
type Rules = Rule[] | Rule;
type MinimizedResult = {
  code: string;
  errors?: unknown[] | undefined;
  warnings?: unknown[] | undefined;
};
type Input = {
  [file: string]: string;
};
type CustomOptions = {
  [key: string]: any;
};
type InferDefaultType<T> = T extends infer U ? U : CustomOptions;
type MinimizerOptions<T> = InferDefaultType<T> | undefined;
type MinimizerImplementation<T> = (
  input: Input,
  minimizerOptions?: MinimizerOptions<T>
) => Promise<MinimizedResult>;
type Minimizer<T> = {
  implementation: MinimizerImplementation<T>;
  options?: MinimizerOptions<T> | undefined;
};
type InternalOptions<T> = {
  name: string;
  input: string;
  minimizer: T extends any[]
    ? { [P in keyof T]: Minimizer<T[P]> }
    : Minimizer<T>;
};
type InternalResult = {
  code: string;
  warnings: Array<any>;
  errors: Array<any>;
};
type MinimizerWorker<T> = import("jest-worker").Worker & {
  transform: (options: string) => InternalResult;
  minify: (options: InternalOptions<T>) => InternalResult;
};
type Parallel = undefined | boolean | number;
type InternalPluginOptions<T> = BasePluginOptions & {
  minimizer: T extends any[]
    ? { [P in keyof T]: Minimizer<T[P]> }
    : Minimizer<T>;
};
