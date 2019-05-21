'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbWindowRef = undefined;

var _rxjs = require('rxjs');

var _window = require('./window.options');

/**
 * The `NbWindowRef` helps to manipulate window after it was created.
 * The window can be dismissed by using `close` method of the windowRef.
 * You can access rendered component as `componentRef` property of the windowRef.
 */
var NbWindowRef = /** @class */function () {
    function NbWindowRef(config) {
        this.config = config;
        this.stateChange$ = new _rxjs.ReplaySubject(1);
        this._closed = false;
        this.closed$ = new _rxjs.Subject();
        this.state = config.initialState;
    }
    Object.defineProperty(NbWindowRef.prototype, "state", {
        /**
         * Current window state.
         */
        get: function get() {
            return this.stateValue;
        },
        set: function set(newState) {
            if (newState && this.stateValue !== newState) {
                this.prevStateValue = this.state;
                this.stateValue = newState;
                this.stateChange$.next({ oldState: this.prevStateValue, newState: newState });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbWindowRef.prototype, "stateChange", {
        /**
         * Emits when window state change.
         */
        get: function get() {
            return this.stateChange$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbWindowRef.prototype, "onClose", {
        /**
         * Emits when window was closed.
         */
        get: function get() {
            return this.closed$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Minimize window.
     */
    NbWindowRef.prototype.minimize = function () {
        this.state = _window.NbWindowState.MINIMIZED;
    };
    /**
     * Maximize window.
     */
    NbWindowRef.prototype.maximize = function () {
        this.state = _window.NbWindowState.MAXIMIZED;
    };
    /**
     * Set window on top.
     */
    NbWindowRef.prototype.fullScreen = function () {
        this.state = _window.NbWindowState.FULL_SCREEN;
    };
    NbWindowRef.prototype.toPreviousState = function () {
        this.state = this.prevStateValue;
    };
    /**
     * Closes window.
     * */
    NbWindowRef.prototype.close = function () {
        if (this._closed) {
            return;
        }
        this._closed = true;
        this.componentRef.destroy();
        this.stateChange$.complete();
        this.closed$.next();
        this.closed$.complete();
    };
    return NbWindowRef;
}();
exports.NbWindowRef = NbWindowRef;
//# sourceMappingURL=window-ref.js.map
//# sourceMappingURL=window-ref.js.map