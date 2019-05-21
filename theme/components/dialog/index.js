'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dialogConfig = require('./dialog-config');

Object.keys(_dialogConfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dialogConfig[key];
    }
  });
});

var _dialogRef = require('./dialog-ref');

Object.keys(_dialogRef).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dialogRef[key];
    }
  });
});

var _dialog = require('./dialog.service');

Object.keys(_dialog).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dialog[key];
    }
  });
});

var _dialog2 = require('./dialog.module');

Object.keys(_dialog2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dialog2[key];
    }
  });
});
//# sourceMappingURL=index.js.map