console.log("This is PITX");

// CHECK IF PAGE IS PAYMENT AND CHANGE BUTTON TO REDIRECT USER TO THE PAYMENT GATEWAY
const page = document.getElementById("page");
const receipt = "receipt";
const payment = "payment";

console.log(page.textContent.toLowerCase())

const nextBtn = document.getElementById("nextBtn");
const payBtn = document.getElementById("payBtn");
const homeBtn = document.getElementById("homeBtn");

if (page.textContent.toLowerCase() === "payment") {
    console.log("To payment gateway");
    nextBtn.classList.add("inactiveBtn");
    payBtn.classList.add("activeBtn");
    payBtn.classList.remove("inactiveBtn");
    homeBtn.classList.add("inactiveBtn");
} else if (page.textContent.toLowerCase() === "receipt") {
    console.log("to home");
    nextBtn.classList.add("inactiveBtn");
    payBtn.classList.add("inactiveBtn");
    homeBtn.classList.add("activeBtn");
    homeBtn.classList.remove("inactiveBtn");
} else {
    console.log("next");
    nextBtn.classList.add("activeBtn");
    nextBtn.classList.remove("inactiveBtn");
    payBtn.classList.add("inactiveBtn");
    homeBtn.classList.add("inactiveBtn");
}


// POP UP
const popUpCon = document.getElementById("popUpCon");
const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", () => {
    popUpCon.classList.remove("show");
});

popUpCon.addEventListener("click", () => {
    popUpCon.classList.remove("show");
});