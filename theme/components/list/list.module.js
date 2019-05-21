"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbListModule = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _list = require("./list.component");

var _listPageTracker = require("./list-page-tracker.directive");

var _infiniteList = require("./infinite-list.directive");

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var components = [_list.NbListComponent, _list.NbListItemComponent, _listPageTracker.NbListPageTrackerDirective, _infiniteList.NbInfiniteListDirective];
var NbListModule = /** @class */function () {
    function NbListModule() {}
    NbListModule = __decorate([(0, _core.NgModule)({
        declarations: components,
        exports: components
    })], NbListModule);
    return NbListModule;
}();
exports.NbListModule = NbListModule;
//# sourceMappingURL=list.module.js.map
//# sourceMappingURL=list.module.js.map