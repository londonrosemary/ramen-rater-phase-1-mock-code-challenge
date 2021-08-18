// write your code here
const BASE_URL = "http://localhost:3000/ramens/"

function getRamen() {
    fetch(BASE_URL)
    .then((r) => r.json())
    .then(arr => {
        arr.forEach(ramen => renderRamen(ramen));
    })
}

const menuContainer = document.getElementById("ramen-menu")

function renderRamen(ramen) {
    const menuCard = document.createElement("div")
    menuCard.id = `${ramen.id}`
    menuCard.className = 'ramen-menu-item'

    const menuImage = document.createElement("img")
    menuImage.src = ramen.image
    document.querySelector("#ramen-menu").append(menuImage)

    menuImage.addEventListener("click", e => {
        const menuImgLg = document.querySelector(".detail-image")
        menuImgLg.src = ramen.image 

        const menuName = document.querySelector("h2")
        menuName.textContent = ramen.name

        const menuRestaurant = document.querySelector(".restaurant")
        menuRestaurant.textContent = ramen.restaurant

        const menuRating = document.querySelector("span")
        menuRating.textContent = ramen.rating

        const menuComment = document.querySelector("p#comments")
        menuComment.textContent = ramen.comment
    })

    menuCard.append(menuImage)
    menuContainer.appendChild(menuCard)

}

function createRamenForm(){
    const form = document.getElementById("new-ramen")
    form.addEventListener("submit", e => {
        e.preventDefault()
        
        
    })
}

getRamen()