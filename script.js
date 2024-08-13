/* var head = document.getElementsByTagName("head")[0]; */
var head = document.head;
/* var body = document.getElementsByTagName("body")[0]; */
var body = document.body;
body.style.backgroundColor = "#3A3B3C"

/* Create header tag */
var header = document.createElement("header");
body.appendChild(header);

/* Create header container */
var div = document.createElement("div");
div.id = "hr-head-con01";
div.className = "container";
div.style.maxWidth = "1300px";
div.style.margin = "0 auto";
header.appendChild(div);

/* Create header section */
var hr_head_con01 = document.getElementById("hr-head-con01");
var div = document.createElement("div");
div.id = "header";
div.className = "header_";
div.style.display = "flex";
div.style.justifyContent = "space-between";
div.style.alignItems = "center";
div.style.zIndex = "1";
div.style.padding = "20px 0";
hr_head_con01.appendChild(div);

/* Create header: brand section */
var div_header = document.getElementById("header");
var div = document.createElement("div");
div.id = "brand";
div.className = "brand_";
div.style.display = "flex";
div.style.alignItems = "center";
div.style.gap = "10px";
div_header.appendChild(div);

/* Create header::brand: icon and name */
var brand = document.getElementById("brand");
var img = document.createElement("img");
img.src = "assets/roulette.jpg";
img.alt = "roulette_wheel";
img.id = "roulette_wheel";
img.style.width = "50px";
img.style.height = "50px";
brand.appendChild(img);
var h1 = document.createElement("h1");
h1.innerText = "Roulette";
h1.style.color = "white";
brand.appendChild(h1);

/* Create header: user section */
var div = document.createElement("div");
div.id = "user";
div.className = "user_";
div.style.display = "flex";
div.style.gap = "50px";
div.style.alignItems = "center";
div_header.appendChild(div);

/* Create header::user: chips and account */
/* Create header::user: chips */
var user = document.getElementById("user");
var div = document.createElement("div");
div.id = "user-chips";
div.className = "user__chips";
div.style.display = "flex";
div.style.alignItems = "center";
div.style.gap = "10px";
var img = document.createElement("img");
img.src = "assets/poker_chip.png";
img.alt = "poker_chip";
img.id = "poker_chip";
img.style.width = "50px";
img.style.height = "50px";
div.appendChild(img);
var h5 = document.createElement("h1");
h5.innerText = "1000000";
h5.style.color = "white";
div.appendChild(h5);
user.appendChild(div);

/* Create header::user: account */
var img = document.createElement("img");
img.src = "assets/person.png";
img.alt = "person";
img.id = "person";
img.style.width = "50px";
img.style.height = "50px";
user.appendChild(img);

/* Create main tag */
var main = document.createElement("main");
header.after(main);

/* Create footer tag */
var footer = document.createElement("footer");
main.after(footer);
