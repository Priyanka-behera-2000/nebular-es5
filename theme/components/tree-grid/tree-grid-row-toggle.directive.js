"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbTreeGridRowToggleDirective = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _treeGridCell = require("./tree-grid-cell.component");

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
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * When using custom row toggle, apply this directive on your toggle to toggle row on element click.
 */
var NbTreeGridRowToggleDirective = /** @class */function () {
    function NbTreeGridRowToggleDirective(cell) {
        this.cell = cell;
    }
    NbTreeGridRowToggleDirective.prototype.toggleRow = function ($event) {
        this.cell.toggleRow();
        $event.stopPropagation();
    };
    __decorate([(0, _core.HostListener)('click', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [Event]), __metadata("design:returntype", void 0)], NbTreeGridRowToggleDirective.prototype, "toggleRow", null);
    NbTreeGridRowToggleDirective = __decorate([(0, _core.Directive)({
        selector: '[nbTreeGridRowToggle]'
    }), __metadata("design:paramtypes", [_treeGridCell.NbTreeGridCellDirective])], NbTreeGridRowToggleDirective);
    return NbTreeGridRowToggleDirective;
}();
exports.NbTreeGridRowToggleDirective = NbTreeGridRowToggleDirective;
//# sourceMappingURL=tree-grid-row-toggle.directive.js.map
//# sourceMappingURL=tree-grid-row-toggle.directive.js.map