/* var head = document.getElementsByTagName("head")[0]; */
var head = document.head;
/* var body = document.getElementsByTagName("body")[0]; */
var body = document.body;
body.style.backgroundColor = "#3A3B3C"

/* Create header tag */
var header = document.createElement("header");
header.style.backgroundColor = "#28282B";
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
div.style.padding = "15px 0";
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
img.src = "../static/assets/roulette.jpg";
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
div.id = "user_chips";
div.className = "user__chips";
div.style.display = "flex";
div.style.alignItems = "center";
div.style.gap = "10px";
var img = document.createElement("img");
img.src = "../static/assets/poker_chip.png";
img.alt = "poker_chip";
img.id = "poker_chip";
img.style.width = "50px";
img.style.height = "50px";
div.appendChild(img);

var h1 = document.createElement("h1");
h1.id = "user_chips_count";
h1.innerText = "1000000";
h1.style.color = "white";
div.appendChild(h1);
user.appendChild(div);

/* Create header::user: account */
var a = document.createElement("a");
a.href = "/account/login";
a.rel = 'noopener noreferrer';
a.id = "user_link"
user.appendChild(a);

var img = document.createElement("img");
var userLink = document.getElementById("user_link");
img.src = "../static/assets/person.png";
img.alt = "person";
img.id = "person";
img.style.width = "50px";
img.style.height = "50px";
userLink.appendChild(img);

/* Create main tag */
var main = document.createElement("main");
header.after(main);

/* Create footer tag */
var footer = document.createElement("footer");
main.after(footer);
var div = document.createElement("div");
div.id = "ft-foot-con01";
div.className = "container";
div.style.maxWidth = "1300px";
div.style.margin = "0 auto";
footer.appendChild(div);

/* barrier */
var ft_foot_con01 = document.querySelector("#ft-foot-con01");
var div = document.createElement("div");
div.id = "barrier_06";
div.className = "barrier";
div.style.height = "125px";
ft_foot_con01.appendChild(div);

/* Create copyright section */
var div = document.createElement("div");
div.id = "copyright";
div.className = "copyright_"
div.style.display = "flex";
div.style.justifyContent = "space-between";
div.style.alignItems = "center";
ft_foot_con01.appendChild(div);

var copyright = document.querySelector("#copyright");
var p = document.createElement("p");
var copy_unicode = "\u00A9";
p.style.color = "white";
p.innerText = copy_unicode + " MIKNSJ GRAND 2024";
copyright.appendChild(p);

var a = document.createElement("a");
a.innerText = "VIEW SOURCE";
a.id = "source_link";
a.href = "https://github.com/MIKNSJ/roulette";
a.target = "_blank";
a.rel = "noopener noreferrer";
a.style.textDecoration = "none";
a.style.color = "white";
copyright.appendChild(a);

/* Create rolls: container */
var div = document.createElement("div");
div.id = "mn-rolls-con01";
div.className = "container";
div.style.maxWidth = "1300px";
div.style.margin = "0 auto";
main.appendChild(div);

/* barrier */
var mn_rolls_con01 = document.querySelector("#mn-rolls-con01");
var div = document.createElement("div");
div.id = "barrier_01";
div.className = "barrier";
div.style.height = "50px";
mn_rolls_con01.appendChild(div);

/* Create last rolls: section */
var div = document.createElement("div");
div.id = "last_rolls";
div.className = "last__rolls";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.alignItems = "flex-start";
div.style.gap = "10px";
mn_rolls_con01.appendChild(div);

/* Create last rolls of 100: section */
var last_rolls = document.querySelector("#last_rolls");
var div = document.createElement("div");
div.id = "last_100";
div.className = "last__100";
div.style.display = "flex";
div.style.alignItems = "flex-start";
div.style.gap = "20px";
last_rolls.appendChild(div);

/* Create last rolls of 100::section: contents */
/* last rolls of 100::section::contents: title */
var last_100 = document.querySelector("#last_100");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "LAST 100";
last_100.appendChild(h3);

/* last rolls of 100::section::contents: items */
var div = document.createElement("div");
div.id = "last_100_items";
div.className = "last__100_items";
div.style.display = "flex";
div.style.justifyContent = "space-between";
div.style.gap = "20px";
last_100.appendChild(div);

