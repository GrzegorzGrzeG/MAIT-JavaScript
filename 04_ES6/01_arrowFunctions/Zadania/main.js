const generateLinks = (tab) => {
     return tab.map((el) => `https://${el}.com`);
}
const arr = ["google", "twitter", "facebook"];
console.log(generateLinks(arr))

const newUl = document.createElement("ul");
newUl.setAttribute("id", "menu");
document.querySelector("body").append(newUl);
const menu = document.querySelector("#menu");

const insertLinks = (arr, container) => {
    arr.forEach(el => {
        const newLi = document.createElement("li");
        const newA = document.createElement("a");
        newA.textContent = el;
        newA.href = el;
        newLi.append(newA);
        container.append(newLi)
    })
}
insertLinks(generateLinks(arr),menu)