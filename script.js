for (let i = 0; i < 6; i++) {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php').then((response) => {
        let MyData = response.json();
        return MyData
    }).then((response) => {
        let card = document.createElement("div");
        card.setAttribute("class", "card col-md-5 col-lg-3 p-0 m-0")
        let img = document.createElement("img");
        img.setAttribute("src", response.meals[0].strMealThumb);
        img.setAttribute("class", "card-img-top")
        card.append(img);
        let CardBody = document.createElement("div");
        CardBody.setAttribute("class", "card-body");
        let CardTitle = document.createElement("h5");
        CardTitle.setAttribute("class", "card-title");
        CardTitle.append(response.meals[0].strMeal);
        let button = document.createElement("button");
        button.setAttribute("class", "btn btn-primary");
        button.setAttribute("type", "button");
        button.setAttribute("data-bs-target", "#modalRe")
        button.setAttribute("data-bs-toggle", "modal");
        button.addEventListener('click', () => {
            document.querySelector("#modalLabel").innerHTML = response.meals[0].strMeal;
            let modalBody = document.querySelector('.modal-body');
            modalBody.innerHTML = '';
            let img = document.createElement("img");
            img.setAttribute("src", response.meals[0].strMealThumb);
            img.setAttribute("class", "card-img-top")
            modalBody.append(img);
            let modalTitle = document.createElement('h5');
            modalTitle.setAttribute("class", "modal-title");
            modalTitle.append(response.meals[0].strMeal);
            modalBody.append(modalTitle);
            let instructions = document.createElement('p');
            instructions.append(response.meals[0].strInstructions);
            modalBody.append(instructions);
        })
        let show = document.createTextNode("Read More");
        button.appendChild(show);
        CardBody.append(CardTitle, button);
        card.append(CardBody);
        document.querySelector('#cards').append(card)
    })
}

document.querySelector('#search-btn').addEventListener('click', () => {
    pagination.innerHTML = ""
    document.querySelector('#cards').innerHTML = ''
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${document.querySelector('#search').value}`).then((response) => {
        let searchdata = response.json();
        return searchdata

    }).then((response) => {
        response.meals.slice(0, 6).forEach(element => {
            let card = document.createElement("div");
            card.setAttribute("class", "card col-md-5 col-lg-3 p-0 m-0")
            let img = document.createElement("img");
            img.setAttribute("src", element.strMealThumb);
            img.setAttribute("class", "card-img-top")
            card.append(img);
            let CardBody = document.createElement("div");
            CardBody.setAttribute("class", "card-body");
            let CardTitle = document.createElement("h5");
            CardTitle.setAttribute("class", "card-title");
            CardTitle.append(element.strMeal);
            let button = document.createElement("button");
            button.setAttribute("class", "btn btn-primary");
            button.setAttribute("data-bs-target", "#modalRe");
            button.setAttribute("data-bs-toggle", "modal");
            button.setAttribute("type", "button");
            let show = document.createTextNode("Read More");
            button.appendChild(show);
            button.addEventListener('click', () => {
                document.querySelector("#modalLabel").innerHTML = element.strMeal;
                let modalBody = document.querySelector('.modal-body');
                modalBody.innerHTML = '';
                let img = document.createElement("img");
                img.setAttribute("src", element.strMealThumb);
                img.setAttribute("class", "card-img-top")
                modalBody.append(img);
                let modalTitle = document.createElement('h5');
                modalTitle.setAttribute("class", "modal-title");
                modalTitle.append(element.strMeal);
                modalBody.append(modalTitle);
                let instructions = document.createElement('p');
                instructions.append(element.strInstructions);
                modalBody.append(instructions);
            })
            CardBody.append(CardTitle, button);
            card.append(CardBody);
            document.querySelector('#cards').append(card)
        });
        //  pagination

        let pagination = document.createElement("ul");
        pagination.setAttribute("class", "pagination");
        for (let i = 0; i < Math.ceil((response.meals.length) / 6); i++) {
            let li = document.createElement('li');
            li.setAttribute("class", "page-item");
            let a = document.createElement("a");
            a.setAttribute("class", "page-link")
            a.append(i + 1);
            a.id = i * 6;
            a.addEventListener("click", e => {
                document.querySelectorAll('.page-link').forEach(e => {
                    e.classList.remove("active");
                })
                e.target.classList.add("active");
                document.querySelector('#cards').innerHTML = ""
                response.meals.slice(+(e.target.id), +(e.target.id) + 6).forEach(element => {
                    let card = document.createElement("div");
                    card.setAttribute("class", "card col-md-5 col-lg-3 p-0 m-0")
                    let img = document.createElement("img");
                    img.setAttribute("src", element.strMealThumb);
                    img.setAttribute("class", "card-img-top")
                    card.append(img);
                    let CardBody = document.createElement("div");
                    CardBody.setAttribute("class", "card-body");
                    let CardTitle = document.createElement("h5");
                    CardTitle.setAttribute("class", "card-title");
                    CardTitle.append(element.strMeal);
                    let button = document.createElement("button");
                    button.setAttribute("class", "btn btn-primary");
                    let show = document.createTextNode("Read More");
                    button.appendChild(show);
                    CardBody.append(CardTitle, button);
                    card.append(CardBody);
                    document.querySelector('#cards').append(card)
                });
            })
            li.append(a);
            pagination.appendChild(li);
        }
        document.querySelector('#pagination').appendChild(pagination);
    })

})

