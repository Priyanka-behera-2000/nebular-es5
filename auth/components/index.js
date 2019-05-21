'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _auth = require('./auth.component');

Object.keys(_auth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _auth[key];
    }
  });
});

var _authBlock = require('./auth-block/auth-block.component');

Object.keys(_authBlock).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _authBlock[key];
    }
  });
});

var _login = require('./login/login.component');

Object.keys(_login).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _login[key];
    }
  });
});

var _logout = require('./logout/logout.component');

Object.keys(_logout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _logout[key];
    }
  });
});

var _register = require('./register/register.component');

Object.keys(_register).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _register[key];
    }
  });
});

var _requestPassword = require('./request-password/request-password.component');

Object.keys(_requestPassword).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _requestPassword[key];
    }
  });
});

var _resetPassword = require('./reset-password/reset-password.component');

Object.keys(_resetPassword).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _resetPassword[key];
    }
  });
});
//# sourceMappingURL=index.js.map