/* last rolls of 100::section::contents: red count */
var last_100_items = document.querySelector("#last_100_items");
var div = document.createElement("div");
div.id = "red_stats";
div.className = "red__stats";
div.style.display = "flex";
div.style.alignItems = "center";
div.style.gap = "5px";
last_100_items.appendChild(div);

var red_stats = document.querySelector("#red_stats");
var div = document.createElement("div");
div.id = "red_circle";
div.className = "red__circle";
div.style.width = "20px";
div.style.height = "20px";
div.style.borderRadius = "5px";
div.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
div.style.backgroundColor = "red";
red_stats.appendChild(div);

var h3 = document.createElement("h3");
h3.id = "red_count";
h3.style.color = "white";
h3.innerText = "0";
red_stats.appendChild(h3);

/* last rolls of 100::section::contents: green count */
var last_100_items = document.querySelector("#last_100_items");
var div = document.createElement("div");
div.id = "green_stats";
div.className = "green__stats";
div.style.display = "flex";
div.style.alignItems = "center";
div.style.gap = "5px";
last_100_items.appendChild(div);

var green_stats = document.querySelector("#green_stats");
var div = document.createElement("div");
div.id = "green_circle";
div.className = "green__circle";
div.style.width = "20px";
div.style.height = "20px";
div.style.borderRadius = "5px";
div.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
div.style.backgroundColor = "green";
green_stats.appendChild(div);

var h3 = document.createElement("h3");
h3.id = "green_count";
h3.style.color = "white";
h3.innerText = "0";
green_stats.appendChild(h3);

/* last rolls of 100::section::contents: black count */
var last_100_items = document.querySelector("#last_100_items");
var div = document.createElement("div");
div.id = "black_stats";
div.className = "black__stats";
div.style.display = "flex";
div.style.alignItems = "center";
div.style.gap = "5px";
last_100_items.appendChild(div);

var black_stats = document.querySelector("#black_stats");
var div = document.createElement("div");
div.id = "black_circle";
div.className = "black__circle";
div.style.width = "20px";
div.style.height = "20px";
div.style.borderRadius = "5px";
div.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
div.style.backgroundColor = "#36454F";
black_stats.appendChild(div);

var h3 = document.createElement("h3");
h3.id = "black_count";
h3.style.color = "white";
h3.innerText = "0";
black_stats.appendChild(h3);

/* last 10 rolls:section */
var div = document.createElement("div");
div.id = "last_10";
div.className = "last__10";
div.style.display = "flex";
div.style.justifyContent = "space-between";
div.style.gap = "5px";
last_rolls.appendChild(div);

/* last 10 rolls::section: insert items */
var last_10 = document.querySelector("#last_10");
for (var i = 0; i < 10; i++) {
    var div = document.createElement("div");
    div.id = "recent_" + (i + 1);
    div.className = "recent";
    div.style.width = "30px";
    div.style.height = "30px";
    div.style.borderRadius = "5px";
    div.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
    div.style.backgroundColor = "white";
    last_10.appendChild(div);
}

/* barrier */
var mn_rolls_con01 = document.querySelector("#mn-rolls-con01");
var div = document.createElement("div");
div.id = "barrier_02";
div.className = "barrier";
div.style.height = "75px";
mn_rolls_con01.appendChild(div);

/* Create wheel */
var div = document.createElement("div");
div.style.position = "relative";
div.id = "wheel";
div.className = "wheel_";
div.style.display = "flex";
div.style.alignItems = "center";
div.style.backgroundColor = "#28282B";
div.style.borderRadius = "5px";
div.style.overflow = "hidden";
div.style.padding = "30px 30px 30px 0";
div.style.gap = "5px";
div.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
mn_rolls_con01.appendChild(div);

/* wheel-center line */
var wheel = document.querySelector("#wheel");
var div = document.createElement("div");
div.id = "wheel_center_line";
div.style.width = "3px";
div.style.height = "120px";
div.style.position = "absolute";
div.style.left = "650px";
div.style.backgroundColor = "white";
div.style.zIndex = "1";
wheel.appendChild(div);

