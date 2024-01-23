//function to calc and display tipm total bill and amount for person
function calcAndShow(){
    //get values from html from
    let bill = parseFloat(document.getElementById('totalBill').value);
    let numOfppl = parseInt(document.getElementById('numPpl').value);
    let servicequlaity = document.getElementById('serviceQuality').value;



    //calc this shit
    let tip = calculateTip(bill, serviceQuality)
    let totalBill= calculateTotalTip(bill, tip)
    let amtPerPers= calcamtperpers(totalBill, numOfppl)

    //display result
    document.getElementById('tipResult').innerText = 'Tip: $'+tip.tofixed(2)
    document.getElementById('totalBillResult').innerText = 'Total Bill: $'+totalBill.tofixed(2)
    document.getElementById('amtPerPersonResult').innerText = 'Amout Per Person: $'+amtPerPers.tofixed(2)

}