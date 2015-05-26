"use strict";
function onReplyClick(event) {
  var target = event.target;
  var id = target.getAttribute('data-reply');
  var messageText = 'в ответ на пост №' + id;
  if (!id) {
    return;
  } else {
    buttonsubmit.focus();
    usercomment.focus();
    parentComment.setAttribute('value', id);
    var replyhide = document.getElementById("reply-hide");
    if (replyhide.style.display !== "block") {
      replyhide.style.display = "block";
      infomessage.innerHTML = messageText;
    } else {
      infomessage.innerHTML = messageText;
    }
  }
}
document.addEventListener("click", onReplyClick);

function onInfoClosedClick() {
  var replyhide = document.getElementById("reply-hide");
  var value = "";
  replyhide.style.display = "none";
  parentComment.setAttribute('value', value);
}
xclosed.addEventListener("click", onInfoClosedClick);

