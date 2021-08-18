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
    const ramenForm = document.getElementById("new-ramen")
    ramenForm.addEventListener("submit", e => {
        e.preventDefault()
        const imageInput = e.target.image.value
        const restaurantInput = e.target.restaurant.value
        const nameInput = e.target.name.value
        const ratingInput = e.target.rating.value
        const commentInput = e.target["new-comment"].value

        const newRamen = {
            name: nameInput,
            restaurant: restaurantInput,
            image: imageInput,
            rating: ratingInput,
            comment: commentInput
        }
        renderRamen(newRamen)
        e.target.reset()
    })
}

getRamen()
createRamenForm()