/* wheel: insert items */
for (var i = 0; i < 82; i++) {
    var div = document.createElement("div");
    div.id = "square" + (i + 1);
    div.className = "square";
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.borderRadius = "5px";
    if (i % 2 == 0) {
        div.style.backgroundColor = "#36454F";
    } else {
        div.style.backgroundColor = "red";
    }
    div.style.padding = "30px";
    div.style.transform = "translateX(-30px)";
    div.style.transition = "transform 5s";
    wheel.appendChild(div);
}

/* barrier */
var div = document.createElement("div");
div.id = "barrier_03";
div.className = "barrier";
div.style.height = "75px";
mn_rolls_con01.appendChild(div);

/* timer */
var div = document.createElement("div");
div.id = "timer";
div.className = "timer_";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.gap = "20px";
mn_rolls_con01.appendChild(div);

/* timer: text */
var timer = document.querySelector("#timer");
var h2 = document.createElement("h2");
h2.id = "timer_text";
h2.style.color = "white";
h2.style.alignSelf = "center";
h2.innerText = "PLACE YOUR BETS BELOW";
timer.appendChild(h2);

/* timer: load bar */
var div = document.createElement("div");
div.id = "timer_bar";
div.style.backgroundColor = "white";
div.style.display = "block";
div.style.content = "";
div.style.height = "3px";
div.style.width = "100%";
div.style.transition = "width 5s";
timer.appendChild(div);

/* barrier */
var div = document.createElement("div");
div.id = "barrier_04";
div.className = "barrier";
div.style.height = "50px";
mn_rolls_con01.appendChild(div);

/* bet place: section */
var div = document.createElement("div");
div.id = "bet_placed";
div.className = "bet__placed";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.alignItems = "flex-start";
div.style.gap = "5px";
div.style.backgroundColor = "#28282B";
div.style.padding = "10px";
div.style.borderRadius = "5px";
div.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
mn_rolls_con01.appendChild(div);

/* bet place::section: text */
var bet_placed = document.querySelector("#bet_placed");
var h5 = document.createElement("h5");
h5.style.color = "white";
h5.innerText = "BET AMOUNT";
bet_placed.appendChild(h5);

/* bet place::section: amount */
var div = document.createElement("div");
div.id = "bet_amount";
div.className = "bet__amount";
div.style.width = "100%";
div.style.display = "flex";
div.style.justifyContent = "space-between";
bet_placed.appendChild(div);

/* bet amount: title */
var bet_amount = document.querySelector("#bet_amount");
var div = document.createElement("div");
div.id = "bet_amount_title";
div.className = "bet__amount_title";
div.style.display = "flex";
div.style.alignItems = "center";
div.style.gap = "5px";
bet_amount.appendChild(div);

/* bet amount: insert */
var bet_amount_title = document.querySelector("#bet_amount_title");
var img = document.createElement("img");
img.src = "../static/assets/poker_chip.png";
img.style.width = "25px";
img.style.height = "25px";
bet_amount_title.appendChild(img);
var input = document.createElement("input");
input.id = "bet_amount_count";
input.type = "text";
input.placeholder = "Enter an amount to bet...";
input.style.fontSize = "1.17em";
input.style.outline = "none";
input.style.border = "none";
input.style.backgroundColor = "inherit";
input.style.color = "white";
input.autocomplete = "off";
bet_amount_title.appendChild(input);

/* bet modify: section */
var div = document.createElement("div");
div.id = "bet_modify";
div.className = "bet__modify";
div.style.display = "flex";
div.style.gap = "5px";
bet_amount.appendChild(div);

/* bet modify: insert */
/* clear_button */
var button = document.createElement("button");
button.id = "clear_button";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.padding = "5px";
button.style.backgroundColor = "#555D50";
button.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
bet_modify.appendChild(button);
var clear_button = document.querySelector("#clear_button");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "CLEAR";
clear_button.appendChild(h3);

/* last_button */
var button = document.createElement("button");
button.id = "last_button";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.padding = "5px";
button.style.backgroundColor = "#555D50";
button.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
bet_modify.appendChild(button);
var last_button = document.querySelector("#last_button");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "LAST";
last_button.appendChild(h3);

/* plus_button */
var button = document.createElement("button");
button.id = "plus_button";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.padding = "5px";
button.style.backgroundColor = "#555D50";
button.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
bet_modify.appendChild(button);
var plus_button = document.querySelector("#plus_button");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "+1";
plus_button.appendChild(h3);

