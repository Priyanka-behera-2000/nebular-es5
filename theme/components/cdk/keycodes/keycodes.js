'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keycodes = require('@angular/cdk/keycodes');

Object.keys(_keycodes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _keycodes[key];
    }
  });
});
//# sourceMappingURL=keycodes.js.map