"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbFilterInputDirective = exports.NbFilterDirective = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

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

var NbFilterDirective = /** @class */function () {
    function NbFilterDirective() {}
    NbFilterDirective.prototype.filter = function (filterRequest) {
        this.filterable.filter(filterRequest);
    };
    __decorate([(0, _core.Input)('nbFilter'), __metadata("design:type", Object)], NbFilterDirective.prototype, "filterable", void 0);
    NbFilterDirective = __decorate([(0, _core.Directive)({ selector: '[nbFilter]' })], NbFilterDirective);
    return NbFilterDirective;
}();
exports.NbFilterDirective = NbFilterDirective;
/**
 * Helper directive to trigger data source's filter method when user types in input
 */

var NbFilterInputDirective = /** @class */function (_super) {
    __extends(NbFilterInputDirective, _super);
    function NbFilterInputDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.search$ = new _rxjs.Subject();
        _this.alive = true;
        /**
         * Debounce time before triggering filter method. Set in milliseconds.
         * Default 200.
         */
        _this.debounceTime = 200;
        return _this;
    }
    NbFilterInputDirective_1 = NbFilterInputDirective;
    NbFilterInputDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.search$.pipe((0, _operators.takeWhile)(function () {
            return _this.alive;
        }), (0, _operators.debounceTime)(this.debounceTime)).subscribe(function (query) {
            _super.prototype.filter.call(_this, query);
        });
    };
    NbFilterInputDirective.prototype.ngOnDestroy = function () {
        this.alive = false;
        this.search$.complete();
    };
    NbFilterInputDirective.prototype.filter = function (event) {
        this.search$.next(event.target.value);
    };
    var NbFilterInputDirective_1;
    __decorate([(0, _core.Input)('nbFilterInput'), __metadata("design:type", Object)], NbFilterInputDirective.prototype, "filterable", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Number)], NbFilterInputDirective.prototype, "debounceTime", void 0);
    __decorate([(0, _core.HostListener)('input', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], NbFilterInputDirective.prototype, "filter", null);
    NbFilterInputDirective = NbFilterInputDirective_1 = __decorate([(0, _core.Directive)({
        selector: '[nbFilterInput]',
        providers: [{ provide: NbFilterDirective, useExisting: NbFilterInputDirective_1 }]
    })], NbFilterInputDirective);
    return NbFilterInputDirective;
}(NbFilterDirective);
exports.NbFilterInputDirective = NbFilterInputDirective;
//# sourceMappingURL=tree-grid-filter.js.map
//# sourceMappingURL=tree-grid-filter.js.map