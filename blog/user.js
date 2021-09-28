'use strict'
window.onload = function() {
    function getParams() {
        const getUrlParams = new URLSearchParams(window.location.search);
        const id = getUrlParams.get('id');
        return id;
    }

    let file = `https://jsonplaceholder.typicode.com/users/${getParams()}`;

    fetch(file)
        .then((x) => x.json())
        .then((y) => {

            document.getElementById("user").innerHTML += (`<div class="userPost">
                <div>
                <p><span>Id :</span> ${y.id}</p>
                <p><span>Name :</span> ${y.name}</p>
                <p><span>User's name :</span> ${y.username}</p>
                <p><span>Email :</span> ${y.email}</p>
                </div>
                <div>
                <p><span>Address :</span> </p>
                <p class="adress"><span>street :</span>  ${y.address.street}</p>
                <p class="adress"><span>Suite :</span>  ${y.address.suite}</p>
                <p class="adress"><span>City :</span>  ${y.address.city}</p>
                <p class="adress"><span>Zipcode :</span>  ${y.address.zipcode}</p>
                <p class="adress"><span>Geo :</span> </p>
                <p class="geo"><span>Lat :</span>  ${y.address.geo.lat}</p>
                <p class="geo"><span>Lng :</span>  ${y.address.geo.lng}</p>
                </div>
                <div>
                <p><span>Phone :</span> ${y.phone}</p>
                <p><span>Website :</span> ${y.website}</p>
                <p><span>Company :</span></p>
                <p class="adress"><span>Name :</span> ${y.company.name}</p>
                <p class="adress"><span>CatchPhrase :</span> ${y.company.catchPhrase}</p>
                <p class="adress"><span>Bs :</span> ${y.company.bs}</p>
                </div>
                </div>`);


        })

    let xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        let usersInfomations = JSON.parse(this.responseText);
        console.log(usersInfomations);
        let htmlInfomations = "";
        for (let i = 0; i < usersInfomations.length; i++) {
            let usersInfomation = usersInfomations[i];
            let usershtml = `<div class="detailPostCmt">
                <p><span>User's id :</span> ${usersInfomation.userId}</p>
                <p><span>Id :</span> ${usersInfomation.id}</p>
                <p><span>Title :</span>  ${usersInfomation.title}</p>
                <p><span>Body :</span> ${usersInfomation.body}</p>
                </div>`;
            htmlInfomations += usershtml;

        }


        document.getElementById("user2").innerHTML = htmlInfomations;

    }

    xhttp.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${getParams()}`, false);

    xhttp.send();
    console.log("da gui");
}