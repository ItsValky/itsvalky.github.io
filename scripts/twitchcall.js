





if (Cookies.get("twitchLoggedIn") == 1) {

    userLogin = Cookies.get("userLogin")
    userImage = Cookies.get("userImage")
    userDisplay = Cookies.get("userDisplay")

    $('.login-area-link').remove();
    $('.login-area').append('<img class="login-area-image" src="' + userImage + '"><label class="login-area-name">' + userDisplay + '</label>')

}







if (document.location.hash) {

    getUserData ();

}





function getUserData () {
    
    rawHash = document.location.hash;
    accessToken = rawHash.replace(/#access_token=|&scope=/g, "");

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            userData = xhr.response;
            parseUserData(userData);
        }
    }

    xhr.open('GET', 'https://api.twitch.tv/helix/users');
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xhr.setRequestHeader('Client-Id', 'szg9bkjyvnowb5njuznvrfeqqqyvfv');
    xhr.send();

}





function parseUserData(data) {
    
    $.each(JSON.parse(data), function(subkey, subval) {
        $.each(subval, function(subSubKey, subSubVal) {
            $.each(subSubVal, function(finalKey, finalVal) {

                Cookies.set("twitchLoggedIn", 1)

                if (finalKey == "login") {
                    userLogin = finalVal
                    Cookies.set("userLogin", userLogin)
                }

                if (finalKey == "profile_image_url") {
                    userImage = finalVal
                    Cookies.set("userImage", userImage)
                }

                if (finalKey == "display_name") {
                    userDisplay = finalVal
                    Cookies.set("userDisplay", userDisplay)
                }

            });
        });
    });

    $('.login-area-link').remove();
    $('.login-area').append('<img class="login-area-image" src="' + userImage + '"><label class="login-area-name">' + userDisplay + '</label>')

}



