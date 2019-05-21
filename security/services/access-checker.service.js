"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbAccessChecker = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _role = require("./role.provider");

var _acl = require("./acl.service");

var _operators = require("rxjs/operators");

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
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Access checker service.
 *
 * Injects `NbRoleProvider` to determine current user role, and checks access permissions using `NbAclService`
 */
var NbAccessChecker = /** @class */function () {
    function NbAccessChecker(roleProvider, acl) {
        this.roleProvider = roleProvider;
        this.acl = acl;
    }
    /**
     * Checks whether access is granted or not
     *
     * @param {string} permission
     * @param {string} resource
     * @returns {Observable<boolean>}
     */
    NbAccessChecker.prototype.isGranted = function (permission, resource) {
        var _this = this;
        return this.roleProvider.getRole().pipe((0, _operators.map)(function (role) {
            return Array.isArray(role) ? role : [role];
        }), (0, _operators.map)(function (roles) {
            return roles.some(function (role) {
                return _this.acl.can(role, permission, resource);
            });
        }));
    };
    NbAccessChecker = __decorate([(0, _core.Injectable)(), __metadata("design:paramtypes", [_role.NbRoleProvider, _acl.NbAclService])], NbAccessChecker);
    return NbAccessChecker;
}();
exports.NbAccessChecker = NbAccessChecker;
//# sourceMappingURL=access-checker.service.js.map
//# sourceMappingURL=access-checker.service.js.map