window.document.addEventListener("DOMContentLoaded", function(event) {
    var subtitleHtml = "<span class='sidebar-subtitle'><a href='https://jjacobs.me/dsan5650' target='_blank'>DSAN 5650</a> Port</span>";
    var subtitleDiv = $(`<br>${subtitleHtml}`);
    $('.sidebar-title').append(subtitleDiv);
});