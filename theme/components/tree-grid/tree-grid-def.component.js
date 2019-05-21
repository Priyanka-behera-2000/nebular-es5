"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbTreeGridFooterCellDefDirective = exports.NbTreeGridHeaderCellDefDirective = exports.NbTreeGridCellDefDirective = exports.NbTreeGridFooterRowDefDirective = exports.NbTreeGridHeaderRowDefDirective = exports.NbTreeGridRowDefDirective = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _table = require("../cdk/table");

var _treeGridColumns = require("./tree-grid-columns.service");

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

/**
 * Data row definition for the tree-grid.
 * Captures the header row's template and columns to display.
 */
var NbTreeGridRowDefDirective = /** @class */function (_super) {
    __extends(NbTreeGridRowDefDirective, _super);
    function NbTreeGridRowDefDirective(template, differs, columnsService) {
        var _this = _super.call(this, template, differs) || this;
        _this.columnsService = columnsService;
        return _this;
    }
    NbTreeGridRowDefDirective_1 = NbTreeGridRowDefDirective;
    Object.defineProperty(NbTreeGridRowDefDirective.prototype, "columns", {
        get: function get() {
            return this.columnsService.getVisibleColumns();
        },
        /**
         * Columns to be displayed on this row
         */
        set: function set(value) {
            this.columnsService.setColumns(value);
        },
        enumerable: true,
        configurable: true
    });
    /** @docs-private */
    NbTreeGridRowDefDirective.prototype.hideColumn = function (column) {
        this.columnsService.hideColumn(column);
    };
    /** @docs-private */
    NbTreeGridRowDefDirective.prototype.showColumn = function (column) {
        this.columnsService.showColumn(column);
    };
    var NbTreeGridRowDefDirective_1;
    __decorate([(0, _core.Input)('nbTreeGridRowDefColumns'), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], NbTreeGridRowDefDirective.prototype, "columns", null);
    NbTreeGridRowDefDirective = NbTreeGridRowDefDirective_1 = __decorate([(0, _core.Directive)({
        selector: '[nbTreeGridRowDef]',
        providers: [{ provide: _table.NbCdkRowDef, useExisting: NbTreeGridRowDefDirective_1 }]
    }), __metadata("design:paramtypes", [_core.TemplateRef, _core.IterableDiffers, _treeGridColumns.NbColumnsService])], NbTreeGridRowDefDirective);
    return NbTreeGridRowDefDirective;
}(_table.NbRowDefDirective);
exports.NbTreeGridRowDefDirective = NbTreeGridRowDefDirective;

var NbTreeGridHeaderRowDefDirective = /** @class */function (_super) {
    __extends(NbTreeGridHeaderRowDefDirective, _super);
    function NbTreeGridHeaderRowDefDirective(template, differs, columnsService) {
        var _this = _super.call(this, template, differs) || this;
        _this.columnsService = columnsService;
        return _this;
    }
    NbTreeGridHeaderRowDefDirective_1 = NbTreeGridHeaderRowDefDirective;
    Object.defineProperty(NbTreeGridHeaderRowDefDirective.prototype, "columns", {
        get: function get() {
            return this.columnsService.getVisibleColumns();
        },
        /**
         * Columns to be displayed on this row
         */
        set: function set(value) {
            this.columnsService.setColumns(value);
        },
        enumerable: true,
        configurable: true
    });
    /** @docs-private */
    NbTreeGridHeaderRowDefDirective.prototype.hideColumn = function (column) {
        this.columnsService.hideColumn(column);
    };
    /** @docs-private */
    NbTreeGridHeaderRowDefDirective.prototype.showColumn = function (column) {
        this.columnsService.showColumn(column);
    };
    var NbTreeGridHeaderRowDefDirective_1;
    __decorate([(0, _core.Input)('nbTreeGridHeaderRowDef'), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], NbTreeGridHeaderRowDefDirective.prototype, "columns", null);
    NbTreeGridHeaderRowDefDirective = NbTreeGridHeaderRowDefDirective_1 = __decorate([(0, _core.Directive)({
        selector: '[nbTreeGridHeaderRowDef]',
        providers: [{ provide: _table.NbCdkHeaderRowDef, useExisting: NbTreeGridHeaderRowDefDirective_1 }]
    }), __metadata("design:paramtypes", [_core.TemplateRef, _core.IterableDiffers, _treeGridColumns.NbColumnsService])], NbTreeGridHeaderRowDefDirective);
    return NbTreeGridHeaderRowDefDirective;
}(_table.NbHeaderRowDefDirective);
exports.NbTreeGridHeaderRowDefDirective = NbTreeGridHeaderRowDefDirective;

