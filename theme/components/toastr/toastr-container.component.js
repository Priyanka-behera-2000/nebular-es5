"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbToastrContainerComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _animations = require("@angular/animations");

var _toast = require("./toast.component");

var _direction = require("../../services/direction.service");

var _cdk = require("../cdk");

var _operators = require("rxjs/operators");

/**
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
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var voidState = (0, _animations.style)({
    transform: 'translateX({{ direction }}110%)',
    height: 0,
    marginLeft: '0',
    marginRight: '0',
    marginTop: '0',
    marginBottom: '0'
});
var defaultOptions = { params: { direction: '' } };
var NbToastrContainerComponent = /** @class */function () {
    function NbToastrContainerComponent(layoutDirection, positionHelper) {
        this.layoutDirection = layoutDirection;
        this.positionHelper = positionHelper;
        this.content = [];
        this.alive = true;
    }
    NbToastrContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutDirection.onDirectionChange().pipe((0, _operators.takeWhile)(function () {
            return _this.alive;
        })).subscribe(function () {
            return _this.onDirectionChange();
        });
    };
    NbToastrContainerComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbToastrContainerComponent.prototype.onDirectionChange = function () {
        var direction = this.positionHelper.isRightPosition(this.position) ? '' : '-';
        this.fadeIn = { value: '', params: { direction: direction } };
    };
    __decorate([(0, _core.Input)(), __metadata("design:type", Array)], NbToastrContainerComponent.prototype, "content", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbToastrContainerComponent.prototype, "context", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbToastrContainerComponent.prototype, "position", void 0);
    __decorate([(0, _core.ViewChildren)(_toast.NbToastComponent), __metadata("design:type", _core.QueryList)], NbToastrContainerComponent.prototype, "toasts", void 0);
    NbToastrContainerComponent = __decorate([(0, _core.Component)({
        selector: 'nb-toastr-container',
        template: "\n    <nb-toast [@fadeIn]=\"fadeIn\" *ngFor=\"let toast of content\" [toast]=\"toast\"></nb-toast>",
        animations: [(0, _animations.trigger)('fadeIn', [(0, _animations.transition)(':enter', [voidState, (0, _animations.animate)(100)], defaultOptions), (0, _animations.transition)(':leave', [(0, _animations.animate)(100, voidState)], defaultOptions)])]
    }), __metadata("design:paramtypes", [_direction.NbLayoutDirectionService, _cdk.NbPositionHelper])], NbToastrContainerComponent);
    return NbToastrContainerComponent;
}();
exports.NbToastrContainerComponent = NbToastrContainerComponent;
//# sourceMappingURL=toastr-container.component.js.map
//# sourceMappingURL=toastr-container.component.js.map