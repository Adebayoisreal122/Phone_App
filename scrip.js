firstdisplay.style.display = "block";
inside.style.display = "none";
calculate.style.display = "none";
gaming.style.display = "none";
allcalc.style.display = "none";
    calc.style.display = "none";

function Open() {
    checkOpen = 1;
    firstdisplay.style.display = "none";
    inside.style.display = "block";
    calculate.style.display = "none";
    gaming.style.display = "none";
    allcalc.style.display = "none";
    calc.style.display = "none";
}

function Off() {
    inside.style.display = "none";
    calculate.style.display = "none";
    firstdisplay.style.display = "block";
    gaming.style.display = "none";
    allcalc.style.display = "none";
    checkOpen = 0;
}
function DisplayCalc() {
    console.log("i am here");
    inside.style.display = "none";
    gaming.style.display = "none";
    firstdisplay.style.display = "none";
    allcalc.style.display = "block";
}
function playGame() {
    inside.style.display = "none";
    gaming.style.display = "block";
    firstdisplay.style.display = "none";
    allcalc.style.display = "none";
}
function goBack() {
    if (checkOpen == 0) {
        return;
    } else if (checkOpen == 1) {
        inside.style.display = "none";
        inside.style.display = "block";
        allcalc.style.display = "none"
    }
    
}



var array = [];


function generate() {	
    // result.innerHTML = " ";
    if(typeof(localStorage.getItem("Voucher")) == 'string'){
        array = JSON.parse(localStorage.getItem("Voucher"));
    }else{
        array = []
    }
    if (nocard.value == "" && selectcard.value == "Select Card" && amount.value == "Select Amount") {
        infogenerate.style.display = "block";
        infogenerate.innerHTML = `<div class="bg-secondary mt-5 pt-2 h6 text-center text-white h-50 rounded">Please fill out the empty spaces <br>
        <button class="btn bg-white w-50 mb-3 p-0 mt-3" onclick="delInfo()">OK</button></div>`
    } else if (nocard.value != "" && selectcard.value == "Select Card" && amount.value == "Select Amount") {
        infogenerate.style.display = "block";
        infogenerate.innerHTML = `<div class="bg-secondary mt-5 pt-2 h6 text-center text-white h-50 rounded">Please fill out the remaining empty spaces <br>
        <button class="btn bg-white w-50 mb-3 p-0 mt-3" onclick="delInfo()">OK</button></div>`
        return;
    } else if (nocard.value != "" && selectcard.value != "Select Card" && amount.value == "Select Amount") {
        infogenerate.style.display = "block";
        infogenerate.innerHTML = `<div class="bg-secondary mt-5 pt-2 h6 text-center text-white h-50 rounded">Please fill out the remaining empty spaces <br>
        <button class="btn bg-white w-50 mb-3 p-0 mt-3" onclick="delInfo()">OK</button></div>`
        return;
    } else if (nocard.value != "" && selectcard.value == "Select Card" && amount.value != "Select Amount") {
        infogenerate.style.display = "block";
        infogenerate.innerHTML = `<div class="bg-secondary mt-5 pt-2 h6 text-center text-white h-50 rounded">Please fill out the remaining empty spaces <br>
        <button class="btn bg-white w-50 mb-3 p-0 mt-3" onclick="delInfo()">OK</button></div>`
        return;
    } else if (nocard.value == "" && selectcard.value != "Select Card" && amount.value != "Select Amount") {
        infogenerate.style.display = "block";
        infogenerate.innerHTML = `<div class="bg-secondary mt-5 pt-2 h6 text-center text-white h-50 rounded">Please fill out the remaining empty spaces <br>
        <button class="btn bg-white w-50 mb-3 p-0 mt-3" onclick="delInfo()">OK</button></div>`
        return;
    }

    for (var i = 0; i < nocard.value; i++) {
        var allSpan = document.createElement("div");
        var divDiv = document.createElement("div");
        var forSimType = document.createTextNode(selectcard.value);
        var forAmount = document.createTextNode("#" + amount.value);
        var span1 = document.createElement("span");
        var span2 = document.createElement("span");
        divDiv.id = "allDiv";
        allSpan.id = "alllSpan";
        span2. id = "secondspan";

            var ooo = '';
        
            
        if (selectcard.value == "MTN") {
             for (var j = 0; j < 17; j++) {
                 var b = Math.floor(Math.random() * 10);	

                 ooo+=b;				

                 var textFormF = document.createTextNode(b);
                 divDiv.appendChild(textFormF);
                 span1.appendChild(forSimType);
                 span2.appendChild(forAmount);
                 allSpan.appendChild(span1);
                 allSpan.appendChild(span2);
             } 
        } else if (selectcard.value == "Airtel") {
            for (var j = 0; j < 16; j++) {
                 var b = Math.floor(Math.random() * 10);	
                 var textFormF = document.createTextNode(b);
                 ooo+=b;	

                 divDiv.appendChild(textFormF);
                 span1.appendChild(forSimType);
                 span2.appendChild(forAmount);
                 allSpan.appendChild(span1);
                 allSpan.appendChild(span2);
             } 
        } else if (selectcard.value == "Glo") {
             for (var j = 0; j < 15; j++) {
                 var b = Math.floor(Math.random() * 10);	
                 var textFormF = document.createTextNode(b);
                 ooo+=b;	

                 divDiv.appendChild(textFormF);
                 span1.appendChild(forSimType);
                 span2.appendChild(forAmount);
                 allSpan.appendChild(span1);
                 allSpan.appendChild(span2);
             } 
        } else if (selectcard.value == "9mobile") {
             for (var j = 0; j < 15; j++) {
                 var b = Math.floor(Math.random() * 10);	
                 var textFormF = document.createTextNode(b);
                 ooo+=b;	

                 divDiv.appendChild(textFormF);
                 span1.appendChild(forSimType);
                 span2.appendChild(forAmount);
                 allSpan.appendChild(span1);
                 allSpan.appendChild(span2);
             } 
        }
        var obj = {cardname: selectcard.value, code: ooo, cardamount: amount.value, status: "notused"};

        array.push(obj);

        localStorage.setItem("Voucher", JSON.stringify(array));
        document.querySelector("#result").appendChild(allSpan);
        document.querySelector("#result").appendChild(divDiv);				 	
    }
}




