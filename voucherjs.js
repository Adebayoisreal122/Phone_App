forcalls.style.display = "none";
inside.style.display = "none";
showbalance.style.display = "none";
playmu.style.display = "none"
infogenerate.style.display = "none";
callopacity.style.display = "none";
phoneCall.style.display = "none";
forgame.style.display = "none";
secondphone.style.display = "none";
invalidresult.style.display = "none";
forcal.style.display = "none";
calculating.style.display = "none";
calculatingfirst.style.display = "none";


let d = new Date();
displaydate.innerHTML = d.toDateString();
var getTimeDate = () => {
    var j = new Date();
    let myhrs = j.getHours();
    let mymin = j.getMinutes();
    if (myhrs.toString().length < 2) {
        myhrs = "0" + hr;
    }
    if (myhrs > 12) {
        myhrs = myhrs - 12;
        displaytime.innerHTML = myhrs + ":" + mymin + " PM"
    } else {
        displaytime.innerHTML = myhrs + ":" + mymin + " AM";
    }
}
setInterval(function () {
    getTimeDate();
}, 1000)



let checkOpen = 0;

const openMe = () => {
    checkOpen = 1;
    firstdisplay.style.display = "none";
    forcalls.style.display = "none";
    inside.style.display = "block";
    showbalance.style.display = "none";
    infogenerate.style.display = "none";
    callopacity.style.display = "none";
    phoneCall.style.display = "none";
    forgame.style.display = "none";
    forcal.style.display = "none";
    playmu.style.display = "none";
}


const offMe = () => {
    inside.style.display = "none";
    firstdisplay.style.display = "block";
    checkOpen = 0;
}

const goBack = () => {
    if (checkOpen == 0) {
        return;
    } else if (checkOpen == 1) {
        forcalls.style.display = "none";
        inside.style.display = "block";
        showbalance.style.display = "none";
        infogenerate.style.display = "none";
        callopacity.style.display = "none";
        phoneCall.style.display = "none";
        forgame.style.display = "none";
        forcal.style.display = "none";
        playmu.style.display = "none";
    }

}

const openGame = () => {
    forgame.style.display = "block";
    forcalls.style.display = "none";
    inside.style.display = "none";
    showbalance.style.display = "none";
    infogenerate.style.display = "none";
    callopacity.style.display = "none";
    phoneCall.style.display = "none";
    playmu.style.display = "none";
}
const openMusic = () => {
    playmu.style.display = "block";
    forgame.style.display = "none";
    forcalls.style.display = "none";
    inside.style.display = "none";
    showbalance.style.display = "none";
    infogenerate.style.display = "none";
    callopacity.style.display = "none";
    phoneCall.style.display = "none";
}

const simSelect = () => {
    if (displaynumber.value == "") {
        return;
    } else {
        callopacity.style.display = "block";
        selectsim.style.display = "block";
        showbalance.style.display = "none";
    }

}


const delInfo = () => {
    infogenerate.style.display = "none";
}


const displayCall = () => {
    forcalls.style.display = "block";
}

const displayNumb = (num) => {
    displaynumber.value += num;

}

const deleteNumb = () => {
    displaynumber.value = displaynumber.value.substr(0, displaynumber.value.length - 1)
}

const deleteAll = () => {
    displaynumber.value = "";
}

const delCallOpacity = () => {
    callopacity.style.display = "none";
}

const cancelBalance = () => {
    callopacity.style.display = "none";
    displaynumber.value = "";
    showbalance.style.display = "none";
}

const displayCal = () => {
    inside.style.display = "none";
    // firstdisplay.style.display = "block";
    forcal.style.display = "block";
}

