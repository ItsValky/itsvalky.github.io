

// ----------------------------------- //
// Creator          :           L.Fino //
// Copyright        :           L.Fino //
//                                     //
// CreationDate     :       2018-03-19 //
// ModifyDate       :       2018-03-19 //
//                                     //
// File             :      badgeMap.js //
// Project          :     ValkyChatExt //
// Version          :            0-9-8 //
// ----------------------------------- //






// Variables
// ---------

// Variables for supporter badges
badgeSupporterClass = "<div class='tw-tooltip-wrapper tw-inline' aria-describedby='8c4854e63f312438f8bd390dfa10728a' data-a-target='chat-badge'><a href='https://discord.gg/vf9TzeM' target='_blank' data-a-target='chat-badge'><img alt='Valky Supporter' class='chat-badge' src='"
badgeSupporterT1 = "https://cdn.discordapp.com/attachments/424925517507198977/424945668797366286/bronze_18.png"
badgeSupporterT2 = "https://cdn.discordapp.com/attachments/424925517507198977/424945637398937611/silver_18.png"
badgeSupporterT3 = "https://cdn.discordapp.com/attachments/424925517507198977/424925590756261890/golden_18.png"
badgeSupporterEnd = "'></a><div class='tw-tooltip tw-tooltip--up tw-tooltip--align-center' data-a-target='tw-tooltip-label' role='tooltip' id='8c4854e63f312438f8bd390dfa10728a' style='margin-center: 0.9rem;'>Valky Supporter</div></div>"
badgeDeveloper = "https://cdn.discordapp.com/attachments/424925517507198977/424956942318829568/dev_18.png'></a><div class='tw-tooltip tw-tooltip--up tw-tooltip--align-center' data-a-target='tw-tooltip-label' role='tooltip' id='8c4854e63f312438f8bd390dfa10728a' style='margin-center: 0.9rem;'>Valky Developer</div></div>"






// Badge Maps
// ----------

// Supporter map for all tiers
var badgeMap = {
    badgeSupT1: new Set(),
    badgeSupT2: new Set(),
    badgeSupT3: new Set(),
    badgeDev: new Set()
};


// Tier1 Supporter
badgeMap.badgeSupT1.add("");

// Tier2 Supporter
badgeMap.badgeSupT2.add("");

// Tier3 Supporter
badgeMap.badgeSupT3.add("MissValky");

// Developer Badge
badgeMap.badgeDev.add("バルキリー (mercytv)");
badgeMap.badgeDev.add("Avendor7");

