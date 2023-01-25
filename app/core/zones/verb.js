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
    "ride": { base: "ride", pres: "Riding", past: "Rode" },
    "read": { base: "read", pres: "Reading", past: "Read" },
    "fight": { base: "fight", pres: "Fighting", past: "Fought" },
    "tiptoe": { base: "tiptoe", pres: "Tiptoeing", past: "Tiptoed" },
    "light": { base: "light", pres: "Lighting", past: "Lit" },
    "swim": { base: "swim", pres: "Swimming", past: "Swam" },
    "free": { base: "free", pres: "Freeing", past: "Freed" },
    "steal": { base: "steal", pres: "Stealing", past: "Stole" },
    "sing": { base: "sing", pres: "Singing", past: "Sang" },
    "chill": { base: "chill", pres: "Chilling", past: "Chilled" },
    "cower": { base: "cower", pres: "Cowering", past: "Cowered" },
    "take": { base: "take", pres: "Taking", past: "Took" },
    "play": { base: "play", pres: "Playing", past: "Played" },
    "hold": { base: "hold", pres: "Hold", past: "Hold" },
    "get": { base: "get", pres: "Getting", past: "Got" },
    "chase": { base: "chase", pres: "Chasing", past: "Chased" },
    "ahh": { base: "ahh", pres: "Ahh!", past: "Ahh!" },
    "sit": { base: "sit", pres: "Sitting", past: "Sat" },
    "keep": { base: "keep", pres: "Keeping", past: "Kept" },
    "take": { base: "take", pres: "Taking", past: "Took" },
    "listen": { base: "listen", pres: "Listening", past: "Listened" },
    "claim": { base: "claim", pres: "Claiming", past: "Claimed" },
    "walk": { base: "walk", pres: "Walking", past: "Walked" },
    "go": { base: "go", pres: "Going", past: "Went" },
    "visit": { base: "visit", pres: "Visiting", past: "Visited" },
    "backpack": { base: "backpack", pres: "Backpacking", past: "Backpacked" },
    "snooze": { base: "snooze", pres: "Snoozin", past: "Napped" },
    "mark": { base: "mark", pres: "Marking", past: "Marked" },
    "check": { base: "check", pres: "Checking", past: "Checked" },
    "zoom": { base: "zoom", pres: "ZOOMIES!", past: "ZOOMIES!" },
    "find": { base: "find", pres: "Finding", past: "Found" },
    "be": { base: "be", pres: "Being", past: "Was" },
    "cuddle": { base: "cuddle", pres: "Cuddling", past: "Cuddled" },
    "the": { base: "the", pres: "The", past: "The" },
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
