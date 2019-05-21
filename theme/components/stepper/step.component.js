"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbStepComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _forms = require("@angular/forms");

var _stepperTokens = require("./stepper-tokens");

var _helpers = require("../helpers");

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

/**
 * Component intended to be used within  the `<nb-stepper>` component.
 * Container for a step
 */
var NbStepComponent = /** @class */function () {
    function NbStepComponent(stepper) {
        this._completed = false;
        this.interacted = false;
        this.stepper = stepper;
    }
    Object.defineProperty(NbStepComponent.prototype, "isLabelTemplate", {
        /**
         * Check that label is a TemplateRef.
         *
         * @return boolean
         * */
        get: function get() {
            return this.label instanceof _core.TemplateRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbStepComponent.prototype, "completed", {
        /**
         * Whether step is marked as completed.
         *
         * @type {boolean}
         */
        get: function get() {
            return this._completed || this.isCompleted;
        },
        set: function set(value) {
            this._completed = (0, _helpers.convertToBoolProperty)(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbStepComponent.prototype, "isCompleted", {
        get: function get() {
            return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Mark step as selected
     * */
    NbStepComponent.prototype.select = function () {
        this.stepper.selected = this;
    };
    /**
     * Reset step and stepControl state
     * */
    NbStepComponent.prototype.reset = function () {
        this.interacted = false;
        if (this.stepControl) {
            this.stepControl.reset();
        }
    };
    __decorate([(0, _core.ViewChild)(_core.TemplateRef), __metadata("design:type", _core.TemplateRef)], NbStepComponent.prototype, "content", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", _forms.AbstractControl)], NbStepComponent.prototype, "stepControl", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbStepComponent.prototype, "label", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Boolean)], NbStepComponent.prototype, "hidden", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], NbStepComponent.prototype, "completed", null);
    NbStepComponent = __decorate([(0, _core.Component)({
        selector: 'nb-step',
        template: "\n    <ng-template>\n      <ng-content></ng-content>\n    </ng-template>\n  "
    }), __param(0, (0, _core.Inject)(_stepperTokens.NB_STEPPER)), __metadata("design:paramtypes", [Object])], NbStepComponent);
    return NbStepComponent;
}();
exports.NbStepComponent = NbStepComponent;
//# sourceMappingURL=step.component.js.map
//# sourceMappingURL=step.component.js.map