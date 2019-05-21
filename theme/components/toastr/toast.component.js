"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbToastComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _model = require("./model");

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

/**
 * The `NbToastComponent` is responsible for rendering each toast with appropriate styles.
 *
 * @styles
 *
 * toastr-bg
 * toastr-padding
 * toastr-fg
 * toastr-border
 * toastr-border-radius
 * toastr-border-color
 * */
var NbToastComponent = /** @class */function () {
    function NbToastComponent() {
        this.destroy = new _core.EventEmitter();
    }
    Object.defineProperty(NbToastComponent.prototype, "success", {
        get: function get() {
            return this.toast.config.status === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "info", {
        get: function get() {
            return this.toast.config.status === 'info';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "warning", {
        get: function get() {
            return this.toast.config.status === 'warning';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "primary", {
        get: function get() {
            return this.toast.config.status === 'primary';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "danger", {
        get: function get() {
            return this.toast.config.status === 'danger';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "destroyByClick", {
        get: function get() {
            return this.toast.config.destroyByClick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "hasIcon", {
        get: function get() {
            return this.toast.config.hasIcon && !!this.toast.config.status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "customIcon", {
        get: function get() {
            return !!this.icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "icon", {
        get: function get() {
            return this.toast.config.icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbToastComponent.prototype, "iconPack", {
        get: function get() {
            return this.toast.config.iconPack;
        },
        enumerable: true,
        configurable: true
    });
    NbToastComponent.prototype.onClick = function () {
        this.destroy.emit();
    };
    __decorate([(0, _core.Input)(), __metadata("design:type", _model.NbToast)], NbToastComponent.prototype, "toast", void 0);
    __decorate([(0, _core.Output)(), __metadata("design:type", _core.EventEmitter)], NbToastComponent.prototype, "destroy", void 0);
    __decorate([(0, _core.HostBinding)('class.status-success'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbToastComponent.prototype, "success", null);
    __decorate([(0, _core.HostBinding)('class.status-info'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbToastComponent.prototype, "info", null);
    __decorate([(0, _core.HostBinding)('class.status-warning'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbToastComponent.prototype, "warning", null);
    __decorate([(0, _core.HostBinding)('class.status-primary'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbToastComponent.prototype, "primary", null);
    __decorate([(0, _core.HostBinding)('class.status-danger'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbToastComponent.prototype, "danger", null);
    __decorate([(0, _core.HostBinding)('class.destroy-by-click'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbToastComponent.prototype, "destroyByClick", null);
    __decorate([(0, _core.HostBinding)('class.has-icon'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbToastComponent.prototype, "hasIcon", null);
    __decorate([(0, _core.HostBinding)('class.custom-icon'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbToastComponent.prototype, "customIcon", null);
    __decorate([(0, _core.HostListener)('click'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], NbToastComponent.prototype, "onClick", null);
    NbToastComponent = __decorate([(0, _core.Component)({
        selector: 'nb-toast',
        styles: [":host{display:flex;align-items:center;width:25rem;margin:0.5rem}:host .title{font-weight:800;margin-right:0.25rem}:host>.content-container{line-height:1.25}:host>.content-container>.message{font-weight:300}:host.default .content-container,:host:not(.has-icon) .content-container{display:flex;flex-direction:row}:host.destroy-by-click{cursor:pointer}:host nb-icon{font-size:2.5rem}:host svg{width:2.5rem;height:2.5rem} "],
        template: "<div class=\"icon-container\" *ngIf=\"hasIcon && icon\"> <nb-icon [icon]=\"icon\" [pack]=\"iconPack\"></nb-icon> </div> <div class=\"content-container\"> <span class=\"title\">{{ toast.title }}</span> <div class=\"message\">{{ toast.message }}</div> </div> "
    })], NbToastComponent);
    return NbToastComponent;
}();
exports.NbToastComponent = NbToastComponent;
//# sourceMappingURL=toast.component.js.map
//# sourceMappingURL=toast.component.js.map