"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DECADE_DISTANCE_COUNT", {
  enumerable: true,
  get: function get() {
    return _constant.DECADE_DISTANCE_COUNT;
  }
});
Object.defineProperty(exports, "DECADE_UNIT_DIFF", {
  enumerable: true,
  get: function get() {
    return _constant.DECADE_UNIT_DIFF;
  }
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _DecadeHeader = _interopRequireDefault(require("./DecadeHeader"));
var _DecadeBody = _interopRequireWildcard(require("./DecadeBody"));
var _uiUtil = require("../../utils/uiUtil");
var _constant = require("./constant");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function DecadePanel(props) {
  var prefixCls = props.prefixCls,
    onViewDateChange = props.onViewDateChange,
    generateConfig = props.generateConfig,
    viewDate = props.viewDate,
    operationRef = props.operationRef,
    onSelect = props.onSelect,
    onPanelChange = props.onPanelChange;
  var panelPrefixCls = "".concat(prefixCls, "-decade-panel");

  // ======================= Keyboard =======================
  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return (0, _uiUtil.createKeyDownHandler)(event, {
        onLeftRight: function onLeftRight(diff) {
          onSelect(generateConfig.addYear(viewDate, diff * _constant.DECADE_UNIT_DIFF), 'key');
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          onSelect(generateConfig.addYear(viewDate, diff * _constant.DECADE_DISTANCE_COUNT), 'key');
        },
        onUpDown: function onUpDown(diff) {
          onSelect(generateConfig.addYear(viewDate, diff * _constant.DECADE_UNIT_DIFF * _DecadeBody.DECADE_COL_COUNT), 'key');
        },
        onEnter: function onEnter() {
          onPanelChange('year', viewDate);
        }
      });
    }
  };

  // ==================== View Operation ====================
  var onDecadesChange = function onDecadesChange(diff) {
    var newDate = generateConfig.addYear(viewDate, diff * _constant.DECADE_DISTANCE_COUNT);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  var onInternalSelect = function onInternalSelect(date) {
    onSelect(date, 'mouse');
    onPanelChange('year', date);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: panelPrefixCls
  }, /*#__PURE__*/React.createElement(_DecadeHeader.default, (0, _extends2.default)({}, props, {
    prefixCls: prefixCls,
    onPrevDecades: function onPrevDecades() {
      onDecadesChange(-1);
    },
    onNextDecades: function onNextDecades() {
      onDecadesChange(1);
    }
  })), /*#__PURE__*/React.createElement(_DecadeBody.default, (0, _extends2.default)({}, props, {
    prefixCls: prefixCls,
    onSelect: onInternalSelect
  })));
}
var _default = exports.default = DecadePanel;