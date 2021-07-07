function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        console.log('Sorry! distance can not be Negative. input a positive number');
    }
    else if (kilometer > 0) {
        const meter = kilometer * 1000;
        return meter;
    }
    else {
        console.log("Warning! Wrong input");
    }
}



function budgetCalculator(numOfWatch, numOfMobile, numOfLaptop) {
    if (numOfWatch < 0 || (numOfWatch ^ 0) !== numOfWatch || numOfMobile < 0 || (numOfMobile ^ 0) !== numOfMobile || numOfLaptop < 0 || (numOfLaptop ^ 0) !== numOfLaptop) {
        console.log("Error message. Wrong input")
    }
    else if (numOfWatch > 0 || numOfMobile > 0 || numOfLaptop > 0) {
        let watchPrice = 50;
        let mobilePrice = 100;
        let laptopPrice = 500;
        const totalWatchPrice = watchPrice * numOfWatch;
        const totalMobilePrice = mobilePrice * numOfMobile;
        const totalLaptopPrice = laptopPrice * numOfLaptop;
        const totalBudget = totalWatchPrice + totalMobilePrice + totalLaptopPrice;
        return totalBudget;
    }
    else {
        console.log('wrong input')
    }
}



function hotelCost(days) {
    let totalCost = 0;
    let extraDays, tendays, twentydays;
    if (days < 0 || (days ^ 0) !== days) {
        console.log("wrong input!")
    }
    else if (days > 0) {
        if (days <= 10) {
            totalCost = days * 100;
        }
        else if (days > 10 && days <= 20) {
            extraDays = days - 10;
            tendays = days - extraDays;
            totalCost = (extraDays * 80) + (tendays * 100);
        }
        else if (days > 20) {
            twentydays = twentyDaysCost(20);
            let totalday = days - 20;
            totalCost = totalday * 50 + twentydays;
        }
        function twentyDaysCost(days) {
            extraDays = days - 10;
            tendays = days - extraDays;
            totalCost = (extraDays * 80) + (tendays * 100);
            return totalCost;
        }
        return totalCost;
    }
    else {
        console.log('wrong input!')
    }
}



function megaFriend(String) {
    let max_string = String[0].length;
    let max = String[0];
    for (let i = 1; i < String.length; i++) {
        let check = String[i].length;
        if (check > max_string) {
            max = String[i];
            max_string = check;
        }
    }
    return max;
}


