









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