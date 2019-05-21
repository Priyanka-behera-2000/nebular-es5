"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbColumnsService = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _rxjs = require("rxjs");

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

var NbColumnsService = /** @class */function () {
    function NbColumnsService(differs) {
        this.differs = differs;
        this.columnHide$ = new _rxjs.Subject();
        this.columnShow$ = new _rxjs.Subject();
    }
    NbColumnsService.prototype.setColumns = function (columns) {
        if (!this.changesDiffer) {
            this.changesDiffer = this.differs.find(columns || []).create();
        }
        if (this.changesDiffer.diff(columns)) {
            this.allColumns = Array.from(columns);
            this.visibleColumns = Array.from(columns);
        }
    };
    NbColumnsService.prototype.getVisibleColumns = function () {
        return this.visibleColumns;
    };
    NbColumnsService.prototype.hideColumn = function (column) {
        var toRemove = this.visibleColumns.indexOf(column);
        if (toRemove > -1) {
            this.visibleColumns.splice(toRemove, 1);
            this.columnHide$.next();
        }
    };
    NbColumnsService.prototype.showColumn = function (column) {
        if (this.visibleColumns.includes(column)) {
            return;
        }
        this.visibleColumns.splice(this.findInsertIndex(column), 0, column);
        this.columnShow$.next();
    };
    NbColumnsService.prototype.onColumnsChange = function () {
        return (0, _rxjs.merge)(this.columnShow$, this.columnHide$);
    };
    NbColumnsService.prototype.findInsertIndex = function (column) {
        var initialIndex = this.allColumns.indexOf(column);
        if (initialIndex === 0 || !this.visibleColumns.length) {
            return 0;
        }
        if (initialIndex === this.allColumns.length - 1) {
            return this.visibleColumns.length;
        }
        var leftSiblingIndex = initialIndex - 1;
        for (var i = leftSiblingIndex; i >= 0; i--) {
            var leftSibling = this.allColumns[i];
            var index = this.visibleColumns.indexOf(leftSibling);
            if (index !== -1) {
                return index + 1;
            }
        }
        var rightSiblingIndex = initialIndex + 1;
        for (var i = rightSiblingIndex; i < this.allColumns.length; i++) {
            var rightSibling = this.allColumns[i];
            var index = this.visibleColumns.indexOf(rightSibling);
            if (index !== -1) {
                return index;
            }
        }
        throw new Error("Can't restore column position.");
    };
    NbColumnsService = __decorate([(0, _core.Injectable)(), __metadata("design:paramtypes", [_core.IterableDiffers])], NbColumnsService);
    return NbColumnsService;
}();
exports.NbColumnsService = NbColumnsService;
//# sourceMappingURL=tree-grid-columns.service.js.map
//# sourceMappingURL=tree-grid-columns.service.js.map