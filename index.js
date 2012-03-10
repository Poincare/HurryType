var first_click = true;

function editor_first_click() {
  if(!first_click) {
    return;
  }

  $("#editor").html("");
  first_click = false;
}

function keyedup(e) {
  if(!first_click) 
    return;

  
  $("#editor").html("");
  $("body").off('keyup');
  first_click = false;

  $("#editor").focus();
}

function save() {
  localStorage["note"] = escape($("#editor").html());
}

function reload() {
  if(localStorage["note"] == null) {
    return;
  }

  $("#editor").html(unescape(localStorage["note"]));
  first_click = false;
}

function init() {
  reload();

  $("#editor").click(editor_first_click);
  $("body").keyup(keyedup);
  $("#editor").keydown(save);
}

$(document).ready(init);
