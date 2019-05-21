'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _platform = require('./platform.module');

Object.keys(_platform).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _platform[key];
    }
  });
});

var _platform2 = require('./platform');

Object.keys(_platform2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _platform2[key];
    }
  });
});
//# sourceMappingURL=index.js.map