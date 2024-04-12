import { Deletites, infoitems } from "./API.js";

let menu_products = document.querySelector(".menu_products");
let homebtn = document.querySelector(".home");
let productsBtn = document.querySelector(".products");
let aboutbtn = document.querySelector(".about");
let main_head = document.querySelector(".head_main");
let none_1 = document.querySelector(".first_none");
let none_2 = document.querySelector(".second_none");
let none_3 = document.querySelector(".third_none");
let body_img = document.querySelector(".body_image");
let logo = document.querySelector(".logo");
let cart = document.querySelector(".cart");
let right_part = document.querySelector(".right_part");
let product_menubtn = document.querySelector(".show_products_1");
let info = document.querySelector(".info");
let items_names = document.querySelector(".items_names");
let info_main = document.querySelector(".info_items");
let range = document.querySelector(".range");
let value = document.querySelector(".value");

let dialog = document.querySelector(".dialog");
let cont = document.querySelector(".cont");

let copy = JSON.parse(localStorage.getItem("data")) || [];

cart.onclick = () => {
  dialog.showModal();
  copyData();
};

function copyData() {
  cont.innerHTML = "";
  copy.forEach((el) => {
    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.width = "85%";
    let divsmth = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.img;
    let div_2 = document.createElement("div");
    div_2.style.width = "100%";
    div_2.style.display = "flex";
    div_2.style.justifyContent = "space-between";
    let h1 = document.createElement("h1");
    h1.innerHTML = el.name;
    let price = document.createElement("h1");
    price.innerHTML = el.price;
    let cntdiv = document.createElement("div");
    cntdiv.style.display = "flex";
    let cntmin = document.createElement("h1");
    cntmin.innerHTML = "-";
    let cntnum = document.createElement("h1");
    cntnum.innerHTML = cnt;
    let cntprice = document.createElement("h1");
    cntmin.onclick = () => {
      cntnum.innerHTML = cnt--;
      cntprice.innerHTML = `$${cnt * el.price}`;
    };
    let deleteitem = document.createElement("h1");
    deleteitem.innerHTML = "&times;";
    deleteitem.onclick = () => {
      deletitem(el.id);
    };
    let cntplus = document.createElement("h1");
    cntplus.innerHTML = "+";
    cntplus.onclick = () => {
      cntnum.innerHTML = cnt++;
      cntprice.innerHTML = `$${cnt * el.price}`;
    };
    cntdiv.append(cntmin, cntnum, cntplus);
    div_2.append(h1, deleteitem);
    divsmth.append(div_2, cntdiv, cntprice);
    div.append(img, divsmth);
    cont.append(div);
  });
}

value.innerHTML = "Value: All";
range.oninput = () => {
  value.innerHTML = `Value: $${range.value}`;
};

function deletitem(id) {
  copy = copy.filter((el) => el.id != id);
  localStorage.setItem("data", JSON.stringify(copy));
  copyData(copy);
}

product_menubtn.onclick = () => {
  body_img.classList.add("remove");
  main_head.classList.add("black1");
  logo.src = "logo.png";
  cart.src = "cartblack.png";
  none_1.style.display = "none";
  none_2.style.display = "block";
  none_3.style.display = "none";
};

let cnt = 0;

