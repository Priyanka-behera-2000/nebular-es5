"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbChatFormComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _platformBrowser = require("@angular/platform-browser");

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
 * Chat form component.
 *
 * Show a message form with a send message button.
 *
 * ```ts
 * <nb-chat-form showButton="true" buttonIcon="nb-send">
 * </nb-chat-form>
 * ```
 *
 * When `[dropFiles]="true"` handles files drag&drop with a file preview.
 *
 * Drag & drop available for files and images:
 * @stacked-example(Drag & Drop Chat, chat/chat-drop.component)
 *
 * New message could be tracked outside by using `(send)` output.
 *
 * ```ts
 * <nb-chat-form (send)="onNewMessage($event)">
 * </nb-chat-form>
 *
 * // ...
 *
 * onNewMessage({ message: string, files: any[] }) {
 *   this.service.sendToServer(message, files);
 * }
 * ```
 */
var NbChatFormComponent = /** @class */function () {
    function NbChatFormComponent(cd, domSanitizer) {
        this.cd = cd;
        this.domSanitizer = domSanitizer;
        this.status = '';
        this.inputFocus = false;
        this.inputHover = false;
        this.droppedFiles = [];
        this.imgDropTypes = ['image/png', 'image/jpeg', 'image/gif'];
        /**
         * Predefined message text
         * @type {string}
         */
        this.message = '';
        /**
         * Send button title
         * @type {string}
         */
        this.buttonTitle = '';
        /**
         * Send button icon, shown if `buttonTitle` is empty
         * @type {string}
         */
        this.buttonIcon = 'paper-plane-outline';
        /**
         * Show send button
         * @type {boolean}
         */
        this.showButton = true;
        /**
         * Show send button
         * @type {boolean}
         */
        this.dropFiles = false;
        /**
         *
         * @type {EventEmitter<{ message: string, files: File[] }>}
         */
        this.send = new _core.EventEmitter();
        this.fileOver = false;
    }
    NbChatFormComponent.prototype.onDrop = function (event) {
        var _this = this;
        if (this.dropFiles) {
            event.preventDefault();
            event.stopPropagation();
            this.fileOver = false;
            if (event.dataTransfer && event.dataTransfer.files) {
                var _loop_1 = function _loop_1(file) {
                    var res = file;
                    if (this_1.imgDropTypes.includes(file.type)) {
                        var fr = new FileReader();
                        fr.onload = function (e) {
                            res.src = e.target.result;
                            res.urlStyle = _this.domSanitizer.bypassSecurityTrustStyle("url(" + res.src + ")");
                            _this.cd.detectChanges();
                        };
                        fr.readAsDataURL(file);
                    }
                    this_1.droppedFiles.push(res);
                };
                var this_1 = this;
                for (var _i = 0, _a = event.dataTransfer.files; _i < _a.length; _i++) {
                    var file = _a[_i];
                    _loop_1(file);
                }
            }
        }
    };
    NbChatFormComponent.prototype.removeFile = function (file) {
        var index = this.droppedFiles.indexOf(file);
        if (index >= 0) {
            this.droppedFiles.splice(index, 1);
        }
    };
    NbChatFormComponent.prototype.onDragOver = function () {
        if (this.dropFiles) {
            this.fileOver = true;
        }
    };
    NbChatFormComponent.prototype.onDragLeave = function () {
        if (this.dropFiles) {
            this.fileOver = false;
        }
    };
    NbChatFormComponent.prototype.sendMessage = function () {
        if (this.droppedFiles.length || String(this.message).trim().length) {
            this.send.emit({ message: this.message, files: this.droppedFiles });
            this.message = '';
            this.droppedFiles = [];
        }
    };
    NbChatFormComponent.prototype.setStatus = function (status) {
        if (this.status !== status) {
            this.status = status;
            this.cd.detectChanges();
        }
    };
    NbChatFormComponent.prototype.getInputStatus = function () {
        if (this.fileOver) {
            return this.status || 'primary';
        }
        if (this.inputFocus || this.inputHover) {
            return this.status;
        }
        return '';
    };
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbChatFormComponent.prototype, "message", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbChatFormComponent.prototype, "buttonTitle", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbChatFormComponent.prototype, "buttonIcon", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Boolean)], NbChatFormComponent.prototype, "showButton", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Boolean)], NbChatFormComponent.prototype, "dropFiles", void 0);
    __decorate([(0, _core.Output)(), __metadata("design:type", Object)], NbChatFormComponent.prototype, "send", void 0);
    __decorate([(0, _core.HostBinding)('class.file-over'), __metadata("design:type", Object)], NbChatFormComponent.prototype, "fileOver", void 0);
    __decorate([(0, _core.HostListener)('drop', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], NbChatFormComponent.prototype, "onDrop", null);
    __decorate([(0, _core.HostListener)('dragover'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], NbChatFormComponent.prototype, "onDragOver", null);
    __decorate([(0, _core.HostListener)('dragleave'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], NbChatFormComponent.prototype, "onDragLeave", null);
    NbChatFormComponent = __decorate([(0, _core.Component)({
        selector: 'nb-chat-form',
        template: "\n    <div class=\"dropped-files\" *ngIf=\"droppedFiles?.length\">\n      <ng-container *ngFor=\"let file of droppedFiles\">\n        <div *ngIf=\"file.urlStyle\" [style.background-image]=\"file.urlStyle\">\n          <span class=\"remove\" (click)=\"removeFile(file)\">&times;</span>\n        </div>\n\n        <div>\n          <nb-icon *ngIf=\"!file.urlStyle\" icon=\"file-text-outline\" pack=\"nebular-essentials\"></nb-icon>\n          <span class=\"remove\" (click)=\"removeFile(file)\">&times;</span>\n        </div>\n      </ng-container>\n    </div>\n    <div class=\"message-row\">\n      <input nbInput\n             [status]=\"getInputStatus()\"\n             (focus)=\"inputFocus = true\"\n             (blur)=\"inputFocus = false\"\n             (mouseenter)=\"inputHover = true\"\n             (mouseleave)=\"inputHover = false\"\n             [(ngModel)]=\"message\"\n             [class.with-button]=\"showButton\"\n             type=\"text\"\n             placeholder=\"{{ fileOver ? 'Drop file to send' : 'Type a message' }}\"\n             (keyup.enter)=\"sendMessage()\">\n      <button nbButton\n              [status]=\"status || 'primary'\"\n              *ngIf=\"showButton\"\n              [class.with-icon]=\"!buttonTitle\"\n              (click)=\"sendMessage()\"\n              class=\"send-button\">\n        {{ buttonTitle }}<nb-icon *ngIf=\"!buttonTitle\" [icon]=\"buttonIcon\" pack=\"nebular-essentials\"></nb-icon>\n      </button>\n    </div>\n  ",
        changeDetection: _core.ChangeDetectionStrategy.OnPush
    }), __metadata("design:paramtypes", [_core.ChangeDetectorRef, _platformBrowser.DomSanitizer])], NbChatFormComponent);
    return NbChatFormComponent;
}();
exports.NbChatFormComponent = NbChatFormComponent;
//# sourceMappingURL=chat-form.component.js.map
//# sourceMappingURL=chat-form.component.js.map