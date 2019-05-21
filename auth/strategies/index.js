'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _authStrategy = require('./auth-strategy');

Object.keys(_authStrategy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _authStrategy[key];
    }
  });
});

var _authStrategyOptions = require('./auth-strategy-options');

Object.keys(_authStrategyOptions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _authStrategyOptions[key];
    }
  });
});

var _dummyStrategy = require('./dummy/dummy-strategy');

Object.keys(_dummyStrategy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dummyStrategy[key];
    }
  });
});

var _dummyStrategyOptions = require('./dummy/dummy-strategy-options');

Object.keys(_dummyStrategyOptions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dummyStrategyOptions[key];
    }
  });
});

var _passwordStrategy = require('./password/password-strategy');

Object.keys(_passwordStrategy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _passwordStrategy[key];
    }
  });
});

var _passwordStrategyOptions = require('./password/password-strategy-options');

Object.keys(_passwordStrategyOptions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _passwordStrategyOptions[key];
    }
  });
});

var _oauth2Strategy = require('./oauth2/oauth2-strategy');

Object.keys(_oauth2Strategy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _oauth2Strategy[key];
    }
  });
});

var _oauth2Strategy2 = require('./oauth2/oauth2-strategy.options');

Object.keys(_oauth2Strategy2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _oauth2Strategy2[key];
    }
  });
});
//# sourceMappingURL=index.js.map