'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _window = require('./window.module');

Object.keys(_window).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _window[key];
    }
  });
});

var _window2 = require('./window.service');

Object.keys(_window2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _window2[key];
    }
  });
});

var _windowRef = require('./window-ref');

Object.keys(_windowRef).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _windowRef[key];
    }
  });
});

var _window3 = require('./window.options');

Object.defineProperty(exports, 'NbWindowConfig', {
  enumerable: true,
  get: function get() {
    return _window3.NbWindowConfig;
  }
});
Object.defineProperty(exports, 'NbWindowState', {
  enumerable: true,
  get: function get() {
    return _window3.NbWindowState;
  }
});
Object.defineProperty(exports, 'NB_WINDOW_CONFIG', {
  enumerable: true,
  get: function get() {
    return _window3.NB_WINDOW_CONFIG;
  }
});
//# sourceMappingURL=index.js.map