let btn = document.querySelector(".s");
let btn1 = document.querySelector(".e");
let btn2 = document.querySelector(".a");
let div = document.querySelector(".d");
let sec = document.querySelector("section");

function cdow() {
    div.innerHTML -= 1;
}
btn.onclick = () => {
    cdow();
    if (div.innerHTML === "0") {
        btn.remove();
        div.innerHTML = 33;
    }
}
btn1.onclick = () => {
    cdow();
    if (div.innerHTML === "0") {
        btn1.remove();
        div.innerHTML = 33;
    }
}
btn2.onclick = () => {
    cdow();
    if (div.innerHTML === "0") {
        sec.remove();
        let p = document.createElement("p");
        document.body.appendChild(p);
        p.append("جزاك الله كل خير")
    }
}