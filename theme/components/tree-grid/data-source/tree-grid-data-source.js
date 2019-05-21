"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbTreeGridDataSourceBuilder = exports.NbTreeGridDataSource = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _table = require("../../cdk/table");

var _treeGridData = require("./tree-grid-data.service");

var _treeGridFilter = require("./tree-grid-filter.service");

var _treeGridSort = require("./tree-grid-sort.service");

var _treeGrid = require("./tree-grid.model");

var _treeGrid2 = require("./tree-grid.service");

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

var NbTreeGridDataSource = /** @class */function (_super) {
    __extends(NbTreeGridDataSource, _super);
    function NbTreeGridDataSource(sortService, filterService, treeGridService, treeGridDataService) {
        var _this = _super.call(this) || this;
        _this.sortService = sortService;
        _this.filterService = filterService;
        _this.treeGridService = treeGridService;
        _this.treeGridDataService = treeGridDataService;
        /** Stream emitting render data to the table (depends on ordered data changes). */
        _this.renderData = new _rxjs.BehaviorSubject([]);
        _this.filterRequest = new _rxjs.BehaviorSubject('');
        _this.sortRequest = new _rxjs.BehaviorSubject(null);
        return _this;
    }
    NbTreeGridDataSource.prototype.setData = function (data, customGetters) {
        var presentationData = [];
        if (data) {
            presentationData = this.treeGridDataService.toPresentationNodes(data, customGetters);
        }
        this.data = new _rxjs.BehaviorSubject(presentationData);
        this.updateChangeSubscription();
    };
    NbTreeGridDataSource.prototype.connect = function (collectionViewer) {
        return this.renderData;
    };
    NbTreeGridDataSource.prototype.disconnect = function (collectionViewer) {};
    NbTreeGridDataSource.prototype.expand = function (row) {
        this.treeGridService.expand(this.data.value, row);
        this.data.next(this.data.value);
    };
    NbTreeGridDataSource.prototype.collapse = function (row) {
        this.treeGridService.collapse(this.data.value, row);
        this.data.next(this.data.value);
    };
    NbTreeGridDataSource.prototype.toggle = function (row, options) {
        this.treeGridService.toggle(this.data.value, row, options);
        this.data.next(this.data.value);
    };
    NbTreeGridDataSource.prototype.toggleByIndex = function (dataIndex, options) {
        var node = this.renderData.value && this.renderData.value[dataIndex];
        if (node) {
            this.toggle(node.data, options);
        }
    };
    NbTreeGridDataSource.prototype.getLevel = function (rowIndex) {
        var row = this.renderData.value[rowIndex];
        return row ? row.level : _treeGrid.NB_DEFAULT_ROW_LEVEL;
    };
    NbTreeGridDataSource.prototype.sort = function (sortRequest) {
        this.sortRequest.next(sortRequest);
    };
    NbTreeGridDataSource.prototype.filter = function (searchQuery) {
        this.filterRequest.next(searchQuery);
    };
    NbTreeGridDataSource.prototype.updateChangeSubscription = function () {
        var _this = this;
        var dataStream = this.data;
        var filteredData = (0, _rxjs.combineLatest)(dataStream, this.filterRequest).pipe((0, _operators.map)(function (_a) {
            var data = _a[0];
            return _this.treeGridDataService.copy(data);
        }), (0, _operators.map)(function (data) {
            return _this.filterData(data);
        }));
        var sortedData = (0, _rxjs.combineLatest)(filteredData, this.sortRequest).pipe((0, _operators.map)(function (_a) {
            var data = _a[0];
            return _this.sortData(data);
        }));
        sortedData.pipe((0, _operators.map)(function (data) {
            return _this.treeGridDataService.flattenExpanded(data);
        })).subscribe(function (data) {
            return _this.renderData.next(data);
        });
    };
    NbTreeGridDataSource.prototype.filterData = function (data) {
        return this.filterService.filter(this.filterRequest.value, data);
    };
    NbTreeGridDataSource.prototype.sortData = function (data) {
        return this.sortService.sort(this.sortRequest.value, data);
    };
    return NbTreeGridDataSource;
}(_table.NbDataSource);
exports.NbTreeGridDataSource = NbTreeGridDataSource;

var NbTreeGridDataSourceBuilder = /** @class */function () {
    function NbTreeGridDataSourceBuilder(filterService, sortService, treeGridService, treeGridDataService) {
        this.filterService = filterService;
        this.sortService = sortService;
        this.treeGridService = treeGridService;
        this.treeGridDataService = treeGridDataService;
    }
    NbTreeGridDataSourceBuilder.prototype.create = function (data, customGetters) {
        var dataSource = new NbTreeGridDataSource(this.sortService, this.filterService, this.treeGridService, this.treeGridDataService);
        dataSource.setData(data, customGetters);
        return dataSource;
    };
    NbTreeGridDataSourceBuilder = __decorate([(0, _core.Injectable)(), __metadata("design:paramtypes", [_treeGridFilter.NbTreeGridFilterService, _treeGridSort.NbTreeGridSortService, _treeGrid2.NbTreeGridService, _treeGridData.NbTreeGridDataService])], NbTreeGridDataSourceBuilder);
    return NbTreeGridDataSourceBuilder;
}();
exports.NbTreeGridDataSourceBuilder = NbTreeGridDataSourceBuilder;
//# sourceMappingURL=tree-grid-data-source.js.map
//# sourceMappingURL=tree-grid-data-source.js.map