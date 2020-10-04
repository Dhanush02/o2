NProgress.start();
NProgress.done();
menu = () => {
  var showNav = document.querySelector(".nav");
  showNav.classList.toggle("show");
  var a = Array.from(document.querySelectorAll(".show a"));
  a.forEach((rem) => {
    rem.addEventListener("click", () => {
      showNav.classList.remove("show");
    });
  });
};
window.addEventListener("scroll", () => {
  let navbar = document.getElementById("navbar-example2");
  if (window.pageYOffset > 30) {
    navbar.style.background = "white";
    navbar.style.boxShadow = "0 8px 25px 0 rgba(0,0,0,.1)";
    navbar.style.height = "80px";
  } else {
    navbar.style.background = "none";
    navbar.style.boxShadow = "none";
  }
});
function Delete(e) {
  let items = [];
  JSON.parse(localStorage.getItem("items")).map((data) => {
    if (data.id != e.parentElement.parentElement.children[0].textContent) {
      items.push(data);
    }
  });
  localStorage.setItem("items", JSON.stringify(items));
  window.location.reload();
}
window.onload = function () {
  const iconShopping = document.querySelector(".iconShopping");
  const cartCloseBtn = document.querySelector(".fa-times");
  const cartBox = document.querySelector(".cartBox");
  iconShopping.addEventListener("click", function () {
    cartBox.classList.add("active");
  });
  cartCloseBtn.addEventListener("click", function () {
    cartBox.classList.remove("active");
  });
  const attToCartBtn = document.getElementsByClassName("attToCart");

  let items = [];
  for (let i = 0; i < attToCartBtn.length; i++) {
    attToCartBtn[i].addEventListener("click", function (e) {
      localStorage.setItem("activeTab", "#pills-works");
      if (typeof Storage !== "undefined") {
        let item = {
          id: i + 1,
          name: e.target.parentElement.children[0].textContent,
          price: parseInt(
            e.target.parentElement.children[1].children[0].textContent
          ),
          no: 1,
        };
        if (JSON.parse(localStorage.getItem("items")) === null) {
          items.push(item);
          localStorage.setItem("items", JSON.stringify(items));
          window.location.reload();
        } else {
          const localItems = JSON.parse(localStorage.getItem("items"));
          localItems.map((data) => {
            if (item.id == data.id) {
              item.no = data.no + 1;
            } else {
              items.push(data);
            }
          });
          items.push(item);
          localStorage.setItem("items", JSON.stringify(items));
          window.location.reload();
        }
      } else {
        alert("local storage is not working on your browser");
      }
    });
  }
  const iconShoppingP = document.querySelector(".iconShopping p");
  let no = 0;
  if (localStorage.getItem("items")) {
    JSON.parse(localStorage.getItem("items")).map((data) => {
      no = no + data.no;
    });
  }

  iconShoppingP.innerHTML = no;
  const cardBoxTable = cartBox.querySelector("table");
  let tableData = "";
  tableData +=
    "<tr><th>S no.</th><th>Item Name</th><th>Item No</th><th>item Price</th><th></th></tr>";
  if (JSON.parse(localStorage.getItem("items")) === null) {
    tableData += '<tr><td colspan="5">No items found</td></tr>';
  } else {
    JSON.parse(localStorage.getItem("items")).map((data) => {
      tableData +=
        "<tr><th>" +
        data.id +
        "</th><th>" +
        data.name +
        "</th><th>" +
        data.no +
        "</th><th>" +
        data.price +
        '</th><th><a href="#" onclick=Delete(this); style="color:white;background:#E74040;padding:5px;border-radius:5px;">Delete</a></th></tr>';
    });
  }
  cardBoxTable.innerHTML = tableData;
};
totalCost = () => {
  let cartCost = localStorage.getItem("items");
  cartCost = JSON.parse(cartCost);

  let total = 0;
  if (cartCost != null) {
    cartCost.map((data) => {
      let sum = parseInt(data.price);
      total = total + sum*data.no;
      console.log(total);
    });
  }
};
let obj = localStorage.getItem("items");
console.log(JSON.parse(obj));
this.totalCost();
