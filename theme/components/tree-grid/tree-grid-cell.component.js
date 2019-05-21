"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbTreeGridFooterCellDirective = exports.NbTreeGridHeaderCellDirective = exports.NbTreeGridCellDirective = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _common = require("@angular/common");

var _platformBrowser = require("@angular/platform-browser");

var _operators = require("rxjs/operators");

var _direction = require("../../services/direction.service");

var _theme = require("../../theme.options");

var _table = require("../cdk/table");

var _treeGridInjectionTokens = require("./tree-grid-injection-tokens");

var _treeGridColumnDef = require("./tree-grid-column-def.directive");

var _treeGrid = require("./data-source/tree-grid.model");

var _treeGridColumns = require("./tree-grid-columns.service");

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
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
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};

var NbTreeGridCellDirective = /** @class */function (_super) {
    __extends(NbTreeGridCellDirective, _super);
    function NbTreeGridCellDirective(columnDef, elementRef, tree, platformId, window, sanitizer, directionService, columnService, cd) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        _this.platformId = platformId;
        _this.window = window;
        _this.sanitizer = sanitizer;
        _this.directionService = directionService;
        _this.columnService = columnService;
        _this.cd = cd;
        _this.alive = true;
        _this.initialLeftPadding = '';
        _this.initialRightPadding = '';
        _this.tree = tree;
        _this.columnDef = columnDef;
        _this.elementRef = elementRef;
        return _this;
    }
    NbTreeGridCellDirective_1 = NbTreeGridCellDirective;
    Object.defineProperty(NbTreeGridCellDirective.prototype, "columnWidth", {
        get: function get() {
            this.latestWidth = this.tree.getColumnWidth();
            return this.latestWidth || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbTreeGridCellDirective.prototype, "leftPadding", {
        get: function get() {
            if (this.directionService.isLtr()) {
                return this.getStartPadding();
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbTreeGridCellDirective.prototype, "rightPadding", {
        get: function get() {
            if (this.directionService.isRtl()) {
                return this.getStartPadding();
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    NbTreeGridCellDirective.prototype.ngOnInit = function () {
        var _this = this;
        if ((0, _common.isPlatformBrowser)(this.platformId)) {
            var style = this.window.getComputedStyle(this.elementRef.nativeElement);
            this.initialLeftPadding = style.paddingLeft;
            this.initialRightPadding = style.paddingRight;
        }
        this.columnService.onColumnsChange().pipe((0, _operators.takeWhile)(function () {
            return _this.alive;
        }), (0, _operators.filter)(function () {
            return _this.latestWidth !== _this.tree.getColumnWidth();
        })).subscribe(function () {
            return _this.cd.detectChanges();
        });
    };
    NbTreeGridCellDirective.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbTreeGridCellDirective.prototype.toggleRow = function () {
        this.tree.toggleCellRow(this);
    };
    Object.defineProperty(NbTreeGridCellDirective.prototype, "initialStartPadding", {
        get: function get() {
            return this.directionService.isLtr() ? this.initialLeftPadding : this.initialRightPadding;
        },
        enumerable: true,
        configurable: true
    });
    NbTreeGridCellDirective.prototype.getStartPadding = function () {
        var rowLevel = this.tree.getCellLevel(this, this.columnDef.name);
        if (rowLevel === _treeGrid.NB_DEFAULT_ROW_LEVEL) {
            return null;
        }
        var nestingLevel = rowLevel + 1;
        var padding = '';
        if (this.tree.levelPadding) {
            padding = "calc(" + this.tree.levelPadding + " * " + nestingLevel + ")";
        } else if (this.initialStartPadding) {
            padding = "calc(" + this.initialStartPadding + " * " + nestingLevel + ")";
        }
        if (!padding) {
            return null;
        }
        return this.sanitizer.bypassSecurityTrustStyle(padding);
    };
    var NbTreeGridCellDirective_1;
    __decorate([(0, _core.HostBinding)('style.width'), __metadata("design:type", String), __metadata("design:paramtypes", [])], NbTreeGridCellDirective.prototype, "columnWidth", null);
    __decorate([(0, _core.HostBinding)('style.padding-left'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbTreeGridCellDirective.prototype, "leftPadding", null);
    __decorate([(0, _core.HostBinding)('style.padding-right'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbTreeGridCellDirective.prototype, "rightPadding", null);
    NbTreeGridCellDirective = NbTreeGridCellDirective_1 = __decorate([(0, _core.Directive)({
        selector: 'td[nbTreeGridCell]',
        host: {
            'class': 'nb-tree-grid-cell',
            'role': 'gridcell'
        },
        providers: [{ provide: _table.NbCdkCell, useExisting: NbTreeGridCellDirective_1 }]
    }), __param(2, (0, _core.Inject)(_treeGridInjectionTokens.NB_TREE_GRID)), __param(3, (0, _core.Inject)(_core.PLATFORM_ID)), __param(4, (0, _core.Inject)(_theme.NB_WINDOW)), __metadata("design:paramtypes", [_treeGridColumnDef.NbTreeGridColumnDefDirective, _core.ElementRef, Object, Object, Object, _platformBrowser.DomSanitizer, _direction.NbLayoutDirectionService, _treeGridColumns.NbColumnsService, _core.ChangeDetectorRef])], NbTreeGridCellDirective);
    return NbTreeGridCellDirective;
}(_table.NbCellDirective);
exports.NbTreeGridCellDirective = NbTreeGridCellDirective;

var NbTreeGridHeaderCellDirective = /** @class */function (_super) {
    __extends(NbTreeGridHeaderCellDirective, _super);
    function NbTreeGridHeaderCellDirective(columnDef, elementRef, tree, columnService, cd) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        _this.columnService = columnService;
        _this.cd = cd;
        _this.alive = true;
        _this.tree = tree;
        return _this;
    }
    NbTreeGridHeaderCellDirective_1 = NbTreeGridHeaderCellDirective;
    Object.defineProperty(NbTreeGridHeaderCellDirective.prototype, "columnWidth", {
        get: function get() {
            this.latestWidth = this.tree.getColumnWidth();
            return this.latestWidth || null;
        },
        enumerable: true,
        configurable: true
    });
    NbTreeGridHeaderCellDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.columnService.onColumnsChange().pipe((0, _operators.takeWhile)(function () {
            return _this.alive;
        }), (0, _operators.filter)(function () {
            return _this.latestWidth !== _this.tree.getColumnWidth();
        })).subscribe(function () {
            return _this.cd.detectChanges();
        });
    };
    NbTreeGridHeaderCellDirective.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    var NbTreeGridHeaderCellDirective_1;
    __decorate([(0, _core.HostBinding)('style.width'), __metadata("design:type", String), __metadata("design:paramtypes", [])], NbTreeGridHeaderCellDirective.prototype, "columnWidth", null);
    NbTreeGridHeaderCellDirective = NbTreeGridHeaderCellDirective_1 = __decorate([(0, _core.Directive)({
        selector: 'th[nbTreeGridHeaderCell]',
        host: {
            'class': 'nb-tree-grid-header-cell',
            'role': 'columnheader'
        },
        providers: [{ provide: _table.NbCdkHeaderCell, useExisting: NbTreeGridHeaderCellDirective_1 }]
    }), __param(2, (0, _core.Inject)(_treeGridInjectionTokens.NB_TREE_GRID)), __metadata("design:paramtypes", [_treeGridColumnDef.NbTreeGridColumnDefDirective, _core.ElementRef, Object, _treeGridColumns.NbColumnsService, _core.ChangeDetectorRef])], NbTreeGridHeaderCellDirective);
    return NbTreeGridHeaderCellDirective;
}(_table.NbHeaderCellDirective);
exports.NbTreeGridHeaderCellDirective = NbTreeGridHeaderCellDirective;

var NbTreeGridFooterCellDirective = /** @class */function (_super) {
    __extends(NbTreeGridFooterCellDirective, _super);
    function NbTreeGridFooterCellDirective(columnDef, elementRef, tree, columnService, cd) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        _this.columnService = columnService;
        _this.cd = cd;
        _this.alive = true;
        _this.tree = tree;
        return _this;
    }
    NbTreeGridFooterCellDirective_1 = NbTreeGridFooterCellDirective;
    Object.defineProperty(NbTreeGridFooterCellDirective.prototype, "columnWidth", {
        get: function get() {
            this.latestWidth = this.tree.getColumnWidth();
            return this.latestWidth || null;
        },
        enumerable: true,
        configurable: true
    });
    NbTreeGridFooterCellDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.columnService.onColumnsChange().pipe((0, _operators.takeWhile)(function () {
            return _this.alive;
        }), (0, _operators.filter)(function () {
            return _this.latestWidth !== _this.tree.getColumnWidth();
        })).subscribe(function () {
            return _this.cd.detectChanges();
        });
    };
    NbTreeGridFooterCellDirective.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    var NbTreeGridFooterCellDirective_1;
    __decorate([(0, _core.HostBinding)('style.width'), __metadata("design:type", String), __metadata("design:paramtypes", [])], NbTreeGridFooterCellDirective.prototype, "columnWidth", null);
    NbTreeGridFooterCellDirective = NbTreeGridFooterCellDirective_1 = __decorate([(0, _core.Directive)({
        selector: 'td[nbTreeGridFooterCell]',
        host: {
            'class': 'nb-tree-grid-footer-cell',
            'role': 'gridcell'
        },
        providers: [{ provide: _table.NbCdkFooterCell, useExisting: NbTreeGridFooterCellDirective_1 }]
    }), __param(2, (0, _core.Inject)(_treeGridInjectionTokens.NB_TREE_GRID)), __metadata("design:paramtypes", [_treeGridColumnDef.NbTreeGridColumnDefDirective, _core.ElementRef, Object, _treeGridColumns.NbColumnsService, _core.ChangeDetectorRef])], NbTreeGridFooterCellDirective);
    return NbTreeGridFooterCellDirective;
}(_table.NbFooterCellDirective);
exports.NbTreeGridFooterCellDirective = NbTreeGridFooterCellDirective;
//# sourceMappingURL=tree-grid-cell.component.js.map
//# sourceMappingURL=tree-grid-cell.component.js.map