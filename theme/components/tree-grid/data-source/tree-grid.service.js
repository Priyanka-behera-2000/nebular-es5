"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbTreeGridService = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NbTreeGridService = /** @class */function () {
    function NbTreeGridService() {}
    NbTreeGridService.prototype.expand = function (data, row, options) {
        var _this = this;
        if (options === void 0) {
            options = {};
        }
        var node = this.find(data, row);
        node.expanded = true;
        if (options.deep && node.hasChildren()) {
            node.children.forEach(function (n) {
                return _this.expand(data, n.data, options);
            });
        }
    };
    NbTreeGridService.prototype.collapse = function (data, row, options) {
        var _this = this;
        if (options === void 0) {
            options = {};
        }
        var node = this.find(data, row);
        node.expanded = false;
        if (options.deep && node.hasChildren()) {
            node.children.forEach(function (n) {
                return _this.collapse(data, n.data, options);
            });
        }
    };
    NbTreeGridService.prototype.toggle = function (data, row, options) {
        if (options === void 0) {
            options = {};
        }
        var node = this.find(data, row);
        if (node.expanded) {
            this.collapse(data, row, options);
        } else {
            this.expand(data, row, options);
        }
    };
    NbTreeGridService.prototype.find = function (data, row) {
        var toCheck = data.slice();
        for (var _i = 0, toCheck_1 = toCheck; _i < toCheck_1.length; _i++) {
            var node = toCheck_1[_i];
            if (node.data === row) {
                return node;
            }
            toCheck.push.apply(toCheck, node.children);
        }
    };
    NbTreeGridService = __decorate([(0, _core.Injectable)()], NbTreeGridService);
    return NbTreeGridService;
}();
exports.NbTreeGridService = NbTreeGridService;
//# sourceMappingURL=tree-grid.service.js.map
//# sourceMappingURL=tree-grid.service.js.map