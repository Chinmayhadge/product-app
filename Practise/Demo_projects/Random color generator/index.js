function generateColor() {
    console.log("Generating color");

    const hexcodes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"]
    let colorCode = "";
    for (var i = 0; i < 6; i++) {
        randomColor = Math.floor(Math.random() * hexcodes.length);
        colorCode += hexcodes[randomColor]
    }
    console.log(colorCode);

    document.getElementById("hexcode").innerHTML = colorCode;
    document.getElementsByTagName("body")[0].style.backgroundColor = "#" + colorCode;

}


var maindata = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "https://via.placeholder.com/600/f66b97",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
        "albumId": 1,
        "id": 6,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "url": "https://via.placeholder.com/600/56a8c2",
        "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    },
    {
        "albumId": 1,
        "id": 7,
        "title": "officia delectus consequatur vero aut veniam explicabo molestias",
        "url": "https://via.placeholder.com/600/b0f7cc",
        "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
    },
    {
        "albumId": 1,
        "id": 8,
        "title": "aut porro officiis laborum odit ea laudantium corporis",
        "url": "https://via.placeholder.com/600/54176f",
        "thumbnailUrl": "https://via.placeholder.com/150/54176f"
    },
    {
        "albumId": 1,
        "id": 9,
        "title": "qui eius qui autem sed",
        "url": "https://via.placeholder.com/600/51aa97",
        "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
    },
    {
        "albumId": 1,
        "id": 10,
        "title": "beatae et provident et ut vel",
        "url": "https://via.placeholder.com/600/810b14",
        "thumbnailUrl": "https://via.placeholder.com/150/810b14"
    },
    {
        "albumId": 1,
        "id": 11,
        "title": "nihil at amet non hic quia qui",
        "url": "https://via.placeholder.com/600/1ee8a4",
        "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
    },
    {
        "albumId": 1,
        "id": 12,
        "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
        "url": "https://via.placeholder.com/600/66b7d2",
        "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
    },
    {
        "albumId": 1,
        "id": 13,
        "title": "repudiandae iusto deleniti rerum",
        "url": "https://via.placeholder.com/600/197d29",
        "thumbnailUrl": "https://via.placeholder.com/150/197d29"
    },
    {
        "albumId": 1,
        "id": 14,
        "title": "est necessitatibus architecto ut laborum",
        "url": "https://via.placeholder.com/600/61a65",
        "thumbnailUrl": "https://via.placeholder.com/150/61a65"
    },
    {
        "albumId": 1,
        "id": 15,
        "title": "harum dicta similique quis dolore earum ex qui",
        "url": "https://via.placeholder.com/600/f9cee5",
        "thumbnailUrl": "https://via.placeholder.com/150/f9cee5"
    },
    {
        "albumId": 1,
        "id": 16,
        "title": "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
        "url": "https://via.placeholder.com/600/fdf73e",
        "thumbnailUrl": "https://via.placeholder.com/150/fdf73e"
    },
    {
        "albumId": 1,
        "id": 17,
        "title": "natus doloribus necessitatibus ipsa",
        "url": "https://via.placeholder.com/600/9c184f",
        "thumbnailUrl": "https://via.placeholder.com/150/9c184f"
    },
    {
        "albumId": 1,
        "id": 18,
        "title": "laboriosam odit nam necessitatibus et illum dolores reiciendis",
        "url": "https://via.placeholder.com/600/1fe46f",
        "thumbnailUrl": "https://via.placeholder.com/150/1fe46f"
    },
    {
        "albumId": 1,
        "id": 19,
        "title": "perferendis nesciunt eveniet et optio a",
        "url": "https://via.placeholder.com/600/56acb2",
        "thumbnailUrl": "https://via.placeholder.com/150/56acb2"
    },
    {
        "albumId": 1,
        "id": 20,
        "title": "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
        "url": "https://via.placeholder.com/600/8985dc",
        "thumbnailUrl": "https://via.placeholder.com/150/8985dc"
    },
    {
        "albumId": 1,
        "id": 21,
        "title": "ad et natus qui",
        "url": "https://via.placeholder.com/600/5e12c6",
        "thumbnailUrl": "https://via.placeholder.com/150/5e12c6"
    },
    {
        "albumId": 1,
        "id": 22,
        "title": "et ea illo et sit voluptas animi blanditiis porro",
        "url": "https://via.placeholder.com/600/45601a",
        "thumbnailUrl": "https://via.placeholder.com/150/45601a"
    },
    {
        "albumId": 1,
        "id": 23,
        "title": "harum velit vero totam",
        "url": "https://via.placeholder.com/600/e924e6",
        "thumbnailUrl": "https://via.placeholder.com/150/e924e6"
    },
    {
        "albumId": 1,
        "id": 24,
        "title": "beatae officiis ut aut",
        "url": "https://via.placeholder.com/600/8f209a",
        "thumbnailUrl": "https://via.placeholder.com/150/8f209a"
    },
    {
        "albumId": 1,
        "id": 25,
        "title": "facere non quis fuga fugit vitae",
        "url": "https://via.placeholder.com/600/5e3a73",
        "thumbnailUrl": "https://via.placeholder.com/150/5e3a73"
    },
    {
        "albumId": 1,
        "id": 26,
        "title": "asperiores nobis voluptate qui",
        "url": "https://via.placeholder.com/600/474645",
        "thumbnailUrl": "https://via.placeholder.com/150/474645"
    },
    {
        "albumId": 1,
        "id": 27,
        "title": "sit asperiores est quos quis nisi veniam error",
        "url": "https://via.placeholder.com/600/c984bf",
        "thumbnailUrl": "https://via.placeholder.com/150/c984bf"
    },
    {
        "albumId": 1,
        "id": 28,
        "title": "non neque eligendi molestiae repudiandae illum voluptatem qui aut",
        "url": "https://via.placeholder.com/600/392537",
        "thumbnailUrl": "https://via.placeholder.com/150/392537"
    },
    {
        "albumId": 1,
        "id": 29,
        "title": "aut ipsam quos ab placeat omnis",
        "url": "https://via.placeholder.com/600/602b9e",
        "thumbnailUrl": "https://via.placeholder.com/150/602b9e"
    },
    {
        "albumId": 1,
        "id": 30,
        "title": "odio enim voluptatem quidem aut nihil illum",
        "url": "https://via.placeholder.com/600/372c93",
        "thumbnailUrl": "https://via.placeholder.com/150/372c93"
    }
];

