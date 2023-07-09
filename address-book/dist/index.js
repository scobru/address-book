"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var _a;
exports.__esModule = true;
exports.fetchAddressBookByChainId = exports.addressBook = void 0;
var polygon_1 = require("./polygon");
var chainid_1 = require("../types/chainid");
__exportStar(require("../types/chainid"), exports);
var _addressBook = {
    polygon: polygon_1.polygon
};
var _addressBookByChainId = (_a = {},
    _a[chainid_1.ChainId.polygon] = polygon_1.polygon,
    _a);
exports.addressBook = _addressBook;
exports.fetchAddressBookByChainId = _addressBookByChainId;
