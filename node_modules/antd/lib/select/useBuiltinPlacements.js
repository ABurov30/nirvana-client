"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useBuiltinPlacements;
const sharedConfig = {
  overflow: {
    adjustX: true,
    adjustY: true,
    shiftY: true
  },
  htmlRegion: 'visible'
};
const defaultBuiltInPlacements = {
  bottomLeft: Object.assign(Object.assign({}, sharedConfig), {
    points: ['tl', 'bl'],
    offset: [0, 4]
  }),
  bottomRight: Object.assign(Object.assign({}, sharedConfig), {
    points: ['tr', 'br'],
    offset: [0, 4]
  }),
  topLeft: Object.assign(Object.assign({}, sharedConfig), {
    points: ['bl', 'tl'],
    offset: [0, -4]
  }),
  topRight: Object.assign(Object.assign({}, sharedConfig), {
    points: ['br', 'tr'],
    offset: [0, -4]
  })
};
function useBuiltinPlacements(buildInPlacements) {
  return buildInPlacements || defaultBuiltInPlacements;
}