// Function to calculate and display tip, total bill, and amount per person
function calcAndShow() {
    // Get values from HTML form
    let bill = parseFloat(document.getElementById('totalBill').value);
    let numOfPpl = parseInt(document.getElementById('numPpl').value);
    let serviceQuality = document.getElementById('serviceQuality').value;

    // Calculate values
    let tip = calculateTip(bill, serviceQuality);
    let totalBill = calculateTotalBill(bill, tip);
    let amtPerPers = calcAmtPerPers(totalBill, numOfPpl);

    // Display result
    document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2);
    document.getElementById('totalBillResult').innerText = 'Total Bill: $' + totalBill.toFixed(2);
    document.getElementById('amtPerPersonResult').innerText = 'Amount Per Person: $' + amtPerPers.toFixed(2);
}

// Helper function to calculate the tip based on service quality
function calculateTip(bill, serviceQuality) {
    if (serviceQuality === "Great") {
        return bill * 0.2;
    } else if (serviceQuality === "Good") {
        return bill * 0.15;
    } else {
        return bill * 0.10;
    }
}

// Function to calculate the total bill
function calculateTotalBill(bill, tip) {
    return bill + tip;
}

// Function to calculate the amount per person
function calcAmtPerPers(totalBill, numOfPpl) {
    return totalBill / numOfPpl;
}
