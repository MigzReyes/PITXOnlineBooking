console.log("Booking process");


// CHECK IF PAGE IS PAYMENT AND CHANGE BUTTON TO REDIRECT USER TO THE PAYMENT GATEWAY
const page = document.getElementById("page");

const nextBtn = document.getElementById("nextBtn");
const payBtn = document.getElementById("payBtn");
const homeBtn = document.getElementById("homeBtn");

const totalCon = document.getElementById("totalCon");


// POP UP ALERT
const popUpAlert = document.getElementById("popUpAlert");
const popUpAlertText = document.getElementById("popUpAlertText");

const bookedTripJson = {
    passengerNo: {
        adults: undefined,
        children: undefined,
        seniors: undefined,
        students: undefined
    },
    user: {
        email: undefined,
        mobile: undefined,
        firstName: undefined,
        lastName: undefined,
        ageGroup: undefined,
        birthDate: undefined,
        passengers: {
            id: undefined,
            firstName: undefined,
            lastName: undefined,
            ageGroup: undefined,
            birthDate: undefined
        }   
    },
    insuranceType: undefined,
    totalPrice: undefined,
    paymentMethod: undefined,
    ticketNo: undefined // AUTOMATICALLY CREATE THIS AFTER SUCCESSFUL PAYMENT
};

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

            // ADD PASSENGER   
            const subAdult = document.getElementById("subAdult");
            const subChild = document.getElementById("subChild"); 
            const subSenior = document.getElementById("subSenior");
            const subStudent = document.getElementById("subStudent");
            const addAdult = document.getElementById("addAdult");
            const addChild = document.getElementById("addChild");
            const addSenior = document.getElementById("addSenior");
            const addStudent = document.getElementById("addStudent");

            const noOfPassenger = document.querySelectorAll(".noOfPassenger");
            const noOfAdults = document.getElementById("noOfAdults");
            const noOfChild = document.getElementById("noOfChild");
            const noOfSenior = document.getElementById("noOfSenior");
            const noOfStudent = document.getElementById("noOfStudent");

            let adult = 1;
            let child = 0;
            let senior = 0;
            let student = 0;

            passengerInput.addEventListener("click", () => {
                passengerPopUp = document.getElementById("passengerPopUp");

                passengerPopUp.classList.toggle("show");

                // DONE BTN
                passengerPopUpDoneBtn = document.getElementById("passengerPopUpDoneBtn");

                passengerPopUpDoneBtn.addEventListener("click", () => {
                    passengerPopUp.classList.remove("show");
                });
            });

            subAdult.addEventListener("click", () => {
                if (adult > 0) {
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

            subSenior.addEventListener("click", () => {
                if (senior > 0) {
                    senior--;
                    noOfSenior.textContent = senior.toLocaleString();
                    updateDisplay();
                }
            });

            addSenior.addEventListener("click", () => {
                senior++;
                noOfSenior.textContent = senior.toLocaleString();
                updateDisplay();
            });

            subStudent.addEventListener("click", () => {
                if (student > 0) {
                    student--;
                    noOfStudent.textContent = student.toLocaleString();
                    updateDisplay();
                }
            });

            addStudent.addEventListener("click", () => {
                student++;
                noOfStudent.textContent = student.toLocaleString();
                updateDisplay();
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

            // INSURANCE JSON
            const insuranceData = document.getElementById("insuranceData");
            let insurance = JSON.parse(insuranceData.dataset.trip);
            console.log(insurance); // REMOVE THIS

            // TRIP JSON
            const bookingData = document.getElementById("bookingData");
            let trip = JSON.parse(bookingData.dataset.trip);
            console.log(trip); // REMOVE THIS
            
            // CALCULATE TOTAL
            // USE PACKAGE C - 148 PESOS       
            console.log("Package: ", insurance.Id = 4); // REMOVE THIS
            const totalPrice = document.getElementById("totalPrice");
            let discount;

            const selectedInsurance = insurance.find(i => i.id === 4);

            // DEFAULT INSURANCE PACKAGE C - 148 PESOS
            discount = selectedInsurance.price + trip.price + 6;
            totalPrice.textContent = discount; // DEFAULT VALUE

            const bookingMainCon = document.querySelector(".booking_main_con");
            bookingMainCon.classList.toggle('inactive');

            nextBtn.addEventListener("click", () => {
                let totalPassenger = adult + child + senior + student;

                if (totalPassenger > 0) {    
                    bookedTripJson.passengerNo.adults = adult;
                    bookedTripJson.passengerNo.children = child;
                    bookedTripJson.passengerNo.seniors = senior;
                    bookedTripJson.passengerNo.students = student;
                    bookedTripJson.insuranceType = 4;
                    bookedTripJson.totalPrice = discount;

                    // TRIP JSON
                    trip.bookedTripJson = bookedTripJson;
                    sessionStorage.setItem("bookedTripJson", JSON.stringify(trip));

                    // INSURANCE
                    sessionStorage.setItem("insurance", JSON.stringify(insurance));

                    window.location.href = "/Home/Passengers"   
                } else {
                    console.log("No passenger");
                    popUpCon.classList.add("show");
                    popUpAlert.classList.add("show");
                    popUpAlertText.textContent = "No Passenger, Cannot Proceed";
                }
            });


            // FUNCTIONS
            function updateDisplay() {
                let passenger = adult + child + senior + student;
                console.log("total passenger (update display): ", passenger);

                noOfPassenger.forEach(span => {
                    span.textContent = passenger.toLocaleString();
                })

                // DISCOUNT
                price = passenger * (trip.price + selectedInsurance.price + 6);
                discount = price -(((student + senior) * (trip.price + selectedInsurance.price + 6))* 0.20);

                // TOTAL PRICE CALCULATION
                console.log("total price: ", discount); // REMOVE THIS
                totalPrice.textContent = discount;
            }      
        }

        // PASSENGERS
        if (page.textContent.toLowerCase() === "passengers") {
            console.log("this is passengers");

            // GET BOOKED TRIP JSON
            const trip = JSON.parse(sessionStorage.getItem("bookedTripJson"));
            console.log(trip); // REMOVE THIS

            // GET INSURANCE JSON
            const insuranceJson = JSON.parse(sessionStorage.getItem("insurance"));
            console.log(insuranceJson) // REMOVE THIS

            // VARIABLES FOR DISPLAYING DATA
            const departureTime = document.getElementById("departureTime");
            const destination = document.getElementById("destination");
            const addPassengerBtn = document.getElementById("addPassengerBtn");
            const passengerCon = document.getElementById("passengerCon");

            // TIMER
            const bookingTimer = document.getElementById("bookingTimer");
            let time = 30 * 60;

            let interval = setInterval(() => {

                let minutes = Math.floor(time / 60);
                let seconds = time % 60;

                bookingTimer.textContent = "00:" + minutes + ":" + seconds.toString().padStart(2, "0");

                time--;  
                
                if (time < 0) {
                    clearInterval(interval);
                    console.log("Run out of time");

                    // CREATE A POP UP AND REMOVE THE USER FROM THE BOOKING PROCESS 
                }
            }, 1000);

            // TRIP SUMMARY
            console.log(trip.departureTime);
            const date = new Date(trip.departureTime);
            const departureTimeFormat = date.toLocaleString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true
            });

            // DEPARTURE TIME
            departureTime.textContent = departureTimeFormat;

            // DESTINATION
            destination.textContent = trip.destination;

            // ADD PASSENGER
            let totalPassenger = trip.bookedTripJson.passengerNo.adults + trip.bookedTripJson.passengerNo.children + trip.bookedTripJson.passengerNo.seniors + trip.bookedTripJson.passengerNo.students;;
            if (totalPassenger == 1) {
                totalPassenger = 0;
            } else {
                totalPassenger = trip.bookedTripJson.passengerNo.adults + trip.bookedTripJson.passengerNo.children + trip.bookedTripJson.passengerNo.seniors + trip.bookedTripJson.passengerNo.students;
            }

            // TOTAL CON 
            const insurance = document.getElementById("insurance");
            const totalPrice = document.getElementById("totalPrice");

            // DISPLAY TOTAL PRICE (DEAFULT)
            let price = trip.bookedTripJson.totalPrice;
            let finalPrice = price;
            totalPrice.textContent = finalPrice; // DISPLAY
            insurance.textContent = 148; // DEFAULT INSURANCE

            // INSURANCE TYPE
            let insuranceType = 3;
            let insurancePrice = trip.price + insuranceJson[3].price + 6; // DEFAULT
            console.log("insurance price: ", insurancePrice); 

            let noInsuranceText;
            let packageAText;
            let packageBText;
            let packageCText;

            let numOfPassenger = totalPassenger; // TOTAL PASSENGER
            updatePassenger(numOfPassenger + 1); // DISPLAY INSURANCE TEXT
            passengerCon.appendChild(addPassenger());
            blockFutureDates();

            addPassengerBtn.addEventListener("click", () => {
                numOfPassenger++;

                const div = document.createElement("div");
                div.classList.add("extra_passenger_con");
                div.setAttribute("id", "extraPassengerCon");
                div.dataset.passengerId = numOfPassenger;

                div.innerHTML = `<div class="remove_passenger_con">
                                    <div class="trash" id="removePassBtn"> 
                                        <div class="trash_icon">
                                            <img src="/icons/trash.svg" alt="trash">
                                        </div>
                                        <p>Remove</p>
                                    </div>
                                </div>
                                <p class="passenger_id">Passenger ${div.dataset.passengerId}</p>
                                <div class="passenger_info_input_con">
                                    <div class="passenger_info_input">
                                        <p>First Name</p>
                                        <input type="text" class="input" name="firstName"">
                                    </div>

                                    <div class="passenger_info_input">
                                        <p>Last Name</p>
                                        <input type="text" class="input" name="lastName">
                                    </div>
                                
                                    <div class="passenger_info_input">
                                        <p>Date of Birth</p>
                                        <input class="dateInput input" type="date" name="birthDate">
                                    </div>
                                </div>`;

                passengerCon.appendChild(div);
                blockFutureDates();
                
                // ADD A FUNCTION THAT UPDATES THE NUMBER OF PASSENGER AND THE TOTAL PRICE
                updatePassenger(numOfPassenger);
                console.log("Insurance Price: ", insurancePrice);
                updateTotalPrice(insurancePrice);

                passengerCount(passengerCon);
            });


            // REMOVE PASSENGER
            passengerCon.addEventListener("click", (e) => {
                const removePassBtn = e.target.closest(".trash");
                if (!removePassBtn) return;

                const div = removePassBtn.closest(".extra_passenger_con");
                div.remove();
                numOfPassenger--;

                updatePassenger(numOfPassenger);
                updateTotalPrice(insurancePrice);

                passengerCount(passengerCon);
            });

            // PASSENGER COUNT
            function passengerCount(parentCon) {
                const passengers = parentCon.querySelectorAll(".extra_passenger_con");
                passengers.forEach((div, index) => {
                    div.dataset.passengerId = index + 2;
                    const p = div.querySelector(".passenger_id");
                    if (p) p.textContent = `Passenger ${index + 2}`;
                });

                numOfPassenger = passengers.length + 1;
            }

            // INSURANCE POP UP
            const insuranceBtn = document.getElementById("insuranceBtn");
            const insuranceBtnText = document.querySelectorAll(".insuranceBtnText");
        

            insurancePopUp = document.getElementById("insurancePopUp");
            insuranceBtn.addEventListener("click", () => {
                insurancePopUp.classList.toggle("show");
            });

            // PACKAGE
            const noInsurance = document.getElementById("noInsurance");
            const packageA = document.getElementById("packageA");
            const packageB = document.getElementById("packageB");
            const packageC = document.getElementById("packageC");

            

            noInsurance.addEventListener("click", () => {
                updatePassenger(numOfPassenger);
                updateTotalPrice(insurancePrice);
                updateInsurance(noInsuranceText, 0);
                
                insuranceBtnText.forEach(input => {
                    input.textContent = noInsuranceText;
                });

            });

            packageA.addEventListener("click", () => {
                updatePassenger(numOfPassenger);
                updateTotalPrice(insurancePrice);
                insuranceType = updateInsurance(packageAText, 1);

                insuranceBtnText.forEach(input => {
                    input.textContent = packageAText;
                });
            });

            packageB.addEventListener("click", () => {
                updatePassenger(numOfPassenger);
                updateTotalPrice(insurancePrice);
                insuranceType = updateInsurance(packageBText, 2);

                insuranceBtnText.forEach(input => {
                    input.textContent = packageBText;
                });
            });

            packageC.addEventListener("click", () => {
                updatePassenger(numOfPassenger);
                updateTotalPrice(insurancePrice);
                insuranceType = updateInsurance(packageCText, 3);

                insuranceBtnText.forEach(input => {
                    input.textContent = packageCText;
                });
            });
        

            // REMOVE POP UP
            insurancePopUp.addEventListener("click", (e) => {
                if (e.target != insurancePopUp) {
                    insurancePopUp.classList.remove("show");
                }
            });

            nextBtn.addEventListener("click", () => {

                const input = document.querySelectorAll("input");
                const mobile = document.getElementById("mobile").value;
                const email = document.getElementById("email").value;
                const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;

                console.log("movile: ", mobile);

                // INPUT CHECKER
                let filled = true; 
                input.forEach(input => {
                    if (input.value.trim() === "") {
                        filled = false;
                    }
                });

                // VALIDATION
                if (filled) {
                    if (mobile.length == 11) {
                        if (emailRegex.test(email)) {
                            // MAIN PASSENGER INFO
                            const fields = ["email", "mobile", "firstName", "lastName", "birthDate"];
                            const formData = {};

                            fields.forEach(key => {
                                formData[key] = document.getElementById(key).value;
                            });

                            Object.assign(trip.bookedTripJson.user, formData);

                            // PASSENGER INFO
                            document.querySelectorAll(".extra_passenger_main").forEach(div => {
                                let id = 0;
                                id++;
                                console.log("pass Id: ", id);

                                trip.bookedTripJson.user.passengers = {
                                    id: id,
                                    firstName: div.querySelector('input[name="firstName"]').value,
                                    lastName: div.querySelector('input[name="lastName"]').value,
                                    birthDate: div.querySelector('input[name="birthDate"]').value
                                };
                            });

                            // INSURANCE TYPE
                            trip.bookedTripJson.insuranceType = insuranceType;

                            // TOTAL PRICE
                            trip.bookedTripJson.totalPassenger = this.finalPrice;

                            //window.location.href = "/Home/Confirmation";
                        } else {
                            alert("Invalid Email");
                        }
                    } else {
                        alert("Invalid Phone Number, 11 Digits Only!");
                    }
                } else {
                    alert("Please input all fields");
                }
            });


            // FUNCTIONS
            function alert(message) {
                popUpCon.classList.add("show");
                popUpAlert.classList.add("show");
                popUpAlertText.textContent = message;
            }

            function blockFutureDates() {
                const dateInput = document.querySelectorAll(".dateInput");
                const today = new Date().toLocaleDateString("en-CA");
                dateInput.forEach(d => {
                    d.setAttribute("max", today);
                });
            }

            // ADD PASSENGER
            function addPassenger() {
                const fragment = document.createDocumentFragment();

                for (i = 1; i < numOfPassenger; i++) {
                    const div = document.createElement("div");
                    div.classList.add("extra_passenger_con");
                    div.setAttribute("id", "extraPassengerCon");
                    div.dataset.passengerId = numOfPassenger;

                    div.innerHTML = `<div class="remove_passenger_con">
                                        <div class="trash" id="removePassBtn"> 
                                            <div class="trash_icon">
                                                <img src="/icons/trash.svg" alt="trash">
                                            </div>
                                            <p>Remove</p>
                                        </div>
                                    </div>
                                    <p class="passenger_id">Passenger ${div.dataset.passengerId}</p>
                                    <div class="passenger_info_input_con">
                                        <div class="passenger_info_input">
                                            <p>First Name</p>
                                            <input type="text" class="input" name="firstName"">
                                        </div>

                                        <div class="passenger_info_input">
                                            <p>Last Name</p>
                                            <input type="text" class="input" name="lastName">
                                        </div>
                                    
                                        <div class="passenger_info_input">
                                            <p>Date of Birth</p>
                                            <input class="dateInput input" type="date" name="birthDate">
                                        </div>
                                    </div>`;

                    fragment.appendChild(div);      
                }

                passengerCount(fragment);

                return fragment;
            }

            // UPDATE TOTAL PRICE 
            function updateTotalPrice(insurance) {
                const discount = trip.bookedTripJson.passengerNo.seniors + trip.bookedTripJson.passengerNo.students;

                if (discount > 0) {
                    const discountPrice = insurance * 0.20;
                    console.log(discountPrice);
                    this.finalPrice = (insurance - discountPrice) * numOfPassenger;
                    totalPrice.textContent = this.finalPrice.toFixed(1);
                } else {
                    this.finalPrice = insurance * numOfPassenger;
                    totalPrice.textContent = this.finalPrice;
                }
            }

            // UPDATE PRICE (INSURANCE)
            function updatePrice(price) {
                const discount = trip.bookedTripJson.passengerNo.seniors + trip.bookedTripJson.passengerNo.students;

                if (discount > 0) {
                    this.insurancePrice = price;
                    const discountPrice = this.insurancePrice * 0.20;
                    this.finalPrice = (this.insurancePrice - discountPrice) * numOfPassenger;
                    totalPrice.textContent = this.finalPrice.toFixed(1);
                } else {
                    this.insurancePrice = price;
                    this.finalPrice = this.insurancePrice * numOfPassenger;
                    totalPrice.textContent = this.finalPrice;
                }
            }

            // UPDATE INSURANCE
            function updateInsurance(package, num) {
                let insuranceType;

                if (package.toString() == "No Insurance") {
                     insuranceBtnText.forEach(input => {
                        input.textContent = package;
                    });

                    // GET THE TRIP PRICE - TOTAL PRICE - 6 = INSURANCE PRICE
                    const noInsurancePrice = trip.bookedTripJson.totalPrice - trip.price;
                    price = trip.bookedTripJson.totalPrice - noInsurancePrice + 6;
                    let packagePrice = price;
                    console.log("no insurance: ", price);
                    insurancePrice = price;

                    updatePrice(packagePrice);
                    insuranceType = 0;
                    insurance.textContent = 0;
                } else {
                    // CALCULATE
                    price = trip.price + insuranceJson[num].price + 6;
                    let packagePrice = price;
                    updatePrice(packagePrice);
                    insuranceType = num;
                    insurancePrice = price;
                    
                    // DISPLAY
                    insurance.textContent = insuranceJson[num].price; 
                }

                return insuranceType;
            }

            // UPDATE PASSENGER COUNT 
            function updatePassenger(numOfPassenger) {
                // INSURANCE TEXT
                const insurancePax = document.querySelectorAll(".insurancePax");
                insurancePax.forEach(i => {
                    i.textContent = numOfPassenger;
                });

                noInsuranceText = "No Insurance"
                packageAText = "Package A = ₱" + insuranceJson[1].price +" (1 x " + numOfPassenger + " pax)";
                packageBText = "Package B = ₱" + insuranceJson[2].price +" (1 x " + numOfPassenger + "  pax)";
                packageCText = "Package C = ₱" + insuranceJson[3].price +" (1 x " + numOfPassenger + " pax)";
            }
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
        popUpAlert.classList.remove("show");
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