/* plus_ten_button */
var button = document.createElement("button");
button.id = "plus_ten_button";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.padding = "5px";
button.style.backgroundColor = "#555D50";
button.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
bet_modify.appendChild(button);
var plus_ten_button = document.querySelector("#plus_ten_button");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "+10";
plus_ten_button.appendChild(h3);

/* plus_hundred_button */
var button = document.createElement("button");
button.id = "plus_hundred_button";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.padding = "5px";
button.style.backgroundColor = "#555D50";
button.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
bet_modify.appendChild(button);
var plus_hundred_button = document.querySelector("#plus_hundred_button");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "+100";
plus_hundred_button.appendChild(h3);

/* plus_thousand_button */
var button = document.createElement("button");
button.id = "plus_thousand_button";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.padding = "5px";
button.style.backgroundColor = "#555D50";
button.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
bet_modify.appendChild(button);
var plus_thousand_button = document.querySelector("#plus_thousand_button");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "+1000";
plus_thousand_button.appendChild(h3);

/* half_button */
var button = document.createElement("button");
button.id = "half_button";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.padding = "5px";
button.style.backgroundColor = "#555D50";
button.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
bet_modify.appendChild(button);
var half_button = document.querySelector("#half_button");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "1/2";
half_button.appendChild(h3);

/* times_button */
var button = document.createElement("button");
button.id = "times_button";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.padding = "5px";
button.style.backgroundColor = "#555D50";
button.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
bet_modify.appendChild(button);
var times_button = document.querySelector("#times_button");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "x2";
times_button.appendChild(h3);

/* max_button */
var button = document.createElement("button");
button.id = "max_button";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.padding = "5px";
button.style.backgroundColor = "#555D50";
button.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
bet_modify.appendChild(button);
var max_button = document.querySelector("#max_button");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "MAX";
max_button.appendChild(h3);

/* barrier */
var div = document.createElement("div");
div.id = "barrier_05";
div.className = "barrier";
div.style.height = "25px";
mn_rolls_con01.appendChild(div);

/* bet type: section */
var div = document.createElement("div");
div.id = "bet_type";
div.className = "bet__type";
div.style.display = "flex";
div.style.justifyContent = "space-between";
mn_rolls_con01.appendChild(div);

/* bet type::section: red */
var bet_type = document.querySelector("#bet_type");
var div = document.createElement("div");
div.id = "bet_type_red";
div.className = "bet__type_red";
div.style.display = "flex";
div.style.justifyContent = "space-between";
div.style.alignItems = "center";
div.style.flexDirection = "column";
div.style.gap = "5px";
div.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
div.style.backgroundColor = "#28282B";
div.style.borderRadius = "5px";
bet_type.appendChild(div);

/* bet type::section::red: insert */
var bet_type_red = document.querySelector("#bet_type_red");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "WIN 2X";
h3.style.padding = "5px";
bet_type_red.appendChild(h3);
var button = document.createElement("button");
button.id = "bet_type_red_button";
button.style.backgroundColor = "red";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.padding = "5px 100px";
bet_type_red.appendChild(button);
var bet_type_red_button = document.querySelector("#bet_type_red_button");
var h2 = document.createElement("h2");
h2.id = "bet_type_red_text";
h2.classList = "bet__type_text";
h2.style.color = "white";
h2.innerText = "PLACE BET";
bet_type_red_button.appendChild(h2);

/* bet type::section: green */
var div = document.createElement("div");
div.id = "bet_type_green";
div.className = "bet__type_green";
div.style.display = "flex";
div.style.justifyContent = "space-between";
div.style.alignItems = "center";
div.style.flexDirection = "column";
div.style.gap = "5px";
div.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
div.style.backgroundColor = "#28282B";
div.style.borderRadius = "5px";
bet_type.appendChild(div);

