for(let i = 0 ; i <6 ;i++){
    fetch('https://www.themealdb.com/api/json/v1/1/random.php').then((response) => {
     let MyData = response.json();
     return MyData
}).then((response)=>{
        let card = document.createElement("div");
        card.setAttribute("class","card col-md-5 col-lg-3 p-0 m-0")
        let img = document.createElement("img");
        img.setAttribute("src",response.meals[0].strMealThumb);
        img.setAttribute("class","card-img-top")
        card.append(img);
        let CardBody = document.createElement("div");
        CardBody.setAttribute("class","card-body");
        let CardTitle = document.createElement("h5");
        CardTitle.setAttribute("class", "card-title");
        CardTitle.append(response.meals[0].strMeal);
        let button = document.createElement("button");
        button.setAttribute("class","btn btn-primary");
         let show = document.createTextNode("Read More");
         button.appendChild(show);
         CardBody.append(CardTitle,button);
        card.append(CardBody);
        document.querySelector('#cards').append(card)
})
}

document.addEventListener("")
