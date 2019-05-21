"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbIsGrantedDirective = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _operators = require("rxjs/operators");

var _accessChecker = require("../services/access-checker.service");

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

var NbIsGrantedDirective = /** @class */function () {
    function NbIsGrantedDirective(templateRef, viewContainer, accessChecker) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.accessChecker = accessChecker;
        this.alive = true;
        this.hasView = false;
    }
    Object.defineProperty(NbIsGrantedDirective.prototype, "nbIsGranted", {
        set: function set(_a) {
            var _this = this;
            var permission = _a[0],
                resource = _a[1];
            this.accessChecker.isGranted(permission, resource).pipe((0, _operators.takeWhile)(function () {
                return _this.alive;
            })).subscribe(function (can) {
                if (can && !_this.hasView) {
                    _this.viewContainer.createEmbeddedView(_this.templateRef);
                    _this.hasView = true;
                } else if (!can && _this.hasView) {
                    _this.viewContainer.clear();
                    _this.hasView = false;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    NbIsGrantedDirective.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    __decorate([(0, _core.Input)(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], NbIsGrantedDirective.prototype, "nbIsGranted", null);
    NbIsGrantedDirective = __decorate([(0, _core.Directive)({ selector: '[nbIsGranted]' }), __metadata("design:paramtypes", [_core.TemplateRef, _core.ViewContainerRef, _accessChecker.NbAccessChecker])], NbIsGrantedDirective);
    return NbIsGrantedDirective;
}();
exports.NbIsGrantedDirective = NbIsGrantedDirective;
//# sourceMappingURL=is-granted.directive.js.map
//# sourceMappingURL=is-granted.directive.js.map