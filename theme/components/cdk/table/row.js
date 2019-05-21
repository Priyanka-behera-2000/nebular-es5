"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbRowComponent = exports.NbFooterRowComponent = exports.NbHeaderRowComponent = exports.NbRowDefDirective = exports.NbFooterRowDefDirective = exports.NbHeaderRowDefDirective = exports.NbCellOutletDirective = exports.NbFooterRowOutletDirective = exports.NbHeaderRowOutletDirective = exports.NbDataRowOutletDirective = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _table = require("@angular/cdk/table");

var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
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

var NbDataRowOutletDirective = /** @class */function (_super) {
    __extends(NbDataRowOutletDirective, _super);
    function NbDataRowOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbDataRowOutletDirective_1 = NbDataRowOutletDirective;
    var NbDataRowOutletDirective_1;
    NbDataRowOutletDirective = NbDataRowOutletDirective_1 = __decorate([(0, _core.Directive)({
        selector: '[nbRowOutlet]',
        providers: [{ provide: _table.DataRowOutlet, useExisting: NbDataRowOutletDirective_1 }]
    })], NbDataRowOutletDirective);
    return NbDataRowOutletDirective;
}(_table.DataRowOutlet);
exports.NbDataRowOutletDirective = NbDataRowOutletDirective;

var NbHeaderRowOutletDirective = /** @class */function (_super) {
    __extends(NbHeaderRowOutletDirective, _super);
    function NbHeaderRowOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbHeaderRowOutletDirective_1 = NbHeaderRowOutletDirective;
    var NbHeaderRowOutletDirective_1;
    NbHeaderRowOutletDirective = NbHeaderRowOutletDirective_1 = __decorate([(0, _core.Directive)({
        selector: '[nbHeaderRowOutlet]',
        providers: [{ provide: _table.HeaderRowOutlet, useExisting: NbHeaderRowOutletDirective_1 }]
    })], NbHeaderRowOutletDirective);
    return NbHeaderRowOutletDirective;
}(_table.HeaderRowOutlet);
exports.NbHeaderRowOutletDirective = NbHeaderRowOutletDirective;

var NbFooterRowOutletDirective = /** @class */function (_super) {
    __extends(NbFooterRowOutletDirective, _super);
    function NbFooterRowOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbFooterRowOutletDirective_1 = NbFooterRowOutletDirective;
    var NbFooterRowOutletDirective_1;
    NbFooterRowOutletDirective = NbFooterRowOutletDirective_1 = __decorate([(0, _core.Directive)({
        selector: '[nbFooterRowOutlet]',
        providers: [{ provide: _table.FooterRowOutlet, useExisting: NbFooterRowOutletDirective_1 }]
    })], NbFooterRowOutletDirective);
    return NbFooterRowOutletDirective;
}(_table.FooterRowOutlet);
exports.NbFooterRowOutletDirective = NbFooterRowOutletDirective;

var NbCellOutletDirective = /** @class */function (_super) {
    __extends(NbCellOutletDirective, _super);
    function NbCellOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbCellOutletDirective_1 = NbCellOutletDirective;
    var NbCellOutletDirective_1;
    NbCellOutletDirective = NbCellOutletDirective_1 = __decorate([(0, _core.Directive)({
        selector: '[nbCellOutlet]',
        providers: [{ provide: _table.CdkCellOutlet, useExisting: NbCellOutletDirective_1 }]
    })], NbCellOutletDirective);
    return NbCellOutletDirective;
}(_table.CdkCellOutlet);
exports.NbCellOutletDirective = NbCellOutletDirective;
/**
 * Header row definition for the nb-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */

var NbHeaderRowDefDirective = /** @class */function (_super) {
    __extends(NbHeaderRowDefDirective, _super);
    function NbHeaderRowDefDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbHeaderRowDefDirective_1 = NbHeaderRowDefDirective;
    var NbHeaderRowDefDirective_1;
    __decorate([(0, _core.Input)('nbHeaderRowDef'), __metadata("design:type", Object)], NbHeaderRowDefDirective.prototype, "columns", void 0);
    __decorate([(0, _core.Input)('nbHeaderRowDefSticky'), __metadata("design:type", Boolean)], NbHeaderRowDefDirective.prototype, "sticky", void 0);
    NbHeaderRowDefDirective = NbHeaderRowDefDirective_1 = __decorate([(0, _core.Directive)({
        selector: '[nbHeaderRowDef]',
        providers: [{ provide: _table.CdkHeaderRowDef, useExisting: NbHeaderRowDefDirective_1 }]
    })], NbHeaderRowDefDirective);
    return NbHeaderRowDefDirective;
}(_table.CdkHeaderRowDef);
exports.NbHeaderRowDefDirective = NbHeaderRowDefDirective;
/**
 * Footer row definition for the nb-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */

