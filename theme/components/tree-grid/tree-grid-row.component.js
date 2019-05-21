"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbTreeGridFooterRowComponent = exports.NbTreeGridHeaderRowComponent = exports.NbTreeGridRowComponent = exports.NB_ROW_DOUBLE_CLICK_DELAY = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _table = require("../cdk/table");

var _treeGridInjectionTokens = require("./tree-grid-injection-tokens");

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
var NB_ROW_DOUBLE_CLICK_DELAY = exports.NB_ROW_DOUBLE_CLICK_DELAY = 200;
/**
 * Cells container. Adds the right class and role.
 */
var NbTreeGridRowComponent = /** @class */function (_super) {
    __extends(NbTreeGridRowComponent, _super);
    function NbTreeGridRowComponent(tree, elementRef) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.doubleClick$ = new _rxjs.Subject();
        /**
         * Time to wait for second click to expand row deeply.
         * 200ms by default.
         */
        _this.doubleClickDelay = NB_ROW_DOUBLE_CLICK_DELAY;
        /**
         * Toggle row on click. Enabled by default.
         */
        _this.clickToToggle = true;
        _this.tree = tree;
        return _this;
    }
    NbTreeGridRowComponent_1 = NbTreeGridRowComponent;
    NbTreeGridRowComponent.prototype.toggleIfEnabledNode = function () {
        var _this = this;
        if (!this.clickToToggle) {
            return;
        }
        (0, _rxjs.timer)(NB_ROW_DOUBLE_CLICK_DELAY).pipe((0, _operators.take)(1), (0, _operators.takeUntil)(this.doubleClick$)).subscribe(function () {
            return _this.tree.toggleRow(_this);
        });
    };
    NbTreeGridRowComponent.prototype.toggleIfEnabledNodeDeep = function () {
        if (!this.clickToToggle) {
            return;
        }
        this.doubleClick$.next();
        this.tree.toggleRow(this, { deep: true });
    };
    NbTreeGridRowComponent.prototype.ngOnDestroy = function () {
        this.doubleClick$.complete();
    };
    var NbTreeGridRowComponent_1;
    __decorate([(0, _core.Input)(), __metadata("design:type", Number)], NbTreeGridRowComponent.prototype, "doubleClickDelay", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Boolean)], NbTreeGridRowComponent.prototype, "clickToToggle", void 0);
    __decorate([(0, _core.HostListener)('click'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], NbTreeGridRowComponent.prototype, "toggleIfEnabledNode", null);
    __decorate([(0, _core.HostListener)('dblclick'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], NbTreeGridRowComponent.prototype, "toggleIfEnabledNodeDeep", null);
    NbTreeGridRowComponent = NbTreeGridRowComponent_1 = __decorate([(0, _core.Component)({
        selector: 'tr[nbTreeGridRow]',
        template: "<ng-container nbCellOutlet></ng-container>",
        host: {
            'class': 'nb-tree-grid-row',
            'role': 'row'
        },
        providers: [{ provide: _table.NbCdkRow, useExisting: NbTreeGridRowComponent_1 }],
        changeDetection: _core.ChangeDetectionStrategy.OnPush
    }), __param(0, (0, _core.Inject)(_treeGridInjectionTokens.NB_TREE_GRID)), __metadata("design:paramtypes", [Object, _core.ElementRef])], NbTreeGridRowComponent);
    return NbTreeGridRowComponent;
}(_table.NbRowComponent);
exports.NbTreeGridRowComponent = NbTreeGridRowComponent;

var NbTreeGridHeaderRowComponent = /** @class */function (_super) {
    __extends(NbTreeGridHeaderRowComponent, _super);
    function NbTreeGridHeaderRowComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbTreeGridHeaderRowComponent_1 = NbTreeGridHeaderRowComponent;
    var NbTreeGridHeaderRowComponent_1;
    NbTreeGridHeaderRowComponent = NbTreeGridHeaderRowComponent_1 = __decorate([(0, _core.Component)({
        selector: 'tr[nbTreeGridHeaderRow]',
        template: "\n    <ng-container nbCellOutlet></ng-container>",
        host: {
            'class': 'nb-tree-grid-header-row',
            'role': 'row'
        },
        changeDetection: _core.ChangeDetectionStrategy.OnPush,
        providers: [{ provide: _table.NbCdkHeaderRow, useExisting: NbTreeGridHeaderRowComponent_1 }]
    })], NbTreeGridHeaderRowComponent);
    return NbTreeGridHeaderRowComponent;
}(_table.NbHeaderRowComponent);
exports.NbTreeGridHeaderRowComponent = NbTreeGridHeaderRowComponent;

var NbTreeGridFooterRowComponent = /** @class */function (_super) {
    __extends(NbTreeGridFooterRowComponent, _super);
    function NbTreeGridFooterRowComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbTreeGridFooterRowComponent_1 = NbTreeGridFooterRowComponent;
    var NbTreeGridFooterRowComponent_1;
    NbTreeGridFooterRowComponent = NbTreeGridFooterRowComponent_1 = __decorate([(0, _core.Component)({
        selector: 'tr[nbTreeGridFooterRow]',
        template: "\n    <ng-container nbCellOutlet></ng-container>",
        host: {
            'class': 'nb-tree-grid-footer-row',
            'role': 'row'
        },
        changeDetection: _core.ChangeDetectionStrategy.OnPush,
        providers: [{ provide: _table.NbCdkFooterRow, useExisting: NbTreeGridFooterRowComponent_1 }]
    })], NbTreeGridFooterRowComponent);
    return NbTreeGridFooterRowComponent;
}(_table.NbFooterRowComponent);
exports.NbTreeGridFooterRowComponent = NbTreeGridFooterRowComponent;
//# sourceMappingURL=tree-grid-row.component.js.map
//# sourceMappingURL=tree-grid-row.component.js.map