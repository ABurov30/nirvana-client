"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("./utils");
var _excluded = ["className", "cssModule", "variant", "innerRef"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var propTypes = {
  /** Disable the button if needed */
  active: _propTypes["default"].bool,
  /** Aria label */
  'aria-label': _propTypes["default"].string,
  /** Function to be triggered on click */
  onClick: _propTypes["default"].func,
  /** Change the variant to white */
  variant: _propTypes["default"].oneOf(['white']),
  className: _propTypes["default"].string,
  cssModule: _propTypes["default"].object,
  innerRef: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string, _propTypes["default"].func])
};
var defaultProps = {
  'aria-label': 'close'
};
function CloseButton(props) {
  var className = props.className,
    cssModule = props.cssModule,
    variant = props.variant,
    innerRef = props.innerRef,
    attributes = _objectWithoutProperties(props, _excluded);
  var classes = (0, _utils.mapToCssModules)((0, _classnames["default"])(className, 'btn-close', variant && "btn-close-".concat(variant)));
  return /*#__PURE__*/_react["default"].createElement("button", _extends({
    ref: innerRef,
    type: "button",
    className: classes
  }, attributes));
}
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;
var _default = CloseButton;
exports["default"] = _default;