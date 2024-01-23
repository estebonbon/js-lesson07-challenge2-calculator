// Your JS code here

/* HTML query.Selector Values */
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");

/* Initial variable Values */
var subType = "basic";
var subDuration = 1;

/* Dropdown menu subscription */
subTypeElement.addEventListener("change", function(e){
    subType = e.target.value;
    updateSubscriptionDiv ()
    //console.log(subType);
});

/* Dropdown menu duration */
subDurationElement.addEventListener("change", function (e){
    subDuration = e.target.value;
    updateSubscriptionDiv ()
    //console.log(subDuration);
});

var updateSubscriptionDiv = function () {
    var monthlyCost = 5;
    if (subType === "standard") {
        monthlyCost = 7;
    } else if ( subType === "premium") {
        monthlyCost = 10;
    }
    var total = monthlyCost * subDuration;
    result.innerText = `You have a chosen a ${subDuration} month ${subType} plan for $${total}`; 
} 

