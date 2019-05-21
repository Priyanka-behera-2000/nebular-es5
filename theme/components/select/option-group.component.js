"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbOptionGroupComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _operators = require("rxjs/operators");

var _helpers = require("../helpers");

var _option = require("./option.component");

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
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NbOptionGroupComponent = /** @class */function () {
    function NbOptionGroupComponent() {
        this.alive = true;
        this._disabled = false;
    }
    Object.defineProperty(NbOptionGroupComponent.prototype, "disabled", {
        get: function get() {
            return this._disabled;
        },
        set: function set(value) {
            this._disabled = (0, _helpers.convertToBoolProperty)(value);
            if (this.options) {
                this.updateOptionsDisabledState();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbOptionGroupComponent.prototype, "disabledAttribute", {
        get: function get() {
            return this.disabled ? '' : null;
        },
        enumerable: true,
        configurable: true
    });
    NbOptionGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.options.length) {
            this.asyncUpdateOptionsDisabledState();
        }
        this.options.changes.pipe((0, _operators.takeWhile)(function () {
            return _this.alive;
        })).subscribe(function () {
            return _this.asyncUpdateOptionsDisabledState();
        });
    };
    NbOptionGroupComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    /**
     * Sets disabled state for each option to current group disabled state.
     */
    NbOptionGroupComponent.prototype.updateOptionsDisabledState = function () {
        var _this = this;
        this.options.forEach(function (option) {
            return option.setDisabledByGroupState(_this.disabled);
        });
    };
    /**
     * Updates options disabled state after promise resolution.
     * This way change detection will be triggered after options state updated.
     * Use this method when updating options during change detection run (e.g. QueryList.changes, lifecycle hooks).
     */
    NbOptionGroupComponent.prototype.asyncUpdateOptionsDisabledState = function () {
        var _this = this;
        Promise.resolve().then(function () {
            return _this.updateOptionsDisabledState();
        });
    };
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbOptionGroupComponent.prototype, "title", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], NbOptionGroupComponent.prototype, "disabled", null);
    __decorate([(0, _core.HostBinding)('attr.disabled'), __metadata("design:type", String), __metadata("design:paramtypes", [])], NbOptionGroupComponent.prototype, "disabledAttribute", null);
    __decorate([(0, _core.ContentChildren)(_option.NbOptionComponent, { descendants: true }), __metadata("design:type", _core.QueryList)], NbOptionGroupComponent.prototype, "options", void 0);
    NbOptionGroupComponent = __decorate([(0, _core.Component)({
        selector: 'nb-option-group',
        styles: [":host{display:block}.option-group-title{display:block} "],
        changeDetection: _core.ChangeDetectionStrategy.OnPush,
        template: "\n    <span class=\"option-group-title\">{{ title }}</span>\n    <ng-content select=\"nb-option, ng-container\"></ng-content>\n  "
    })], NbOptionGroupComponent);
    return NbOptionGroupComponent;
}();
exports.NbOptionGroupComponent = NbOptionGroupComponent;
//# sourceMappingURL=option-group.component.js.map
//# sourceMappingURL=option-group.component.js.map