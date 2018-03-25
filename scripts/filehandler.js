


// Global variables
var _URL = window.URL || window.webkitURL;
var dropboxToken = "k9oBdIXLvLAAAAAAAAAADjJ9D6MwllYWdPZK6JDlNk9rIMz3L3X8LXpeGDeLR4GG"



// Check if child is empty
function isEmpty(el) {
    return !$.trim(el.html())
}









// File Upload for 28x28 Images
// ----------------------------

$("#fileinput-28").change(function(e) {
    var file, img;

    if (isEmpty($('#gallery-28'))) {

        if ((file = this.files[0])) {
            
            fileType = file.type.replace("image/", "");
            if (fileType != "png" || fileType != "gif") {
                alert("Not a valid image type. PNG and GIF are supported.");
            } else {

                img = new Image();
                img.onload = function() {

                    if (this.width == "28") {
                        if (this.height == "28"){
                            
                            var xhr = new XMLHttpRequest();

                            xhr.upload.onprogress = function(evt) {
                                var percentComplete = parseInt(100.0 * evt.loaded / evt.total);
                                // Upload in progress
                            };

                            xhr.onload = function() {
                                if (xhr.status === 200) {
                                    var fileInfo = JSON.parse(xhr.response);
                                    // Upload succeeded
                                }
                                else {
                                    var errorMessage = xhr.response || 'Unable to upload file';
                                    // Upload failed
                                    alert("Error 0x1 - Please contact @ValkyOW")
                                    console.log(errorMessage)
                                }
                            };

                            xhr.open('POST', 'https://content.dropboxapi.com/2/files/upload');
                            xhr.setRequestHeader('Authorization', 'Bearer ' + dropboxToken);
                            xhr.setRequestHeader('Content-Type', 'application/octet-stream');
                            xhr.setRequestHeader('Dropbox-API-Arg', JSON.stringify({
                                path: '/' +  file.name,
                                mode: 'add',
                                autorename: false,
                                mute: false
                            }));

                            xhr.send(file);

                            previewImage28(file);
                            
                        }

                    } else {
                        alert("Wrong image size, choose 28x28 image.")
                    }

                };
            }
            
            try {
                img.src = _URL.createObjectURL(file);
            } catch(err) {}

        }

    } else {
        alert("Already submitted a 28px emote.")
    }

});









// File Upload for 28x28 Images
// ----------------------------

$("#fileinput-112").change(function(e) {
    var file, img;

    if (isEmpty($('#gallery-112'))) {

        if ((file = this.files[0])) {
            
            fileType = file.type.replace("image/", "");
            if (fileType != "png" || fileType != "gif") {
                alert("Not a valid image type. PNG and GIF are supported.");
            } else {

                img = new Image();
                img.onload = function() {

                    if (this.width == "112") {
                        if (this.height == "112"){
                            
                            var xhr = new XMLHttpRequest();
                        
                            xhr.upload.onprogress = function(evt) {
                                var percentComplete = parseInt(100.0 * evt.loaded / evt.total);
                                // Upload in progress
                            };
                        
                            xhr.onload = function() {
                                if (xhr.status === 200) {
                                    var fileInfo = JSON.parse(xhr.response);
                                    // Upload succeeded
                                }
                                else {
                                    var errorMessage = xhr.response || 'Unable to upload file';
                                    // Upload failed
                                    alert("Error 0x1 - Please contact @ValkyOW")
                                    console.log(errorMessage)
                                }
                            };
                        
                            xhr.open('POST', 'https://content.dropboxapi.com/2/files/upload');
                            xhr.setRequestHeader('Authorization', 'Bearer ' + dropboxToken);
                            xhr.setRequestHeader('Content-Type', 'application/octet-stream');
                            xhr.setRequestHeader('Dropbox-API-Arg', JSON.stringify({
                                path: '/' +  file.name,
                                mode: 'add',
                                autorename: false,
                                mute: false
                            }));
                        
                            xhr.send(file);
                            
                            previewImage112(file);

                        }

                    } else {
                        alert("Wrong image size, choose 112x112 image.")
                    }

                };
            }

            try {
                img.src = _URL.createObjectURL(file);
            } catch(err) {}

        }
        
    } else {
        alert("Already submitted a 112px emote.")
    }

});









// File Preview for 28x28 Images
function previewImage28(file) {

    // Variables for gallery
    var galleryId = "gallery-28";
    var gallery = document.getElementById(galleryId);
    var imageType = /image.*/;

    // Add the class thumbnail to the gallery div
    var thumb = document.createElement("div");
    thumb.classList.add('thumbnail'); 

    // Add the image as child
    var img = document.createElement("img");
    img.file = file;
    thumb.appendChild(img);
    gallery.appendChild(thumb);

    // Using FileReader to display the image content
    var reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
    reader.readAsDataURL(file);



    // Variables for confirmation
    var confirmId = "confirm-28"
    var confirmation = document.getElementById(confirmId)

    // Add the pull-down-submitted class
    confirmation.classList.add('pull-down-submitted');

    // Add the confirmation message
    confirmation.innerHTML += "Thanks, Emote submitted.";

}




     
// File Preview for 112x112 Images               
function previewImage112(file) {
    
    // Variables for gallery
    var galleryId = "gallery-112";
    var gallery = document.getElementById(galleryId);
    var imageType = /image.*/;

    // Add the class thumbnail to the created div
    var thumb = document.createElement("div");
    thumb.classList.add('thumbnail'); 

    // Add the image as child
    var img = document.createElement("img");
    img.file = file;
    thumb.appendChild(img);
    gallery.appendChild(thumb);

    // Using FileReader to display the image content
    var reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
    reader.readAsDataURL(file);




    // Variables for confirmation
    var confirmId = "confirm-112"
    var confirmation = document.getElementById(confirmId)

    // Add the pull-down-submitted class
    confirmation.classList.add('pull-down-submitted');

    // Add the confirmation message
    confirmation.innerHTML += "Thanks, Emote submitted.";

}

