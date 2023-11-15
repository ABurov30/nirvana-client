import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import classNames from 'classnames';
import KeyCode from "rc-util/es/KeyCode";
import * as React from 'react';
import { tuple } from "../../utils/miscUtil";
import { setDateTime as setTime } from "../../utils/timeUtil";
import DatePanel from "../DatePanel";
import TimePanel from "../TimePanel";
var ACTIVE_PANEL = tuple('date', 'time');
var findValidTime = function findValidTime(refValue, disabledRange, maxValidTime) {
  var rangeSet = new Set(disabledRange);
  if (rangeSet.has(refValue)) {
    for (var i = 0; i <= maxValidTime; i++) {
      if (!rangeSet.has(i) && i >= refValue) {
        // first not disabled time
        return i;
      }
    }
  }
  return refValue;
};
function DatetimePanel(props) {
  var prefixCls = props.prefixCls,
    operationRef = props.operationRef,
    generateConfig = props.generateConfig,
    value = props.value,
    defaultValue = props.defaultValue,
    disabledTime = props.disabledTime,
    showTime = props.showTime,
    onSelect = props.onSelect,
    cellRender = props.cellRender;
  var panelPrefixCls = "".concat(prefixCls, "-datetime-panel");
  var _React$useState = React.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    activePanel = _React$useState2[0],
    setActivePanel = _React$useState2[1];
  var dateOperationRef = React.useRef({});
  var timeOperationRef = React.useRef({});
  var timeProps = _typeof(showTime) === 'object' ? _objectSpread({}, showTime) : {};

  // ======================= Keyboard =======================
  function getNextActive(offset) {
    var activeIndex = ACTIVE_PANEL.indexOf(activePanel) + offset;
    var nextActivePanel = ACTIVE_PANEL[activeIndex] || null;
    return nextActivePanel;
  }
  var onBlur = function onBlur(e) {
    if (timeOperationRef.current.onBlur) {
      timeOperationRef.current.onBlur(e);
    }
    setActivePanel(null);
  };
  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      // Switch active panel
      if (event.which === KeyCode.TAB) {
        var nextActivePanel = getNextActive(event.shiftKey ? -1 : 1);
        setActivePanel(nextActivePanel);
        if (nextActivePanel) {
          event.preventDefault();
        }
        return true;
      }

      // Operate on current active panel
      if (activePanel) {
        var ref = activePanel === 'date' ? dateOperationRef : timeOperationRef;
        if (ref.current && ref.current.onKeyDown) {
          ref.current.onKeyDown(event);
        }
        return true;
      }

      // Switch first active panel if operate without panel
      if ([KeyCode.LEFT, KeyCode.RIGHT, KeyCode.UP, KeyCode.DOWN].includes(event.which)) {
        setActivePanel('date');
        return true;
      }
      return false;
    },
    onBlur: onBlur,
    onClose: onBlur
  };

  // ======================== Events ========================
  var onInternalSelect = function onInternalSelect(date, source) {
    var selectedDate = date;
    if (source === 'date') {
      var _disabledTimes$disabl, _disabledTimes$disabl2, _disabledTimes$disabl3;
      var _disabledTimes = (disabledTime === null || disabledTime === void 0 ? void 0 : disabledTime(value || timeProps.defaultValue)) || {};
      var validHour = findValidTime(generateConfig.getHour(selectedDate), ((_disabledTimes$disabl = _disabledTimes.disabledHours) === null || _disabledTimes$disabl === void 0 ? void 0 : _disabledTimes$disabl.call(_disabledTimes)) || [-1], 23);
      var validMinute = findValidTime(generateConfig.getMinute(selectedDate), ((_disabledTimes$disabl2 = _disabledTimes.disabledMinutes) === null || _disabledTimes$disabl2 === void 0 ? void 0 : _disabledTimes$disabl2.call(_disabledTimes, validHour)) || [-1], 59);
      var validSeconds = findValidTime(generateConfig.getSecond(selectedDate), ((_disabledTimes$disabl3 = _disabledTimes.disabledSeconds) === null || _disabledTimes$disabl3 === void 0 ? void 0 : _disabledTimes$disabl3.call(_disabledTimes, validHour, validMinute)) || [-1], 59);
      selectedDate = generateConfig.setHour(selectedDate, validHour);
      selectedDate = generateConfig.setMinute(selectedDate, validMinute);
      selectedDate = generateConfig.setSecond(selectedDate, validSeconds);
    } else if (source === 'time' && !value && defaultValue) {
      selectedDate = generateConfig.setYear(selectedDate, generateConfig.getYear(defaultValue));
      selectedDate = generateConfig.setMonth(selectedDate, generateConfig.getMonth(defaultValue));
      selectedDate = generateConfig.setDate(selectedDate, generateConfig.getDate(defaultValue));
    }
    if (onSelect) {
      onSelect(selectedDate, 'mouse');
    }
  };

  // ======================== Render ========================
  var disabledTimes = disabledTime ? disabledTime(value || null) : {};
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(panelPrefixCls, _defineProperty({}, "".concat(panelPrefixCls, "-active"), activePanel))
  }, /*#__PURE__*/React.createElement(DatePanel, _extends({}, props, {
    cellRender: cellRender,
    operationRef: dateOperationRef,
    active: activePanel === 'date',
    onSelect: function onSelect(date) {
      onInternalSelect(setTime(generateConfig, date, !value && _typeof(showTime) === 'object' ? showTime.defaultValue : null), 'date');
    }
  })), /*#__PURE__*/React.createElement(TimePanel, _extends({}, props, {
    cellRender: cellRender ? function (current, info) {
      return cellRender(current, _objectSpread(_objectSpread({}, info), {}, {
        type: 'time'
      }));
    } : undefined,
    format: undefined
  }, timeProps, disabledTimes, {
    disabledTime: null,
    defaultValue: undefined,
    operationRef: timeOperationRef,
    active: activePanel === 'time',
    onSelect: function onSelect(date) {
      onInternalSelect(date, 'time');
    }
  })));
}
export default DatetimePanel;