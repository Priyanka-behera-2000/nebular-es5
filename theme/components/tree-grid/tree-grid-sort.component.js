"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbSortHeaderComponent = exports.NbSortIconComponent = exports.NbSortHeaderIconDirective = exports.NbSortDirective = exports.NbSortDirection = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _helpers = require("../helpers");

var _table = require("../cdk/table");

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
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var NbSortDirection = exports.NbSortDirection = undefined;
(function (NbSortDirection) {
    NbSortDirection["ASCENDING"] = "asc";
    NbSortDirection["DESCENDING"] = "desc";
    NbSortDirection["NONE"] = "";
})(NbSortDirection || (exports.NbSortDirection = NbSortDirection = {}));
var sortDirections = [NbSortDirection.ASCENDING, NbSortDirection.DESCENDING, NbSortDirection.NONE];
/**
 * Directive triggers sort method of passed object when sort header changes direction
 */
var NbSortDirective = /** @class */function () {
    function NbSortDirective() {
        this.sort = new _core.EventEmitter();
    }
    NbSortDirective.prototype.emitSort = function (sortRequest) {
        if (this.sortable && this.sortable.sort) {
            this.sortable.sort(sortRequest);
        }
        this.sort.emit(sortRequest);
    };
    __decorate([(0, _core.Input)('nbSort'), __metadata("design:type", Object)], NbSortDirective.prototype, "sortable", void 0);
    __decorate([(0, _core.Output)(), __metadata("design:type", _core.EventEmitter)], NbSortDirective.prototype, "sort", void 0);
    NbSortDirective = __decorate([(0, _core.Directive)({ selector: '[nbSort]' })], NbSortDirective);
    return NbSortDirective;
}();
exports.NbSortDirective = NbSortDirective;
/**
 * Directive for headers sort icons. Mark you icon implementation with this structural directive and
 * it'll set template's implicit context with current direction. Context also has `isAscending`,
 * `isDescending` and `isNone` properties.
 */

var NbSortHeaderIconDirective = /** @class */function () {
    function NbSortHeaderIconDirective() {}
    NbSortHeaderIconDirective = __decorate([(0, _core.Directive)({ selector: '[nbSortHeaderIcon]' })], NbSortHeaderIconDirective);
    return NbSortHeaderIconDirective;
}();
exports.NbSortHeaderIconDirective = NbSortHeaderIconDirective;

var NbSortIconComponent = /** @class */function () {
    function NbSortIconComponent() {
        this.direction = NbSortDirection.NONE;
    }
    NbSortIconComponent.prototype.isAscending = function () {
        return this.direction === NbSortDirection.ASCENDING;
    };
    NbSortIconComponent.prototype.isDescending = function () {
        return this.direction === NbSortDirection.DESCENDING;
    };
    NbSortIconComponent.prototype.isDirectionSet = function () {
        return this.isAscending() || this.isDescending();
    };
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbSortIconComponent.prototype, "direction", void 0);
    NbSortIconComponent = __decorate([(0, _core.Component)({
        selector: 'nb-sort-icon',
        template: "\n    <ng-container *ngIf=\"isDirectionSet()\">\n      <nb-icon *ngIf=\"isAscending()\" icon=\"chevron-down-outline\" pack=\"nebular-essentials\" aria-hidden=\"true\"></nb-icon>\n      <nb-icon *ngIf=\"isDescending()\" icon=\"chevron-up-outline\" pack=\"nebular-essentials\" aria-hidden=\"true\"></nb-icon>\n    </ng-container>\n  "
    })], NbSortIconComponent);
    return NbSortIconComponent;
}();
exports.NbSortIconComponent = NbSortIconComponent;
/**
 * Marks header as sort header so it emitting sort event when clicked.
 */

var NbSortHeaderComponent = /** @class */function () {
    function NbSortHeaderComponent(sort, columnDef) {
        this.sort = sort;
        this.columnDef = columnDef;
        this.disabledValue = false;
    }
    Object.defineProperty(NbSortHeaderComponent.prototype, "disabled", {
        get: function get() {
            return this.disabledValue;
        },
        /**
         * Disable sort header
         */
        set: function set(value) {
            this.disabledValue = (0, _helpers.convertToBoolProperty)(value);
        },
        enumerable: true,
        configurable: true
    });
    NbSortHeaderComponent.prototype.sortIfEnabled = function () {
        if (!this.disabled) {
            this.sortData();
        }
    };
    NbSortHeaderComponent.prototype.isAscending = function () {
        return this.direction === NbSortDirection.ASCENDING;
    };
    NbSortHeaderComponent.prototype.isDescending = function () {
        return this.direction === NbSortDirection.DESCENDING;
    };
    NbSortHeaderComponent.prototype.sortData = function () {
        var sortRequest = this.createSortRequest();
        this.sort.emitSort(sortRequest);
    };
    NbSortHeaderComponent.prototype.getIconContext = function () {
        return {
            $implicit: this.direction,
            isAscending: this.isAscending(),
            isDescending: this.isDescending(),
            isNone: !this.isAscending() && !this.isDescending()
        };
    };
    NbSortHeaderComponent.prototype.getDisabledAttributeValue = function () {
        return this.disabled ? '' : null;
    };
    NbSortHeaderComponent.prototype.createSortRequest = function () {
        this.direction = this.getNextDirection();
        return { direction: this.direction, column: this.columnDef.name };
    };
    NbSortHeaderComponent.prototype.getNextDirection = function () {
        var sortDirectionCycle = sortDirections;
        var nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
        if (nextDirectionIndex >= sortDirectionCycle.length) {
            nextDirectionIndex = 0;
        }
        return sortDirectionCycle[nextDirectionIndex];
    };
    __decorate([(0, _core.ContentChild)(NbSortHeaderIconDirective, { read: _core.TemplateRef }), __metadata("design:type", _core.TemplateRef)], NbSortHeaderComponent.prototype, "sortIcon", void 0);
    __decorate([(0, _core.Input)('nbSortHeader'), __metadata("design:type", String)], NbSortHeaderComponent.prototype, "direction", void 0);
    __decorate([(0, _core.Input)(), (0, _core.HostBinding)('class.disabled'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Object])], NbSortHeaderComponent.prototype, "disabled", null);
    __decorate([(0, _core.HostListener)('click'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], NbSortHeaderComponent.prototype, "sortIfEnabled", null);
    NbSortHeaderComponent = __decorate([(0, _core.Component)({
        selector: '[nbSortHeader]',
        template: "\n    <button\n      class=\"nb-tree-grid-header-change-sort-button\"\n      type=\"button\"\n      [attr.disabled]=\"getDisabledAttributeValue()\"\n      (click)=\"sortData()\">\n      <ng-content></ng-content>\n    </button>\n    <nb-sort-icon *ngIf=\"!sortIcon; else customIcon\" [direction]=\"direction\"></nb-sort-icon>\n    <ng-template #customIcon [ngTemplateOutlet]=\"sortIcon\" [ngTemplateOutletContext]=\"getIconContext()\"></ng-template>\n  ",
        changeDetection: _core.ChangeDetectionStrategy.OnPush
    }), __param(1, (0, _core.Inject)(_table.NB_SORT_HEADER_COLUMN_DEF)), __metadata("design:paramtypes", [NbSortDirective, Object])], NbSortHeaderComponent);
    return NbSortHeaderComponent;
}();
exports.NbSortHeaderComponent = NbSortHeaderComponent;
//# sourceMappingURL=tree-grid-sort.component.js.map
//# sourceMappingURL=tree-grid-sort.component.js.map