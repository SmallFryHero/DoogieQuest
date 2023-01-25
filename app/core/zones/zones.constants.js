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
                    { vb: "cower", obj: " in safe bed.", skills: index_1.SkillType.Cower },
                    { vb: "take", obj: " a poop on the carpet while everyones asleep.", skills: index_1.SkillType.Pee, bonusLevel: 1 },
                ],
                difficulty: 0,
            },
            {
                name: 'Bedroom',
                description: "A cozy place to hide from the world.",
                actions: [
                    { vb: "chill", obj: "in bed with Gina.",
                        skills: index_1.SkillType.Cuddle, weight: .8 },
                    { vb: "play", obj: " with my toy.", 
                        skills: index_1.SkillType.Play, weight: .2 },
                    { vb: "wait", obj: " the hell is that!?", oneShot: action_oneshots_enum_1.OneShotAction.WoodsmanFreed,
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
                    { vb: '', obj: 'Keeping an eye on Paul.', skills: index_1.SkillType.Cower,
                        difficulty: zones_data_defns_1.additiveOverride(9) },
                    { vb: '', obj: 'Sitting in Ginas lap while she plays',  skills: [index_1.SkillType.Cuddle, index_1.SkillType.Play] },
                    { vb: '', obj: 'Getting a treat for being a good boy', skills: index_1.SkillType.Nom,
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
                    { vb: "", obj: "Taking a walk around the complex", skills: index_1.SkillType.Run },
                ],
                difficulty: 4,
            },
            {
                name: 'Dog Park',
                description: 'A safe space to run around, although you can never be too careful.',
                actions: [
                    { vb: "", obj: "Chasing a squeaker!", skills: index_1.SkillType.Play },
                    { vb: "", obj: "Listening to street noises while shivering.", skills: index_1.SkillType.Cower, bonusLevel: 1 },
                    { vb: "", obj: "Claiming the dog park as my own.", skills: index_1.SkillType.Pee, bonusLevel: 2 },
                ],
                difficulty: 5
            },
            {
                name: 'City',
                description: 'A big, loud, scary place.',
                actions: [
                    { vb: "", obj: "Walking to a big grassy area.", skills: index_1.SkillType.Run, weight: 1 },
                    { vb: "", obj: "Going to a resteraunt", skills: index_1.SkillType.Nom, weight: 1 },
                    { vb: "", obj: "Playing at a dog park", skills: index_1.SkillType.Play, bonusLevel: 1 },
        
                ],
                difficulty: 7,
            },
            {
                name: 'Car Ride',
                description: 'Who knows where were going...',
                actions: [
                    { vb: "", obj: "Visiting someone. I dont trust them.",
                        skills: [index_1.SkillType.Sniff, index_1.SkillType.Cower], weight: 3.0 },
                    { vb: "", obj: "Going out to eat.",
                        skills: [index_1.SkillType.Nom, index_1.SkillType.Cower], bonusLevel: .3 },
                    { vb: "", obj: "Backpacking for miles and miles. Its hot out.",
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
                description: 'A secluded bedroom with a huge beg for me to hog.',
                actions: [
                    { vb: '', obj: 'Taking a nice nap in the dark.', skills: [index_1.SkillType.Cower] },
                    { vb: '', obj: 'Snoozin with Gina.',
                        skills: [index_1.SkillType.Cuddle] }
                ],
                difficulty: 12,
            },
            {
                name: 'Living Room',
                description: 'A big open room with lots of people walking around',
                actions: [
                    { vb: '', obj: 'Running to the kitchen for a treat!', skills: [index_1.SkillType.Nom] },
                    { vb: '', obj: 'Playing with my toy.', skills: [index_1.SkillType.Kill],
                        bonusLevel: .5 },
               
                ],
                difficulty: 13,
            },
            {
                name: 'Backyard',
                description: "The perfect backyard with lots of smells and no people",
                actions: [
                    { vb: '', obj: 'Marking my territory.', skills: [index_1.SkillType.Pee] },
                    { vb: '', obj: 'Checking out a smell.', skills: [index_1.SkillType.Sniff], bonusLevel: .5 },
                    { vb: '', obj: 'ZOOMIES!', skills: [index_1.SkillType.Run],
                        bonusLevel: 2, weight: .05, oneShot: action_oneshots_enum_1.OneShotAction.BatKing }
                ],
                difficulty: 14,
            },
            {
                name: 'Go for a Ride',
                description: "I hope we take the truck, its not as spooky as the car",
                actions: [
                    { vb: '', obj: 'Visiting someones scary house', skills: index_1.SkillType.Cower },
                    { vb: '', obj: 'Going for a walk somewhere, maybe chasing a ball or two.', skills: [index_1.SkillType.Run, index_1.SkillType.Kill],
                        bonusLevel: .5 },
                    { vb: '', obj: 'Finding new territory to mark',
                        skills: [index_1.SkillType.Run, index_1.SkillType.Pee], bonusLevel: 1.5 },
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
                description: 'This bed isnt big enough for all of us.',
                actions: [
                    { vb: "", obj: "Being a shaky boy",
                        skills: [index_1.SkillType.Cower, index_1.SkillType.Stealth], bonusLevel: 1 },
                    { vb: "", obj: "Getting a treat for being so cute",
                        skills: [index_1.SkillType.Nom, index_1.SkillType.Cuddle] },
                ],
                difficulty: 17,
            },
            {
                name: 'Leave the Bedroom',
                description: "Theres a whole house on the other side of that door.",
                actions: [
                    { vb: "", obj: "Going potty outside", skills: index_1.SkillType.Pee, weight: .2 },
                    { vb: "", obj: "Cuddling Gina upstairs",                     
                        skills: index_1.SkillType.Cuddle },        
                    { vb: "", obj: "Chasing squeaks in the garage", skills: [index_1.SkillType.Kill, index_1.SkillType.Play],
                        bonusLevel: 1.5 }
                ],
                difficulty: 19,
            },
            {
                name: 'Outside',
                description: "Pretty big, I guess its not that scary though. Sometimes I even want to go for a walk.",
                actions: [
                    { vb: "", obj: "Going for a walk around the block", skills: [index_1.SkillType.Run] },
                    { vb: "", obj: "Finding a good poop spot on a walk", skills: [index_1.SkillType.Pee] },                    
                    { vb: "", obj: "Going to the store", skills: index_1.SkillType.Run,
                        bonusLevel: 1 }
                ],
                difficulty: 21,
            },
            {
                name: 'Car Ride',
                description: 'We could be going anywhere',
                actions: [
                    { vb: "", obj: "Going to doggy social", skills: [index_1.SkillType.Cower, index_1.SkillType.Play] },
                    { vb: "", obj: "Found a stranger with a treat", skills: [index_1.SkillType.Cower, index_1.SkillType.Nom] },           
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
