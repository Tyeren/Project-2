/**
 * Created by Johnson on 5/6/16.
 */
var card = {
    yourName: "S-117 John",
    phoneNumber: "nun-you-bsnss",
    businessName:"Hidden",
    email:"you@dontneedtoknow.hidden"

};

function makeCard() {


    document.getElementById("yourName").innerHTML = card.yourName;
    document.getElementById("phoneNumber").innerHTML = card.phoneNumber;
    document.getElementById("businessName").innerHTML = card.businessName;
    document.getElementById("email").innerHTML = card.email;
}