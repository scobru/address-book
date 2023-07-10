"use strict";
exports.__esModule = true;
exports.validateAllAddressesChecksum = void 0;
var address_book_1 = require("../address-book");
var ethereumjs_util_1 = require("ethereumjs-util");
var process_1 = require("process");
exports.validateAllAddressesChecksum = function () {
    var invalidPlatformAddressList = [];
    var invalidTokenAddressList = [];
    var chains = Object.entries(address_book_1.addressBook);
    for (var _i = 0, chains_1 = chains; _i < chains_1.length; _i++) {
        var chain = chains_1[_i];
        var chainName = chain[0];
        var _a = chain[1], platforms = _a.platforms, tokens = _a.tokens;
        var platformEntries = Object.entries(platforms);
        // validate platforms
        for (var _b = 0, platformEntries_1 = platformEntries; _b < platformEntries_1.length; _b++) {
            var platform = platformEntries_1[_b];
            var platformName = platform[0];
            var addresses = platform[1];
            for (var _c = 0, _d = Object.entries(addresses); _c < _d.length; _c++) {
                var addressEntry = _d[_c];
                var addressName = addressEntry[0];
                var address = addressEntry[1];
                var isValid = ethereumjs_util_1.isValidChecksumAddress(address);
                var correctAddress = address ? ethereumjs_util_1.toChecksumAddress(address) : "";
                if (!isValid) {
                    invalidPlatformAddressList.push({
                        chainName: chainName,
                        platformName: platformName,
                        address: address,
                        addressName: addressName,
                        correctAddress: correctAddress
                    });
                }
            }
        }
        var tokenInfoEntries = Object.entries(tokens);
        // validate token addresses
        for (var _e = 0, tokenInfoEntries_1 = tokenInfoEntries; _e < tokenInfoEntries_1.length; _e++) {
            var tokenInfoEntry = tokenInfoEntries_1[_e];
            var tokenName = tokenInfoEntry[0];
            var tokenInfo = tokenInfoEntry[1];
            var address = tokenInfo.address;
            var isValid = ethereumjs_util_1.isValidChecksumAddress(address);
            var correctAddress = address ? ethereumjs_util_1.toChecksumAddress(address) : "";
            if (!isValid) {
                invalidTokenAddressList.push({
                    chainName: chainName,
                    addressName: tokenName,
                    address: address,
                    correctAddress: correctAddress
                });
            }
        }
    }
    return [invalidPlatformAddressList, invalidTokenAddressList];
};
var _a = exports.validateAllAddressesChecksum(), invalidPlatformAddressList = _a[0], invalidTokenAddressList = _a[1];
var fail = false;
if (invalidPlatformAddressList.length > 0) {
    for (var _i = 0, invalidPlatformAddressList_1 = invalidPlatformAddressList; _i < invalidPlatformAddressList_1.length; _i++) {
        var invalid = invalidPlatformAddressList_1[_i];
        var chainName = invalid.chainName, platformName = invalid.platformName, address = invalid.address, addressName = invalid.addressName, correctAddress = invalid.correctAddress;
        if (!invalid.address) {
            // (it's a placeholder)
            console.log("Address '" + addressName + "' on platform '" + platformName + "' on chain '" + chainName + "' is missing");
        }
        else {
            console.log("Address '" + addressName + "' on platform '" + platformName + "' on chain '" + chainName + "' does not pass checksum. Incorrect Address: '" + address + "'");
            console.log("The correct address should be '" + correctAddress + "'");
        }
    }
    fail = true;
}
if (invalidTokenAddressList.length > 0) {
    for (var _b = 0, invalidTokenAddressList_1 = invalidTokenAddressList; _b < invalidTokenAddressList_1.length; _b++) {
        var invalid = invalidTokenAddressList_1[_b];
        var chainName = invalid.chainName, address = invalid.address, addressName = invalid.addressName, correctAddress = invalid.correctAddress;
        if (!invalid.address) {
            // (it's a placeholder)
            console.log("Token address '" + addressName + "' on chain '" + chainName + "' is missing");
        }
        else {
            console.log("Token address '" + addressName + "' on chain '" + chainName + "' does not pass checksum. Incorrect Address: '" + address + "'");
            console.log("The correct address should be '" + correctAddress + "'");
        }
    }
    fail = true;
}
if (fail) {
    process_1.exit(1);
}
console.log("All addresses pass checksum test");
