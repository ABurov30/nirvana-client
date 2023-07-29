"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("./utils");
var _Button = _interopRequireDefault(require("./Button"));
var _Col = require("./Col");
var _excluded = ["cssModule", "className", "tag"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var propTypes = {
  size: _propTypes["default"].string,
  color: _propTypes["default"].string,
  outline: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  tag: _utils.tagPropType,
  cssModule: _propTypes["default"].object
};
var defaultProps = {
  color: 'primary',
  tag: _Button["default"]
};
function PlaceholderButton(props) {
  var cssModule = props.cssModule,
    className = props.className,
    Tag = props.tag,
    attributes = _objectWithoutProperties(props, _excluded);
  var _getColumnClasses = (0, _Col.getColumnClasses)(attributes, cssModule),
    modifiedAttributes = _getColumnClasses.attributes,
    colClasses = _getColumnClasses.colClasses;
  var classes = (0, _utils.mapToCssModules)((0, _classnames["default"])('placeholder', className, colClasses), cssModule);
  return /*#__PURE__*/_react["default"].createElement(_Button["default"], _extends({}, modifiedAttributes, {
    className: classes,
    disabled: true
  }));
}
PlaceholderButton.propTypes = propTypes;
PlaceholderButton.defaultProps = defaultProps;
var _default = PlaceholderButton;
exports["default"] = _default;