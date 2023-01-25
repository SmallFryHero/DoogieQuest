"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseVerb = (function () {
    function BaseVerb(base) {
        this.base = base;
    }
    return BaseVerb;
}());
var RegularVerb = (function (_super) {
    __extends(RegularVerb, _super);
    function RegularVerb() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(RegularVerb.prototype, "pres", {
        get: function () { return this.base + "ing"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegularVerb.prototype, "past", {
        get: function () { return this.base + "ed"; },
        enumerable: true,
        configurable: true
    });
    return RegularVerb;
}(BaseVerb));
var DoubleConsonantVerb = (function (_super) {
    __extends(DoubleConsonantVerb, _super);
    function DoubleConsonantVerb() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(DoubleConsonantVerb.prototype, "pres", {
        get: function () { return this.base + this.base[this.base.length - 1] + "ing"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoubleConsonantVerb.prototype, "past", {
        get: function () { return this.base + this.base[this.base.length - 1] + "ed"; },
        enumerable: true,
        configurable: true
    });
    return DoubleConsonantVerb;
}(BaseVerb));
var FinalEVerb = (function (_super) {
    __extends(FinalEVerb, _super);
    function FinalEVerb() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(FinalEVerb.prototype, "pres", {
        get: function () { return this.base.slice(0, -1) + "ing"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinalEVerb.prototype, "past", {
        get: function () { return this.base.slice(0, -1) + "ed"; },
        enumerable: true,
        configurable: true
    });
    return FinalEVerb;
}(BaseVerb));
var doubleConsonantVerbs = new Set(["chop", "ham", "chat"]);
var finalEVerbs = new Set([
    "bale", "dance", "decode", "exorcise", "dodge",
    "sermonize", "proselytize", "harmonize", "eulogize", "deface",
]);
var irregularVerbs = {
    "ride": { base: "ride", pres: "riding", past: "rode" },
    "read": { base: "read", pres: "reading", past: "read" },
    "fight": { base: "fight", pres: "fighting", past: "fought" },
    "tiptoe": { base: "tiptoe", pres: "tiptoeing", past: "tiptoed" },
    "light": { base: "light", pres: "lighting", past: "lit" },
    "swim": { base: "swim", pres: "swimming", past: "swam" },
    "free": { base: "free", pres: "freeing", past: "freed" },
    "steal": { base: "steal", pres: "stealing", past: "stole" },
    "sing": { base: "sing", pres: "singing", past: "sang" },
    "chill": { base: "chill", pres: "chilling", past: "chilled" },
    "cower": { base: "cower", pres: "cowering", past: "cowered" },
    "take": { base: "take", pres: "taking", past: "took" },
    "play": { base: "play", pres: "playing", past: "played" },
    "hold": { base: "hold", pres: "hold", past: "hold" },
    "get": { base: "get", pres: "getting", past: "got" },
    "chase": { base: "chase", pres: "chasing", past: "chased" },
    "ahh": { base: "ahh", pres: "ahh", past: "ahh" },
    "sit": { base: "sit", pres: "sitting", past: "sat" },
    "keep": { base: "keep", pres: "keeping", past: "kept" },
    "take": { base: "take", pres: "taking", past: "took" },
    "listen": { base: "listen", pres: "listening", past: "listened" },
    "claim": { base: "claim", pres: "claiming", past: "claimed" },
    "walk": { base: "walk", pres: "walking", past: "walked" },
    "go": { base: "go", pres: "going", past: "went" },
    "visit": { base: "visit", pres: "visiting", past: "visited" },
    "backpack": { base: "backpack", pres: "backpacking", past: "backpacked" },
    "snooze": { base: "snooze", pres: "snoozin", past: "napped" },
    "mark": { base: "mark", pres: "marking", past: "marked" },
    "check": { base: "check", pres: "checking", past: "checked" },
    "zoom": { base: "zoom", pres: "ZOOMIES", past: "ZOOMIES" },
    "find": { base: "find", pres: "finding", past: "found" },
    "be": { base: "be", pres: "being", past: "was" },
    "cuddle": { base: "cuddle", pres: "cuddling", past: "cuddled" },
    "the": { base: "the", pres: "the", past: "the" },
};
function verbLookup(base) {
    if (doubleConsonantVerbs.has(base)) {
        return new DoubleConsonantVerb(base);
    }
    else if (finalEVerbs.has(base)) {
        return new FinalEVerb(base);
    }
    else if (base in irregularVerbs) {
        return irregularVerbs[base];
    }
    else {
        return new RegularVerb(base);
    }
}
exports.verbLookup = verbLookup;
//# sourceMappingURL=verb.js.map
