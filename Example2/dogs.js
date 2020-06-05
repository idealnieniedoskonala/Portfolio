fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {
        const list = document.querySelector(".dogs")
        const keys = Object.keys(data.message);
        for (let key of keys) {
            let item = document.createElement("option");
            item.appendChild(document.createTextNode(`${key}`));
            let item_value = document.createAttribute("value");
            item_value.value = `${key}`;
            item.setAttributeNode(item_value);
            list.appendChild(item);
        }
    })

const button = document.querySelector(".btn")

function handleClick(e) {
    const selected = document.getElementById("dog");
    const breed = selected.value

    fetch(`https://dog.ceo/api/breed/${breed}/images/random/3`)
        .then(response => response.json())
        .then(data => {

            const imgs_Nodelist = document.querySelectorAll(".dog-img")
            const imgs_list = [...imgs_Nodelist];
            const urls = [...data.message];
            for (let i in imgs_list) {
                console.log(imgs_list[i])
                console.log(urls[i])
                imgs_list[i].src = `${urls[i]}`;

            }
        })
}

button.addEventListener("click", handleClick)