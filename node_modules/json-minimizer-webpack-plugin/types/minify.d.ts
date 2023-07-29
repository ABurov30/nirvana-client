export type InternalOptions = import("./index.js").InternalOptions;
export type JSONOptions = import("./index.js").JSONOptions;
export type MinimizedResult = import("./index.js").MinimizedResult;
/**
 * @param {InternalOptions} options
 * @returns {Promise<MinimizedResult>}
 */
export function minify(options: InternalOptions): Promise<MinimizedResult>;
