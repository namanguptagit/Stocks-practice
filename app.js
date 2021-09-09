const outputE1 = document.querySelector("#output");
const submitBtn = document.querySelector("#submit-btn");
const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");

function showOutput(message) {
    outputE1.innerText = message;
}


function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        showOutput(`Hey the loss is ${loss} and the loss percent is ${lossPercentage}%`);
    } else if (initial < current) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        showOutput(`Hey the profit is ${profit} and the profit percent is ${profitPercentage}%`);
    } else {
        showOutput("No pain no gain and no gain no pain");
    }
}


function clickHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);
    calculateProfitAndLoss(ip, qty, curr);
}

submitBtn.addEventListener("click", clickHandler)