var mainbox = document.getElementById("mainbox");

// maindata.forEach((ele) => {
//     for (var i in ele) {
//         if (i == "albumId" || i == "id") {
//             var h1 = document.createElement("h1");
//             var p = document.createTextNode(ele[i]);
//             h1.appendChild(p);
//             mainbox.appendChild(h1);
//         }
//     }
//     // console.log(ele);
// })


var buttonClick = document.getElementsByTagName("button")[0]
let filterbtn = document.getElementById("filterbtn");
let imageId = document.getElementById("imageId");

let apiData = () => {
    let req = new XMLHttpRequest();
    req.onload = () => {
        let data = JSON.parse(req.responseText);
        // console.log(data);

        let input = imageId.value;
        console.log("Input: " + input);
        data.filter((eledata) => {
            console.log(eledata);
            if (input === "") { return eledata }
            else if (eledata.title.toLowerCase().includes(input.toLowerCase())) { return eledata }

        }).map((ele) => {

            var main = document.createElement('div');
            main.className = "submain";
            for (var i in ele) {
                if (i == "id") {
                    var h1 = document.createElement('h1');
                    var text = document.createTextNode(ele[i]);
                    h1.appendChild(text);
                    main.appendChild(h1);
                }
                else if (i == "title") {
                    var h2 = document.createElement('h2');
                    var title = document.createTextNode(ele[i]);
                    h2.appendChild(title);
                    main.appendChild(h2);
                }
                else if (i == "url") {
                    var img = document.createElement('img');
                    img.src = ele[i];
                    img.className = "respImage"
                    main.appendChild(img);
                }

            }
            mainbox.appendChild(main);
        })
    }
    req.open('GET', "https://jsonplaceholder.typicode.com/photos", true);
    req.send();
}


buttonClick.addEventListener("click", apiData)




// function filterimg() {

//     var imageId = Number(document.getElementById("imageId").value);

//     function imagefilter(imageId) {
//         return imageId >= id;
//     }
//     console.log(data.filter(imagefilter));
// }

// let filterimg = () => {
//     let req = new XMLHttpRequest();
//     req.onload = () => {
//         let data = JSON.parse(req.responseText);
//         // console.log(data);
//         data.map((ele) => {
//             //     for (var i in ele) {
//             //         if (i == "id") {
//             //             function imgfilter(age) {
//             //                 return age >= 18;
//             //             }
//             //         }
//             //         else if (i == "title") {
//             //             console.log(ele[i]);
//             //         }
//             //         else if (i == "url") {
//             //             console.log(ele[i]);
//             //         }

//             //     }
//             // var imageId = document.getElementById("imageId").value;
//             // console.log(imageId);
//             for (var i in ele) {
//                 if (i == "title") {
//                     // console.log(data.filter(imagefilter));
//                     function imagefilter(imageId) {
//                         return ele[i] == document.getElementById("imageId").value;
//                     }
//                 }
//             }
//         })
//     }
//     req.open('GET', "https://jsonplaceholder.typicode.com/posts", true);
//     req.send();
// }
// filterbtn.addEventListener("click", filterimg)


