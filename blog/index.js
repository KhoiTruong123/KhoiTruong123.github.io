"use strict"

function displayErr(some) {
    document.getElementById("demo").innerHTML = some;
}

function displayPosts(infoUser) {
    let user = "";
    for (var i = 0; i < infoUser.length; i++) {
        user += `<div class="post">
    <p><span>Title :</span>  ${infoUser[i].title}</p>
    <p><span>Body :</span> ${infoUser[i].body}</p>
    <div class="post_detail">
    <div class="post_button">
     <button><a href="detail.html?id=${infoUser[i].id}">Read more</a></button>
     <button><a href="user.html?id=${infoUser[i].id}">User's infomation</a></button>
     </div>
     </div>
    </div>`;

    }
    document.getElementById("demo").innerHTML = user;
}

let postsPromise = new Promise(function(xuLyThanhCong, xuLyThatBai) {
    let req = new XMLHttpRequest();
    req.open('GET', "https://jsonplaceholder.typicode.com/posts");
    req.onload = function() {
        if (req.status == 200) {
            let newRes = JSON.parse(req.response);
            xuLyThanhCong(newRes);
        } else {
            xuLyThatBai("File not Found");
        }
    };
    req.send();
});


(async function() {
    let posts = await postsPromise.catch(e => {
        displayErr(e);
        process.exit(1);
    });
    displayPosts(posts);
})()