//    VOULCHER CARD BEGINNING 
var array = [];
const generate=()=> {
    // result.innerHTML = " ";
    if (typeof (localStorage.getItem("Voucher")) == 'string') {
        array = JSON.parse(localStorage.getItem("Voucher"));
    } else {
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

    for (let i = 0; i < nocard.value; i++) {
        const allSpan = document.createElement("div");
        const divDiv = document.createElement("div");
        const forSimType = document.createTextNode(selectcard.value);
        const forAmount = document.createTextNode("#" + amount.value);
        const span1 = document.createElement("span");
        const span2 = document.createElement("span");
        divDiv.id = "allDiv";
        allSpan.id = "alllSpan";
        span2.id = "secondspan";

        let ooo = '';


        if (selectcard.value == "MTN") {
            for (let j = 0; j < 17; j++) {
                const b = Math.floor(Math.random() * 10);

                ooo += b;

                const textFormF = document.createTextNode(b);
                divDiv.appendChild(textFormF);
                span1.appendChild(forSimType);
                span2.appendChild(forAmount);
                allSpan.appendChild(span1);
                allSpan.appendChild(span2);
            }
        } else if (selectcard.value == "Airtel") {
            for (let j = 0; j < 16; j++) {
                const b = Math.floor(Math.random() * 10);
                const textFormF = document.createTextNode(b);
                ooo += b;

                divDiv.appendChild(textFormF);
                span1.appendChild(forSimType);
                span2.appendChild(forAmount);
                allSpan.appendChild(span1);
                allSpan.appendChild(span2);
            }
        } else if (selectcard.value == "Glo") {
            for (let j = 0; j < 15; j++) {
                const b = Math.floor(Math.random() * 10);
                const textFormF = document.createTextNode(b);
                ooo += b;

                divDiv.appendChild(textFormF);
                span1.appendChild(forSimType);
                span2.appendChild(forAmount);
                allSpan.appendChild(span1);
                allSpan.appendChild(span2);
            }
        } else if (selectcard.value == "9mobile") {
            for (let j = 0; j < 15; j++) {
                const b = Math.floor(Math.random() * 10);
                const textFormF = document.createTextNode(b);
                ooo += b;

                divDiv.appendChild(textFormF);
                span1.appendChild(forSimType);
                span2.appendChild(forAmount);
                allSpan.appendChild(span1);
                allSpan.appendChild(span2);
            }
        }
        const obj = { cardname: selectcard.value, code: ooo, cardamount: amount.value, status: "notused" };

        array.push(obj);

        localStorage.setItem("Voucher", JSON.stringify(array));
        document.querySelector("#result").appendChild(allSpan);
        document.querySelector("#result").appendChild(divDiv);
    }
}

const showAllCard=()=> {

    var getallcard = JSON.parse(localStorage.getItem("Voucher"));
    result.innerHTML = "";

    var cardElement = "";
    getallcard.map(card => {
        if (card.status == "used") {
            cardElement += `
						<div class="row mb-3 bg-white rounded">
							<div class="col-12">
								<div class="row p-2 text-dark bg-white shadow-sm">
									<div class="col-3 text-left">${card.cardname.toUpperCase()}</div>
									<div class="col-6 text-center text-danger h6">${card.status.toUpperCase()}</div>
									<div class="col-3 text-right">#${card.cardamount}</div>
								</div>
								<div class="row text-center p-2">
									<div class="col-12"><p class="text-danger h5">${card.code}</p></div>
								</div>
							</div>
						</div>
					`
        } else if (card.status == "notused") {
            cardElement += `
						<div class="row mb-3 bg-white rounded">
							<div class="col-12">
								<div class="row p-2 text-dark bg-white shadow">
									<div class="col-3 text-left">${card.cardname.toUpperCase()}</div>
									<div class="col-6 text-center text-success h6">${card.status.toUpperCase()}</div>
									<div class="col-3 text-right">#${card.cardamount}</div>
								</div>
								<div class="row text-center p-2">
									<div class="col-12"><p class="text-success h5">${card.code}</p></div>
								</div>
							</div>
						</div>
					`
        }
    })
    result.innerHTML = cardElement;
}
//    VOULCHER CARD END