if (localStorage.accountbal == null) {
    localStorage.setItem("accountbal", "");
}
var allBalance = {mtnbal:0, airtelbal:0, global:0, mobile:0};

if (localStorage.accountbal == "") {
    localStorage.setItem("accountbal", JSON.stringify(allBalance));
}

//  LOAD MTN CARD
var audioElement;
var timeout;

function loadCard() {
    if (displaynumber.value.length == 23) {
        var searchnetwork = JSON.parse(localStorage.getItem("Voucher"));
            for (var q = 0; q < searchnetwork.length; q++) {				
                var searchingcode = searchnetwork[q].code;
                if ((displaynumber.value.slice(0,5) == "*555*") &&
                    (searchingcode.search(displaynumber.value.slice(5,22)) != -1) &&
                    (displaynumber.value.slice(22,23) == "#") &&
                    (searchnetwork[q].cardname == "MTN") &&
                    (searchnetwork[q].status == "notused"))
                 {
    
                    searchnetwork[q].status = "used";
                    showbalance.style.display = "block";
                    selectsim.style.display = "none";
                    let getbal = parseInt(searchnetwork[q].cardamount);
                    var gettt = JSON.parse(localStorage.getItem("accountbal"));
                    gettt.mtnbal += getbal;
                    displaybalance.innerHTML = "Recharge successful. Your account has been credited with MTN " + searchnetwork[q].cardamount + " . Your new account bal :₦" + gettt.mtnbal.toFixed(2);
                    localStorage.setItem("accountbal", JSON.stringify(gettt))
                } else if ((displaynumber.value.slice(0,5) == "*555*") &&
                    (searchingcode.search(displaynumber.value.slice(5,22)) != -1) &&
                    (displaynumber.value.slice(22,23) == "#") &&
                    (searchnetwork[q].cardname == "MTN") &&
                    (searchnetwork[q].status == "used"))
                {	
                    selectsim.style.display = "none";
                    showbalance.style.display = "block";
                     displaybalance.innerHTML = "This card has been loaded by a customer. Thanks!!!";
                }
                localStorage.setItem("Voucher", JSON.stringify(searchnetwork));
            }  
    } else if (displaynumber.value.slice(0,5) == "*556#") {
                    selectsim.style.display = "none";
                    showbalance.style.display = "block";
                    var displaybal = JSON.parse(localStorage.getItem("accountbal"));
                    var showbal = displaybal.mtnbal;
                    displaybalance.innerHTML = ("Your MTN account balance is ₦" + showbal.toFixed(2)); 
    } else if (	(displaynumber.value != "") && (displaynumber.value.length == 11) &&
                (	(displaynumber.value.slice(0,3) == "070") ||
                    (displaynumber.value.slice(0,3) == "080") ||
                    (displaynumber.value.slice(0,3) == "090") ||
                    (displaynumber.value.slice(0,3) == "081")
                )
            )
            {
            
            let gettt = JSON.parse(localStorage.getItem("accountbal"));
                if (gettt.mtnbal <= 0.50) {
                    calculating.style.display = "none";
                    calculatingfirst.style.display = "none";
                    callopacity.style.display = "none";
                    forcalls.style.display = "none";
                    forcallnumbers.style.display = "block";
                    invalidresult.style.display = "block";
                    showsomeresult.innerHTML = "Your account balance is too low for this call. You can borrow airtime or call back later.";
                    callersno.innerHTML = displaynumber.value;
                    network.innerHTML = "MTN";
                } else if (gettt.mtnbal != 0) {
                    calculating.style.display = "none";
                    calculatingfirst.style.display = "none";
                    audioElement = new Audio('ringtone.mp3');
                    secondphone.classList.add("mysecondphone");
                    audioElement.play();
                    timeout = setInterval(checktimeout, 1000);
                    forcallnumbers.style.display = "block";
                    forcalls.style.display = "none";
                    callersno.innerHTML = displaynumber.value;
                    network.innerHTML = "MTN";
                    secondphone.style.display = "block";
                    reccall.style.display = "block";
                    networktwo.innerHTML = "MTN";
                    phoneno.innerHTML = "07037752076";
                }
    }   else if (	(displaynumber.value != "") && (displaynumber.value.length == 14) &&
                (	(displaynumber.value.slice(0,4) == "+234") ||
                    (displaynumber.value.slice(0,4) == "+229")
                )
            )
            {
            let gettt = JSON.parse(localStorage.getItem("accountbal"));
                if (gettt.mtnbal <= 0.50) {
                    calculating.style.display = "none";
                    calculatingfirst.style.display = "none";
                    callopacity.style.display = "none";
                    forcalls.style.display = "none";
                    forcallnumbers.style.display = "block";
                    invalidresult.style.display = "block";
                    showsomeresult.innerHTML = "Your account balance is too low for this call. You can borrow airtime or call back later.";
                    callersno.innerHTML = displaynumber.value;
                    network.innerHTML = "MTN";
                } else if (gettt.mtnbal != 0) {
                    calculating.style.display = "none";
                    calculatingfirst.style.display = "none";
                    audioElement = new Audio('ringtone.mp3');
                    secondphone.classList.add("mysecondphone");
                    audioElement.play();
                    timeout = setInterval(checktimeout, 1000);
                    forcallnumbers.style.display = "block";
                    forcalls.style.display = "none";
                    callersno.innerHTML = displaynumber.value;
                    network.innerHTML = "MTN";
                    networktwo.innerHTML = "MTN";
                    secondphone.style.display = "block";
                    reccall.style.display = "block";
                    phoneno.innerHTML = "07037752076";
                }
    } else if  ((displaynumber.value != "") && (displaynumber.value.length == 11) &&
                    (	(displaynumber.value.slice(0,3) != "070") ||
                        (displaynumber.value.slice(0,3) != "080") ||
                        (displaynumber.value.slice(0,3) != "090") ||
                        (displaynumber.value.slice(0,3) != "081")
                    )
                ) {
                    callopacity.style.display = "none";
                    forcalls.style.display = "none";
                    forcallnumbers.style.display = "block";
                    invalidresult.style.display = "block";
                    showsomeresult.innerHTML = "This number does not exist.please, check the number and try again later.";
                    calculatingfirst.style.display = "none";
                    callersno.innerHTML = displaynumber.value;
                    network.innerHTML = "MTN";
    } else if (displaynumber.value.length != 11)  {
        callopacity.style.display = "none";
        forcalls.style.display = "none";
        forcallnumbers.style.display = "block";
        invalidresult.style.display = "block";
        calculatingfirst.style.display = "none";
        showsomeresult.innerHTML = "This number does not exist.please, check the number and try again later.";
        callersno.innerHTML = displaynumber.value;
        network.innerHTML = "MTN";
    }
}

