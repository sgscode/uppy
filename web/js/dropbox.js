
function dropenter(e)
{
    e.stopPropagation();
    e.preventDefault();
}


function dropleave()
{
}


function dodrop(e)
{
    var dt = e.dataTransfer;
    if (!dt && !dt.files) {
        return false;
    }

    var files = dt.files;

    for (var i = 0; i < files.length; i++) {
        if (files[i].size < 15000000) {
            ajax_upload(files[i]);
        }
        else {
            alert('Размер файла превышает допустимое значение');
        }
    }

    e.stopPropagation();
    e.preventDefault();
    return false;
}


function ajax_upload(file)
{
    if (window.XMLHttpRequest) {
        var http_request = new XMLHttpRequest();
    }
    else {
        return false;
    }

    progresid.style.display = "block";

    http_request.upload.addEventListener('progress', function (event) {
        var percent = Math.ceil(event.loaded / event.total * 100);
        progres.style.width = percent + '%';
        progres.innerHTML = percent + '%';
    }, false);

    http_request.open('POST', 'http://localhost/filehost/web/', true);
    http_request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    http_request.onreadystatechange = ajax_callback(http_request);
    var fd = new FormData();
    fd.append('userfile', file);
    http_request.send(fd);
}

function ajax_callback(http_request) {
    return function () {
        if (http_request.readyState == 4) {
            if (http_request.status == 200) {
                upload_overall.innerHTML = http_request.responseText;
                progresid.style.display = "none";
                progres.style.width = 0 + '%';
            }
        }
        else {

        }
    };
}

var test = document.documentElement;
test.addEventListener("dragenter", dropenter);
test.addEventListener("dragover", dropenter);
test.addEventListener("dragleave", dropleave);
test.addEventListener("drop", dodrop);