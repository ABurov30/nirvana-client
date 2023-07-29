"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumnClasses = exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("./utils");
var _excluded = ["className", "cssModule", "widths", "tag"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var colWidths = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var stringOrNumberProp = _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]);
var columnProps = _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].shape({
  size: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].number, _propTypes["default"].string]),
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);
var propTypes = {
  tag: _utils.tagPropType,
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  xxl: columnProps,
  className: _propTypes["default"].string,
  cssModule: _propTypes["default"].object,
  widths: _propTypes["default"].array
};
var defaultProps = {
  tag: 'div',
  widths: colWidths
};
var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : "col-".concat(colWidth);
  }
  if (colSize === 'auto') {
    return isXs ? 'col-auto' : "col-".concat(colWidth, "-auto");
  }
  return isXs ? "col-".concat(colSize) : "col-".concat(colWidth, "-").concat(colSize);
};
var getColumnClasses = function getColumnClasses(attributes, cssModule) {
  var widths = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : colWidths;
  var modifiedAttributes = attributes;
  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var columnProp = modifiedAttributes[colWidth];
    delete modifiedAttributes[colWidth];
    if (!columnProp && columnProp !== '') {
      return;
    }
    var isXs = !i;
    if ((0, _utils.isObject)(columnProp)) {
      var _classNames;
      var colSizeInterfix = isXs ? '-' : "-".concat(colWidth, "-");
      var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push((0, _utils.mapToCssModules)((0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, colClass, columnProp.size || columnProp.size === ''), _defineProperty(_classNames, "order".concat(colSizeInterfix).concat(columnProp.order), columnProp.order || columnProp.order === 0), _defineProperty(_classNames, "offset".concat(colSizeInterfix).concat(columnProp.offset), columnProp.offset || columnProp.offset === 0), _classNames)), cssModule));
    } else {
      var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);
      colClasses.push(_colClass);
    }
  });
  return {
    colClasses: colClasses,
    modifiedAttributes: modifiedAttributes
  };
};
exports.getColumnClasses = getColumnClasses;
function Col(props) {
  var className = props.className,
    cssModule = props.cssModule,
    widths = props.widths,
    Tag = props.tag,
    attributes = _objectWithoutProperties(props, _excluded);
  var _getColumnClasses = getColumnClasses(attributes, cssModule, widths),
    modifiedAttributes = _getColumnClasses.modifiedAttributes,
    colClasses = _getColumnClasses.colClasses;
  if (!colClasses.length) {
    colClasses.push('col');
  }
  var classes = (0, _utils.mapToCssModules)((0, _classnames["default"])(className, colClasses), cssModule);
  return /*#__PURE__*/_react["default"].createElement(Tag, _extends({}, modifiedAttributes, {
    className: classes
  }));
}
Col.propTypes = propTypes;
Col.defaultProps = defaultProps;
var _default = Col;
exports["default"] = _default;