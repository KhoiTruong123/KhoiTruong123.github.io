'use strict'
window.onload = function() {
        function getParams() {
            const getUrlParams = new URLSearchParams(window.location.search);
            const id = getUrlParams.get('id');
            return id;
        }

        let file = `https://jsonplaceholder.typicode.com/posts/${getParams()}`;

        fetch(file)
            .then((x) => x.json())
            .then((y) => {
                document.getElementById("demoDetail").innerHTML += `<div class="detailPost">
                <p><span>User id :</span> ${y.userId}</p>
                <p><span>Id :</span> ${y.id}</p>
                <p><span>Title :</span>  ${y.title}</p>
                <p><span>Body :</span> ${y.body}</p>
                </div>`;


            })

        let xhttp = new XMLHttpRequest();

        xhttp.onload = function() {
            let comments = JSON.parse(this.responseText);
            let htmlComments = "";
            for (let i = 0; i < comments.length; i++) {
                let comment = comments[i];
                let commenthtml = `<div class="detailPostCmt">
                    <p><span>Post id :</span> ${comment.postId}</p>
                    <p><span>Id :</span> ${comment.id}</p>
                    <p><span>Title :</span>  ${comment.name}</p>
                    <p><span>Email :</span> ${comment.email}</p>
                    <p><span>Body :</span> ${comment.body}</p>
                    </div>`;
                htmlComments += commenthtml;

            }


            document.getElementById("demo2").innerHTML = htmlComments;

        }

        xhttp.open("GET", `https://jsonplaceholder.typicode.com/comments?postId=${getParams()}`, false);

        xhttp.send();
        console.log("da gui");
    }
    // .catch(error => console.error(error));