// LOAD AIRTEL CARD

function loadCardAirtel() {
    if (displaynumber.value.length == 22) {
        var searchnetwork = JSON.parse(localStorage.getItem("Voucher"));
            for (var q = 0; q < searchnetwork.length; q++) {				
                var searchingcode = searchnetwork[q].code;
                    if ((displaynumber.value.slice(0,5) == "*126*") &&
                        (searchingcode.search(displaynumber.value.slice(5,21)) != -1) &&
                        (displaynumber.value.slice(21,22) == "#") &&
                        (searchnetwork[q].cardname == "Airtel") &&
                        (searchnetwork[q].status == "notused"))
                     {
                        searchnetwork[q].status = "used"
                        showbalance.style.display = "block";
                        selectsim.style.display = "none";
                        let getbal = parseInt(searchnetwork[q].cardamount);
                        let gettt = JSON.parse(localStorage.getItem("accountbal"));
                        gettt.airtelbal += getbal;
                        displaybalance.innerHTML = "Recharge successful. Your account has been credited with Airtel " + searchnetwork[q].cardamount + " . Your new account bal :₦" + gettt.airtelbal.toFixed(2);
                        localStorage.setItem("accountbal", JSON.stringify(gettt));
                    } else if ((displaynumber.value.slice(0,5) == "*126*") &&
                        (searchingcode.search(displaynumber.value.slice(5,21)) != -1) &&
                        (displaynumber.value.slice(21,22) == "#") &&
                        (searchnetwork[q].cardname == "Airtel") &&
                        (searchnetwork[q].status == "used"))
                    {	
                        selectsim.style.display = "none";
                        showbalance.style.display = "block";
                         displaybalance.innerHTML = "This card has been loaded by a customer. Thanks!!!";
                    }  else if ((displaynumber.value.slice(0,5) == "*126*") &&
                        (searchingcode.search(displaynumber.value.slice(5,21)) == -1) &&
                        (displaynumber.value.slice(21,22) == "#") &&
                        (searchnetwork[q].cardname == "Airtel"))
                    {	
                        showbalance.style.display = "block";
                        selectsim.style.display = "none";
                         displaybalance.innerHTML = "no";
                    } 
                localStorage.setItem("Voucher", JSON.stringify(searchnetwork));
            }
        } else if (displaynumber.value.slice(0,5) == "*123#") {
            selectsim.style.display = "none";
            showbalance.style.display = "block";
            var displaybal = JSON.parse(localStorage.getItem("accountbal"));
            var showbal = displaybal.airtelbal;
            displaybalance.innerHTML = ("Your Airtel account balance is ₦" + showbal.toFixed(2));
    } else if (	(displaynumber.value != "") && (displaynumber.value.length == 11) &&
                (	(displaynumber.value.slice(0,3) == "070") ||
                    (displaynumber.value.slice(0,3) == "080") ||
                    (displaynumber.value.slice(0,3) == "090") ||
                    (displaynumber.value.slice(0,3) == "081")
                )
            )
            {
            let gettt = JSON.parse(localStorage.getItem("accountbal"));
                if (gettt.airtelbal <= 0.50) {
                    calculating.style.display = "none";
                    calculatingfirst.style.display = "none";
                    callopacity.style.display = "none";
                    forcalls.style.display = "none";
                    forcallnumbers.style.display = "block";
                    invalidresult.style.display = "block";
                    showsomeresult.innerHTML = "Your account balance is too low for this call. You can borrow airtime or call back later.";
                    callersno.innerHTML = displaynumber.value;
                    network.innerHTML = "Airtel";
                } else if (gettt.airtelbal != 0) {
                    calculating.style.display = "none";
                    calculatingfirst.style.display = "none";
                    audioElement = new Audio('ringtone.mp3');
                    secondphone.classList.add("mysecondphone");
                    audioElement.play();
                    timeout = setInterval(checktimeout, 1000);
                    forcallnumbers.style.display = "block";
                    forcalls.style.display = "none";
                    callersno.innerHTML = displaynumber.value;
                    network.innerHTML = "Airtel";
                    secondphone.style.display = "block";
                    secondphone.classList.add("mysecondphone");
                    reccall.style.display = "block";
                    networktwo.innerHTML = "Airtel";
                    phoneno.innerHTML = "09026827675";
                }
    }  else if (	(displaynumber.value != "") && (displaynumber.value.length == 14) &&
                (	(displaynumber.value.slice(0,4) == "+234") ||
                    (displaynumber.value.slice(0,4) == "+229")
                )
            )
            {
                let gettt = JSON.parse(localStorage.getItem("accountbal"));
                if (gettt.airtelbal <= 0.50) {
                    calculating.style.display = "none";
                    calculatingfirst.style.display = "none";
                    callopacity.style.display = "none";
                    forcalls.style.display = "none";
                    forcallnumbers.style.display = "block";
                    invalidresult.style.display = "block";
                    showsomeresult.innerHTML = "Your account balance is too low for this call. You can borrow airtime or call back later.";
                    calculatingfirst.style.display = "none";
                    callersno.innerHTML = displaynumber.value;
                    network.innerHTML = "Airtel";
                } else if (gettt.airtelbal != 0.50) {
                    calculating.style.display = "none";
                    calculatingfirst.style.display = "none";
                    audioElement = new Audio('ringtone.mp3');
                    secondphone.classList.add("mysecondphone");
                    audioElement.play();
                    timeout = setInterval(checktimeout, 1000);
                    forcallnumbers.style.display = "block";
                    forcalls.style.display = "none";
                    callersno.innerHTML = displaynumber.value;
                    network.innerHTML = "Airtel";
                    secondphone.style.display = "block";
                    reccall.style.display = "block";
                    networktwo.innerHTML = "Airtel";
                    phoneno.innerHTML = "09026827675";
                }
    }  else if  ((displaynumber.value != "") && (displaynumber.value.length == 11) &&
                    (	(displaynumber.value.slice(0,3) != "070") ||
                        (displaynumber.value.slice(0,3) != "080") ||
                        (displaynumber.value.slice(0,3) != "090") ||
                        (displaynumber.value.slice(0,3) != "081")
                    )
                ) {
                    callopacity.style.display = "none";
                    forcalls.style.display = "none";
                    forcallnumbers.style.display = "block";
                    invalidresult.style.display = "block";
                    showsomeresult.innerHTML = "This number does not exist.please, check the number and try again later.";
                    calculatingfirst.style.display = "none";
                    callersno.innerHTML = displaynumber.value;
                    network.innerHTML = "Airtel";
    } else if (displaynumber.value.length != 11)  {
        callopacity.style.display = "none";
        forcalls.style.display = "none";
        forcallnumbers.style.display = "block";
        invalidresult.style.display = "block";
        showsomeresult.innerHTML = "This number does not exist.please, check the number and try again later.";
        calculatingfirst.style.display = "none";
        callersno.innerHTML = displaynumber.value;
        network.innerHTML = "Airtel";
    }
}


