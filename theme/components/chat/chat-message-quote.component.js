"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbChatMessageQuoteComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

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
 * Chat message component.
 */
var NbChatMessageQuoteComponent = /** @class */function () {
    function NbChatMessageQuoteComponent() {}
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbChatMessageQuoteComponent.prototype, "message", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbChatMessageQuoteComponent.prototype, "sender", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Date)], NbChatMessageQuoteComponent.prototype, "date", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbChatMessageQuoteComponent.prototype, "quote", void 0);
    NbChatMessageQuoteComponent = __decorate([(0, _core.Component)({
        selector: 'nb-chat-message-quote',
        template: "\n    <p class=\"sender\" *ngIf=\"sender || date\">{{ sender }} <time>{{ date  | date:'shortTime' }}</time></p>\n    <p class=\"quote\">\n      {{ quote }}\n    </p>\n    <nb-chat-message-text [message]=\"message\">\n      {{ message }}\n    </nb-chat-message-text>\n  ",
        changeDetection: _core.ChangeDetectionStrategy.OnPush
    })], NbChatMessageQuoteComponent);
    return NbChatMessageQuoteComponent;
}();
exports.NbChatMessageQuoteComponent = NbChatMessageQuoteComponent;
//# sourceMappingURL=chat-message-quote.component.js.map
//# sourceMappingURL=chat-message-quote.component.js.map