/* bet type::section::green: insert */
var bet_type_green = document.querySelector("#bet_type_green");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "WIN 14X";
h3.style.padding = "5px";
bet_type_green.appendChild(h3);
var button = document.createElement("button");
button.id = "bet_type_green_button";
button.style.backgroundColor = "green";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.padding = "5px 100px";
bet_type_green.appendChild(button);
var bet_type_green_button = document.querySelector("#bet_type_green_button");
var h2 = document.createElement("h2");
h2.id = "bet_type_green_text";
h2.classList = "bet__type_text";
h2.style.color = "white";
h2.innerText = "PLACE BET";
bet_type_green_button.appendChild(h2);

/* bet type::section: black */
var div = document.createElement("div");
div.id = "bet_type_black";
div.className = "bet__type_black";
div.style.display = "flex";
div.style.justifyContent = "space-between";
div.style.alignItems = "center";
div.style.flexDirection = "column";
div.style.gap = "5px";
div.style.boxShadow = "1px 1px 3px 1px rgba(0,0,0,0.25)";
div.style.backgroundColor = "#28282B";
div.style.borderRadius = "5px";
bet_type.appendChild(div);

/* bet type::section::black: insert */
var bet_type_black = document.querySelector("#bet_type_black");
var h3 = document.createElement("h3");
h3.style.color = "white";
h3.innerText = "WIN 2X";
h3.style.padding = "5px";
bet_type_black.appendChild(h3);
var button = document.createElement("button");
button.id = "bet_type_black_button";
button.style.backgroundColor = "#343434";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.padding = "5px 100px";
bet_type_black.appendChild(button);
var bet_type_black_button = document.querySelector("#bet_type_black_button");
var h2 = document.createElement("h2");
h2.id = "bet_type_black_text";
h2.classList = "bet__type_text";
h2.style.color = "white";
h2.innerText = "PLACE BET";
bet_type_black_button.appendChild(h2);



/* ====================================================================================================================
 *                                                                                                                    *
 *                                                                                                                    *
 *                                                                                                                    *
 *                                                                                                                    *
 *                                                                                                                    *
 *                                                                                                                    *
 * Roulette Game Functions                                                                                            *
 *                                                                                                                    *
 *                                                                                                                    *
 *                                                                                                                    *
 *                                                                                                                    *
 *                                                                                                                    *
 *                                                                                                                    *
 * ==================================================================================================================*/



var user_chips_count = document.querySelector("#user_chips_count"); 
var bet_amount_count = document.querySelector("#bet_amount_count"); 
var timer_text = document.querySelector("#timer_text");
var timer_bar = document.querySelector("#timer_bar");
var bet__type_text = document.querySelectorAll(".bet__type_text");
var square = document.querySelectorAll(".square");
var mid_square = document.querySelector("#square11");
var mid_square_two = document.querySelector("#square69");
var recent = document.querySelectorAll(".recent");
var red_count = document.querySelector("#red_count");
var black_count = document.querySelector("#black_count");
var green_count = document.querySelector("#green_count");
var expectedColor = 0;
var firstLoadColor = "black";
var lastGreen = 0;
var actualColor = 0;
var last_100_arr = [];
var last_10_arr = [];
var num_red = 0;
var num_green = 0;
var num_black = 0;
const bet_placed_audio = new Audio("../static/assets/bet_placed.mp3");
const wheel_spin_audio = new Audio("../static/assets/wheel_spin.mp3");
const won_audio = new Audio("../static/assets/won.mp3");
const lose_audio = new Audio("../static/assets/lose.mp3");

function recentTenColors() {
    for (var i = 0; i < 10; i++) {
        if (last_10_arr[i] == 1) {
            recent[i].style.backgroundColor = "red";
        } else if (last_10_arr[i] == 2) {
            recent[i].style.backgroundColor = "#36454F";
        } else if (last_10_arr[i] == 3) {
            recent[i].style.backgroundColor = "#4CBB17";
        } else {
            recent[i].style.backgroundColor = "white";
        }
    }
}

function determineColor() {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(38);
    var selectedNum = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    var color = 0;

    if (selectedNum > 0 && selectedNum <= 19) {
        color = 1;
        //console.log("red");
    } else if (selectedNum > 19 && selectedNum <= 37) {
        color = 2;
        //console.log("black");
    } else {
        color = 3;
        //console.log("green");
    }

    return color;
}

