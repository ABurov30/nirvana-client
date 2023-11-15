"use strict";
"use client";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generatePicker;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _CalendarOutlined = _interopRequireDefault(require("@ant-design/icons/CalendarOutlined"));
var _ClockCircleOutlined = _interopRequireDefault(require("@ant-design/icons/ClockCircleOutlined"));
var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons/CloseCircleFilled"));
var _classnames = _interopRequireDefault(require("classnames"));
var _rcPicker = _interopRequireDefault(require("rc-picker"));
var _statusUtils = require("../../_util/statusUtils");
var _warning = require("../../_util/warning");
var _configProvider = require("../../config-provider");
var _DisabledContext = _interopRequireDefault(require("../../config-provider/DisabledContext"));
var _useSize = _interopRequireDefault(require("../../config-provider/hooks/useSize"));
var _context = require("../../form/context");
var _locale = require("../../locale");
var _Compact = require("../../space/Compact");
var _en_US = _interopRequireDefault(require("../locale/en_US"));
var _style = _interopRequireDefault(require("../style"));
var _util = require("../util");
var _Components = _interopRequireDefault(require("./Components"));
var _useZIndex = require("../../_util/hooks/useZIndex");
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function generatePicker(generateConfig) {
  function getPicker(picker, displayName) {
    const consumerName = displayName === 'TimePicker' ? 'timePicker' : 'datePicker';
    const Picker = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
      var _a;
      const {
          prefixCls: customizePrefixCls,
          getPopupContainer: customizeGetPopupContainer,
          style,
          className,
          rootClassName,
          size: customizeSize,
          bordered = true,
          placement,
          placeholder,
          popupClassName,
          dropdownClassName,
          disabled: customDisabled,
          status: customStatus,
          clearIcon,
          allowClear
        } = props,
        restProps = __rest(props, ["prefixCls", "getPopupContainer", "style", "className", "rootClassName", "size", "bordered", "placement", "placeholder", "popupClassName", "dropdownClassName", "disabled", "status", "clearIcon", "allowClear"]);
      const {
        getPrefixCls,
        direction,
        getPopupContainer,
        // Consume different styles according to different names
        [consumerName]: consumerStyle
      } = (0, _react.useContext)(_configProvider.ConfigContext);
      const prefixCls = getPrefixCls('picker', customizePrefixCls);
      const {
        compactSize,
        compactItemClassnames
      } = (0, _Compact.useCompactItemContext)(prefixCls, direction);
      const innerRef = React.useRef(null);
      const {
        format,
        showTime
      } = props;
      const [wrapSSR, hashId] = (0, _style.default)(prefixCls);
      (0, _react.useImperativeHandle)(ref, () => ({
        focus: () => {
          var _a;
          return (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        },
        blur: () => {
          var _a;
          return (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        }
      }));
      const additionalProps = {
        showToday: true
      };
      let additionalOverrideProps = {};
      if (picker) {
        additionalOverrideProps.picker = picker;
      }
      const mergedPicker = picker || props.picker;
      additionalOverrideProps = Object.assign(Object.assign(Object.assign({}, additionalOverrideProps), showTime ? (0, _util.getTimeProps)(Object.assign({
        format,
        picker: mergedPicker
      }, showTime)) : {}), mergedPicker === 'time' ? (0, _util.getTimeProps)(Object.assign(Object.assign({
        format
      }, props), {
        picker: mergedPicker
      })) : {});
      const rootPrefixCls = getPrefixCls();
      // =================== Warning =====================
      if (process.env.NODE_ENV !== 'production') {
        const warning = (0, _warning.devUseWarning)(displayName || 'DatePicker');
        process.env.NODE_ENV !== "production" ? warning(picker !== 'quarter', 'deprecated', `DatePicker.${displayName} is legacy usage. Please use DatePicker[picker='${picker}'] directly.`) : void 0;
        warning.deprecated(!dropdownClassName, 'dropdownClassName', 'popupClassName');
      }
      // ===================== Size =====================
      const mergedSize = (0, _useSize.default)(ctx => {
        var _a;
        return (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a !== void 0 ? _a : ctx;
      });
      // ===================== Disabled =====================
      const disabled = React.useContext(_DisabledContext.default);
      const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
      // ===================== FormItemInput =====================
      const formItemContext = (0, _react.useContext)(_context.FormItemInputContext);
      const {
        hasFeedback,
        status: contextStatus,
        feedbackIcon
      } = formItemContext;
      const suffixNode = /*#__PURE__*/React.createElement(React.Fragment, null, mergedPicker === 'time' ? /*#__PURE__*/React.createElement(_ClockCircleOutlined.default, null) : /*#__PURE__*/React.createElement(_CalendarOutlined.default, null), hasFeedback && feedbackIcon);
      const [contextLocale] = (0, _locale.useLocale)('DatePicker', _en_US.default);
      const locale = Object.assign(Object.assign({}, contextLocale), props.locale);
      // ============================ zIndex ============================
      const [zIndex] = (0, _useZIndex.useZIndex)('DatePicker', (_a = props.popupStyle) === null || _a === void 0 ? void 0 : _a.zIndex);
      return wrapSSR( /*#__PURE__*/React.createElement(_rcPicker.default, Object.assign({
        ref: innerRef,
        placeholder: (0, _util.getPlaceholder)(locale, mergedPicker, placeholder),
        suffixIcon: suffixNode,
        dropdownAlign: (0, _util.transPlacement2DropdownAlign)(direction, placement),
        prevIcon: /*#__PURE__*/React.createElement("span", {
          className: `${prefixCls}-prev-icon`
        }),
        nextIcon: /*#__PURE__*/React.createElement("span", {
          className: `${prefixCls}-next-icon`
        }),
        superPrevIcon: /*#__PURE__*/React.createElement("span", {
          className: `${prefixCls}-super-prev-icon`
        }),
        superNextIcon: /*#__PURE__*/React.createElement("span", {
          className: `${prefixCls}-super-next-icon`
        }),
        transitionName: `${rootPrefixCls}-slide-up`
      }, additionalProps, restProps, additionalOverrideProps, {
        locale: locale.lang,
        className: (0, _classnames.default)({
          [`${prefixCls}-${mergedSize}`]: mergedSize,
          [`${prefixCls}-borderless`]: !bordered
        }, (0, _statusUtils.getStatusClassNames)(prefixCls, (0, _statusUtils.getMergedStatus)(contextStatus, customStatus), hasFeedback), hashId, compactItemClassnames, consumerStyle === null || consumerStyle === void 0 ? void 0 : consumerStyle.className, className, rootClassName),
        style: Object.assign(Object.assign({}, consumerStyle === null || consumerStyle === void 0 ? void 0 : consumerStyle.style), style),
        prefixCls: prefixCls,
        getPopupContainer: customizeGetPopupContainer || getPopupContainer,
        generateConfig: generateConfig,
        components: _Components.default,
        direction: direction,
        disabled: mergedDisabled,
        dropdownClassName: (0, _classnames.default)(hashId, rootClassName, popupClassName || dropdownClassName),
        popupStyle: Object.assign(Object.assign({}, props.popupStyle), {
          zIndex
        }),
        allowClear: (0, _util.mergeAllowClear)(allowClear, clearIcon, /*#__PURE__*/React.createElement(_CloseCircleFilled.default, null))
      })));
    });
    if (displayName) {
      Picker.displayName = displayName;
    }
    return Picker;
  }
  const DatePicker = getPicker();
  const WeekPicker = getPicker('week', 'WeekPicker');
  const MonthPicker = getPicker('month', 'MonthPicker');
  const YearPicker = getPicker('year', 'YearPicker');
  const TimePicker = getPicker('time', 'TimePicker');
  const QuarterPicker = getPicker('quarter', 'QuarterPicker');
  return {
    DatePicker,
    WeekPicker,
    MonthPicker,
    YearPicker,
    TimePicker,
    QuarterPicker
  };
}