"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbTreeGridRowToggleComponent = undefined;

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
 * NbTreeGridRowToggleComponent
 */
var NbTreeGridRowToggleComponent = /** @class */function () {
    function NbTreeGridRowToggleComponent(cell) {
        this.cell = cell;
    }
    Object.defineProperty(NbTreeGridRowToggleComponent.prototype, "expanded", {
        get: function get() {
            return this.expandedValue;
        },
        set: function set(value) {
            this.expandedValue = value;
        },
        enumerable: true,
        configurable: true
    });
    NbTreeGridRowToggleComponent.prototype.toggleRow = function ($event) {
        this.cell.toggleRow();
        $event.stopPropagation();
    };
    __decorate([(0, _core.Input)(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], NbTreeGridRowToggleComponent.prototype, "expanded", null);
    __decorate([(0, _core.HostListener)('click', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [Event]), __metadata("design:returntype", void 0)], NbTreeGridRowToggleComponent.prototype, "toggleRow", null);
    NbTreeGridRowToggleComponent = __decorate([(0, _core.Component)({
        selector: 'nb-tree-grid-row-toggle',
        template: "\n    <button class=\"row-toggle-button\" [attr.aria-label]=\"expanded ? 'collapse' : 'expand'\">\n      <nb-icon [icon]=\"expanded ? 'chevron-down-outline' : 'chevron-right-outline'\"\n               pack=\"nebular-essentials\"\n               aria-hidden=\"true\">\n      </nb-icon>\n    </button>\n  ",
        styles: ["\n    button {\n      background: transparent;\n      border: none;\n      padding: 0;\n    }\n  "]
    }), __metadata("design:paramtypes", [_treeGridCell.NbTreeGridCellDirective])], NbTreeGridRowToggleComponent);
    return NbTreeGridRowToggleComponent;
}();
exports.NbTreeGridRowToggleComponent = NbTreeGridRowToggleComponent;
//# sourceMappingURL=tree-grid-row-toggle.component.js.map
//# sourceMappingURL=tree-grid-row-toggle.component.js.map