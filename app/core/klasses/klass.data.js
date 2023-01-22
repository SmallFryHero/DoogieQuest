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
        name: 'Doogie',
        aptitudes: index_1.uniformSkillMap(.5),
        img: 'ruffian.png',
        hint: "??? You shouldn't be reading this...",
        criteria: function (s) { return true; }
    },
    {
        name: 'Placeholder1',
        aptitudes: index_1.mostlyUniformSkillMap(baseline_apt, (_a = {},
            _a[index_1.SkillType.Farming] = 2.0,
            _a[index_1.SkillType.Survival] = 1.1,
            _a[index_1.SkillType.Riding] = 1.5,
            _a[index_1.SkillType.Combat] = .3,
            _a[index_1.SkillType.Piety] = 1.2,
            _a[index_1.SkillType.Intellect] = .4,
            _a[index_1.SkillType.Charm] = .7,
            _a[index_1.SkillType.Stealth] = .8,
            _a
        )),
        img: 'peasant.png',
        hint: "Placeholder",
        criteria: function (s) {
            return s.checkSkillUnlock(index_1.SkillType.Farming, low_skill_lvl);
        }
    },
    {
        name: 'Placeholder2',
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
        hint: 'Placeholder',
        criteria: function (s) {
            return s.performedOneShot(index_3.OneShotAction.WoodsmanFreed);
        }
    },
    {
        name: 'Fawnsy',
        aptitudes: index_1.mostlyUniformSkillMap(t2_apt, (_c = {},
            _c[index_1.SkillType.Pee] = 1.5,
            _c[index_1.SkillType.Play] = 2.0,
            _c[index_1.SkillType.Kill] = .7,
            _c[index_1.SkillType.Nom] = 1.3,
            _c[index_1.SkillType.Cuddle] = 1.0,
            _c[index_1.SkillType.Run] = 1,
            _c[index_1.SkillType.Sniff] = .5,
            _c
        )),
        img: 'ranger.png',
        hint: "Looking for a family that lets me sleep in the bed with them.",
        criteria: classLevelUnlockFactory("Woodsman", 20),
    },
    {
        name: 'Placeholder3',
        aptitudes: index_1.mostlyUniformSkillMap(t2_apt, (_d = {},
            _d[index_1.SkillType.Survival] = .9,
            _d[index_1.SkillType.Farming] = .4,
            _d[index_1.SkillType.Stealth] = 1.1,
            _d[index_1.SkillType.Piety] = 1.0,
            _d[index_1.SkillType.Charm] = 1.5,
            _d[index_1.SkillType.Intellect] = 1.4,
            _d[index_1.SkillType.Combat] = 1.8,
            _d
        )),
        img: 'archer.png',
        hint: "Placeholder",
        criteria: function (s) {
            return s.lifetimeSum(index_2.Stat.CriticalActions) / 500;
        }
    },
    {
        name: 'Placeholder4',
        aptitudes: index_1.mostlyUniformSkillMap(baseline_apt, (_e = {},
            _e[index_1.SkillType.Intellect] = 1.2,
            _e[index_1.SkillType.Combat] = .8,
            _e[index_1.SkillType.Survival] = .9,
            _e[index_1.SkillType.Charm] = 1.1,
            _e
        )),
        img: 'mage.png',
        hint: "Placeholder",
        criteria: function (s) {
            return s.current(index_2.Stat.ActionsTaken) / 1500;
        }
    },
    {
        name: 'Placeholder5',
        aptitudes: index_1.mostlyUniformSkillMap(t2_apt, (_f = {},
            _f[index_1.SkillType.Stealth] = 2.0,
            _f[index_1.SkillType.Intellect] = 1.3,
            _f[index_1.SkillType.Combat] = 1.3,
            _f[index_1.SkillType.Piety] = .4,
            _f[index_1.SkillType.Farming] = .7,
            _f[index_1.SkillType.Charm] = 1.1,
            _f
        )),
        img: 'assassin+female.png',
        hint: "Placeholder",
        criteria: function (s) {
            return s.checkSkillUnlock(index_1.SkillType.Stealth, med_skill_lvl);
        }
    },
    {
        name: 'Placeholder6',
        aptitudes: index_1.mostlyUniformSkillMap(t2_apt, (_g = {},
            _g[index_1.SkillType.Piety] = 2.2,
            _g[index_1.SkillType.Combat] = 0.1,
            _g[index_1.SkillType.Survival] = 0.8,
            _g[index_1.SkillType.Stealth] = .8,
            _g[index_1.SkillType.Riding] = 1.1,
            _g[index_1.SkillType.Charm] = 1.2,
            _g
        )),
        img: 'white-mage.png',
        hint: "Placeholder",
        criteria: function (s) {
            return s.unlocked(index_2.NamedUnlock.Pacifist);
        }
    },
    {
        name: 'Placeholder7',
        aptitudes: index_1.mostlyUniformSkillMap(t1_apt, (_h = {},
            _h[index_1.SkillType.Combat] = 2.2,
            _h[index_1.SkillType.Charm] = .7,
            _h[index_1.SkillType.Intellect] = .2,
            _h[index_1.SkillType.Stealth] = .6,
            _h[index_1.SkillType.Farming] = .9,
            _h[index_1.SkillType.Survival] = 1.3,
            _h
        )),
        img: 'berserker.png',
        hint: "Placeholder",
        criteria: function (s) {
            /** TODO: Maybe criteria should be something like complete X actions
            in Y seconds? **/
            // Let's just use a simple placeholder for now
            return s.checkSkillUnlock(index_1.SkillType.Combat, low_skill_lvl);
        }
    },
    {
        name: 'Placeholder8',
        aptitudes: index_1.mostlyUniformSkillMap(t1_apt + .1, (_j = {},
            _j[index_1.SkillType.Stealth] = .6,
            _j[index_1.SkillType.Piety] = .4,
            _j[index_1.SkillType.Charm] = .5,
            _j[index_1.SkillType.Survival] = 2.0,
            _j
        )),
        img: 'skeleton.png',
        hint: "Placeholder",
        criteria: function (s) {
            return s.lifetimeSum(index_2.Stat.Clicks) / 400;
        }
    },
    {
        name: 'Placeholder9',
        aptitudes: index_1.mostlyUniformSkillMap(t3_apt, (_k = {},
            _k[index_1.SkillType.Stealth] = 0.1,
            _k[index_1.SkillType.Riding] = 2.0,
            _k[index_1.SkillType.Survival] = 1.4,
            _k[index_1.SkillType.Piety] = 0.4,
            _k[index_1.SkillType.Combat] = 1.5,
            _k
        )),
        img: 'chocobone.png',
        hint: 'Placeholder',
        criteria: function (s) {
            return (s.playerLevel('Skeleton') > 1)
                && (s.playerLevel('Jouster') > 1);
        }
    },
    /** TODO: I like the idea of the jouster having high riding and charm aptitudes, but
    abysmal combat aptitudes because he's never actually seen real battle.
    Passive idea: Brave Sir Robin - gain some stats when retreating from a
    combat encounter (maybe on a cooldown)
    Might be easier to define it as an actual spell, separate from the retreat
    mechanic.
    **/
    {
        name: 'Placeholder10',
        aptitudes: index_1.mostlyUniformSkillMap(t2_apt, (_l = {},
            _l[index_1.SkillType.Stealth] = .5,
            _l[index_1.SkillType.Riding] = 3.0,
            _l[index_1.SkillType.Charm] = 2.5,
            _l[index_1.SkillType.Survival] = .5,
            _l[index_1.SkillType.Piety] = .8,
            _l[index_1.SkillType.Combat] = 0.1,
            _l
        )),
        img: 'lancer.png',
        hint: 'Placeholder',
        criteria: function (s) {
            return s.unlocked(index_2.NamedUnlock.JoustingChampion);
        }
    },
    {
        name: 'Placeholder11',
        aptitudes: index_1.mostlyUniformSkillMap(t2_apt, (_m = {},
            _m[index_1.SkillType.Combat] = 2.0,
            _m[index_1.SkillType.Charm] = 2.0,
            _m[index_1.SkillType.Farming] = .6,
            _m[index_1.SkillType.Piety] = 1.0,
            _m[index_1.SkillType.Stealth] = .7,
            _m
        )),
        img: 'pikeman.png',
        hint: "Placeholder",
        criteria: function (s) {
            return s.lifetimeSumActionsTaken('Colloseum') / 100;
        }
    },
    {
        name: 'Placeholder12',
        aptitudes: index_1.mostlyUniformSkillMap(t2_apt, (_o = {},
            _o[index_1.SkillType.Intellect] = 2.0,
            _o[index_1.SkillType.Combat] = .4,
            _o[index_1.SkillType.Survival] = .7,
            _o[index_1.SkillType.Charm] = 1.3,
            _o[index_1.SkillType.Stealth] = 1.0,
            _o[index_1.SkillType.Riding] = .9,
            _o
        )),
        img: 'red-mage.png',
        hint: "Placeholder",
        criteria: classLevelUnlockFactory("Student", 20),
    },
    {
        name: 'Choc',
        aptitudes: index_1.mostlyUniformSkillMap(t2_apt + .2, (_p = {},
            _p[index_1.SkillType.Riding] = .3,
            _p[index_1.SkillType.Charm] = .1,
            _p[index_1.SkillType.Combat] = 1.3,
            _p[index_1.SkillType.Stealth] = 1.5,
            _p[index_1.SkillType.Survival] = 2.0,
            _p
        )),
        img: 'mudcrawler.png',
        hint: 'I like to take my time doing things slowwwllyy.',
        criteria: function (s) {
            return s.unlocked(index_2.NamedUnlock.SuperSlowAction);
        }
    },
    {
        name: 'Placeholder13',
        aptitudes: index_1.mostlyUniformSkillMap(t2_apt, (_q = {},
            _q[index_1.SkillType.Farming] = 1.0,
            _q[index_1.SkillType.Intellect] = 1.7,
            _q[index_1.SkillType.Piety] = 1.7,
            _q[index_1.SkillType.Stealth] = 1.2,
            _q[index_1.SkillType.Survival] = 1.5,
            _q[index_1.SkillType.Riding] = .9,
            _q[index_1.SkillType.Combat] = .8,
            _q
        )),
        img: 'shaman.png',
        hint: 'Placeholder',
        criteria: function (s) {
            return s.lifetimeSum(index_2.Stat.Reincarnations) / 10;
        }
    },
    {
        name: 'Placeholder14',
        aptitudes: index_1.mostlyUniformSkillMap(t2_apt, (_r = {},
            _r[index_1.SkillType.Farming] = 1.0,
            _r[index_1.SkillType.Intellect] = 1.3,
            _r[index_1.SkillType.Piety] = 1.0,
            _r[index_1.SkillType.Stealth] = 1.0,
            _r[index_1.SkillType.Survival] = 0.8,
            _r[index_1.SkillType.Riding] = 1.3,
            _r[index_1.SkillType.Combat] = .5,
            _r[index_1.SkillType.Charm] = 2.2,
            _r
        )),
        img: 'juggler.png',
        hint: 'Placeholder',
        criteria: function (s) {
            return s.unlocked(index_2.NamedUnlock.ThreeEggs);
        }
    },
    {
        name: 'Pepper',
        aptitudes: index_1.mostlyUniformSkillMap(t1_apt, (_s = {},
            _s[index_1.SkillType.Riding] = 2.2,
            _s[index_1.SkillType.Combat] = 1.3,
            _s[index_1.SkillType.Stealth] = 0.5,
            _s[index_1.SkillType.Intellect] = .8,
            _s[index_1.SkillType.Survival] = 1.0,
            _s
        )),
        img: 'horseman.png',
        hint: "Placeholder",
        criteria: function (s) {
            return s.lifetimeSumActionsTaken('Stables') / 1000;
        }
    }
];
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
//# sourceMappingURL=klass.data.js.map
