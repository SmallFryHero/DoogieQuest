"use strict";
(function (SkillType) {
    SkillType[SkillType["Play"] = 0] = "Play";
    SkillType[SkillType["Sniff"] = 1] = "Sniff";
    SkillType[SkillType["Pee"] = 2] = "Pee";
    SkillType[SkillType["Cuddle"] = 3] = "Cuddle";
    SkillType[SkillType["Kill"] = 4] = "Kill";
    SkillType[SkillType["Cower"] = 5] = "Cower";
    SkillType[SkillType["Run"] = 6] = "Run";
    SkillType[SkillType["Nom"] = 7] = "Nom";
    SkillType[SkillType["MAX"] = 8] = "MAX";
})(exports.SkillType || (exports.SkillType = {}));
var SkillType = exports.SkillType;
var skill_images_wesnoth = [
    'pitchfork.png',
    'sword-human.png',
    'torch.png',
    'instrument_kantele.png',
    'sandals.png',
    'fangs.png',
    'scroll_red.png',
    'ankh_necklace.png'
];
exports.skill_images = [
    'fedhas.png',
    'long_blades.png',
    'ice_magic.png',
    'nemelex_xobeh.png',
    'stealth.png',
    'unarmed_combat_paw.png',
    'spellcasting.png',
    'invocations.png'
].map(function (fname) { return 'assets/skills_dcss/' + fname; });
//# sourceMappingURL=skilltype.enum.js.map
