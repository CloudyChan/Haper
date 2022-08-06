const dropdown = document.querySelector('.dropdown');
//Follow
let followed = "follow"
let followers = 47

function follow() {
    if (followed == "follow") {
        followed = "unfollowed"
        document.getElementById('followbtn').innerHTML = "unfollow"
        followers = followers + 1
        document.getElementById('follower').innerText = followers
        let temp = `<div class="notify_item">
        <div class="notify_img">
          <img src="img/imageedit_1_7839490441.png" alt="profile_pic" style="width: 50px">
        </div>
        <div class="notify_info">
          <p>You followed<span class="notify_main">Alexandra Caulea</span></p>
          <span class="notify_time">now</span>
        </div>`
        dropdown.insertAdjacentHTML('beforebegin', '<strong>dcode</strong>');
    }  else {
        followed = "follow"
        document.getElementById('followbtn').innerHTML = "follow"
        followers = followers - 1
        document.getElementById('follower').innerText = followers
    }
}

$(document).ready(function(){
    $(".notification_icon .fa-bell").click(function(){
        $(".dropdown").toggleClass("active");
    })
});

function MessageRD() {
    location.href = ("/Chat/index.html")
} 

// window.onload = alert(localStorage.getItem("storageName"));