"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbTableModule = exports.NbTable = exports.NB_TABLE_TEMPLATE = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _table = require("@angular/cdk/table");

var _bidi = require("../bidi");

var _platform = require("../platform");

var _theme = require("../../../theme.options");

var _cell = require("./cell");

var _row = require("./row");

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
var NB_TABLE_TEMPLATE = exports.NB_TABLE_TEMPLATE = "\n  <ng-container nbHeaderRowOutlet></ng-container>\n  <ng-container nbRowOutlet></ng-container>\n  <ng-container nbFooterRowOutlet></ng-container>";
var NbTable = /** @class */function (_super) {
    __extends(NbTable, _super);
    function NbTable(differs, changeDetectorRef, elementRef, role, dir, document, platform) {
        return _super.call(this, differs, changeDetectorRef, elementRef, role, dir, document, platform) || this;
    }
    NbTable = __decorate([__param(3, (0, _core.Attribute)('role')), __param(5, (0, _core.Inject)(_theme.NB_DOCUMENT)), __metadata("design:paramtypes", [_core.IterableDiffers, _core.ChangeDetectorRef, _core.ElementRef, String, _bidi.NbDirectionality, Object, _platform.NbPlatform])], NbTable);
    return NbTable;
}(_table.CdkTable);
exports.NbTable = NbTable;

var COMPONENTS = [NbTable,
// Template defs
_cell.NbHeaderCellDefDirective, _row.NbHeaderRowDefDirective, _cell.NbColumnDefDirective, _cell.NbCellDefDirective, _row.NbRowDefDirective, _cell.NbFooterCellDefDirective, _row.NbFooterRowDefDirective,
// Outlets
_row.NbDataRowOutletDirective, _row.NbHeaderRowOutletDirective, _row.NbFooterRowOutletDirective, _row.NbCellOutletDirective,
// Cell directives
_cell.NbHeaderCellDirective, _cell.NbCellDirective, _cell.NbFooterCellDirective,
// Row directives
_row.NbHeaderRowComponent, _row.NbRowComponent, _row.NbFooterRowComponent];
var NbTableModule = /** @class */function (_super) {
    __extends(NbTableModule, _super);
    function NbTableModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbTableModule = __decorate([(0, _core.NgModule)({
        imports: [_bidi.NbBidiModule, _platform.NbPlatformModule],
        declarations: COMPONENTS.slice(),
        exports: COMPONENTS.slice()
    })], NbTableModule);
    return NbTableModule;
}(_table.CdkTableModule);
exports.NbTableModule = NbTableModule;
//# sourceMappingURL=table.module.js.map
//# sourceMappingURL=table.module.js.map