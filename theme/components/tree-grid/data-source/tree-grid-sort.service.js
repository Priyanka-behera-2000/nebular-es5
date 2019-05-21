"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbTreeGridSortService = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _treeGridSort = require("../tree-grid-sort.component");

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

/**
 * Service used to sort tree grid data. Uses Array.prototype.sort method.
 * If you need custom sorting, you can extend this service and override comparator or whole sort method.
 */
var NbTreeGridSortService = /** @class */function () {
    function NbTreeGridSortService() {}
    NbTreeGridSortService.prototype.sort = function (request, data) {
        var _this = this;
        if (!request) {
            return data;
        }
        var sorted = data.sort(function (na, nb) {
            return _this.comparator(request, na, nb);
        });
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var node = data_1[_i];
            if (node.children) {
                node.children = this.sort(request, node.children);
            }
        }
        return sorted;
    };
    NbTreeGridSortService.prototype.comparator = function (request, na, nb) {
        var key = request.column;
        var dir = request.direction;
        var a = na.data[key];
        var b = nb.data[key];
        var res = 0;
        if (a > b) {
            res = 1;
        }
        if (a < b) {
            res = -1;
        }
        return dir === _treeGridSort.NbSortDirection.ASCENDING ? res : res * -1;
    };
    NbTreeGridSortService = __decorate([(0, _core.Injectable)()], NbTreeGridSortService);
    return NbTreeGridSortService;
}();
exports.NbTreeGridSortService = NbTreeGridSortService;
//# sourceMappingURL=tree-grid-sort.service.js.map
//# sourceMappingURL=tree-grid-sort.service.js.map