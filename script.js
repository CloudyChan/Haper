const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})

function redirect() {
    var errorStatuses = [404, 408, 410, 451, 500, 502, 503, 504, 509, 520, 521, 523, 524, 525, 526];
    fetch(location.href).then(function(status) {
        for (let i = 0; i < errorStatuses.length; i++) {
            if (status.status === errorStatuses[i]) {
                let apiUrl = "https://web.archive.org/wayback/available?url=" + location.href;
                fetch(apiUrl).then(function(response) {
                    response.text().then(function(text) {
                        var redirectUrl = JSON.parse(text).archived_snapshots.closest.url;
                        location.href = redirectUrl;
                    })
                }).catch(function(error) {
                    alert("Sorry, the website you are on currently is blocking the UserScript from making a request to the Wayback Machine.\n\nSee: https://github.com/Suvanth-Erranki/404-Not-Found-Redirect-UserScript/issues/1 for more information.")
                })
            }
        }
    })
}

redirect();
