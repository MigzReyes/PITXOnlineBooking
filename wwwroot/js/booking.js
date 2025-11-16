console.log("Booking process");


// CHECK IF PAGE IS PAYMENT AND CHANGE BUTTON TO REDIRECT USER TO THE PAYMENT GATEWAY
const page = document.getElementById("page");

const nextBtn = document.getElementById("nextBtn");
const payBtn = document.getElementById("payBtn");
const homeBtn = document.getElementById("homeBtn");

const totalCon = document.getElementById("totalCon");

const passengerJson = {};

if (page) {   

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
            console.log("this is itinerary page");

            //  PASSENGER POP UP
            const passengerInput = document.getElementById("passengerInput");

            passengerInput.addEventListener("click", () => {
                passengerPopUp = document.getElementById("passengerPopUp");

                passengerPopUp.classList.toggle("show");

                // ADD PASSENGER   
                const subAdult = document.getElementById("subAdult");
                const subChild = document.getElementById("subChild"); 
                const subInfant = document.getElementById("subInfant");
                const addAdult = document.getElementById("addAdult");
                const addChild = document.getElementById("addChild");
                const addInfant = document.getElementById("addInfant");

                const noOfPassenger = document.querySelectorAll(".noOfPassenger");
                const noOfAdults = document.getElementById("noOfAdults");
                const noOfChild = document.getElementById("noOfChild");
                const noOfInfant = document.getElementById("noOfInfant");

                let adult = 1;
                let child = 0;
                let infant = 0;

                function updateDisplay() {
                    const passenger = adult + child + infant;

                    noOfPassenger.forEach(span => {
                        span.textContent = passenger.toLocaleString();
                    })
                }

                subAdult.addEventListener("click", () => {
                    if (adult > 1) {
                        adult--;
                        noOfAdults.textContent = adult.toLocaleString();
                        updateDisplay();
                    }
                });

                addAdult.addEventListener("click", () => {
                    adult++;
                    noOfAdults.textContent = adult.toLocaleString();
                    updateDisplay();
                });

                subChild.addEventListener("click", () => {
                    if (child > 0) {
                        child--;
                        noOfChild.textContent = child.toLocaleString();
                        updateDisplay();
                    }
                });

                addChild.addEventListener("click", () => {
                    child++;
                    noOfChild.textContent = child.toLocaleString();
                    updateDisplay();
                });

                subInfant.addEventListener("click", () => {
                    if (infant > 0) {
                        infant--;
                        noOfInfant.textContent = infant.toLocaleString();
                        updateDisplay();
                    }
                });

                addInfant.addEventListener("click", () => {
                    infant++;
                    noOfInfant.textContent = infant.toLocaleString();
                    updateDisplay();
                });


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

            const bookingData = document.getElementById("bookingData");
            const trip = JSON.parse(bookingData.dataset.trip);
            console.log(trip);

            const bookingMainCon = document.querySelector(".booking_main_con");
            bookingMainCon.classList.toggle('inactive');

            nextBtn.addEventListener("click", () => {

                
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

            // SUCCESS POP UP
            popUpCon.classList.toggle("show");
            successPayPopUp = document.getElementById("successPayPopUp");

            successPayPopUp.classList.toggle("show");


            // QR CODE
            const qrCode = document.getElementById("qrCode");

            qrCode.addEventListener("click", () => {
                receiptPopUp = document.getElementById("receiptPopUp");

                popUpCon.classList.toggle("show");
                receiptPopUp.classList.toggle("show");
            });

            // CLOSE FUNCTION
            closeBtn.addEventListener("click", () => {
                popUpCon.classList.remove("show");

                if (page.textContent.toLowerCase() === "receipt") {
                    successPayPopUp.classList.remove("show");
                    receiptPopUp.classList.remove("show");
                }
            });
        }

        // QR
        if (page.textContent.toLowerCase() === "receipt") {
        }


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
