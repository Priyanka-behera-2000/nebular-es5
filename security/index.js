'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _security = require('./security.options');

Object.keys(_security).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _security[key];
    }
  });
});

var _security2 = require('./security.module');

Object.keys(_security2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _security2[key];
    }
  });
});

var _acl = require('./services/acl.service');

Object.keys(_acl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _acl[key];
    }
  });
});

var _accessChecker = require('./services/access-checker.service');

Object.keys(_accessChecker).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _accessChecker[key];
    }
  });
});

var _role = require('./services/role.provider');

Object.keys(_role).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _role[key];
    }
  });
});
//# sourceMappingURL=index.js.map