//  LOAD GLO CARD

function loadCardGlo() {
    if (displaynumber.value.length == 21) {
        var searchnetwork = JSON.parse(localStorage.getItem("Voucher"));
            for (var q = 0; q < searchnetwork.length; q++) {				
                var searchingcode = searchnetwork[q].code;
                    if ((displaynumber.value.slice(0,5) == "*123*") &&
                        (searchingcode.search(displaynumber.value.slice(5,20)) != -1) &&
                        (displaynumber.value.slice(20,21) == "#") &&
                        (searchnetwork[q].cardname == "Glo") &&
                        (searchnetwork[q].status == "notused"))
                     {
                        searchnetwork[q].status = "used";
                        showbalance.style.display = "block";
                        selectsim.style.display = "none";
                        let getbal = parseInt(searchnetwork[q].cardamount);
                        let gettt = JSON.parse(localStorage.getItem("accountbal"));
                        gettt.global += getbal;
                        localStorage.setItem("accountbal", JSON.stringify(gettt));
                        displaybalance.innerHTML = "Recharge successful. Your account has been credited with GLO " + searchnetwork[q].cardamount+ " . Your new account bal :₦" + gettt.global.toFixed(2);
                    } else if ((displaynumber.value.slice(0,5) == "*123*") &&
                        (searchingcode.search(displaynumber.value.slice(5,20)) != -1) &&
                        (displaynumber.value.slice(20,21) == "#") &&
                        (searchnetwork[q].cardname == "Glo") &&
                        (searchnetwork[q].status == "used"))
                    {	
                        selectsim.style.display = "none";
                        showbalance.style.display = "block";
                         displaybalance.innerHTML = "This card has been loaded by a customer. Thanks!!!";
                    } 
                    localStorage.setItem("Voucher", JSON.stringify(searchnetwork));	
            }	
    } else if (displaynumber.value.slice(0,5) == "*124#") {
        selectsim.style.display = "none";
        showbalance.style.display = "block";
        var displaybal = JSON.parse(localStorage.getItem("accountbal"));
        var showbal = displaybal.global;
        displaybalance.innerHTML = ("Your GLO account balance is ₦" + showbal.toFixed(2));
    }  else if (	(displaynumber.value != "") && (displaynumber.value.length == 11) &&
                (	(displaynumber.value.slice(0,3) == "070") ||
                    (displaynumber.value.slice(0,3) == "080") ||
                    (displaynumber.value.slice(0,3) == "090") ||
                    (displaynumber.value.slice(0,3) == "081")
                )
            )
            {
                let gettt = JSON.parse(localStorage.getItem("accountbal"));
                if (gettt.global <= 0.50) {
                    calculating.style.display = "none";
                    calculatingfirst.style.display = "none";
                    callopacity.style.display = "none";
                    forcalls.style.display = "none";
                    forcallnumbers.style.display = "block";
                    invalidresult.style.display = "block";
                    showsomeresult.innerHTML = "Your account balance is too low for this call. You can borrow airtime or call back later.";
                    callersno.innerHTML = displaynumber.value;
                    network.innerHTML = "Glo";
                } else if (gettt.global != 0) {
                    calculating.style.display = "none";
                    calculatingfirst.style.display = "none";
                    audioElement = new Audio('ringtone.mp3');
                    secondphone.classList.add("mysecondphone");
                    audioElement.play();
                    timeout = setInterval(checktimeout, 1000);
                    forcallnumbers.style.display = "block";
                    forcalls.style.display = "none";
                    callersno.innerHTML = displaynumber.value;
                    network.innerHTML = "Glo";
                    secondphone.style.display = "block";
                    reccall.style.display = "block";
                    networktwo.innerHTML = "Glo";
                }
    }  else if (	(displaynumber.value != "") && (displaynumber.value.length == 14) &&
                (	(displaynumber.value.slice(0,4) == "+234") ||
                    (displaynumber.value.slice(0,4) == "+229")
                )
            )
            {
                let gettt = JSON.parse(localStorage.getItem("accountbal"));
                if (gettt.global <= 0.50) {
                    calculating.style.display = "none";
                    calculatingfirst.style.display = "none";
                    callopacity.style.display = "none";
                    forcalls.style.display = "none";
                    forcallnumbers.style.display = "block";
                    invalidresult.style.display = "block";
                    showsomeresult.innerHTML = "Your account balance is too low for this call. You can borrow airtime or call back later.";
                    calculatingfirst.style.display = "none";
                    callersno.innerHTML = displaynumber.value;
                    network.innerHTML = "Glo";
                } else if (gettt.global != 0) {
                    calculating.style.display = "none";
                    calculatingfirst.style.display = "none";
                    audioElement = new Audio('ringtone.mp3');
                    secondphone.classList.add("mysecondphone");
                    audioElement.play();
                    timeout = setInterval(checktimeout, 1000);
                    forcallnumbers.style.display = "block";
                    forcalls.style.display = "none";
                    callersno.innerHTML = displaynumber.value;
                    network.innerHTML = "Glo";
                    secondphone.style.display = "block";
                    reccall.style.display = "block";
                    networktwo.innerHTML = "Glo";
                }
    }   else if  ((displaynumber.value != "") && (displaynumber.value.length == 11) &&
                    (	(displaynumber.value.slice(0,3) != "070") ||
                        (displaynumber.value.slice(0,3) != "080") ||
                        (displaynumber.value.slice(0,3) != "090") ||
                        (displaynumber.value.slice(0,3) != "081")
                    )
                ) {
                    callopacity.style.display = "none";
                    forcalls.style.display = "none";
                    forcallnumbers.style.display = "block";
                    invalidresult.style.display = "block";
                    showsomeresult.innerHTML = "This number does not exist.please, check the number and try again later.";
                    calculatingfirst.style.display = "none";
                    callersno.innerHTML = displaynumber.value;
                    network.innerHTML = "Glo";
    } else {
        callopacity.style.display = "none";
        forcalls.style.display = "none";
        forcallnumbers.style.display = "block";
        invalidresult.style.display = "block";
        showsomeresult.innerHTML = "This number does not exist.please, check the number and try again later.";
        calculatingfirst.style.display = "none";
        callersno.innerHTML = displaynumber.value;
        network.innerHTML = "Glo";
    }	
}
// LOAD 9mobile CARD

