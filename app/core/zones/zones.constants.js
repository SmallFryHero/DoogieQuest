"use strict";
var zones_data_defns_1 = require('./zones.data.defns');
var index_1 = require('../skills/index');
var index_2 = require('../stats/index');
var action_oneshots_enum_1 = require('./action-oneshots.enum');
var CHEAT_POINTS = 5000;
var FLOWERS = ["poppies", "daisies", "roses", "orchids", "violets", "begonias"];
exports.SUPERZONEDATA = [
    {
        name: 'Apt 3401',
        minLevel: 0,
        zones: [
            {
                name: 'Living Room',
                description: "A big scary room where you can get attacked from three point of entries.",
                actions: [
                    { obj: "Cowering in safe bed.", skills: index_1.SkillType.Cower },
                    { vb: "", obj: "Taking a poop on the carpet while everyones asleep.", skills: index_1.SkillType.Pee, bonusLevel: 1 },
                ],
                difficulty: 0,
            },
            {
                name: 'Bedroom',
                description: "A cozy place to hide from the world.",
                actions: [
                    { vb: "", obj: "Chilling in bed with Gina.",
                        skills: index_1.SkillType.Cuddle, weight: .8 },
                    { vb: "", obj: "Playing with my toy.", 
                        skills: index_1.SkillType.Play, weight: .2 },
                    { vb: "", obj: "Who the hell is that!?", oneShot: action_oneshots_enum_1.OneShotAction.WoodsmanFreed,
                        bonusLevel: 2, skills: index_1.SkillType.Survival }
                ],
                difficulty: 1,
            },
            {
                name: 'Kitchen',
                description: "A place with lots of yummy treats, but not a lot of space to retreat.",
                actions: [
                    { vb: "", obj: "Getting a treat from the fridge", skills: index_1.SkillType.Nom, weight: 1, difficulty: zones_data_defns_1.additiveOverride(-1) },
                    { vb: "", obj: "Chasing a treat Gina threw.", skills: [index_1.SkillType.Kill, index_1.SkillType.Nom],
                        weight: 1, difficulty: zones_data_defns_1.additiveOverride(-1) },
                    { vb: "", obj: "Ahh! running away before I get trapped.", skills: index_1.SkillType.Cower, weight: 1 }
                ],
                difficulty: 3,
            },
            {
                name: 'Gaming Room',
                description: 'Where Paul spends all his time and sometimes Gina locks me in with him.',
                actions: [
                    { vb: 'plant', obj: 'Keeping an eye on Paul.', skills: index_1.SkillType.Cower,
                        difficulty: zones_data_defns_1.additiveOverride(9) },
                    { vb: 'pick', obj: 'Sitting in Ginas lap while she plays',  skills: [index_1.SkillType.Cuddle, index_1.SkillType.Play] },
                    { vb: 'tiptoe', obj: 'Getting a treat for being a good boy', skills: index_1.SkillType.Nom,
                        bonusLevel: .5, difficulty: zones_data_defns_1.additiveOverride(-1) },
                ],
                difficulty: 4,
            },
        ] },
    {
        name: 'Outside',
        minLevel: 5,
        zones: [
            {
                name: 'Courtyard',
                description: 'A nice place to walk around. Not for too long though...',
                actions: [
                    { vb: "pray", obj: "", skills: index_1.SkillType.Piety },
                ],
                difficulty: 4,
            },
            {
                name: 'Dog Park',
                description: 'A safe space to run around, although you can never be too careful.',
                actions: [
                    { vb: "nick", obj: "Chasing a squeaker!", skills: index_1.SkillType.Play },
                    { vb: "nick", obj: "Listening to street noises while shivering.", skills: index_1.SkillType.Cower, bonusLevel: 1 },
                    { vb: "nick", obj: "Claiming the dog park as my own.", skills: index_1.SkillType.Pee, bonusLevel: 2 },
                ],
                difficulty: 5
            },
            {
                name: 'City',
                description: 'A big, loud, scary place.',
                actions: [
                    { vb: "dance", obj: "Walking to a big grassy area.", skills: index_1.SkillType.Run, weight: 1 },
                    { vb: "play", obj: "Going to a resteraunt", skills: index_1.SkillType.Nom, weight: 1 },
                    { vb: "sing", obj: "Playing at a dog park", skills: index_1.SkillType.Play, bonusLevel: 1 },
        
                ],
                difficulty: 7,
            },
            {
                name: 'Car Ride',
                description: 'Who knows where were going...',
                actions: [
                    { vb: "joust", obj: "Visiting someone. I dont trust them.",
                        skills: [index_1.SkillType.Sniff, index_1.SkillType.Cower], weight: 3.0 },
                    { vb: "joust", obj: "Going out to eat.",
                        skills: [index_1.SkillType.Nom, index_1.SkillType.Cower], bonusLevel: .3 },
                    { vb: "joust", obj: "Backpacking for miles and miles. Its hot out.",
                        skills: [index_1.SkillType.Run, index_1.SkillType.Play], bonusLevel: 2,
                        unlocks: index_2.NamedUnlock.JoustingChampion, oneShot: action_oneshots_enum_1.OneShotAction.TournamentFinals },
                ],
                difficulty: 9,
            }
        ]
    },
    {
        name: 'Carlotta',
        minLevel: 10,
        zones: [
            {
                name: 'Bedroom',
                description: 'A grotto where mycologists cultivate mushrooms with curative, poisonous, or psychedelic properties',
                actions: [
                    { vb: 'collect', obj: 'a mushroom', skills: [index_1.SkillType.Farming, index_1.SkillType.Intellect] },
                    { vb: 'concoct', obj: 'a draught of __X',
                        opts: ["sleep", "dizziness", "wart removal", "blindness", "cheer"],
                        skills: [index_1.SkillType.Intellect] }
                ],
                difficulty: 12,
            },
            {
                name: 'Living Room',
                description: 'This place is dangerous',
                actions: [
                    { vb: 'crawl', obj: 'through a narrow passage', skills: [index_1.SkillType.Survival] },
                    { vb: 'dodge', obj: 'a falling stalctite', skills: [index_1.SkillType.Survival],
                        bonusLevel: .5 },
                    { vb: 'dodge', obj: "a falling stalagmite. Wait, that's not right, is it?",
                        skills: [index_1.SkillType.Survival], bonusLevel: .5, weight: 0.001 },
                    { vb: 'swim', obj: 'through a sump', skills: [index_1.SkillType.Survival], bonusLevel: 1 },
                ],
                difficulty: 13,
            },
            {
                name: 'Backyard',
                description: "These bats haven't been doing anyone harm, but I guess you\n        could slaughter them anyways for practice",
                actions: [
                    { vb: 'slay', obj: 'a fruit bat', skills: [index_1.SkillType.Combat] },
                    { vb: 'slay', obj: 'a vampire bat', skills: [index_1.SkillType.Combat], bonusLevel: .5 },
                    { vb: 'slay', obj: 'the Bat King', skills: [index_1.SkillType.Combat],
                        bonusLevel: 2, weight: .05, oneShot: action_oneshots_enum_1.OneShotAction.BatKing }
                ],
                difficulty: 14,
            },
            {
                name: 'Go for a Ride',
                description: "Townsfolk steer clear of this cave. Local legend says that it's spooky.",
                actions: [
                    { vb: 'light', obj: 'some incense', skills: index_1.SkillType.Piety },
                    { vb: 'exorcise', obj: 'a restless spirit', skills: [index_1.SkillType.Piety, index_1.SkillType.Combat],
                        bonusLevel: .5 },
                    { vb: 'exorcise', obj: 'an ancient, unspeakable horror',
                        skills: [index_1.SkillType.Piety, index_1.SkillType.Combat], bonusLevel: 1.5 },
                ],
                difficulty: 15,
            }
        ]
    },
    {
        name: '4115 19th',
        minLevel: 15,
        zones: [
            {
                /** This could be interesting as a 'rainbow' zone. Read a book about
                    plants/martial strategy/religion/whatever, and gain SP in the
                    corresponding skill + intellect.
                **/
                name: 'Bedroom',
                description: 'A good place to get smarter and practice being quiet',
                actions: [
                    { vb: "ponder", obj: "a quaint and curious volume of forgotten lore",
                        skills: [index_1.SkillType.Intellect, index_1.SkillType.Stealth], bonusLevel: 1,
                        skillRatios: { 'Intellect': .8, 'Stealth': .2 } },
                    { vb: "read", obj: "a __X", opts: ["tome", "book", "encyclopedia", "magazine"],
                        skills: [index_1.SkillType.Intellect, index_1.SkillType.Stealth],
                        skillRatios: { 'Intellect': .8, 'Stealth': .2 } },
                ],
                difficulty: 17,
            },
            {
                name: 'Leave the Bedroom',
                description: "A showcase of rare and exotic plants",
                actions: [
                    { vb: "bask", obj: "in the sun", skills: index_1.SkillType.Charm, weight: .2 },
                    { vb: "inspect", obj: "an unusual cultivar of __X",
                        opts: ["radish", "turnip", "parsley", "carrot", "pumpkin"],
                        skills: index_1.SkillType.Farming },
                    { vb: "pluck", obj: "a weed", skills: index_1.SkillType.Farming },
                    { vb: "chat", obj: "with the head gardener", skills: [index_1.SkillType.Farming, index_1.SkillType.Charm],
                        bonusLevel: 1.5 }
                ],
                difficulty: 19,
            },
            {
                name: 'Outside',
                description: "A violent but popular local spectacle. Successful gladiators\n        are handy with a sword and know how to razzle-dazzle the crowd.",
                actions: [
                    { vb: "fight", obj: "a gladiator", skills: [index_1.SkillType.Combat] },
                    { vb: "ham", obj: "it up for the crowd", skills: [index_1.SkillType.Charm] },
                    { vb: "fight", obj: "a __X", opts: ["tiger", "lion", "wolf", "boar"],
                        skills: [index_1.SkillType.Combat], bonusLevel: .5 },
                    { vb: "bask", obj: "in the crowd's adoration", skills: index_1.SkillType.Charm,
                        bonusLevel: 1 }
                ],
                difficulty: 21,
            },
            {
                name: 'Car Ride',
                description: 'Nice stained glass',
                actions: [
                    { vb: "sermonize", obj: "", skills: [index_1.SkillType.Piety, index_1.SkillType.Charm] },
                    { vb: "proselytize", obj: "", skills: [index_1.SkillType.Piety, index_1.SkillType.Charm] },
                    { vb: "harmonize", obj: "", skills: [index_1.SkillType.Charm] },
                    { vb: "eulogize", obj: "", skills: [index_1.SkillType.Piety, index_1.SkillType.Charm], bonusLevel: 1.5 },
                ],
                difficulty: 23,
            }
        ]
    },
    // {
    // name: 'Coast',
    // minLevel: 40,
    // zones: [
    //
    // ]
    // },
    {
        name: 'Beyond',
        minLevel: 25,
        zones: [
            {
                name: 'Adventuring in the world.',
                description: "The world doesnt seem all that scary after all I guess.",
                actions: [
                    { vb: 'beat', obj: 'the game', skills: [
                            index_1.SkillType.Play, index_1.SkillType.Sniff, index_1.SkillType.Pee, index_1.SkillType.Cuddle, index_1.SkillType.Kill, index_1.SkillType.Cower,
                            index_1.SkillType.Run, index_1.SkillType.Nom],
                        unlocks: index_2.NamedUnlock.SpaceTimeConquered
                    }
                ],
                difficulty: 30
            }
        ]
    },
    {
        name: 'Cheatz',
        minLevel: 1,
        cheat: true,
        zones: [
            {
                name: 'Cheat 1',
                description: 'zz',
                actions: [
                    { vb: "zz", obj: "", skills: [
                            index_1.SkillType.Farming, index_1.SkillType.Combat, index_1.SkillType.Survival, index_1.SkillType.Charm, index_1.SkillType.Stealth, index_1.SkillType.Riding,
                            index_1.SkillType.Intellect, index_1.SkillType.Piety
                        ], bonusLevel: 2 }
                ],
                difficulty: -5,
            },
            {
                name: 'Cheat 2',
                description: 'zz',
                actions: [
                    { vb: "zz", obj: "", skills: [
                            index_1.SkillType.Farming, index_1.SkillType.Combat, index_1.SkillType.Survival, index_1.SkillType.Charm, index_1.SkillType.Stealth, index_1.SkillType.Riding,
                            index_1.SkillType.Intellect, index_1.SkillType.Piety
                        ], bonusLevel: 3 }
                ],
                difficulty: -5,
            },
            {
                name: 'Cheat 4',
                description: 'zz',
                actions: [
                    { vb: "zz", obj: "", skills: [
                            index_1.SkillType.Farming, index_1.SkillType.Combat, index_1.SkillType.Survival, index_1.SkillType.Charm, index_1.SkillType.Stealth, index_1.SkillType.Riding,
                            index_1.SkillType.Intellect, index_1.SkillType.Piety
                        ], bonusLevel: 4 }
                ],
                difficulty: -5,
            }
        ]
    }
];
//# sourceMappingURL=zones.constants.js.map
