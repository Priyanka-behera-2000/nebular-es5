"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbTreeGridModule = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _common = require("@angular/common");

var _table = require("../cdk/table");

var _icon = require("../icon/icon.module");

var _treeGrid = require("./tree-grid.component");

var _treeGridDef = require("./tree-grid-def.component");

var _treeGridRow = require("./tree-grid-row.component");

var _treeGridCell = require("./tree-grid-cell.component");

var _treeGridSort = require("./tree-grid-sort.component");

var _treeGridDataSource = require("./data-source/tree-grid-data-source");

var _treeGridSort2 = require("./data-source/tree-grid-sort.service");

var _treeGridFilter = require("./data-source/tree-grid-filter.service");

var _treeGrid2 = require("./data-source/tree-grid.service");

var _treeGridData = require("./data-source/tree-grid-data.service");

var _treeGridFilter2 = require("./tree-grid-filter");

var _treeGridRowToggle = require("./tree-grid-row-toggle.directive");

var _treeGridColumnDef = require("./tree-grid-column-def.directive");

var _treeGridRowToggle2 = require("./tree-grid-row-toggle.component");

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

var COMPONENTS = [
// Tree Grid
_treeGrid.NbTreeGridComponent, _treeGridDef.NbTreeGridRowDefDirective, _treeGridRow.NbTreeGridRowComponent, _treeGridDef.NbTreeGridCellDefDirective, _treeGridCell.NbTreeGridCellDirective, _treeGridDef.NbTreeGridHeaderRowDefDirective, _treeGridRow.NbTreeGridHeaderRowComponent, _treeGridDef.NbTreeGridHeaderCellDefDirective, _treeGridCell.NbTreeGridHeaderCellDirective, _treeGridDef.NbTreeGridFooterRowDefDirective, _treeGridRow.NbTreeGridFooterRowComponent, _treeGridDef.NbTreeGridFooterCellDefDirective, _treeGridCell.NbTreeGridFooterCellDirective, _treeGridColumnDef.NbTreeGridColumnDefDirective,
// Sort directives
_treeGridSort.NbSortDirective, _treeGridSort.NbSortHeaderComponent, _treeGridSort.NbSortIconComponent,
// Filter directives
_treeGridFilter2.NbFilterDirective, _treeGridFilter2.NbFilterInputDirective, _treeGridRowToggle.NbTreeGridRowToggleDirective, _treeGridRowToggle2.NbTreeGridRowToggleComponent, _treeGridSort.NbSortHeaderIconDirective];
var NbTreeGridModule = /** @class */function () {
    function NbTreeGridModule() {}
    NbTreeGridModule = __decorate([(0, _core.NgModule)({
        imports: [_common.CommonModule, _table.NbTableModule, _icon.NbIconModule],
        declarations: COMPONENTS.slice(),
        exports: [_table.NbTableModule].concat(COMPONENTS),
        providers: [_treeGridSort2.NbTreeGridSortService, _treeGridFilter.NbTreeGridFilterService, _treeGrid2.NbTreeGridService, _treeGridData.NbTreeGridDataService, _treeGridDataSource.NbTreeGridDataSourceBuilder]
    })], NbTreeGridModule);
    return NbTreeGridModule;
}();
exports.NbTreeGridModule = NbTreeGridModule;
//# sourceMappingURL=tree-grid.module.js.map
//# sourceMappingURL=tree-grid.module.js.map