function loadCard9mobile() {
    if (displaynumber.value.length == 21) {
        var searchnetwork = JSON.parse(localStorage.getItem("Voucher"));
        for (var q = 0; q < searchnetwork.length; q++) {				
            var searchingcode = searchnetwork[q].code;
                if ((displaynumber.value.slice(0,5) == "*222*") &&
                    (searchingcode.search(displaynumber.value.slice(5,20)) != -1) &&
                    (displaynumber.value.slice(20,21) == "#") &&
                    (searchnetwork[q].cardname == "9mobile") &&
                    (searchnetwork[q].status == "notused"))
                 {
                    searchnetwork[q].status = "used"
                    showbalance.style.display = "block";
                    selectsim.style.display = "none";
                    let getbal = parseInt(searchnetwork[q].cardamount);
                    let gettt = JSON.parse(localStorage.getItem("accountbal"));
                    gettt.mobile += getbal;
                    localStorage.setItem("accountbal", JSON.stringify(gettt));
                    displaybalance.innerHTML = "Recharge successful. Your account has been credited with 9Mobile " + searchnetwork[q].cardamount + " . Your new account bal :₦" + gettt.mobile.toFixed(2);
                } else if ((displaynumber.value.slice(0,5) == "*222*") &&
                    (searchingcode.search(displaynumber.value.slice(5,20)) != -1) &&
                    (displaynumber.value.slice(20,21) == "#") &&
                    (searchnetwork[q].cardname == "9mobile") &&
                    (searchnetwork[q].status == "used"))
                {	
                    selectsim.style.display = "none";
                    showbalance.style.display = "block";
                     displaybalance.innerHTML = "This card has been loaded by a customer. Thanks!!!";
                }
            localStorage.setItem("Voucher", JSON.stringify(searchnetwork));
            }
    }  else if (displaynumber.value.slice(0,5) == "*232#") {
        selectsim.style.display = "none";
        showbalance.style.display = "block";
        var displaybal = JSON.parse(localStorage.getItem("accountbal"));
        var showbal = displaybal.mobile;
        displaybalance.innerHTML = ("Your 9Mobile account balance is ₦" + showbal.toFixed(2));
    } else if ((displaynumber.value != "") && (displaynumber.value.length == 11) &&
                    ((displaynumber.value.slice(0,3) == "070") ||
                    (displaynumber.value.slice(0,3) == "080") ||
                    (displaynumber.value.slice(0,3) == "090") ||
                    (displaynumber.value.slice(0,3) == "081"))
                ) {

                        let gettt = JSON.parse(localStorage.getItem("accountbal"));
                        if (gettt.mobile <= 0.50) {
                            calculating.style.display = "none";
                            calculatingfirst.style.display = "none";
                            callopacity.style.display = "none";
                            forcalls.style.display = "none";
                            forcallnumbers.style.display = "block";
                            invalidresult.style.display = "block";
                            showsomeresult.innerHTML = "Your account balance is too low for this call. You can borrow airtime or call back later.";
                            callersno.innerHTML = displaynumber.value;
                            network.innerHTML = "9Mobile";
                        } else if (gettt.mobile != 0) {
                            calculating.style.display = "none";
                            calculatingfirst.style.display = "none";
                            audioElement = new Audio('ringtone.mp3');
                            secondphone.classList.add("mysecondphone");
                            audioElement.play();
                            timeout = setInterval(checktimeout, 1000);
                            forcallnumbers.style.display = "block";
                            forcalls.style.display = "none";
                            callersno.innerHTML = displaynumber.value;
                            network.innerHTML = "9Mobile";
                            secondphone.style.display = "block";
                            reccall.style.display = "block";
                            networktwo.innerHTML = "9Mobile";
                            phoneno.innerHTML = "09025147895";
                        }
    }  else if (	(displaynumber.value != "") && (displaynumber.value.length == 14) &&
                (	(displaynumber.value.slice(0,4) == "+234") ||
                    (displaynumber.value.slice(0,4) == "+229")
                )
            )
            {
                    let gettt = JSON.parse(localStorage.getItem("accountbal"));
                    if (gettt.mobile <= 0.50) {
                        calculating.style.display = "none";
                        calculatingfirst.style.display = "none";
                        callopacity.style.display = "none";
                        forcalls.style.display = "none";
                        forcallnumbers.style.display = "block";
                        invalidresult.style.display = "block";
                        showsomeresult.innerHTML = "Your account balance is too low for this call. You can borrow airtime or call back later.";	
                        callersno.innerHTML = displaynumber.value;
                        network.innerHTML = "9Mobile";
                    } else if (gettt.mobile != 0) {
                        calculating.style.display = "none";
                        calculatingfirst.style.display = "none";
                        audioElement = new Audio('ringtone.mp3');
                        secondphone.classList.add("mysecondphone");
                        audioElement.play();
                        timeout = setInterval(checktimeout, 1000);
                        forcallnumbers.style.display = "block";
                        forcalls.style.display = "none";
                        callersno.innerHTML = displaynumber.value;
                        network.innerHTML = "9Mobile";
                        secondphone.style.display = "block";
                        reccall.style.display = "block";
                        networktwo.innerHTML = "9Mobile";
                        phoneno.innerHTML = "09025147895";
                    }
    } else if  ((displaynumber.value != "") && (displaynumber.value.length == 11) &&
                    (	(displaynumber.value.slice(0,3) != "070") ||
                        (displaynumber.value.slice(0,3) != "080") ||
                        (displaynumber.value.slice(0,3) != "090") ||
                        (displaynumber.value.slice(0,3) != "081")
                    )
                ) {
                    callopacity.style.display = "none";
                    forcalls.style.display = "none";
                    forcallnumbers.style.display = "block";
                    invalidresult.style.display = "block";
                    showsomeresult.innerHTML = "This number does not exist.please, check the number and try again later.";
                    calculatingfirst.style.display = "none";
                    callersno.innerHTML = displaynumber.value;
                    network.innerHTML = "9Mobile";
    } else {
        callopacity.style.display = "none";
        forcalls.style.display = "none";
        forcallnumbers.style.display = "block";
        invalidresult.style.display = "block";
        showsomeresult.innerHTML = "This number does not exist.please, check the number and try again later.";
        calculatingfirst.style.display = "none";
        callersno.innerHTML = displaynumber.value;
        network.innerHTML = "9Mobile";
    }	
}

