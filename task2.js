const images = [
  "https://medias.fcacanada.ca//specs/dodge/charger/year-2023/media/images/bento-boxe/2023-dodge-charger-pano-overview_e4cd67cf9c85246cb04423335153cbbc-2496x1248.jpg",
  "https://guidebook.isango.com/wp-content/uploads/2024/03/Santorini.jpg",
  "https://www.travelandleisure.com/thmb/CdndDm3H3IQDIGRO3ojnweNHhq8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-european-cities-florence-italy-00-EURCITIESWB24-3f257e88df5d404089be33939a8b6922.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2XSV327wFqaeMzpm8Nmgmy2bPmAj5Ykj3Eg&s",
  "https://cdn.britannica.com/71/73371-050-9DFAEC1E/Reykjavik-Iceland.jpg",
  "https://images.prismic.io/perlan/236f7abb-616c-403a-bc47-a65dc203f448_10437-157-289.png?auto=compress%2Cformat&rect=0%2C152%2C1600%2C850&w=3840&fit=max",
  "https://res.cloudinary.com/icelandtours/g_auto,f_auto,c_fill,w_3840,q_auto:good/Aerial_view_of_famous_Hallgrimskirkja_Cathedral_and_the_city_of_Reykjavik_in_Iceland_2048x1364_jpg_9e12c95a02.webp",
  "https://cdn.kimkim.com/files/a/content_articles/featured_photos/67aff965c7e4306ea53b40fb36da1d5425dfe9cc/big-288c43788ea72e1443ccf3eea9ffbfde.jpg",
];
let currentIndex = 0;

const container = document.getElementById("container");
const largeimg = document.createElement("img");
largeimg.src = images[0];
const leftbtn = document.createElement("button");
const rightbtn = document.createElement("button");
leftbtn.innerText = "<";
rightbtn.innerText = ">";

leftbtn.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  largeimg.src = images[currentIndex];
});
rightbtn.addEventListener("click", () => {
  currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  largeimg.src = images[currentIndex];
});
leftbtn.classList.add("btnclick");
rightbtn.classList.add("btnclick");

const maindiv = document.createElement("div");
maindiv.classList.add("maindiv");

container.appendChild(maindiv);
maindiv.appendChild(leftbtn);
maindiv.appendChild(largeimg);
maindiv.appendChild(rightbtn);

const imgsdiv = document.createElement("div");
imgsdiv.classList.add("imgsdiv");
container.appendChild(imgsdiv)
images.map((img) => {
  const imgs=document.createElement("img")
  imgs.src= `${img}`
  imgsdiv.appendChild(imgs)
  imgs.addEventListener("click",()=>{
     largeimg.src=img
  })
});
