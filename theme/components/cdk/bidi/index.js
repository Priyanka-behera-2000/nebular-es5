'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bidi = require('./bidi');

Object.keys(_bidi).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _bidi[key];
    }
  });
});

var _bidi2 = require('./bidi.module');

Object.keys(_bidi2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _bidi2[key];
    }
  });
});
//# sourceMappingURL=index.js.map