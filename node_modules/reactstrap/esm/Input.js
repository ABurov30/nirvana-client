"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("./utils");
var _excluded = ["className", "cssModule", "type", "bsSize", "valid", "invalid", "tag", "addon", "plaintext", "innerRef"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var propTypes = {
  children: _propTypes["default"].node,
  type: _propTypes["default"].string,
  size: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  bsSize: _propTypes["default"].string,
  valid: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  tag: _utils.tagPropType,
  innerRef: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func, _propTypes["default"].string]),
  plaintext: _propTypes["default"].bool,
  addon: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  cssModule: _propTypes["default"].object
};
var defaultProps = {
  type: 'text'
};
var Input = /*#__PURE__*/function (_React$Component) {
  _inherits(Input, _React$Component);
  var _super = _createSuper(Input);
  function Input(props) {
    var _this;
    _classCallCheck(this, Input);
    _this = _super.call(this, props);
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.focus = _this.focus.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Input, [{
    key: "getRef",
    value: function getRef(ref) {
      if (this.props.innerRef) {
        this.props.innerRef(ref);
      }
      this.ref = ref;
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this.ref) {
        this.ref.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        type = _this$props.type,
        bsSize = _this$props.bsSize,
        valid = _this$props.valid,
        invalid = _this$props.invalid,
        tag = _this$props.tag,
        addon = _this$props.addon,
        plaintext = _this$props.plaintext,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutProperties(_this$props, _excluded);
      var checkInput = ['switch', 'radio', 'checkbox'].indexOf(type) > -1;
      var isNotaNumber = /\D/g;
      var textareaInput = type === 'textarea';
      var selectInput = type === 'select';
      var rangeInput = type === 'range';
      var Tag = tag || (selectInput || textareaInput ? type : 'input');
      var formControlClass = 'form-control';
      if (plaintext) {
        formControlClass = "".concat(formControlClass, "-plaintext");
        Tag = tag || 'input';
      } else if (rangeInput) {
        formControlClass = 'form-range';
      } else if (selectInput) {
        formControlClass = 'form-select';
      } else if (checkInput) {
        if (addon) {
          formControlClass = null;
        } else {
          formControlClass = 'form-check-input';
        }
      }
      if (attributes.size && isNotaNumber.test(attributes.size)) {
        (0, _utils.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
        bsSize = attributes.size;
        delete attributes.size;
      }
      var classes = (0, _utils.mapToCssModules)((0, _classnames["default"])(className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? selectInput ? "form-select-".concat(bsSize) : "form-control-".concat(bsSize) : false, formControlClass), cssModule);
      if (Tag === 'input' || tag && typeof tag === 'function') {
        attributes.type = type === 'switch' ? 'checkbox' : type;
      }
      if (attributes.children && !(plaintext || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
        (0, _utils.warnOnce)("Input with a type of \"".concat(type, "\" cannot have children. Please use \"value\"/\"defaultValue\" instead."));
        delete attributes.children;
      }
      return /*#__PURE__*/_react["default"].createElement(Tag, _extends({}, attributes, {
        ref: innerRef,
        className: classes,
        "aria-invalid": invalid
      }));
    }
  }]);
  return Input;
}(_react["default"].Component);
Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
var _default = Input;
exports["default"] = _default;