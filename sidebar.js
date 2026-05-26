window.document.addEventListener(
    "DOMContentLoaded",
    function(event) {
        const subtitleHtml = `<span class='sidebar-subtitle'>DSAN 5650 Edition</span>`
        document.querySelector('.sidebar-title').innerHTML += `<br>${subtitleHtml}`
    }
)