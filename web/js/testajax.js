function onPagesKeyClick(event) {
  var target = event.target;
  var fileKey = filekey.getAttribute('value');
  var oldDiv = document.getElementById('allcomments');
  var id = target.getAttribute('data-id');
  if (!id) {
    return;
  }
  else {
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://localhost/filehost/web/ajax/" + fileKey + "/" + id, true);
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
          oldDiv.innerHTML = xmlHttp.responseText;
        }
        else {
          alert('Error');
        }
      }
    };

    xmlHttp.send(null);
  }
}

document.addEventListener("click", onPagesKeyClick);