var int;
var count;
var check = 1;
var one = 0;
var two = 0;
var three = 0;
var countsec = 0;
var getbalance;
var gettb;
console.log (getbalance);
var getmtn;
var getairtel;
var getglo;
var getmobile;
const receiveCall = () => {
    gettb = JSON.parse(localStorage.getItem("accountbal"));
    one = 0;
    two = 0;
    three = 0;
    loadhours.innerHTML = " ";
    loadminutes.innerHTML =  "00:";
    loadseconds.innerHTML =  "00";
    firstloadhours.innerHTML = " ";
    firstloadminutes.innerHTML =  "00:";
    firstloadseconds.innerHTML =  "00";
    getbalance = JSON.parse(localStorage.getItem("accountbal"));
    getmtn = getbalance.mtnbal;
    getairtel = getbalance.airtelbal;
    getglo = getbalance.global;
    getmobile = getbalance.mobile;
    reccall.style.display = "none";
    check = 2;
    int = setInterval(receive, 1000);
    count = setInterval(timeloading, 1000);
    calculating.style.display = "block";
    calculatingfirst.style.display = "block";
    audioElement.pause();
}
timeloading = () =>{
    one+=1;
    countsec+=1;

    if (one == 60) {
        one = 0;
        two+=1;
    }

    if (two == 60) {
        two = 0;
        three+=1
    }
    loadseconds.innerHTML = one;
    loadminutes.innerHTML = two;
    loadhours.innerHTML = three;
    firstloadseconds.innerHTML = one;
    firstloadminutes.innerHTML = two; 
    firstloadhours.innerHTML = three;
    
    if (one<10){
        loadseconds.innerHTML = `0${one}`;
        firstloadseconds.innerHTML = `0${one}`;
    } else {
        loadseconds.innerHTML = one;
        firstloadseconds.innerHTML = one;
    }

    if (two<10) {
        loadminutes.innerHTML = `0${two}:`;
        firstloadminutes.innerHTML = `0${two}:`;
    } else {
        loadminutes.innerHTML = `${two}:`;
        firstloadminutes.innerHTML =  `${two}:`;
    }

    if (three<10) {
        loadhours.innerHTML = `0${three}:`;
        firstloadhours.innerHTML = `0${three}:`;
    } else {
        loadhours.innerHTML = `${three}:`;
        loadhours.innerHTML = `${three}:`;
    } 

    if (three == 0) {
        loadhours.style.display = "none";
        firstloadhours.style.display = "none";
    } else {
        loadhours.style.display = "inline";
        firstloadhours.style.display = "inline";
    }
}


