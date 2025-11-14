console.log("This is PITX");

// BOOKING 
const destinationInput = document.getElementById("destinationInput");
let destinationInputPopUp;

if (destinationInput) {
    destinationInput.addEventListener("click", () => {
        destinationInputPopUp = document.getElementById("destinationInputPopUp");

        destinationInputPopUp.classList.toggle("show");
    });

    // DESTINATION
    const destinationPopUpItems = document.getElementById("destinationList");
    const placeholder = document.getElementById("placeholderDestination");
    const destinationCity = document.getElementById("destinationCity");
    const destinationProvince = document.getElementById("destinationProvince");

    // IF EVER NA MAAGA MATAPOS, TRY REFACTORING THIS PART, KASI MAY BUTAS TO, ANG MANGYAYARI KASI IGEGET NATEN UNG DESTINATION BASE DUN SA <span> WHICH IS EDITABLE THROUGH
    // THE DOM, SO MEANING POSSIBLE NA MA EDIT NI USER ANG CONTENT NA ISESEND SA BACK-END, ALWAYS RELY ON THE BACK END FOR DISPLAYING DATA THAT WILL ALSO BE STORED IN THE
    // DATABASE 

    destinationPopUpItems.addEventListener("click", (e) => {
        const clickedLi = e.target.closest("li");
        if (!clickedLi) return;

        const firstLi = destinationPopUpItems.querySelector("li:first-child");
        if (clickedLi === firstLi) return;

        destinationPopUpItems.insertBefore(clickedLi, firstLi);

        destinationPopUpItems.querySelectorAll("li").forEach((li, index) => {
            const img = li.querySelector(".pinPoint img");
            img.src = index === 0 ? "/icons/locationRed.svg" : "/icons/location.svg";
        });

        const getFirstLi = destinationPopUpItems.querySelector("li:first-child");
        const locationName = getFirstLi.querySelector("span").textContent;

        destinationCity.textContent = locationName;
        if (locationName.toLowerCase() === "baguio") {
            destinationCity.textContent = "Benguet";
            destinationProvince.textContent = locationName;
        } else {
            destinationProvince.textContent = "Bicol";
        }

        placeholder.placeholder = locationName;
        destinationInput.textContent = locationName;
    });


    // TRANSFER DESTINATION DATA TO THE HIDDEN INPUT

    const checkTripsBtn = document.getElementById("checkTripsBtn");
    checkTripsBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const destination = destinationInput.textContent;
        console.log(destination)

        fetch ("/Home/CheckDestination", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ Destination: destination})
        }).then(response => response.json())
        .then(data => {
            console.log("Server response: ", data);

            // DATE TIME FUNCTION
            function formatTime(dateTime) {
                return new Date(dateTime).toLocaleTimeString([], { timeStyle: "short" });
            }

            // DISPLAY DATA TO BOOKING
            const bookingBusTripList = document.querySelectorAll(".booking_bus_trip_list");
            bookingBusTripList.forEach(list => {
                list.innerHTML = "";
            });

            data.forEach(trip => {
                const li = document.createElement("li");

                li.innerHTML = 
                `
                    <div class="booking_bus_list">
                        <div class="booking_info_con">
                            <div class="booking_info">
                                <div class="booking_info_departure">
                                    <p class="time">${formatTime(trip.departureTime)}</p>
                                    <p>Paranaque Integrated Terminal Exchange</p>
                                </div>

                                <div class="booking_info_bus_info">
                                    <div class="booking_info_bus_logo">
                                        <img src="${trip.busLogo}" alt="dltbLogo">
                                    </div>

                                    <div class="booking_info_bus_icon">
                                        <img src="/icons/bus.svg" alt="bus">
                                    </div>

                                    <div class="trip_info">
                                        <p>${trip.totalTripTime} | ${trip.operator} | Bus | <span>${trip.type}</span></p>
                                    </div>
                                </div>

                                <div class="booking_info_destination">
                                    <p class="time">${formatTime(trip.arrivalTime)}</p>
                                    <p>${trip.destination}</p>
                                </div>
                            </div>

                            <div class="bus_pic_con">
                                <div class="busPic" id="busInsideBookingList">
                                    <img src="${trip.imgInside}" alt="insideBus">
                                </div>

                                <div class="busPic" id="busOutsideBookingList">
                                    <img src="${trip.imgOutside}" alt="bus">
                                </div>
                            </div>
                        </div>

                        <div class="redLine"></div>

                        <div class="booking_price_con">
                            <div class="booking_price_con_info"> 
                                <p class="price">₱${Number(trip.price).toLocaleString("en-US")}</p>
                                <p>Taxes Included | per adult</p>
                            </div>
                            
                            <div class="bus_trip_book_btn_con">
                                <button>Book Now!</button>
                            </div>
                        </div>  
                    </div>
                `;

                bookingBusTripList.forEach(list => {
                    list.appendChild(li.cloneNode(true));
                });
            });

        })
        .catch(err => console.error(err));
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
