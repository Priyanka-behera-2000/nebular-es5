"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var batch = exports.batch = function batch(target, batchSize, offset) {
    if (offset === void 0) {
        offset = 0;
    }
    return target.reduce(function (res, item, index) {
        var chunkIndex = Math.floor((index + offset) / batchSize);
        if (!res[chunkIndex]) {
            res[chunkIndex] = [];
        }
        res[chunkIndex].push(item);
        return res;
    }, []);
};
/**
 * returns array with numbers from zero to bound.
 * */
var range = exports.range = function range(bound, producer) {
    if (producer === void 0) {
        producer = function producer(i) {
            return i;
        };
    }
    var arr = [];
    for (var i = 0; i < bound; i++) {
        arr.push(producer(i));
    }
    return arr;
};
//# sourceMappingURL=helpers.js.map
//# sourceMappingURL=helpers.js.map