const receive = () => {
    if (network.innerHTML == "MTN") {
        getmtn = getmtn-0.11;
        var newMtn = getmtn;
        getbalance.mtnbal = newMtn;
        localStorage.setItem("accountbal", JSON.stringify(getbalance));	
        if (getbalance.mtnbal <= 0.50) {
            forcalls.style.display = "block";
            forcallnumbers.style.display = "none";
            callopacity.style.display = "block";
            selectsim.style.display = "none";
            showbalance.style.display = "block";
            displaybalance.innerHTML = "You have exhausted your airtime!!!";
            one = 0;
            two = 0;
            three = 0;
            loadhours.innerHTML = " ";
            loadminutes.innerHTML =  "00:";
            loadseconds.innerHTML =  "00";
            firstloadhours.innerHTML = " ";
            firstloadminutes.innerHTML =  "00:";
            firstloadseconds.innerHTML =  "00";
            secondphone.style.display = "none";
            clearInterval(int);
            clearInterval(count);
        }
    } else if (network.innerHTML == "Airtel") {
        getairtel = getairtel-0.12;
        var newAirtel = getairtel;
        getbalance.airtelbal = newAirtel;
        localStorage.setItem("accountbal", JSON.stringify(getbalance));
        if (getbalance.airtelbal <= 0.50) {
            forcalls.style.display = "block";
            forcallnumbers.style.display = "none";
            callopacity.style.display = "block";
            selectsim.style.display = "none";
            showbalance.style.display = "block";
            displaybalance.innerHTML = "You have exhausted your airtime!!!";
            one = 0;
            two = 0;
            three = 0;
            loadhours.innerHTML = " ";
            loadminutes.innerHTML =  "00:";
            loadseconds.innerHTML =  "00";
            firstloadhours.innerHTML = " ";
            firstloadminutes.innerHTML =  "00:";
            firstloadseconds.innerHTML =  "00";
            secondphone.style.display = "none";
            clearInterval(int);
            clearInterval(count);
        }
    } else if (network.innerHTML == "Glo") {
        getglo = getglo-0.11;
        var newGlo = getglo;
        getbalance.global = newGlo;
        localStorage.setItem("accountbal", JSON.stringify(getbalance));
        if (getbalance.global <= 0.50) {
            forcalls.style.display = "block";
            forcallnumbers.style.display = "none";
            callopacity.style.display = "block";
            selectsim.style.display = "none";
            showbalance.style.display = "block";
            displaybalance.innerHTML = "You have exhausted your airtime!!!";
            one = 0;
            two = 0;
            three = 0;
            loadhours.innerHTML = " ";
            loadminutes.innerHTML =  "00:";
            loadseconds.innerHTML =  "00";
            firstloadhours.innerHTML = " ";
            firstloadminutes.innerHTML =  "00:";
            firstloadseconds.innerHTML =  "00";
            secondphone.style.display = "none";
            clearInterval(int);
            clearInterval(count);
        }
    } else if (network.innerHTML == "9Mobile") {
        getmobile = getmobile-0.12;
        var newMobile = getmobile;
        getbalance.mobile = newMobile;
        localStorage.setItem("accountbal", JSON.stringify(getbalance));
        if (getbalance.mobile <= 0.50) {
            forcalls.style.display = "block";
            forcallnumbers.style.display = "none";
            callopacity.style.display = "block";
            selectsim.style.display = "none";
            showbalance.style.display = "block";
            displaybalance.innerHTML = "You have exhausted your airtime!!!";
            one = 0;
            two = 0;
            three = 0;
            loadhours.innerHTML = " ";
            loadminutes.innerHTML =  "00:";
            loadseconds.innerHTML =  "00";
            firstloadhours.innerHTML = " ";
            firstloadminutes.innerHTML =  "00:";
            firstloadseconds.innerHTML =  "00";
            secondphone.style.display = "none";
            clearInterval(int);
            clearInterval(count);
        }
    }  
} 