function determineWinner(expectedColor, actualColor) {
    var currentChips = Number(user_chips_count.innerText);
    var currentBet = Number(bet_amount_count.value);
    var newChips;

    if (expectedColor == actualColor && actualColor != 3) {
        newChips = 2 * currentBet;
        currentChips+=newChips;
        user_chips_count.innerText = currentChips.toString();
        won_audio.play();
    } else if (expectedColor == actualColor && actualColor == 3) {
        newChips = 14 * currentBet;
        currentChips+=newChips; user_chips_count.innerText = currentChips.toString();
        won_audio.play();
    } else {
        currentChips-=currentBet;
        user_chips_count.innerText = currentChips.toString();
        lose_audio.play();
    }
}

function resetBets() {
    timer_text.innerText = "PLACE YOUR BET BELOW"; 
    timer_bar.style.width = "100%"; 
    bet_placed.style.pointerEvents = "auto";
    bet_type.style.pointerEvents = "auto";
    bet__type_text[0].innerText = "PLACE BET";
    bet__type_text[1].innerText = "PLACE BET";
    bet__type_text[2].innerText = "PLACE BET";
    expectedColor = 0;

    if (last_100_arr.length > 100) {
        var oldestColor = last_100_arr.shift();

        if (oldestColor == 1) {
            num_red-=1;
            red_count.innerText = num_red.toString();
        } else if (oldest == 2) {
            num_black-=1;
            black_count.innerText = num_black.toString();
        } else {
            num_green-=1;
            green_count.innerText = num_green.toString();
        }
    }

    if (last_10_arr.length > 10) {
        last_10_arr.pop();
    }
    recentTenColors();

    if (actualColor == 1) {
        num_red+=1;
        red_count.innerText = num_red.toString();
    } else if (actualColor == 2) {
        num_black+=1;
        black_count.innerText = num_black.toString();
    } else {
        num_green+=1;
        green_count.innerText = num_green.toString();
    }
    
    for (var i = 0; i < square.length; i++) {
        if (actualColor == 1) {
            if (i % 2 == 0) {
                square[i].style.backgroundColor = "red";
            } else {
                square[i].style.backgroundColor = "#36454F";
            }
        } else if (actualColor == 2) {
            if (i % 2 == 0) {
                square[i].style.backgroundColor = "#36454F";
            } else {
                square[i].style.backgroundColor = "red";
            }
        } else {
            if (firstLoadColor == "black") {
                if (i % 2 == 0) {
                    square[i].style.backgroundColor = "#36454F";
                } else {
                    square[i].style.backgroundColor = "red";
                }
            } else {
                if (i % 2 == 0) {
                    square[i].style.backgroundColor = "red";
                } else {
                    square[i].style.backgroundColor = "#36454F";
                }
            }
        }

        square[i].style.transition = "none";
        square[i].style.transform = "translateX(-30px)";
    }

    if (lastGreen == 1) {
        mid_square.style.backgroundColor = "#4CBB17";
    }

    lastGreen = 0;
    actualColor = 0;
}

function rollWheel() {
    actualColor = determineColor();
    const start_time = Date.now();
    var current_time = Date.now();
    var diff = 6000;

    var cooldown = setInterval(() => {
        current_time = Date.now();

        var square = document.querySelectorAll(".square");

        if (actualColor == 3) {
            mid_square_two.style.backgroundColor = "#4CBB17";
            lastGreen = 1;
        }
        
        wheel_spin_audio.play();
        for (var i = 0; i < square.length; i++) {
            square[i].style.transition = "transform 5s";

            if (firstLoadColor == "black" && actualColor == 2) {
                square[i].style.transform = "translateX(-3800px)";
            } else if (firstLoadColor == "black" && actualColor == 1) {
                square[i].style.transform = "translateX(-3865px)";
            } else if (firstLoadColor == "red" && actualColor == 1) {
                square[i].style.transform = "translateX(-3800px)";
            } else if (firstLoadColor == "red" && actualColor == 2){
                square[i].style.transform = "translateX(-3865px)";
            } else {
                square[i].style.transform = "translateX(-3800px)";
            }
        }

        if (current_time - start_time >= diff) {
            if (actualColor == 1) {
                firstLoadColor = "red";
            } else if (actualColor == 2) {
                firstLoadColor = "black";
            } else {
                // Do nothing.
            }
            clearInterval(cooldown);
            last_100_arr.push(actualColor);
            last_10_arr.unshift(actualColor);
            determineWinner(expectedColor, actualColor);
            resetBets();
        }

    }, 1000);

}

