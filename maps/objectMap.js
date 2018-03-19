

// ----------------------------------- //
// Creator          :           L.Fino //
// Copyright        :           L.Fino //
//                                     //
// CreationDate     :       2018-03-19 //
// ModifyDate       :       2018-03-19 //
//                                     //
// File             :     objectMap.js //
// Project          :     ValkyChatExt //
// Version          :            0-9-8 //
// ----------------------------------- //






// Variables
// ---------

// Variables for emote-tooltips
emoteClass = "<div class='tw-tooltip-wrapper tw-inline' aria-describedby='8c4854e63f312438f8bd390dfa10728a' data-a-target='emote-name'><img class='chat-image chat-line__message--emote tw-inline-block' src='"
emoteTooltip = "' alt='"
emotePreview = "'><div class='tw-tooltip tw-tooltip--up tw-tooltip--align-center' data-a-target='tw-tooltip-label' role='tooltip' id='8c4854e63f312438f8bd390dfa10728a' style='margin-center: 0.9rem;'><img src='"
emoteLabel = "'/><br>Emote: "
emoteEndDev = "<br>Valky Dev Emote</div></div>"
emoteEndBttv = "<br>BTTV Global Emote</div></div>"
emoteEnd = "<br>Valky Global Emote</div></div>"






// Object Maps
// -----------

// Object map for all emotes
var objMap = {}

// List of local emotes
var objMapLocal = {
    devTest:(emoteClass + chrome.extension.getURL("assets/test.png") + emotePreview + chrome.extension.getURL("assets/devTest.png") + emoteLabel + "devTest" + emoteEndDev)
};

// List of online dev emotes
var objMapDev = {
    devEZ:(emoteClass + "https://cdn.discordapp.com/emojis/424159318171058186.png" + emotePreview + "https://cdn.discordapp.com/attachments/424586965330034688/424590323822362625/devEZ.png" + emoteLabel + "devEZ" + emoteEndDev),
    devTrash:(emoteClass + "https://cdn.discordapp.com/emojis/424159318171058176.png" + emotePreview + "https://cdn.discordapp.com/attachments/424586965330034688/424587606647373834/devTrash.png" + emoteLabel + "devTrash" + emoteEndDev),
    devCool:(emoteClass + "https://cdn.discordapp.com/emojis/424159318011805697.png" + emotePreview + "https://cdn.discordapp.com/attachments/424586965330034688/424587852438044672/devCool.png" + emoteLabel + "devCool" + emoteEndDev),
    devLUL:(emoteClass + "https://cdn.discordapp.com/emojis/424523268737859595.png" + emotePreview + "https://cdn.discordapp.com/attachments/424586965330034688/424587859022970895/devLUL.png" + emoteLabel + "devLUL" + emoteEndDev),
    devKappa:(emoteClass + "https://cdn.discordapp.com/emojis/424569995368857612.png" + emotePreview + "https://cdn.discordapp.com/attachments/424586965330034688/424587479384064020/devKappa.png" + emoteLabel + "devKappa" + emoteEndDev),
    devTea:(emoteClass + "https://cdn.discordapp.com/attachments/424577341562290196/424577386542268419/tea.png" + emotePreview + "https://cdn.discordapp.com/attachments/424586965330034688/424592721294917637/devTea.png" + emoteLabel + "devTea" + emoteEndDev)
};

