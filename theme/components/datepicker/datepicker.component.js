"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbRangepickerComponent = exports.NbDatepickerComponent = exports.NbBasePicker = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _operators = require("rxjs/operators");

var _rxjs = require("rxjs");

var _cdk = require("../cdk");

var _datepickerContainer = require("./datepicker-container.component");

var _theme = require("../../theme.options");

var _calendarRange = require("../calendar/calendar-range.component");

var _calendar = require("../calendar/calendar.component");

var _calendarKit = require("../calendar-kit");

var _datepicker = require("./datepicker.directive");

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
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};

/**
 * The `NbBasePicker` component concentrates overlay manipulation logic.
 * */
var NbBasePicker = /** @class */function (_super) {
    __extends(NbBasePicker, _super);
    function NbBasePicker(document, positionBuilder, triggerStrategyBuilder, overlay, cfr, dateService, dateServiceOptions) {
        var _this = _super.call(this) || this;
        _this.document = document;
        _this.positionBuilder = positionBuilder;
        _this.triggerStrategyBuilder = triggerStrategyBuilder;
        _this.overlay = overlay;
        _this.cfr = cfr;
        _this.dateService = dateService;
        _this.dateServiceOptions = dateServiceOptions;
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        _this.boundingMonth = true;
        /**
         * Defines starting view for calendar.
         * */
        _this.startView = _calendarKit.NbCalendarViewMode.DATE;
        /**
         * Size of the calendar and entire components.
         * Can be 'medium' which is default or 'large'.
         * */
        _this.size = _calendarKit.NbCalendarSize.MEDIUM;
        /**
         * Hide picker when a date or a range is selected, `true` by default
         * @type {boolean}
         */
        _this.hideOnSelect = true;
        _this.init$ = new _rxjs.ReplaySubject();
        /**
         * Stream of picker changes. Required to be the subject because picker hides and shows and picker
         * change stream becomes recreated.
         * */
        _this.onChange$ = new _rxjs.Subject();
        _this.alive = true;
        _this.blur$ = new _rxjs.Subject();
        return _this;
    }
    Object.defineProperty(NbBasePicker.prototype, "picker", {
        /**
         * Returns picker instance.
         * */
        get: function get() {
            return this.pickerRef && this.pickerRef.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBasePicker.prototype, "valueChange", {
        /**
         * Stream of picker value changes.
         * */
        get: function get() {
            return this.onChange$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBasePicker.prototype, "isShown", {
        get: function get() {
            return this.ref && this.ref.hasAttached();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBasePicker.prototype, "init", {
        get: function get() {
            return this.init$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBasePicker.prototype, "blur", {
        /**
         * Emits when datepicker looses focus.
         */
        get: function get() {
            return this.blur$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    NbBasePicker.prototype.ngOnInit = function () {
        this.checkFormat();
    };
    NbBasePicker.prototype.ngOnChanges = function (changes) {
        if (changes.format && !changes.format.isFirstChange()) {
            this.checkFormat();
        }
    };
    NbBasePicker.prototype.ngAfterViewInit = function () {
        this.init$.next();
    };
    NbBasePicker.prototype.ngOnDestroy = function () {
        this.alive = false;
        this.hide();
        this.init$.complete();
        if (this.ref) {
            this.ref.dispose();
        }
        this.triggerStrategy.destroy();
    };
    /**
     * Datepicker knows nothing about host html input element.
     * So, attach method attaches datepicker to the host input element.
     * */
    NbBasePicker.prototype.attach = function (hostRef) {
        this.hostRef = hostRef;
        this.subscribeOnTriggers();
    };
    NbBasePicker.prototype.getValidatorConfig = function () {
        return { min: this.min, max: this.max, filter: this.filter };
    };
    NbBasePicker.prototype.show = function () {
        if (!this.ref) {
            this.createOverlay();
        }
        this.openDatepicker();
    };
    NbBasePicker.prototype.shouldHide = function () {
        return this.hideOnSelect && !!this.value;
    };
    NbBasePicker.prototype.hide = function () {
        if (this.ref) {
            this.ref.detach();
        }
        // save current value if picker was rendered
        if (this.picker) {
            this.queue = this.value;
            this.pickerRef.destroy();
            this.pickerRef = null;
            this.container = null;
        }
    };
    NbBasePicker.prototype.createOverlay = function () {
        this.positionStrategy = this.createPositionStrategy();
        this.ref = this.overlay.create({
            positionStrategy: this.positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
        this.subscribeOnPositionChange();
    };
    NbBasePicker.prototype.openDatepicker = function () {
        this.container = this.ref.attach(new _cdk.NbComponentPortal(_datepickerContainer.NbDatepickerContainerComponent, null, null, this.cfr));
        this.instantiatePicker();
        this.subscribeOnValueChange();
        this.writeQueue();
        this.patchWithInputs();
    };
    NbBasePicker.prototype.createPositionStrategy = function () {
        return this.positionBuilder.connectedTo(this.hostRef).position(_cdk.NbPosition.BOTTOM).adjustment(_cdk.NbAdjustment.COUNTERCLOCKWISE);
    };
    NbBasePicker.prototype.subscribeOnPositionChange = function () {
        var _this = this;
        this.positionStrategy.positionChange.pipe((0, _operators.takeWhile)(function () {
            return _this.alive;
        })).subscribe(function (position) {
            return (0, _cdk.patch)(_this.container, { position: position });
        });
    };
    NbBasePicker.prototype.createTriggerStrategy = function () {
        var _this = this;
        return this.triggerStrategyBuilder.trigger(_cdk.NbTrigger.FOCUS).host(this.hostRef.nativeElement).container(function () {
            return _this.container;
        }).build();
    };
    NbBasePicker.prototype.subscribeOnTriggers = function () {
        var _this = this;
        this.triggerStrategy = this.createTriggerStrategy();
        this.triggerStrategy.show$.subscribe(function () {
            return _this.show();
        });
        this.triggerStrategy.hide$.subscribe(function () {
            _this.blur$.next();
            _this.hide();
        });
    };
    NbBasePicker.prototype.instantiatePicker = function () {
        this.pickerRef = this.container.instance.attach(new _cdk.NbComponentPortal(this.pickerClass, null, null, this.cfr));
    };
    /**
     * Subscribes on picker value changes and emit data through this.onChange$ subject.
     * */
    NbBasePicker.prototype.subscribeOnValueChange = function () {
        var _this = this;
        this.pickerValueChange.subscribe(function (date) {
            _this.onChange$.next(date);
        });
    };
    NbBasePicker.prototype.patchWithInputs = function () {
        this.picker.boundingMonth = this.boundingMonth;
        this.picker.startView = this.startView;
        this.picker.min = this.min;
        this.picker.max = this.max;
        this.picker.filter = this.filter;
        this.picker._cellComponent = this.dayCellComponent;
        this.picker.monthCellComponent = this.monthCellComponent;
        this.picker._yearCellComponent = this.yearCellComponent;
        this.picker.size = this.size;
        this.picker.visibleDate = this.visibleDate;
    };
    NbBasePicker.prototype.checkFormat = function () {
        if (this.dateService.getId() === 'native' && this.format) {
            throw new Error('Can\'t format native date. To use custom formatting you have to install @nebular/moment or ' + '@nebular/date-fns package and import NbMomentDateModule or NbDateFnsDateModule accordingly.' + 'More information at "Formatting issue" ' + 'https://akveo.github.io/nebular/docs/components/datepicker/overview#nbdatepickercomponent');
        }
        var isFormatSet = this.format || this.dateServiceOptions && this.dateServiceOptions.format;
        if (this.dateService.getId() === 'date-fns' && !isFormatSet) {
            throw new Error('format is required when using NbDateFnsDateModule');
        }
    };
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbBasePicker.prototype, "format", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Boolean)], NbBasePicker.prototype, "boundingMonth", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbBasePicker.prototype, "startView", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbBasePicker.prototype, "min", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbBasePicker.prototype, "max", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Function)], NbBasePicker.prototype, "filter", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", _core.Type)], NbBasePicker.prototype, "dayCellComponent", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", _core.Type)], NbBasePicker.prototype, "monthCellComponent", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", _core.Type)], NbBasePicker.prototype, "yearCellComponent", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbBasePicker.prototype, "size", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbBasePicker.prototype, "visibleDate", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Boolean)], NbBasePicker.prototype, "hideOnSelect", void 0);
    NbBasePicker = __decorate([__param(0, (0, _core.Inject)(_theme.NB_DOCUMENT)), __param(6, (0, _core.Optional)()), __param(6, (0, _core.Inject)(_datepicker.NB_DATE_SERVICE_OPTIONS)), __metadata("design:paramtypes", [Object, _cdk.NbPositionBuilderService, _cdk.NbTriggerStrategyBuilderService, _cdk.NbOverlayService, _core.ComponentFactoryResolver, _calendarKit.NbDateService, Object])], NbBasePicker);
    return NbBasePicker;
}(_datepicker.NbDatepicker);
exports.NbBasePicker = NbBasePicker;
/**
 * The DatePicker components itself.
 * Provides a proxy to `NbCalendar` options as well as custom picker options.
 */

var NbDatepickerComponent = /** @class */function (_super) {
    __extends(NbDatepickerComponent, _super);
    function NbDatepickerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pickerClass = _calendar.NbCalendarComponent;
        return _this;
    }
    Object.defineProperty(NbDatepickerComponent.prototype, "date", {
        /**
         * Date which will be rendered as selected.
         * */
        set: function set(date) {
            this.value = date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbDatepickerComponent.prototype, "dateChange", {
        /**
         * Emits date when selected.
         * */
        get: function get() {
            return this.valueChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbDatepickerComponent.prototype, "value", {
        get: function get() {
            return this.picker ? this.picker.date : undefined;
        },
        set: function set(date) {
            if (!this.picker) {
                this.queue = date;
                return;
            }
            if (date) {
                this.visibleDate = date;
                this.picker.visibleDate = date;
                this.picker.date = date;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbDatepickerComponent.prototype, "pickerValueChange", {
        get: function get() {
            return this.picker.dateChange;
        },
        enumerable: true,
        configurable: true
    });
    NbDatepickerComponent.prototype.writeQueue = function () {
        if (this.queue) {
            var date = this.queue;
            this.queue = null;
            this.value = date;
        }
    };
    __decorate([(0, _core.Input)(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], NbDatepickerComponent.prototype, "date", null);
    __decorate([(0, _core.Output)(), __metadata("design:type", _core.EventEmitter), __metadata("design:paramtypes", [])], NbDatepickerComponent.prototype, "dateChange", null);
    NbDatepickerComponent = __decorate([(0, _core.Component)({
        selector: 'nb-datepicker',
        template: ''
    })], NbDatepickerComponent);
    return NbDatepickerComponent;
}(NbBasePicker);
exports.NbDatepickerComponent = NbDatepickerComponent;
/**
 * The RangeDatePicker components itself.
 * Provides a proxy to `NbCalendarRange` options as well as custom picker options.
 */

var NbRangepickerComponent = /** @class */function (_super) {
    __extends(NbRangepickerComponent, _super);
    function NbRangepickerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pickerClass = _calendarRange.NbCalendarRangeComponent;
        return _this;
    }
    Object.defineProperty(NbRangepickerComponent.prototype, "range", {
        /**
         * Range which will be rendered as selected.
         * */
        set: function set(range) {
            this.value = range;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbRangepickerComponent.prototype, "rangeChange", {
        /**
         * Emits range when start selected and emits again when end selected.
         * */
        get: function get() {
            return this.valueChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbRangepickerComponent.prototype, "value", {
        get: function get() {
            return this.picker ? this.picker.range : undefined;
        },
        set: function set(range) {
            if (!this.picker) {
                this.queue = range;
                return;
            }
            if (range) {
                var visibleDate = range && range.start;
                this.visibleDate = visibleDate;
                this.picker.visibleDate = visibleDate;
                this.picker.range = range;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbRangepickerComponent.prototype, "pickerValueChange", {
        get: function get() {
            return this.picker.rangeChange;
        },
        enumerable: true,
        configurable: true
    });
    NbRangepickerComponent.prototype.shouldHide = function () {
        return _super.prototype.shouldHide.call(this) && !!(this.value && this.value.start && this.value.end);
    };
    NbRangepickerComponent.prototype.writeQueue = function () {
        if (this.queue) {
            var range = this.queue;
            this.queue = null;
            this.value = range;
        }
    };
    __decorate([(0, _core.Input)(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], NbRangepickerComponent.prototype, "range", null);
    __decorate([(0, _core.Output)(), __metadata("design:type", _core.EventEmitter), __metadata("design:paramtypes", [])], NbRangepickerComponent.prototype, "rangeChange", null);
    NbRangepickerComponent = __decorate([(0, _core.Component)({
        selector: 'nb-rangepicker',
        template: ''
    })], NbRangepickerComponent);
    return NbRangepickerComponent;
}(NbBasePicker);
exports.NbRangepickerComponent = NbRangepickerComponent;
//# sourceMappingURL=datepicker.component.js.map
//# sourceMappingURL=datepicker.component.js.map