var NbFooterRowDefDirective = /** @class */function (_super) {
    __extends(NbFooterRowDefDirective, _super);
    function NbFooterRowDefDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbFooterRowDefDirective_1 = NbFooterRowDefDirective;
    var NbFooterRowDefDirective_1;
    __decorate([(0, _core.Input)('nbFooterRowDef'), __metadata("design:type", Object)], NbFooterRowDefDirective.prototype, "columns", void 0);
    __decorate([(0, _core.Input)('nbFooterRowDefSticky'), __metadata("design:type", Boolean)], NbFooterRowDefDirective.prototype, "sticky", void 0);
    NbFooterRowDefDirective = NbFooterRowDefDirective_1 = __decorate([(0, _core.Directive)({
        selector: '[nbFooterRowDef]',
        providers: [{ provide: _table.CdkFooterRowDef, useExisting: NbFooterRowDefDirective_1 }]
    })], NbFooterRowDefDirective);
    return NbFooterRowDefDirective;
}(_table.CdkFooterRowDef);
exports.NbFooterRowDefDirective = NbFooterRowDefDirective;
/**
 * Data row definition for the nb-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */

var NbRowDefDirective = /** @class */function (_super) {
    __extends(NbRowDefDirective, _super);
    function NbRowDefDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbRowDefDirective_1 = NbRowDefDirective;
    var NbRowDefDirective_1;
    __decorate([(0, _core.Input)('nbRowDefColumns'), __metadata("design:type", Object)], NbRowDefDirective.prototype, "columns", void 0);
    __decorate([(0, _core.Input)('nbRowDefWhen'), __metadata("design:type", Function)], NbRowDefDirective.prototype, "when", void 0);
    NbRowDefDirective = NbRowDefDirective_1 = __decorate([(0, _core.Directive)({
        selector: '[nbRowDef]',
        providers: [{ provide: _table.CdkRowDef, useExisting: NbRowDefDirective_1 }]
    })], NbRowDefDirective);
    return NbRowDefDirective;
}(_table.CdkRowDef);
exports.NbRowDefDirective = NbRowDefDirective;
/** Footer template container that contains the cell outlet. Adds the right class and role. */

var NbHeaderRowComponent = /** @class */function (_super) {
    __extends(NbHeaderRowComponent, _super);
    function NbHeaderRowComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbHeaderRowComponent_1 = NbHeaderRowComponent;
    var NbHeaderRowComponent_1;
    NbHeaderRowComponent = NbHeaderRowComponent_1 = __decorate([(0, _core.Component)({
        selector: 'nb-header-row, tr[nbHeaderRow]',
        template: "\n    <ng-container nbCellOutlet></ng-container>",
        host: {
            'class': 'nb-header-row',
            'role': 'row'
        },
        changeDetection: _core.ChangeDetectionStrategy.OnPush,
        providers: [{ provide: _table.CdkHeaderRow, useExisting: NbHeaderRowComponent_1 }]
    })], NbHeaderRowComponent);
    return NbHeaderRowComponent;
}(_table.CdkHeaderRow);
exports.NbHeaderRowComponent = NbHeaderRowComponent;
/** Footer template container that contains the cell outlet. Adds the right class and role. */

var NbFooterRowComponent = /** @class */function (_super) {
    __extends(NbFooterRowComponent, _super);
    function NbFooterRowComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbFooterRowComponent_1 = NbFooterRowComponent;
    var NbFooterRowComponent_1;
    NbFooterRowComponent = NbFooterRowComponent_1 = __decorate([(0, _core.Component)({
        selector: 'nb-footer-row, tr[nbFooterRow]',
        template: "\n    <ng-container nbCellOutlet></ng-container>",
        host: {
            'class': 'nb-footer-row',
            'role': 'row'
        },
        changeDetection: _core.ChangeDetectionStrategy.OnPush,
        providers: [{ provide: _table.CdkFooterRow, useExisting: NbFooterRowComponent_1 }]
    })], NbFooterRowComponent);
    return NbFooterRowComponent;
}(_table.CdkFooterRow);
exports.NbFooterRowComponent = NbFooterRowComponent;
/** Data row template container that contains the cell outlet. Adds the right class and role. */

var NbRowComponent = /** @class */function (_super) {
    __extends(NbRowComponent, _super);
    function NbRowComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbRowComponent_1 = NbRowComponent;
    var NbRowComponent_1;
    NbRowComponent = NbRowComponent_1 = __decorate([(0, _core.Component)({
        selector: 'nb-row, tr[nbRow]',
        template: "\n    <ng-container nbCellOutlet></ng-container>",
        host: {
            'class': 'nb-row',
            'role': 'row'
        },
        providers: [{ provide: _table.CdkRow, useExisting: NbRowComponent_1 }],
        changeDetection: _core.ChangeDetectionStrategy.OnPush
    })], NbRowComponent);
    return NbRowComponent;
}(_table.CdkRow);
exports.NbRowComponent = NbRowComponent;
//# sourceMappingURL=row.js.map
//# sourceMappingURL=row.js.map