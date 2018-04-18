






// URL
badgeMapURL = "https://itsvalky.github.io/VCE/badgeMap.json"

// Supporter arrays
badgeMapSupT1Array = []
badgeMapSupT2Array = []
badgeMapSupT3Array = []
badgeMapDevArray = []


// Fill arrays
$.get(badgeMapURL, function(data) {

    var badgeData = JSON.stringify(data)
    badgeMap = $.parseJSON(badgeData);

    $.each(badgeMap, function(subindex, subvalue){
        
        badgeMapSupT1Array = subvalue.badgeMapSupT1;
        badgeMapSupT2Array = subvalue.badgeMapSupT2;
        badgeMapSupT3Array = subvalue.badgeMapSupT3;
        badgeMapDevArray = subvalue.badgeMapDev;
        
    });

});


// Check user tier
function userSupporterT1(userName) {
    return badgeMapSupT1Array.includes(userName);
}
function userSupporterT2(userName) {
    return badgeMapSupT2Array.includes(userName);
}
function userSupporterT3(userName) {
    return badgeMapSupT3Array.includes(userName);
}
function userSupporterDev(userName) {
    return badgeMapDevArray.includes(userName);
}









// add recommended channel
var queryChannelName = (window.location.search);
if (queryChannelName.includes("?channel")) {

    recChannelName = queryChannelName.replace("?channel=", "")
    $('#rec-channel').val(recChannelName);

}










// add own channel name
if (Cookies.get("twitchLoggedIn") == 1) {

    userLogin = Cookies.get("userLogin")
    userImage = Cookies.get("userImage")
    userDisplay = Cookies.get("userDisplay")
    
    $('#own-channel').val(userLogin);

    setTimeout(function () {

        if (userSupporterT1(userLogin)) {
            $('.img-fluid').after('<div class="supporter-confirm text-center pull-down"><b>Your current VCE-Supporter status:</b> Bronze Supporter</div>')
        }
        else if (userSupporterT2(userDisplay)) {
            $('.img-fluid').after('<div class="supporter-confirm text-center pull-down"><b>Your current VCE-Supporter status:</b> Silver Supporter</div>')
        }
        else if (userSupporterT3(userDisplay)) {
            $('.img-fluid').after('<div class="supporter-confirm text-center pull-down"><b>Your current VCE-Supporter status:</b> Gold Supporter</div>')
        }
        else if (userSupporterDev(userDisplay)) {
            $('.img-fluid').after('<div class="supporter-confirm text-center pull-down"><b>Your current VCE-Supporter status:</b> Developer</div>')
        }

    }, 500);



} 










// Click donation button - 2$
$(document).on('click', '.vce-support-2', function() {

	var inputRecChannel = $('#rec-channel').val();
    var inputOwnChannel = $('#own-channel').val();
    var inputTier = "2"
    
    sendToDropbox(inputRecChannel, inputOwnChannel, inputTier);

});










// Click donation button - 5$
$(document).on('click', '.vce-support-5', function() {

	var inputRecChannel = $('#rec-channel').val();
    var inputOwnChannel = $('#own-channel').val();
    var inputTier = "5"
    
    sendToDropbox(inputRecChannel, inputOwnChannel, inputTier);

});










// Click donation button - 10$
$(document).on('click', '.vce-support-10', function() {

	var inputRecChannel = $('#rec-channel').val();
    var inputOwnChannel = $('#own-channel').val();
    var inputTier = "10"
    
    sendToDropbox(inputRecChannel, inputOwnChannel, inputTier);

});










// Update files on dropbox
function sendToDropbox(rec, own, tier) {

    var path = "/supporter/" + tier + "/" + own + ".txt";
    var content = "Recommended by: " + rec + " | Own channel: " + own + " | Donation Tier: $" + tier;
    var dropboxAPI = "k9oBdIXLvLAAAAAAAAAADjJ9D6MwllYWdPZK6JDlNk9rIMz3L3X8LXpeGDeLR4GG"
    var uploadUrl = "https://content.dropboxapi.com/2/files/upload"
    var result;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            result = xhr.responseText;
            //console.log(result);
        }
    };

    xhr.open("POST", uploadUrl, true);
    xhr.setRequestHeader("Authorization", "Bearer " + dropboxAPI);
    xhr.setRequestHeader("Content-type", "application/octet-stream");
    xhr.setRequestHeader("Dropbox-API-Arg", '{"path": "' + path + '"}');
    xhr.send(content);

}


