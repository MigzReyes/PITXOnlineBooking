console.log("This is PITX");

// BOOKING 
const destinationInput = document.getElementById("destinationInput");
let destinationInputPopUp;

if (destinationInput) {
    destinationInput.addEventListener("click", () => {
        destinationInputPopUp = document.getElementById("destinationInputPopUp");

        destinationInputPopUp.classList.toggle("show");
    });
}

// CHECK IF PAGE IS PAYMENT AND CHANGE BUTTON TO REDIRECT USER TO THE PAYMENT GATEWAY
const page = document.getElementById("page");
const receipt = "receipt";
const payment = "payment";

const bookingBtnCon = document.getElementById("bookingBtnCon");
const nextBtn = document.getElementById("nextBtn");
const payBtn = document.getElementById("payBtn");
const homeBtn = document.getElementById("homeBtn");

const totalCon = document.getElementById("totalCon");
if (page) {   
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

        totalCon.classList.add("hide");
        bookingBtnCon.classList.add("setPaddingBtn");
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

    // PASSENGER POP UP
    let passengerPopUp;
    let passengerPopUpDoneBtn;
    let insurancePopUp;

    // BUS POP UP
    let busPicInsidePopUp;
    let busPicOutsidePopUp;

    // RECEIPT POP UP
    let receiptPopUp;
    let successPayPopUp;


        // ITINERARY
        if (page.textContent.toLowerCase() === "itinerary") {

            //  PASSENGER POP UP
            const passengerInput = document.getElementById("passengerInput");

            passengerInput.addEventListener("click", () => {
                passengerPopUp = document.getElementById("passengerPopUp");

                passengerPopUp.classList.toggle("show");

                // DONE BTN
                passengerPopUpDoneBtn = document.getElementById("passengerPopUpDoneBtn");

                passengerPopUpDoneBtn.addEventListener("click", () => {
                    passengerPopUp.classList.remove("show");
                });
            });


            // BUS PIC
            const busInside = document.getElementById("busInside");
            const busOutside = document.getElementById("busOutside");

            
            busInside.addEventListener("click", () => {
                popUpCon.classList.toggle("show");
                busPicInsidePopUp = document.getElementById("busPicInsidePopUp");

                busPicInsidePopUp.classList.toggle("show");
            });

            busOutside.addEventListener("click", () => {
                popUpCon.classList.toggle("show");
                busPicOutsidePopUp = document.getElementById("busPicOutsidePopUp");

                busPicOutsidePopUp.classList.toggle("show");
            });
        }

        // PASSENGERS
        if (page.textContent.toLowerCase() === "passengers") {
            const insuranceBtn = document.getElementById("insuranceBtn");
            
            insurancePopUp = document.getElementById("insurancePopUp");
            insuranceBtn.addEventListener("click", () => {

                insurancePopUp.classList.toggle("show");
            });
            
            insurancePopUp.addEventListener("click", (e) => {
                if (e.target != insurancePopUp) {
                    insurancePopUp.classList.remove("show");
                }
            });
        }

        // SUCCESS PAYMENT
        if (page.textContent.toLowerCase() === "receipt") {
            popUpCon.classList.toggle("show");
            successPayPopUp = document.getElementById("successPayPopUp");

            successPayPopUp.classList.toggle("show");
        }

        // QR
        if (page.textContent.toLowerCase() === "receipt") {
            const qrCode = document.getElementById("qrCode");

            qrCode.addEventListener("click", () => {
                receiptPopUp = document.getElementById("receiptPopUp");

                popUpCon.classList.toggle("show");
                receiptPopUp.classList.toggle("show");
            });
        }


    // CLOSE FUNCTION
    closeBtn.addEventListener("click", () => {
        popUpCon.classList.remove("show");

        if (page.textContent.toLowerCase() === "receipt") {
            successPayPopUp.classList.remove("show");
            receiptPopUp.classList.remove("show");
        }
    });

    popUpCon.addEventListener("click", () => {
        popUpCon.classList.remove("show");
        if (page.textContent.toLowerCase() === "itinerary") {  
            busPicInsidePopUp.classList.remove("show");
            busPicOutsidePopUp.classList.remove("show");
        }

        if (page.textContent.toLowerCase() === "receipt") {
            successPayPopUp.classList.remove("show");
            receiptPopUp.classList.remove("show");
        }
    });
}
