window.document.addEventListener("DOMContentLoaded", function(event) {
    var subtitleHtml = "<span class='sidebar-subtitle'>DSAN 5650 Edition</span>";
    var subtitleDiv = $(`<br>${subtitleHtml}`);
    $('.sidebar-title').append(subtitleDiv);
});