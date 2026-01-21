let menu = [
    {
        id: "burgers",
        title: "Burgers & Sandwiches",
        items: [
            {
                id: "veg_mushroom_black_burger",
                name: "Veggie mushroom black burger",
                desc: "Mixed green salad, Tomatoes, Edamame, Mushrooms...",
                price: 14.9,
                img: ""
            },
        ]
    }
];

function showMenu() {
  let container = document.getElementById("food-list");
  let template = document.getElementById("food-template");
  let burger = menu[0].items[0];

  let clone = template.content.cloneNode(true);

  clone.querySelector(".food-img").src = "assets/img/veg-black-bun.jpg";
  clone.querySelector(".food-title").innerText = burger.name;
  clone.querySelector(".food-desc").innerText = burger.desc;
  clone.querySelector(".food-price").innerText =
    burger.price.toFixed(2) + " €";

  container.appendChild(clone);
}

showMenu();
