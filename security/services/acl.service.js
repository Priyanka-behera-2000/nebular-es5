"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ɵ2 = exports.ɵ1 = exports.ɵ0 = exports.NbAclService = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _security = require("../security.options");

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
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

var shallowObjectClone = function shallowObjectClone(o) {
    return Object.assign({}, o);
};
var ɵ0 = shallowObjectClone;
var shallowArrayClone = function shallowArrayClone(a) {
    return Object.assign([], a);
};
var ɵ1 = shallowArrayClone;
var popParent = function popParent(abilities) {
    var parent = abilities['parent'];
    delete abilities['parent'];
    return parent;
};
var ɵ2 = popParent;
/**
 * Common acl service.
 */
var NbAclService = /** @class */function () {
    function NbAclService(settings) {
        if (settings === void 0) {
            settings = {};
        }
        this.settings = settings;
        this.state = {};
        if (settings.accessControl) {
            this.setAccessControl(settings.accessControl);
        }
    }
    NbAclService_1 = NbAclService;
    /**
     * Set/Reset ACL list
     * @param {NbAccessControl} list
     */
    NbAclService.prototype.setAccessControl = function (list) {
        for (var _i = 0, _a = Object.entries(list); _i < _a.length; _i++) {
            var _b = _a[_i],
                role = _b[0],
                value = _b[1];
            var abilities = shallowObjectClone(value);
            var parent_1 = popParent(abilities);
            this.register(role, parent_1, abilities);
        }
    };
    /**
     * Register a new role with a list of abilities (permission/resources combinations)
     * @param {string} role
     * @param {string} parent
     * @param {[permission: string]: string|string[]} abilities
     */
    NbAclService.prototype.register = function (role, parent, abilities) {
        if (parent === void 0) {
            parent = null;
        }
        if (abilities === void 0) {
            abilities = {};
        }
        this.validateRole(role);
        this.state[role] = {
            parent: parent
        };
        for (var _i = 0, _a = Object.entries(abilities); _i < _a.length; _i++) {
            var _b = _a[_i],
                permission = _b[0],
                value = _b[1];
            var resources = typeof value === 'string' ? [value] : value;
            this.allow(role, permission, shallowArrayClone(resources));
        }
    };
    /**
     * Allow a permission for specific resources to a role
     * @param {string} role
     * @param {string} permission
     * @param {string | string[]} resource
     */
    NbAclService.prototype.allow = function (role, permission, resource) {
        this.validateRole(role);
        if (!this.getRole(role)) {
            this.register(role, null, {});
        }
        resource = typeof resource === 'string' ? [resource] : resource;
        var resources = shallowArrayClone(this.getRoleResources(role, permission));
        resources = resources.concat(resource);
        this.state[role][permission] = resources.filter(function (item, pos) {
            return resources.indexOf(item) === pos;
        });
    };
    /**
     * Check whether the role has a permission to a resource
     * @param {string} role
     * @param {string} permission
     * @param {string} resource
     * @returns {boolean}
     */
    NbAclService.prototype.can = function (role, permission, resource) {
        this.validateResource(resource);
        var parentRole = this.getRoleParent(role);
        var parentCan = parentRole && this.can(this.getRoleParent(role), permission, resource);
        return parentCan || this.exactCan(role, permission, resource);
    };
    NbAclService.prototype.getRole = function (role) {
        return this.state[role];
    };
    NbAclService.prototype.validateRole = function (role) {
        if (!role) {
            throw new Error('NbAclService: role name cannot be empty');
        }
    };
    NbAclService.prototype.validateResource = function (resource) {
        if (!resource || [NbAclService_1.ANY_RESOURCE].includes(resource)) {
            throw new Error("NbAclService: cannot use empty or bulk '*' resource placeholder with 'can' method");
        }
    };
    NbAclService.prototype.exactCan = function (role, permission, resource) {
        var resources = this.getRoleResources(role, permission);
        return resources.includes(resource) || resources.includes(NbAclService_1.ANY_RESOURCE);
    };
    NbAclService.prototype.getRoleResources = function (role, permission) {
        return this.getRoleAbilities(role)[permission] || [];
    };
    NbAclService.prototype.getRoleAbilities = function (role) {
        var abilities = shallowObjectClone(this.state[role] || {});
        popParent(shallowObjectClone(this.state[role] || {}));
        return abilities;
    };
    NbAclService.prototype.getRoleParent = function (role) {
        return this.state[role] ? this.state[role]['parent'] : null;
    };
    var NbAclService_1;
    NbAclService.ANY_RESOURCE = '*';
    NbAclService = NbAclService_1 = __decorate([(0, _core.Injectable)(), __param(0, (0, _core.Optional)()), __param(0, (0, _core.Inject)(_security.NB_SECURITY_OPTIONS_TOKEN)), __metadata("design:paramtypes", [Object])], NbAclService);
    return NbAclService;
}();
exports.NbAclService = NbAclService;
exports.ɵ0 = ɵ0;
exports.ɵ1 = ɵ1;
exports.ɵ2 = ɵ2;
//# sourceMappingURL=acl.service.js.map
//# sourceMappingURL=acl.service.js.map