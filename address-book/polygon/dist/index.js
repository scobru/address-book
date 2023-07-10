"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.polygon = void 0;
var beefyfinance_1 = require("./platforms/beefyfinance");
var cometh_1 = require("./platforms/cometh");
var dfyn_1 = require("./platforms/dfyn");
var polyzap_1 = require("./platforms/polyzap");
var quickswap_1 = require("./platforms/quickswap");
var sushi_1 = require("./platforms/sushi");
var goldenbull_1 = require("./platforms/goldenbull");
var wault_1 = require("./platforms/wault");
var polycat_1 = require("./platforms/polycat");
var iron_1 = require("./platforms/iron");
var adamant_1 = require("./platforms/adamant");
var polyyeld_1 = require("./platforms/polyyeld");
var polypup = require("./platforms/polypup");
var apeswap_1 = require("./platforms/apeswap");
var helioscash_1 = require("./platforms/helioscash");
var brainswap_1 = require("./platforms/brainswap");
var mai_1 = require("./platforms/mai");
var jetswap_1 = require("./platforms/jetswap");
var farmhero_1 = require("./platforms/farmhero");
var tokens_1 = require("./tokens/tokens");
var convertSymbolTokenMapToAddressTokenMap_1 = require("../../util/convertSymbolTokenMapToAddressTokenMap");
var _polygon = {
    platforms: __assign(__assign({ beefyfinance: beefyfinance_1.beefyfinance,
        cometh: cometh_1.cometh,
        dfyn: dfyn_1.dfyn,
        polyzap: polyzap_1.polyzap,
        quickswap: quickswap_1.quickswap,
        sushi: sushi_1.sushi,
        goldenbull: goldenbull_1.goldenbull,
        wault: wault_1.wault,
        polycat: polycat_1.polycat,
        iron: iron_1.iron,
        adamant: adamant_1.adamant,
        polyyeld: polyyeld_1.polyyeld }, polypup), { apeswap: apeswap_1.apeswap,
        helioscash: helioscash_1.helioscash,
        brainswap: brainswap_1.brainswap,
        mai: mai_1["default"],
        jetswap: jetswap_1["default"],
        farmhero: farmhero_1.farmhero }),
    tokens: tokens_1.tokens,
    tokenAddressMap: convertSymbolTokenMapToAddressTokenMap_1.convertSymbolTokenMapToAddressTokenMap(tokens_1.tokens)
};
exports.polygon = _polygon;
