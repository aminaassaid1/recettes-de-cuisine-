let urlCategory = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
let urlArea = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
let selectArea= document.getElementById("selectArea");
//  here i selecte the category
fetch ('https://www.themealdb.com/api/json/v1/1/list.php?c=list').then((response)=>{
    let SelectCategory = response.json();
    console.log(SelectCategory)
    return SelectCategory
}).then ((response)=>{
    response.meals.forEach(c => {
        let optionCategory = document.createElement("option");
        optionCategory.value = c.strCategory;
        optionCategory.append(c.strCategory);
        document.querySelector('#selectCategory').append(optionCategory);       
    }); 
})
//  here i selecte the Area
fetch (urlArea).then((response)=>{
    let selectArea = response.json();
    return selectArea
}).then((response)=>{
    response.meals.forEach(a =>{
        let optionArea = document.createElement("option");
        optionArea.value = a.strArea ;
        optionArea.append(a.strArea);
        document.querySelector('#selectArea').append(optionArea)
    })
})