// List of BTTV emotes
var objMapBttv = {
    OhMyGoodness:(emoteClass + "https://cdn.betterttv.net/emote/54fa925e01e468494b85b54d/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fa925e01e468494b85b54d/3x" + emoteLabel + "OhMyGoodness" + emoteEndBttv),
    PancakeMix:(emoteClass + "https://cdn.betterttv.net/emote/54fa927801e468494b85b54e/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fa927801e468494b85b54e/3x" + emoteLabel + "PancakeMix" + emoteEndBttv),
    PedoBear:(emoteClass + "https://cdn.betterttv.net/emote/54fa928f01e468494b85b54f/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fa928f01e468494b85b54f/3x" + emoteLabel + "PedoBear" + emoteEndBttv),
    PokerFace:(emoteClass + "https://cdn.betterttv.net/emote/54fa92a701e468494b85b550/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fa92a701e468494b85b550/3x" + emoteLabel + "PokerFace" + emoteEndBttv),
    RageFace:(emoteClass + "https://cdn.betterttv.net/emote/54fa92d701e468494b85b552/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fa92d701e468494b85b552/3x" + emoteLabel + "RageFace" + emoteEndBttv),
    RebeccaBlack:(emoteClass + "https://cdn.betterttv.net/emote/54fa92ee01e468494b85b553/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fa92ee01e468494b85b553/3x" + emoteLabel + "RebeccaBlack" + emoteEndBttv),
    ":tf:":(emoteClass + "https://cdn.betterttv.net/emote/54fa8f1401e468494b85b537/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fa8f1401e468494b85b537/3x" + emoteLabel + ":tf:" + emoteEndBttv),
    aPliS:(emoteClass + "https://cdn.betterttv.net/emote/54fa8f4201e468494b85b538/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fa8f4201e468494b85b538/3x" + emoteLabel + "aPliS" + emoteEndBttv),
    CiGrip:(emoteClass + "https://cdn.betterttv.net/emote/54fa8fce01e468494b85b53c/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fa8fce01e468494b85b53c/3x" + emoteLabel + "CiGrip" + emoteEndBttv),
    CHAccepted:(emoteClass + "https://cdn.betterttv.net/emote/54fa8fb201e468494b85b53b/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fa8fb201e468494b85b53b/3x" + emoteLabel + "CHAccepted" + emoteEndBttv),
    FuckYea:(emoteClass + "https://cdn.betterttv.net/emote/54fa90d601e468494b85b544/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fa90d601e468494b85b544/3x" + emoteLabel + "FuckYea" + emoteEndBttv),
    DatSauce:(emoteClass + "https://cdn.betterttv.net/emote/54fa903b01e468494b85b53f/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fa903b01e468494b85b53f/3x" + emoteLabel + "DatSauce" + emoteEndBttv),
    ForeverAlone:(emoteClass + "https://cdn.betterttv.net/emote/54fa909b01e468494b85b542/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fa909b01e468494b85b542/3x" + emoteLabel + "ForeverAlone" + emoteEndBttv),
    GabeN:(emoteClass + "https://cdn.betterttv.net/emote/54fa90ba01e468494b85b543/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fa90ba01e468494b85b543/3x" + emoteLabel + "GabeN" + emoteEndBttv),
    HailHelix:(emoteClass + "https://cdn.betterttv.net/emote/54fa90f201e468494b85b545/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fa90f201e468494b85b545/3x" + emoteLabel + "HailHelix" + emoteEndBttv),
    HerbPerve:(emoteClass + "https://cdn.betterttv.net/emote/54fa913701e468494b85b546/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fa913701e468494b85b546/3x" + emoteLabel + "HerbPerve" + emoteEndBttv),
    iDog:(emoteClass + "https://cdn.betterttv.net/emote/54fa919901e468494b85b548/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fa919901e468494b85b548/3x" + emoteLabel + "iDog" + emoteEndBttv),
    rStrike:(emoteClass + "https://cdn.betterttv.net/emote/54fa930801e468494b85b554/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fa930801e468494b85b554/3x" + emoteLabel + "rStrike" + emoteEndBttv),
    ShoopDaWhoop:(emoteClass + "https://cdn.betterttv.net/emote/54fa932201e468494b85b555/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fa932201e468494b85b555/3x" + emoteLabel + "ShoopDaWhoop" + emoteEndBttv),
    SwedSwag:(emoteClass + "https://cdn.betterttv.net/emote/54fa9cc901e468494b85b565/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fa9cc901e468494b85b565/3x" + emoteLabel + "SwedSwag" + emoteEndBttv),
    "M&Mjc":(emoteClass + "https://cdn.betterttv.net/emote/54fab45f633595ca4c713abc/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fab45f633595ca4c713abc/3x" + emoteLabel + "M&Mjc" + emoteEndBttv),
    bttvNice:(emoteClass + "https://cdn.betterttv.net/emote/54fab7d2633595ca4c713abf/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fab7d2633595ca4c713abf/3x" + emoteLabel + "bttvNice" + emoteEndBttv),
    TopHam:(emoteClass + "https://cdn.betterttv.net/emote/54fa934001e468494b85b556/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fa934001e468494b85b556/3x" + emoteLabel + "TopHam" + emoteEndBttv),
    TwaT:(emoteClass + "https://cdn.betterttv.net/emote/54fa935601e468494b85b557/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fa935601e468494b85b557/3x" + emoteLabel + "TwaT" + emoteEndBttv),
    WhatAYolk:(emoteClass + "https://cdn.betterttv.net/emote/54fa93d001e468494b85b559/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fa93d001e468494b85b559/3x" + emoteLabel + "WhatAYolk" + emoteEndBttv),
    WatChuSay:(emoteClass + "https://cdn.betterttv.net/emote/54fa99b601e468494b85b55d/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fa99b601e468494b85b55d/3x" + emoteLabel + "WatChuSay" + emoteEndBttv),
    Blackappa:(emoteClass + "https://cdn.betterttv.net/emote/54faa50d01e468494b85b578/1x" + emotePreview + "https://cdn.betterttv.net/emote/54faa50d01e468494b85b578/3x" + emoteLabel + "Blackappa" + emoteEndBttv),
    DogeWitIt:(emoteClass + "https://cdn.betterttv.net/emote/54faa52f01e468494b85b579/1x" + emotePreview + "https://cdn.betterttv.net/emote/54faa52f01e468494b85b579/3x" + emoteLabel + "DogeWitIt" + emoteEndBttv),
    BadAss:(emoteClass + "https://cdn.betterttv.net/emote/54faa4f101e468494b85b577/1x" + emotePreview + "https://cdn.betterttv.net/emote/54faa4f101e468494b85b577/3x" + emoteLabel + "BadAss" + emoteEndBttv),
    SavageJerky:(emoteClass + "https://cdn.betterttv.net/emote/54fb603201abde735115ddb5/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fb603201abde735115ddb5/3x" + emoteLabel + "SavageJerky" + emoteEndBttv),
    Zappa:(emoteClass + "https://cdn.betterttv.net/emote/5622aaef3286c42e57d8e4ab/1x" + emotePreview + "https://cdn.betterttv.net/emote/5622aaef3286c42e57d8e4ab/3x" + emoteLabel + "Zappa" + emoteEndBttv),
    tehPoleCat:(emoteClass + "https://cdn.betterttv.net/emote/566ca11a65dbbdab32ec0558/1x" + emotePreview + "https://cdn.betterttv.net/emote/566ca11a65dbbdab32ec0558/3x" + emoteLabel + "tehPoleCat" + emoteEndBttv),
    AngelThump:(emoteClass + "https://cdn.betterttv.net/emote/566ca1a365dbbdab32ec055b/1x" + emotePreview + "https://cdn.betterttv.net/emote/566ca1a365dbbdab32ec055b/3x" + emoteLabel + "AngelThump" + emoteEndBttv),
    Kaged:(emoteClass + "https://cdn.betterttv.net/emote/54fbf11001abde735115de66/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fbf11001abde735115de66/3x" + emoteLabel + "Kaged" + emoteEndBttv),
    HHydro:(emoteClass + "https://cdn.betterttv.net/emote/54fbef6601abde735115de57/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fbef6601abde735115de57/3x" + emoteLabel + "HHydro" + emoteEndBttv),
    TaxiBro:(emoteClass + "https://cdn.betterttv.net/emote/54fbefeb01abde735115de5b/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fbefeb01abde735115de5b/3x" + emoteLabel + "TaxiBro" + emoteEndBttv),
    BroBalt:(emoteClass + "https://cdn.betterttv.net/emote/54fbf00a01abde735115de5c/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fbf00a01abde735115de5c/3x" + emoteLabel + "BroBalt" + emoteEndBttv),
    ButterSauce:(emoteClass + "https://cdn.betterttv.net/emote/54fbf02f01abde735115de5d/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fbf02f01abde735115de5d/3x" + emoteLabel + "ButterSauce" + emoteEndBttv),
    BaconEffect:(emoteClass + "https://cdn.betterttv.net/emote/54fbf05a01abde735115de5e/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fbf05a01abde735115de5e/3x" + emoteLabel + "BaconEffect" + emoteEndBttv),
    SuchFraud:(emoteClass + "https://cdn.betterttv.net/emote/54fbf07e01abde735115de5f/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fbf07e01abde735115de5f/3x" + emoteLabel + "SuchFraud" + emoteEndBttv),
    CandianRage:(emoteClass + "https://cdn.betterttv.net/emote/54fbf09c01abde735115de61/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fbf09c01abde735115de61/3x" + emoteLabel + "CandianRage" + emoteEndBttv),
    "She'llBeRight":(emoteClass + "https://cdn.betterttv.net/emote/54fbefc901abde735115de5a/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fbefc901abde735115de5a/3x" + emoteLabel + "She'llBeRight" + emoteEndBttv),
    OhhhKee:(emoteClass + "https://cdn.betterttv.net/emote/54fbefa901abde735115de59/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fbefa901abde735115de59/3x" + emoteLabel + "OhhhKee" + emoteEndBttv),
    "D:":(emoteClass + "https://cdn.betterttv.net/emote/55028cd2135896936880fdd7/1x" + emotePreview + "https://cdn.betterttv.net/emote/55028cd2135896936880fdd7/3x" + emoteLabel + "D:" + emoteEndBttv),
    SexPanda:(emoteClass + "https://cdn.betterttv.net/emote/5502874d135896936880fdd2/1x" + emotePreview + "https://cdn.betterttv.net/emote/5502874d135896936880fdd2/3x" + emoteLabel + "SexPanda" + emoteEndBttv),
    "(poolparty)":(emoteClass + "https://cdn.betterttv.net/emote/5502883d135896936880fdd3/1x" + emotePreview + "https://cdn.betterttv.net/emote/5502883d135896936880fdd3/3x" + emoteLabel + "(poolparty)" + emoteEndBttv),
    ":'(":(emoteClass + "https://cdn.betterttv.net/emote/55028923135896936880fdd5/1x" + emotePreview + "https://cdn.betterttv.net/emote/55028923135896936880fdd5/3x" + emoteLabel + ":'(" + emoteEndBttv),
    "(puke)":(emoteClass + "https://cdn.betterttv.net/emote/550288fe135896936880fdd4/1x" + emotePreview + "https://cdn.betterttv.net/emote/550288fe135896936880fdd4/3x" + emoteLabel + "(puke)" + emoteEndBttv),
    bttvWink:(emoteClass + "https://cdn.betterttv.net/emote/550292c0135896936880fdef/1x" + emotePreview + "https://cdn.betterttv.net/emote/550292c0135896936880fdef/3x" + emoteLabel + "bttvWink" + emoteEndBttv),
    bttvAngry:(emoteClass + "https://cdn.betterttv.net/emote/550291a3135896936880fde3/1x" + emotePreview + "https://cdn.betterttv.net/emote/550291a3135896936880fde3/3x" + emoteLabel + "bttvAngry" + emoteEndBttv),
    bttvConfused:(emoteClass + "https://cdn.betterttv.net/emote/550291be135896936880fde4/1x" + emotePreview + "https://cdn.betterttv.net/emote/550291be135896936880fde4/3x" + emoteLabel + "bttvConfused" + emoteEndBttv),
    bttvCool:(emoteClass + "https://cdn.betterttv.net/emote/550291d4135896936880fde5/1x" + emotePreview + "https://cdn.betterttv.net/emote/550291d4135896936880fde5/3x" + emoteLabel + "bttvCool" + emoteEndBttv),
    bttvHappy:(emoteClass + "https://cdn.betterttv.net/emote/55029200135896936880fde7/1x" + emotePreview + "https://cdn.betterttv.net/emote/55029200135896936880fde7/3x" + emoteLabel + "bttvHappy" + emoteEndBttv),
    bttvSad:(emoteClass + "https://cdn.betterttv.net/emote/5502925d135896936880fdea/1x" + emotePreview + "https://cdn.betterttv.net/emote/5502925d135896936880fdea/3x" + emoteLabel + "bttvSad" + emoteEndBttv),
    bttvSleep:(emoteClass + "https://cdn.betterttv.net/emote/55029272135896936880fdeb/1x" + emotePreview + "https://cdn.betterttv.net/emote/55029272135896936880fdeb/3x" + emoteLabel + "bttvSleep" + emoteEndBttv),
    bttvSurprised:(emoteClass + "https://cdn.betterttv.net/emote/55029288135896936880fdec/1x" + emotePreview + "https://cdn.betterttv.net/emote/55029288135896936880fdec/3x" + emoteLabel + "bttvSurprised" + emoteEndBttv),
    bttvTongue:(emoteClass + "https://cdn.betterttv.net/emote/5502929b135896936880fded/1x" + emotePreview + "https://cdn.betterttv.net/emote/5502929b135896936880fded/3x" + emoteLabel + "bttvTongue" + emoteEndBttv),
    bttvUnsure:(emoteClass + "https://cdn.betterttv.net/emote/550292ad135896936880fdee/1x" + emotePreview + "https://cdn.betterttv.net/emote/550292ad135896936880fdee/3x" + emoteLabel + "bttvUnsure" + emoteEndBttv),
    bttvGrin:(emoteClass + "https://cdn.betterttv.net/emote/550291ea135896936880fde6/1x" + emotePreview + "https://cdn.betterttv.net/emote/550291ea135896936880fde6/3x" + emoteLabel + "bttvGrin" + emoteEndBttv),
    bttvHeart:(emoteClass + "https://cdn.betterttv.net/emote/55029215135896936880fde8/1x" + emotePreview + "https://cdn.betterttv.net/emote/55029215135896936880fde8/3x" + emoteLabel + "bttvHeart" + emoteEndBttv),
    bttvTwink:(emoteClass + "https://cdn.betterttv.net/emote/55029247135896936880fde9/1x" + emotePreview + "https://cdn.betterttv.net/emote/55029247135896936880fde9/3x" + emoteLabel + "bttvTwink" + emoteEndBttv),
    VisLaud:(emoteClass + "https://cdn.betterttv.net/emote/550352766f86a5b26c281ba2/1x" + emotePreview + "https://cdn.betterttv.net/emote/550352766f86a5b26c281ba2/3x" + emoteLabel + "VisLaud" + emoteEndBttv),
    "(chompy)":(emoteClass + "https://cdn.betterttv.net/emote/550b225fff8ecee922d2a3b2/1x" + emotePreview + "https://cdn.betterttv.net/emote/550b225fff8ecee922d2a3b2/3x" + emoteLabel + "(chompy)" + emoteEndBttv),
    SoSerious:(emoteClass + "https://cdn.betterttv.net/emote/5514afe362e6bd0027aede8a/1x" + emotePreview + "https://cdn.betterttv.net/emote/5514afe362e6bd0027aede8a/3x" + emoteLabel + "SoSerious" + emoteEndBttv),
    BatKappa:(emoteClass + "https://cdn.betterttv.net/emote/550b6b07ff8ecee922d2a3e7/1x" + emotePreview + "https://cdn.betterttv.net/emote/550b6b07ff8ecee922d2a3e7/3x" + emoteLabel + "BatKappa" + emoteEndBttv),
    KaRappa:(emoteClass + "https://cdn.betterttv.net/emote/550b344bff8ecee922d2a3c1/1x" + emotePreview + "https://cdn.betterttv.net/emote/550b344bff8ecee922d2a3c1/3x" + emoteLabel + "KaRappa" + emoteEndBttv),
    YetiZ:(emoteClass + "https://cdn.betterttv.net/emote/55189a5062e6bd0027aee082/1x" + emotePreview + "https://cdn.betterttv.net/emote/55189a5062e6bd0027aee082/3x" + emoteLabel + "YetiZ" + emoteEndBttv),
    miniJulia:(emoteClass + "https://cdn.betterttv.net/emote/552d2fc2236a1aa17a996c5b/1x" + emotePreview + "https://cdn.betterttv.net/emote/552d2fc2236a1aa17a996c5b/3x" + emoteLabel + "miniJulia" + emoteEndBttv),
    FishMoley:(emoteClass + "https://cdn.betterttv.net/emote/566ca00f65dbbdab32ec0544/1x" + emotePreview + "https://cdn.betterttv.net/emote/566ca00f65dbbdab32ec0544/3x" + emoteLabel + "FishMoley" + emoteEndBttv),
    Hhhehehe:(emoteClass + "https://cdn.betterttv.net/emote/566ca02865dbbdab32ec0547/1x" + emotePreview + "https://cdn.betterttv.net/emote/566ca02865dbbdab32ec0547/3x" + emoteLabel + "Hhhehehe" + emoteEndBttv),
    KKona:(emoteClass + "https://cdn.betterttv.net/emote/566ca04265dbbdab32ec054a/1x" + emotePreview + "https://cdn.betterttv.net/emote/566ca04265dbbdab32ec054a/3x" + emoteLabel + "KKona" + emoteEndBttv),
    OhGod:(emoteClass + "https://cdn.betterttv.net/emote/566ca07965dbbdab32ec0552/1x" + emotePreview + "https://cdn.betterttv.net/emote/566ca07965dbbdab32ec0552/3x" + emoteLabel + "OhGod" + emoteEndBttv),
    PoleDoge:(emoteClass + "https://cdn.betterttv.net/emote/566ca09365dbbdab32ec0555/1x" + emotePreview + "https://cdn.betterttv.net/emote/566ca09365dbbdab32ec0555/3x" + emoteLabel + "PoleDoge" + emoteEndBttv),
    motnahP:(emoteClass + "https://cdn.betterttv.net/emote/55288e390fa35376704a4c7a/1x" + emotePreview + "https://cdn.betterttv.net/emote/55288e390fa35376704a4c7a/3x" + emoteLabel + "motnahP" + emoteEndBttv),
    sosGame:(emoteClass + "https://cdn.betterttv.net/emote/553b48a21f145f087fc15ca6/1x" + emotePreview + "https://cdn.betterttv.net/emote/553b48a21f145f087fc15ca6/3x" + emoteLabel + "sosGame" + emoteEndBttv),
    CruW:(emoteClass + "https://cdn.betterttv.net/emote/55471c2789d53f2d12781713/1x" + emotePreview + "https://cdn.betterttv.net/emote/55471c2789d53f2d12781713/3x" + emoteLabel + "CruW" + emoteEndBttv),
    RarePepe:(emoteClass + "https://cdn.betterttv.net/emote/555015b77676617e17dd2e8e/1x" + emotePreview + "https://cdn.betterttv.net/emote/555015b77676617e17dd2e8e/3x" + emoteLabel + "RarePepe" + emoteEndBttv),
    iamsocal:(emoteClass + "https://cdn.betterttv.net/emote/54fbef8701abde735115de58/1x" + emotePreview + "https://cdn.betterttv.net/emote/54fbef8701abde735115de58/3x" + emoteLabel + "iamsocal" + emoteEndBttv),
    haHAA:(emoteClass + "https://cdn.betterttv.net/emote/555981336ba1901877765555/1x" + emotePreview + "https://cdn.betterttv.net/emote/555981336ba1901877765555/3x" + emoteLabel + "haHAA" + emoteEndBttv),
    FeelsBirthdayMan:(emoteClass + "https://cdn.betterttv.net/emote/55b6524154eefd53777b2580/1x" + emotePreview + "https://cdn.betterttv.net/emote/55b6524154eefd53777b2580/3x" + emoteLabel + "FeelsBirthdayMan" + emoteEndBttv),
    RonSmug:(emoteClass + "https://cdn.betterttv.net/emote/55f324c47f08be9f0a63cce0/1x" + emotePreview + "https://cdn.betterttv.net/emote/55f324c47f08be9f0a63cce0/3x" + emoteLabel + "RonSmug" + emoteEndBttv),
    KappaCool:(emoteClass + "https://cdn.betterttv.net/emote/560577560874de34757d2dc0/1x" + emotePreview + "https://cdn.betterttv.net/emote/560577560874de34757d2dc0/3x" + emoteLabel + "KappaCool" + emoteEndBttv),
    FeelsBadMan:(emoteClass + "https://cdn.betterttv.net/emote/566c9fc265dbbdab32ec053b/1x" + emotePreview + "https://cdn.betterttv.net/emote/566c9fc265dbbdab32ec053b/3x" + emoteLabel + "FeelsBadMan" + emoteEndBttv),
    BasedGod:(emoteClass + "https://cdn.betterttv.net/emote/566c9eeb65dbbdab32ec052b/1x" + emotePreview + "https://cdn.betterttv.net/emote/566c9eeb65dbbdab32ec052b/3x" + emoteLabel + "BasedGod" + emoteEndBttv),
    bUrself:(emoteClass + "https://cdn.betterttv.net/emote/566c9f3b65dbbdab32ec052e/1x" + emotePreview + "https://cdn.betterttv.net/emote/566c9f3b65dbbdab32ec052e/3x" + emoteLabel + "bUrself" + emoteEndBttv),
    ConcernDoge:(emoteClass + "https://cdn.betterttv.net/emote/566c9f6365dbbdab32ec0532/1x" + emotePreview + "https://cdn.betterttv.net/emote/566c9f6365dbbdab32ec0532/3x" + emoteLabel + "ConcernDoge" + emoteEndBttv),
    FapFapFap:(emoteClass + "https://cdn.betterttv.net/emote/566c9f9265dbbdab32ec0538/1x" + emotePreview + "https://cdn.betterttv.net/emote/566c9f9265dbbdab32ec0538/3x" + emoteLabel + "FapFapFap" + emoteEndBttv),
    FeelsGoodMan:(emoteClass + "https://cdn.betterttv.net/emote/566c9fde65dbbdab32ec053e/1x" + emotePreview + "https://cdn.betterttv.net/emote/566c9fde65dbbdab32ec053e/3x" + emoteLabel + "FeelsGoodMan" + emoteEndBttv),
    FireSpeed:(emoteClass + "https://cdn.betterttv.net/emote/566c9ff365dbbdab32ec0541/1x" + emotePreview + "https://cdn.betterttv.net/emote/566c9ff365dbbdab32ec0541/3x" + emoteLabel + "FireSpeed" + emoteEndBttv),
    NaM:(emoteClass + "https://cdn.betterttv.net/emote/566ca06065dbbdab32ec054e/1x" + emotePreview + "https://cdn.betterttv.net/emote/566ca06065dbbdab32ec054e/3x" + emoteLabel + "NaM" + emoteEndBttv),
    SourPls:(emoteClass + "https://cdn.betterttv.net/emote/566ca38765dbbdab32ec0560/1x" + emotePreview + "https://cdn.betterttv.net/emote/566ca38765dbbdab32ec0560/3x" + emoteLabel + "SourPls" + emoteEndBttv),
    LuL:(emoteClass + "https://cdn.betterttv.net/emote/567b00c61ddbe1786688a633/1x" + emotePreview + "https://cdn.betterttv.net/emote/567b00c61ddbe1786688a633/3x" + emoteLabel + "LuL" + emoteEndBttv),
    SaltyCorn:(emoteClass + "https://cdn.betterttv.net/emote/56901914991f200c34ffa656/1x" + emotePreview + "https://cdn.betterttv.net/emote/56901914991f200c34ffa656/3x" + emoteLabel + "SaltyCorn" + emoteEndBttv),
    FCreep:(emoteClass + "https://cdn.betterttv.net/emote/56d937f7216793c63ec140cb/1x" + emotePreview + "https://cdn.betterttv.net/emote/56d937f7216793c63ec140cb/3x" + emoteLabel + "FCreep" + emoteEndBttv),
    VapeNation:(emoteClass + "https://cdn.betterttv.net/emote/56f5be00d48006ba34f530a4/1x" + emotePreview + "https://cdn.betterttv.net/emote/56f5be00d48006ba34f530a4/3x" + emoteLabel + "VapeNation" + emoteEndBttv),
    ariW:(emoteClass + "https://cdn.betterttv.net/emote/56fa09f18eff3b595e93ac26/1x" + emotePreview + "https://cdn.betterttv.net/emote/56fa09f18eff3b595e93ac26/3x" + emoteLabel + "ariW" + emoteEndBttv),
    notsquishY:(emoteClass + "https://cdn.betterttv.net/emote/5709ab688eff3b595e93c595/1x" + emotePreview + "https://cdn.betterttv.net/emote/5709ab688eff3b595e93c595/3x" + emoteLabel + "notsquishY" + emoteEndBttv),
    FeelsAmazingMan:(emoteClass + "https://cdn.betterttv.net/emote/5733ff12e72c3c0814233e20/1x" + emotePreview + "https://cdn.betterttv.net/emote/5733ff12e72c3c0814233e20/3x" + emoteLabel + "FeelsAmazingMan" + emoteEndBttv),
    DuckerZ:(emoteClass + "https://cdn.betterttv.net/emote/573d38b50ffbf6cc5cc38dc9/1x" + emotePreview + "https://cdn.betterttv.net/emote/573d38b50ffbf6cc5cc38dc9/3x" + emoteLabel + "DuckerZ" + emoteEndBttv),
    SqShy:(emoteClass + "https://cdn.betterttv.net/emote/59cf182fcbe2693d59d7bf46/1x" + emotePreview + "https://cdn.betterttv.net/emote/59cf182fcbe2693d59d7bf46/3x" + emoteLabel + "SqShy" + emoteEndBttv),
    Wowee:(emoteClass + "https://cdn.betterttv.net/emote/58d2e73058d8950a875ad027/1x" + emotePreview + "https://cdn.betterttv.net/emote/58d2e73058d8950a875ad027/3x" + emoteLabel + "Wowee" + emoteEndBttv),
};

// List of all other emotes
var objMapOthers = {
    PagChomp:(emoteClass + "https://cdn.discordapp.com/emojis/424565494901768193.png" + emotePreview + "https://cdn.discordapp.com/attachments/424586965330034688/424589805670891532/devPog.png" + emoteLabel + "PagChomp" + emoteEnd),
    HealsBadMan:(emoteClass + "https://cdn.discordapp.com/emojis/424595609119358976.png" + emotePreview + "https://cdn.discordapp.com/attachments/424586965330034688/424587483771174913/HealsBadMan.png" + emoteLabel + "HealsBadMan" + emoteEnd)
};

// Add all emotes in one object
jQuery.extend(objMap, objMapLocal);
jQuery.extend(objMap, objMapDev);
jQuery.extend(objMap, objMapOthers);
jQuery.extend(objMap, objMapBttv);
