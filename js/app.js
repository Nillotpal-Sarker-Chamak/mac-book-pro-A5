// memory cost 
function memory(cost) {
    let bestPriceText = document.getElementById("best-price").innerText;
    let bestPrice = parseInt(bestPriceText);
    let memoryCostText = document.getElementById("memory-cost");
    memoryCostText.innerText = cost;
    memoryCost = parseInt(memoryCostText.innerText);
    let storageCostText = document.getElementById("storage-cost");
    let storageCost = parseInt(storageCostText.innerText);
    let deliveryCostText = document.getElementById("delivery-cost");
    let deliveryCost = parseInt(deliveryCostText.innerText);

    let totalPrice = bestPrice + memoryCost + storageCost + deliveryCost;
    document.getElementById("total-price").innerText = totalPrice;
    let finalTotal = document.getElementById("final-total");
    finalTotal.innerText = totalPrice;
}
// storage cost 
function storage(cost) {
    let bestPriceText = document.getElementById("best-price").innerText;
    let bestPrice = parseInt(bestPriceText);
    let memoryCostText = document.getElementById("memory-cost");
    memoryCost = parseInt(memoryCostText.innerText);
    let storageCostText = document.getElementById("storage-cost");
    storageCostText.innerText = cost;
    let storageCost = parseInt(storageCostText.innerText);
    let deliveryCostText = document.getElementById("delivery-cost");
    let deliveryCost = parseInt(deliveryCostText.innerText);

    let totalPrice = bestPrice + memoryCost + storageCost + deliveryCost;
    document.getElementById("total-price").innerText = totalPrice;
    let finalTotal = document.getElementById("final-total");
    finalTotal.innerText = totalPrice;
}
// delivery cost
function delivery(cost) {
    let bestPriceText = document.getElementById("best-price").innerText;
    let bestPrice = parseInt(bestPriceText);
    let memoryCostText = document.getElementById("memory-cost");
    memoryCost = parseInt(memoryCostText.innerText);
    let storageCostText = document.getElementById("storage-cost");
    let storageCost = parseInt(storageCostText.innerText);
    let deliveryCostText = document.getElementById("delivery-cost");
    deliveryCostText.innerText = cost;
    let deliveryCost = parseInt(deliveryCostText.innerText);

    let totalPrice = bestPrice + memoryCost + storageCost + deliveryCost;
    document.getElementById("total-price").innerText = totalPrice;
    let finalTotal = document.getElementById("final-total");
    finalTotal.innerText = totalPrice;
}

// memory buttons
document.getElementById("memoryFirst").addEventListener('click', function () {
    memory('0');
});

document.getElementById("memorySecond").addEventListener('click', function () {
    memory('180');
});
// storage buttons
document.getElementById("storage-first").addEventListener('click', function () {
    storage('0');
});
document.getElementById("storage-second").addEventListener('click', function () {
    storage('100');
});
document.getElementById("storage-third").addEventListener('click', function () {
    storage('180');
});
// delivery buttons
document.getElementById("delivery-first").addEventListener('click', function () {
    delivery('0');
});

document.getElementById("delivery-second").addEventListener('click', function () {
    delivery('20');
});
// promo code calculation
document.getElementById("submit-btn").addEventListener('click', function () {
    let inputValue = document.getElementById("promo-input");
    let finalTotal = document.getElementById("final-total");
    const totalpriceText = document.getElementById("total-price").innerText;
    const totalprice = parseInt(totalpriceText);
    if (inputValue.value == 'stevekaku') {
        const discountPrice1 = totalprice * 0.20;
        const discountPricefinal = totalprice - discountPrice1;
        finalTotal.innerText = discountPricefinal;
        console.log(finalTotal);
        inputValue.value = '';
    }
    else {
        inputValue.value = '';
    }
})