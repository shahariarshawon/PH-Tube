const categoryData=()=>
{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=>res.json())
    .then((data)=> categoryButtons(data.categories));
}
categoryData();
const categoryButtons=(buttons)=>
{
    console.log(buttons);
    const categoryDiv=document.querySelector(".category-container");
    for(let button of buttons)
    {
        const categoryButtonDiv=document.createElement("div");
        categoryButtonDiv.innerHTML=
        `<button class="btn">${button.category} </button>`
        categoryDiv.appendChild(categoryButtonDiv);
    }
}
