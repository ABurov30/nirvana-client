"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "YEAR_DECADE_COUNT", {
  enumerable: true,
  get: function get() {
    return _constant.YEAR_DECADE_COUNT;
  }
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _YearHeader = _interopRequireDefault(require("./YearHeader"));
var _YearBody = _interopRequireWildcard(require("./YearBody"));
var _uiUtil = require("../../utils/uiUtil");
var _constant = require("./constant");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function YearPanel(props) {
  var prefixCls = props.prefixCls,
    operationRef = props.operationRef,
    onViewDateChange = props.onViewDateChange,
    generateConfig = props.generateConfig,
    value = props.value,
    viewDate = props.viewDate,
    sourceMode = props.sourceMode,
    _onSelect = props.onSelect,
    onPanelChange = props.onPanelChange;
  var panelPrefixCls = "".concat(prefixCls, "-year-panel");

  // ======================= Keyboard =======================
  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return (0, _uiUtil.createKeyDownHandler)(event, {
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff * _constant.YEAR_DECADE_COUNT), 'key');
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff * _YearBody.YEAR_COL_COUNT), 'key');
        },
        onEnter: function onEnter() {
          onPanelChange(sourceMode === 'date' ? 'date' : 'month', value || viewDate);
        }
      });
    }
  };

  // ==================== View Operation ====================
  var onDecadeChange = function onDecadeChange(diff) {
    var newDate = generateConfig.addYear(viewDate, diff * 10);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: panelPrefixCls
  }, /*#__PURE__*/React.createElement(_YearHeader.default, (0, _extends2.default)({}, props, {
    prefixCls: prefixCls,
    onPrevDecade: function onPrevDecade() {
      onDecadeChange(-1);
    },
    onNextDecade: function onNextDecade() {
      onDecadeChange(1);
    },
    onDecadeClick: function onDecadeClick() {
      onPanelChange('decade', viewDate);
    }
  })), /*#__PURE__*/React.createElement(_YearBody.default, (0, _extends2.default)({}, props, {
    prefixCls: prefixCls,
    onSelect: function onSelect(date) {
      onPanelChange(sourceMode === 'date' ? 'date' : 'month', date);
      _onSelect(date, 'mouse');
    }
  })));
}
var _default = exports.default = YearPanel;