var NbTreeGridFooterRowDefDirective = /** @class */function (_super) {
    __extends(NbTreeGridFooterRowDefDirective, _super);
    function NbTreeGridFooterRowDefDirective(template, differs, columnsService) {
        var _this = _super.call(this, template, differs) || this;
        _this.columnsService = columnsService;
        return _this;
    }
    NbTreeGridFooterRowDefDirective_1 = NbTreeGridFooterRowDefDirective;
    Object.defineProperty(NbTreeGridFooterRowDefDirective.prototype, "columns", {
        get: function get() {
            return this.columnsService.getVisibleColumns();
        },
        /**
         * Columns to be displayed on this row
         */
        set: function set(value) {
            this.columnsService.setColumns(value);
        },
        enumerable: true,
        configurable: true
    });
    /** @docs-private */
    NbTreeGridFooterRowDefDirective.prototype.hideColumn = function (column) {
        this.columnsService.hideColumn(column);
    };
    /** @docs-private */
    NbTreeGridFooterRowDefDirective.prototype.showColumn = function (column) {
        this.columnsService.showColumn(column);
    };
    var NbTreeGridFooterRowDefDirective_1;
    __decorate([(0, _core.Input)('nbTreeGridFooterRowDef'), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], NbTreeGridFooterRowDefDirective.prototype, "columns", null);
    NbTreeGridFooterRowDefDirective = NbTreeGridFooterRowDefDirective_1 = __decorate([(0, _core.Directive)({
        selector: '[nbTreeGridFooterRowDef]',
        providers: [{ provide: _table.NbCdkFooterRowDef, useExisting: NbTreeGridFooterRowDefDirective_1 }]
    }), __metadata("design:paramtypes", [_core.TemplateRef, _core.IterableDiffers, _treeGridColumns.NbColumnsService])], NbTreeGridFooterRowDefDirective);
    return NbTreeGridFooterRowDefDirective;
}(_table.NbFooterRowDefDirective);
exports.NbTreeGridFooterRowDefDirective = NbTreeGridFooterRowDefDirective;
/**
 * Cell definition for a nb-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */

var NbTreeGridCellDefDirective = /** @class */function (_super) {
    __extends(NbTreeGridCellDefDirective, _super);
    function NbTreeGridCellDefDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbTreeGridCellDefDirective_1 = NbTreeGridCellDefDirective;
    var NbTreeGridCellDefDirective_1;
    NbTreeGridCellDefDirective = NbTreeGridCellDefDirective_1 = __decorate([(0, _core.Directive)({
        selector: '[nbTreeGridCellDef]',
        providers: [{ provide: _table.NbCdkCellDef, useExisting: NbTreeGridCellDefDirective_1 }]
    })], NbTreeGridCellDefDirective);
    return NbTreeGridCellDefDirective;
}(_table.NbCellDefDirective);
exports.NbTreeGridCellDefDirective = NbTreeGridCellDefDirective;
/**
 * Header cell definition for the nb-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */

var NbTreeGridHeaderCellDefDirective = /** @class */function (_super) {
    __extends(NbTreeGridHeaderCellDefDirective, _super);
    function NbTreeGridHeaderCellDefDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbTreeGridHeaderCellDefDirective_1 = NbTreeGridHeaderCellDefDirective;
    var NbTreeGridHeaderCellDefDirective_1;
    NbTreeGridHeaderCellDefDirective = NbTreeGridHeaderCellDefDirective_1 = __decorate([(0, _core.Directive)({
        selector: '[nbTreeGridHeaderCellDef]',
        providers: [{ provide: _table.NbCdkHeaderCellDef, useExisting: NbTreeGridHeaderCellDefDirective_1 }]
    })], NbTreeGridHeaderCellDefDirective);
    return NbTreeGridHeaderCellDefDirective;
}(_table.NbHeaderCellDefDirective);
exports.NbTreeGridHeaderCellDefDirective = NbTreeGridHeaderCellDefDirective;
/**
 * Footer cell definition for the nb-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */

var NbTreeGridFooterCellDefDirective = /** @class */function (_super) {
    __extends(NbTreeGridFooterCellDefDirective, _super);
    function NbTreeGridFooterCellDefDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbTreeGridFooterCellDefDirective_1 = NbTreeGridFooterCellDefDirective;
    var NbTreeGridFooterCellDefDirective_1;
    NbTreeGridFooterCellDefDirective = NbTreeGridFooterCellDefDirective_1 = __decorate([(0, _core.Directive)({
        selector: '[nbTreeGridFooterCellDef]',
        providers: [{ provide: _table.NbCdkFooterCellDef, useExisting: NbTreeGridFooterCellDefDirective_1 }]
    })], NbTreeGridFooterCellDefDirective);
    return NbTreeGridFooterCellDefDirective;
}(_table.NbFooterCellDefDirective);
exports.NbTreeGridFooterCellDefDirective = NbTreeGridFooterCellDefDirective;
//# sourceMappingURL=tree-grid-def.component.js.map
//# sourceMappingURL=tree-grid-def.component.js.map