function getData(data) {
  menu_products.innerHTML = "";
  data.forEach((el) => {
    let div_1 = document.createElement("div");
    div_1.classList.add("div_1");
    div_1.onclick = () => {
      body_img.classList.add("remove");
      main_head.classList.add("black1");
      logo.src = "logo.png";
      cart.src = "cartblack.png";
      info_main.style.display = "block";
      none_1.style.display = "none";
      none_2.style.display = "none";
      none_3.style.display = "none";
      infoitems(el.id);
      items_names.innerHTML = `Home / ${el.name}`;
      let div_items = document.createElement("div");
      div_items.classList.add("items_div");
      let item_img = document.createElement("img");
      item_img.src = el.img;
      let div_items_2 = document.createElement("div");
      div_items_2.classList.add("items_div_2");
      let name_items = document.createElement("h1");
      name_items.innerHTML = el.name;
      let author = document.createElement("h3");
      author.innerHTML = "BY MARCOS";
      let item_price = document.createElement("h2");
      item_price.innerHTML = `$${el.price}`;
      let desc = document.createElement("p");
      desc.innerHTML =
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae Quisquam, dicta. Eos quod quisquam  esse recusandae vitae neque dolore, obcaecati incidunt sesequi";
      let add_to_cart = document.createElement("button");
      add_to_cart.innerHTML = "ADD TO CART";
      add_to_cart.onclick = () => {
        if (!copy.find((item) => item.id === el.id)) {
          console.log(el);
          copy.push(el);
          localStorage.setItem("data", JSON.stringify(copy));
        } else {
          alert("Item already exists");
        }
      };
      div_items_2.append(name_items, author, item_price, desc, add_to_cart);
      div_items.append(img, div_items_2);
      info.append(div_items);
    };
    let img = document.createElement("img");
    img.src = el.img;
    let name = document.createElement("h4");
    name.innerHTML = el.name;
    name.style.textAlign = "center";
    let price = document.createElement("h3");
    price.innerHTML = `$${el.price}`;
    price.style.textAlign = "center";
    div_1.append(img, name, price);
    menu_products.append(div_1);
  });
}

function getData2(data) {
  right_part.innerHTML = "";
  data.forEach((el) => {
    let div_1 = document.createElement("div");
    div_1.classList.add("div_2");
    div_1.onclick = () => {
      body_img.classList.add("remove");
      main_head.classList.add("black1");
      logo.src = "logo.png";
      cart.src = "cartblack.png";
      info_main.style.display = "block";
      none_1.style.display = "none";
      none_2.style.display = "none";
      none_3.style.display = "none";
      infoitems(el.id);
      items_names.innerHTML = `Home / ${el.name}`;
      let div_items = document.createElement("div");
      div_items.classList.add("items_div");
      let item_img = document.createElement("img");
      item_img.src = el.img;
      let div_items_2 = document.createElement("div");
      div_items_2.classList.add("items_div_2");
      let name_items = document.createElement("h1");
      name_items.innerHTML = el.name;
      let author = document.createElement("h3");
      author.innerHTML = "BY MARCOS";
      let item_price = document.createElement("h2");
      item_price.innerHTML = `$${el.price}`;
      let desc = document.createElement("p");
      desc.innerHTML =
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae Quisquam, dicta. Eos quod quisquam  esse recusandae vitae neque dolore, obcaecati incidunt sesequi";
      let add_to_cart = document.createElement("button");
      add_to_cart.innerHTML = "ADD TO CART";
      add_to_cart.onclick = () => {
        if (!copy.find((item) => item.id === el.id)) {
          console.log(el);
          copy.push(el);
          localStorage.setItem("data", JSON.stringify(copy));
        } else {
          alert("Item already exists");
        }
      };
      div_items_2.append(name_items, author, item_price, desc, add_to_cart);
      div_items.append(img, div_items_2);
      info.append(div_items);
    };
    let img = document.createElement("img");
    img.src = el.img;
    let name = document.createElement("h4");
    name.innerHTML = el.name;
    name.style.textAlign = "center";
    let price = document.createElement("h3");
    price.innerHTML = `$${el.price}`;
    price.style.textAlign = "center";
    div_1.append(img, name, price);
    right_part.append(div_1);
  });
}

homebtn.onclick = () => {
  body_img.classList.remove("remove");
  main_head.classList.remove("black1");
  logo.src = "comfy.png";
  cart.src = "map_grocery-or-supermarket.png";
  none_1.style.display = "block";
  none_2.style.display = "none";
  none_3.style.display = "none";
  info_main.style.display = "none";
  info.innerHTML = "";
};
productsBtn.onclick = () => {
  body_img.classList.add("remove");
  main_head.classList.add("black1");
  logo.src = "logo.png";
  cart.src = "cartblack.png";
  none_1.style.display = "none";
  none_2.style.display = "block";
  none_3.style.display = "none";
  info_main.style.display = "none";
  info.innerHTML = "";
};
aboutbtn.onclick = () => {
  body_img.classList.add("remove");
  main_head.classList.add("black1");
  logo.src = "logo.png";
  cart.src = "cartblack.png";
  none_1.style.display = "none";
  none_2.style.display = "none";
  none_3.style.display = "block";
  info_main.style.display = "none";
  info.innerHTML = "";
};

export { getData, getData2 };
