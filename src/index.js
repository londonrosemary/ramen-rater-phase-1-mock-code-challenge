//First put the api in a variable for easy access
const BASE_URL = "http://localhost:3000/ramens/"

//Create function to use the fetch request
function getRamen() {
    fetch(BASE_URL)
    .then((r) => r.json())
//2nd .then will take the returned array and deconstruct it into an object to use in my render function. This is because the api returns an array of objects
    .then(arr => {
        arr.forEach(ramenObj => renderRamen(ramenObj));
    })
}

//Construct a variable to hold the element we want to select, this can also go inside the renderRamen function
const menuContainer = document.getElementById("ramen-menu")

//Create function to be used in fetch function. This render function will take the data returned from fetch and put it on the page
function renderRamen(ramen) {
//These are unnecessary, but may be useful in a larger application if this element will be used and needs to be referenced
    // const menuCard = document.createElement("div")
    // menuCard.id = `${ramen.id}`
    // menuCard.className = 'ramen-menu-item'

//This section will select the element where we want to drop our images, and will place them there
    const menuImage = document.createElement("img")
    menuImage.src = ramen.image
//Add an event listener (on image here) that will create the required elements and add the data from our fetched item
    menuImage.addEventListener("click", e => {
//This piece is where we go thru all required data pieces, selecting each and applying correct data
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
//Add the images/data to the correct container, as defined on line 15
    menuContainer.appendChild(menuImage)

//This section is only needed if we had the other data to add, see line 19
    //menuCard.append(menuImage)
    //menuContainer.appendChild(menuCard)
}

//Create function to decide what we want to do with the form
function createRamenForm(){
//Select the correct element and set to a variable for easy use
    const ramenForm = document.getElementById("new-ramen")
//Add event listener to select form input elements and create an object with those input values assigned, which is then applied to the render function above
    ramenForm.addEventListener("submit", e => {
//Forms inherently have a refresh page event, so we want to prevent that from happening in order to allow the images to populate on our page since they are not permanent datapieces
        e.preventDefault()
//This is where we select the input values and assign them to variables for easy use
        const imageInput = e.target.image.value
        //const imageInput = e.getElementById("new-image").value (This is an alternate way to write line 62)
        const restaurantInput = e.target.restaurant.value
        const nameInput = e.target.name.value
        const ratingInput = e.target.rating.value
        const commentInput = e.target["new-comment"].value
//This is where we construct the object that will be passed through our render function, using the variables created above as the value in key:value pair. 
//NOTE: The key should match the rest of the objects fetched from api, or else the render function will not work.
        const newRamen = {
            name: nameInput,
            restaurant: restaurantInput,
            image: imageInput,
            rating: ratingInput,
            comment: commentInput
        }
//Don't forget to call your function on the new object!
        renderRamen(newRamen)
//Not required, but good practice. This part will reset the form for the client so they don't have to delete and then type for each new submission
        e.target.reset()
    })
}
//Again, don't want to call our necessary functions for fetching api and for using the form. Stored here in init function since in a larger application we will possibly have more functions needed to call at initial page creation
function init() {
    getRamen()
    createRamenForm()
    
}
//Call the init function in order to actually start us off! 
init()
//WE DID IT!