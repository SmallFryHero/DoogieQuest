"use strict";
var index_1 = require('../skills/index');
var index_2 = require('../stats/index');
var index_3 = require('../zones/index');
var low_skill_lvl = 15;
var med_skill_lvl = 30;
var hi_skill_lvl = 75;
var baseline_apt = 1.0;
var t1_apt = baseline_apt;
var t2_apt = baseline_apt;
var t3_apt = baseline_apt;
/** Used to generate simple unlock criteria of the form "reach level X as class Y"
**/
function classLevelUnlockFactory(klass, level) {
    return function (s, PS) {
        if (PS.player.klass == klass) {
            return PS.player.level / level;
        }
        return false;
    };
}
// TODO: Specify perks here
exports.KLASSES = [
    {
        // perk: double apts until level 10
        name: 'Doogler',
        aptitudes: index_1.uniformSkillMap(.5),
        img: 'ruffian.png',
        hint: "??? You shouldn't be reading this...",
        criteria: function (s) { return true; }
    },    
    {
        name: 'Woodsman',
        aptitudes: index_1.mostlyUniformSkillMap(t1_apt, (_b = {},
            _b[index_1.SkillType.Survival] = 2.0,
            _b[index_1.SkillType.Farming] = 1.0,
            _b[index_1.SkillType.Stealth] = 1.2,
            _b[index_1.SkillType.Combat] = .7,
            _b[index_1.SkillType.Piety] = 1.0,
            _b[index_1.SkillType.Charm] = .6,
            _b[index_1.SkillType.Riding] = 1.1,
            _b[index_1.SkillType.Intellect] = .6,
            _b
        )),
        img: 'woodsman.png',
        hint: 'Last seen in the woods. Feared missing.',
        criteria: function (s) {
            return s.performedOneShot(index_3.OneShotAction.WoodsmanFreed);
        }
    },   
    {
        name: 'Blob',
        aptitudes: index_1.mostlyUniformSkillMap(t2_apt + .2, (_p = {},
            _p[index_1.SkillType.Riding] = .3,
            _p[index_1.SkillType.Charm] = .1,
            _p[index_1.SkillType.Combat] = 1.3,
            _p[index_1.SkillType.Stealth] = 1.5,
            _p[index_1.SkillType.Survival] = 2.0,
            _p
        )),
        img: 'mudcrawler.png',
        hint: 'Complete a reeeeeeallly slow action',
        criteria: function (s) {
            return s.unlocked(index_2.NamedUnlock.SuperSlowAction);
        }
    },
   
    {
        name: 'Horseman',
        aptitudes: index_1.mostlyUniformSkillMap(t1_apt, (_s = {},
            _s[index_1.SkillType.Riding] = 2.2,
            _s[index_1.SkillType.Combat] = 1.3,
            _s[index_1.SkillType.Stealth] = 0.5,
            _s[index_1.SkillType.Intellect] = .8,
            _s[index_1.SkillType.Survival] = 1.0,
            _s
        )),
        img: 'horseman.png',
        hint: "Show great stability",
        criteria: function (s) {
            return s.lifetimeSumActionsTaken('Stables') / 1000;
        }
    }
];
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
//# sourceMappingURL=klass.data.js.map