function betCooldown() {
    const start_time = Date.now();
    var current_time = Date.now();
    var diff = 6100;
    var seconds = 6;

    var cooldown = setInterval(() => {
        current_time = Date.now();
        timer_bar.style.width = "0%";
        var current_diff_seconds = Math.round((current_time - start_time) / 1000);
        timer_text.innerText = "ROLLING IN: " + (seconds - current_diff_seconds) + " SECONDS"; 

        if (current_time - start_time >= diff) {
            clearInterval(cooldown);
            timer_text.innerText = "ROLLING NOW"; 
            rollWheel();
        }
    }, 1000)
}

function betType(type) {
    var currentChips = Number(user_chips_count.innerText);
    var currentBet = Number(bet_amount_count.value);

    if (type == 0) {
        currentBet = 0;
    } else if (type == 1) {
        currentBet = last_bet;
    } else if (type == 2) {
        currentBet+=1;
    } else if (type == 3) {
        currentBet+=10;
    } else if (type == 4) {
        currentBet+=100;
    } else if (type == 5) {
        currentBet+=1000;
    } else if (type == 6) {
        currentBet/=2;
    } else if (type == 7) {
        currentBet*=2;
    } else {
        currentBet = currentChips;
    } 
    
    if (currentBet <= 0 || currentBet > currentChips || isNaN(currentBet)) {
        currentBet = 0;
        bet_amount_count.value = "";
    } else {
        bet_amount_count.value = currentBet.toString();
    }
   
}

function placeBet(e) {
    var currentChips = Number(user_chips_count.innerText);
    var currentBet = Number(bet_amount_count.value);

    if (currentBet <= 0 || currentBet > currentChips || isNaN(currentBet)) {
        currentBet = 0;
        bet_amount_count.value = "";
    } else {
        currentChips-=currentBet;
        user_chips_count.innerText = currentChips.toString();
        last_bet = currentBet;

        bet_placed.style.pointerEvents = "none";
        bet_type.style.pointerEvents = "none";

        if (e.target.className == "bet__type_text") {
            if (e.target.id == "bet_type_red_text") {
                expectedColor = 1;
            } else if (e.target.id == "bet_type_black_text") {
                expectedColor = 2;
            } else {
                expectedColor = 3;
            }
            e.target.innerText = "BET PLACED";
        } else {
            if (e.target.id == "bet_type_red_button") {
                expectedColor = 1;
            } else if (e.target.id == "bet_type_black_button") {
                expectedColor = 2;
            } else {
                expectedColor = 3;
            }
            e.target.querySelector(".bet__type_text").innerText = "BET PLACED";
        }

        bet_placed_audio.play();
        betCooldown();
    }
}

var clear_button = document.querySelector("#clear_button");
clear_button.addEventListener("click", function() {betType(0)})

var last_button = document.querySelector("#last_button");
last_button.addEventListener("click", function() {betType(1)})

var plus_button = document.querySelector("#plus_button");
plus_button.addEventListener("click", function() {betType(2)});

var plus_ten_button = document.querySelector("#plus_ten_button");
plus_ten_button.addEventListener("click", function() {betType(3)});

var plus_hundred_button = document.querySelector("#plus_hundred_button");
plus_hundred_button.addEventListener("click", function() {betType(4)});

var plus_thousand_button = document.querySelector("#plus_thousand_button");
plus_thousand_button.addEventListener("click", function() {betType(5)});

var half_button = document.querySelector("#half_button");
half_button.addEventListener("click", function() {betType(6)});

var times_button = document.querySelector("#times_button");
times_button.addEventListener("click", function() {betType(7)});

var max_button = document.querySelector("#max_button");
max_button.addEventListener("click", function() {betType(8)});

var red_button = document.querySelector("#bet_type_red_button");
red_button.addEventListener("click", function(event) {placeBet(event)});

var green_button = document.querySelector("#bet_type_green_button");
green_button.addEventListener("click", function(event) {placeBet(event)});

var black_button = document.querySelector("#bet_type_black_button");
black_button.addEventListener("click", function(event) {placeBet(event)});

