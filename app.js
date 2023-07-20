const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Alloco",
    price: 35,
    colors: [
      {
        code: "black",
        img: "./img/alloco2.jpg",
      },
      {
        code: "darkblue",
        img: "./img/alloco3.jpg",
      },
      
    ],
  },
  {
    id: 2,
    title: "Menu du Jour",
    price: 65,
    colors: [
      {
        code: "lightgray",
        img: "./img/attieke.jpg",
      },
      {
        code: "green",
        img: "./img/tchep2.png",
      },
      {
        code: "black",
        img: "./img/sauce_feuille.jpg",
      },
      {
        code: "red",
        img: "./img/sauce2.jpg",
      },
      {
        code: "yellow",
        img: "./img/feuille.jpg",
      },
      {
        code: "margenta",
        img: "./img/Ssauce_claire.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Nos Soupes",
    price: 50,
    colors: [
      {
        code: "lightgray",
        img: "./img/sauce1.jpg",
      },
      {
        code: "green",
        img: "./img/sauce6.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Nos Spécialités",
    price: 80,
    colors: [
      {
        code: "black",
        img: "./img/rizrouge.jpg",
      },
      {
        code: "lightgray",
        img: "./img/foufou.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Nos Viandes",
    price: 70,
    colors: [
      {
        code: "gray",
        img: "./img/nina.jpg",
      },
      {
        code: "black",
        img: "./img/sauce_graine2.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "DH" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