const endCall = () => {
    one = 0;
    two = 0;
    three = 0;
    if (check == 2) {
        check = 1;
        clearInterval(int);
        clearInterval(count);
        audioElement.pause();
        forcallnumbers.style.display = "none";
        forcalls.style.display = "block";
        secondphone.style.display = "none";
        invalidresult.style.display = "none";
        selectsim.style.display = "none";
        showbalance.style.display = "block";
        


        if (network.innerHTML == "MTN") {
            var newMtn = getmtn;
            getbalance.mtnbal = newMtn;
            localStorage.setItem("accountbal", JSON.stringify(getbalance));	
            var total = Number(gettb.mtnbal) - Number(getbalance.mtnbal);
            displaybalance.innerHTML = "Last Call was "  + countsec + " secs at ₦ " + total.toFixed(2) +  ". New account balance is : ₦ " + getbalance.mtnbal.toFixed(2);
        } else if (network.innerHTML == "Airtel") {
            var newAirtel = getairtel;
            getbalance.airtelbal = newAirtel;
            localStorage.setItem("accountbal", JSON.stringify(getbalance));
            var total = parseInt(gettb.airtelbal) - parseInt(getbalance.airtelbal);
            displaybalance.innerHTML = "Last Call was "  + countsec + " secs at ₦ " + total.toFixed(2) +  ". New account balance is : ₦ " +  getbalance.airtelbal.toFixed(2);	
        } else if (network.innerHTML == "Glo") {
            var newGlo = getglo;
            getbalance.global = newGlo;
            localStorage.setItem("accountbal", JSON.stringify(getbalance));
            var total = parseInt(gettb.global) - parseInt(getbalance.global);	
            displaybalance.innerHTML = "Last Call was "  + countsec + " secs at ₦ " + total.toFixed(2) +  ". New account balance is : ₦ " +  getbalance.global.toFixed(2);
        } else if (network.innerHTML == "9Mobile") {
            var newMobile = getmobile;
            getbalance.mobile = newMobile;
            localStorage.setItem("accountbal", JSON.stringify(getbalance));
            var total = parseInt(gettb.mobile) - parseInt(getbalance.mobile);
            displaybalance.innerHTML = "Last Call was "  + countsec + " secs at ₦ " + total.toFixed(2) +  ". New account balance is : ₦ " + getbalance.mobile.toFixed(2);
                
        }
        
    } else {
        if (audioElement == undefined) {
            forcallnumbers.style.display = "block";
            forcalls.style.display = "block";
            callopacity.style.display= "none";
            secondphone.style.display = "none";
            invalidresult.style.display = "none";
            selectsim.style.display = "none";
        } else {
            audioElement.pause();
            forcallnumbers.style.display = "block";
            forcalls.style.display = "block";
            callopacity.style.display= "none";
            secondphone.style.display = "none";
            invalidresult.style.display = "none";
            selectsim.style.display = "none";
        }
        
    }
    
}