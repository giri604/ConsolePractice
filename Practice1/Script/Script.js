////$(document).ready(function () {
////    console.log("ready!");

////});
function submitCalathonFeedback() {
    var updateSelectVal = $('input[name=updateSelect]:checked').val();

    var calathonRateValue = $('input[name=rate]:checked').val();

    var businessselectVal = $('input[name=businessselect]:checked').val();

    if (updateSelectVal != undefined && calathonRateValue != undefined && businessselectVal != undefined) {
        submitCalathonFeedbackData(updateSelectVal, calathonRateValue, businessselectVal);
    }
    else {
        errorMsg();
    }
}

function submitAgentFeedback() {
    var agtRateValue = $('input[name=rate]:checked').val();

    var agt1selectValue = $('input[name=agt1select]:checked').val();

    var agt2selectValue = $('input[name=agt2select]:checked').val();

    var agt3selectValue = $('input[name=agt3select]:checked').val();

    if (agtRateValue != undefined && agt1selectValue != undefined && agt2selectValue != undefined && agt3selectValue != undefined) {
        submitAgentFeedbackData(agtRateValue, agt1selectValue, agt2selectValue, agt3selectValue);
    }
    else {
        errorMsg();
    }
}

function submitJFWFeedback() {
    var rate1Value = $('input[name=rate1]:checked').val();

    var rate2Value = $('input[name=rate2]:checked').val();

    var rate3Value = $('input[name=rate3]:checked').val();

    if (rate1Value != undefined && rate2Value != undefined && rate3Value != undefined) {
        submitJFWFeedbackData(rate1Value, rate2Value, rate3Value);
    }
    else {
        errorMsg();
    }
}

function submitCalathonFeedbackData(updateSelectVal, calathonRateValue, businessselectVal) {
    console.log("updateSelectVal: " + updateSelectVal);
    console.log("calathonRateValue: " + calathonRateValue);
    console.log("businessselectVal: " + businessselectVal);
    //API Call
}

function submitAgentFeedbackData(agtRateValue, agt1selectValue, agt2selectValue, agt3selectValue) {
    console.log("agtRateValue: " + agtRateValue);
    console.log("agt1selectValue: " + agt1selectValue);
    console.log("agt2selectValue: " + agt2selectValue);
    console.log("agt3selectValue: " + agt3selectValue);
    //API Call
}

function submitJFWFeedbackData(rate1Value, rate2Value, rate3Value) {
    console.log("rate1Value: " + rate1Value);
    console.log("rate2Value: " + rate2Value);
    console.log("rate3Value: " + rate3Value);
    //API Call
}

function errorMsg() {
    console.log("Kindly Provide all fields Feedback");
    //Kindly Provide all fields Feedback
}

