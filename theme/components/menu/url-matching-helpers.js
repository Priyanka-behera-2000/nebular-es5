'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isUrlPathEqual = isUrlPathEqual;
exports.isUrlPathContain = isUrlPathContain;
exports.getPathPartOfUrl = getPathPartOfUrl;
exports.getFragmentPartOfUrl = getFragmentPartOfUrl;
exports.isFragmentEqual = isFragmentEqual;
exports.isFragmentContain = isFragmentContain;
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
function isUrlPathEqual(path, link) {
    var locationPath = getPathPartOfUrl(path);
    return link === locationPath;
}
function isUrlPathContain(path, link) {
    var locationPath = getPathPartOfUrl(path);
    var endOfUrlSegmentRegExp = /\/|^$/;
    return locationPath.startsWith(link) && locationPath.slice(link.length).charAt(0).search(endOfUrlSegmentRegExp) !== -1;
}
function getPathPartOfUrl(url) {
    return url.match(/.*?(?=[?;#]|$)/)[0];
}
function getFragmentPartOfUrl(url) {
    var matched = url.match(/#(.+)/);
    return matched ? matched[1] : '';
}
function isFragmentEqual(path, fragment) {
    return getFragmentPartOfUrl(path) === fragment;
}
function isFragmentContain(path, fragment) {
    return getFragmentPartOfUrl(path).includes(fragment);
}
//# sourceMappingURL=url-matching-helpers.js.map
//# sourceMappingURL=url-matching-helpers.js.map