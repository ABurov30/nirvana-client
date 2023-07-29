"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _DropdownContext = require("./DropdownContext");
var _utils = require("./utils");
var _excluded = ["className", "cssModule", "divider", "tag", "header", "active", "text"];
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
  active: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  divider: _propTypes["default"].bool,
  tag: _utils.tagPropType,
  header: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  className: _propTypes["default"].string,
  cssModule: _propTypes["default"].object,
  toggle: _propTypes["default"].bool,
  text: _propTypes["default"].bool
};
var defaultProps = {
  tag: 'button',
  toggle: true
};
var DropdownItem = /*#__PURE__*/function (_React$Component) {
  _inherits(DropdownItem, _React$Component);
  var _super = _createSuper(DropdownItem);
  function DropdownItem(props) {
    var _this;
    _classCallCheck(this, DropdownItem);
    _this = _super.call(this, props);
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.getTabIndex = _this.getTabIndex.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(DropdownItem, [{
    key: "onClick",
    value: function onClick(e) {
      var _this$props = this.props,
        disabled = _this$props.disabled,
        header = _this$props.header,
        divider = _this$props.divider,
        text = _this$props.text;
      if (disabled || header || divider || text) {
        e.preventDefault();
        return;
      }
      if (this.props.onClick) {
        this.props.onClick(e);
      }
      if (this.props.toggle) {
        this.context.toggle(e);
      }
    }
  }, {
    key: "getRole",
    value: function getRole() {
      if (this.context.menuRole === 'listbox') {
        return 'option';
      }
      return 'menuitem';
    }
  }, {
    key: "getTabIndex",
    value: function getTabIndex() {
      var _this$props2 = this.props,
        disabled = _this$props2.disabled,
        header = _this$props2.header,
        divider = _this$props2.divider,
        text = _this$props2.text;
      if (disabled || header || divider || text) {
        return '-1';
      }
      return '0';
    }
  }, {
    key: "render",
    value: function render() {
      var tabIndex = this.getTabIndex();
      var role = tabIndex > -1 ? this.getRole() : undefined;
      var _omit = (0, _utils.omit)(this.props, ['toggle']),
        className = _omit.className,
        cssModule = _omit.cssModule,
        divider = _omit.divider,
        Tag = _omit.tag,
        header = _omit.header,
        active = _omit.active,
        text = _omit.text,
        props = _objectWithoutProperties(_omit, _excluded);
      var classes = (0, _utils.mapToCssModules)((0, _classnames["default"])(className, {
        disabled: props.disabled,
        'dropdown-item': !divider && !header && !text,
        active: active,
        'dropdown-header': header,
        'dropdown-divider': divider,
        'dropdown-item-text': text
      }), cssModule);
      if (Tag === 'button') {
        if (header) {
          Tag = 'h6';
        } else if (divider) {
          Tag = 'div';
        } else if (props.href) {
          Tag = 'a';
        } else if (text) {
          Tag = 'span';
        }
      }
      return /*#__PURE__*/_react["default"].createElement(Tag, _extends({
        type: Tag === 'button' && (props.onClick || this.props.toggle) ? 'button' : undefined
      }, props, {
        tabIndex: tabIndex,
        role: role,
        className: classes,
        onClick: this.onClick
      }));
    }
  }]);
  return DropdownItem;
}(_react["default"].Component);
DropdownItem.propTypes = propTypes;
DropdownItem.defaultProps = defaultProps;
DropdownItem.contextType = _DropdownContext.DropdownContext;
var _default = DropdownItem;
exports["default"] = _default;