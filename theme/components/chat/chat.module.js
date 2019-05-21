"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbChatModule = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _shared = require("../shared/shared.module");

var _button = require("../button/button.module");

var _input = require("../input/input.module");

var _icon = require("../icon/icon.module");

var _chat = require("./chat.component");

var _chatMessage = require("./chat-message.component");

var _chatForm = require("./chat-form.component");

var _chatMessageText = require("./chat-message-text.component");

var _chatMessageFile = require("./chat-message-file.component");

var _chatMessageQuote = require("./chat-message-quote.component");

var _chatMessageMap = require("./chat-message-map.component");

var _chat2 = require("./chat.options");

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

var NB_CHAT_COMPONENTS = [_chat.NbChatComponent, _chatMessage.NbChatMessageComponent, _chatForm.NbChatFormComponent, _chatMessageText.NbChatMessageTextComponent, _chatMessageFile.NbChatMessageFileComponent, _chatMessageQuote.NbChatMessageQuoteComponent, _chatMessageMap.NbChatMessageMapComponent];
var NbChatModule = /** @class */function () {
    function NbChatModule() {}
    NbChatModule_1 = NbChatModule;
    NbChatModule.forRoot = function (options) {
        return {
            ngModule: NbChatModule_1,
            providers: [{ provide: _chat2.NbChatOptions, useValue: options || {} }]
        };
    };
    NbChatModule.forChild = function (options) {
        return {
            ngModule: NbChatModule_1,
            providers: [{ provide: _chat2.NbChatOptions, useValue: options || {} }]
        };
    };
    var NbChatModule_1;
    NbChatModule = NbChatModule_1 = __decorate([(0, _core.NgModule)({
        imports: [_shared.NbSharedModule, _icon.NbIconModule, _input.NbInputModule, _button.NbButtonModule],
        declarations: NB_CHAT_COMPONENTS.slice(),
        exports: NB_CHAT_COMPONENTS.slice()
    })], NbChatModule);
    return NbChatModule;
}();
exports.NbChatModule = NbChatModule;
//# sourceMappingURL=chat.module.js.map
//# sourceMappingURL=chat.module.js.map