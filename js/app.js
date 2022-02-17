// calculate total expense 

function calculateExpense() {
    const foodText = document.getElementById("food");
    const foodTotal = parseFloat(foodText.value);
    foodText.value = "";

    const rentText = document.getElementById("rent");
    const rentTotal = parseFloat(rentText.value);
    rentText.value = "";

    const clothesText = document.getElementById("clothes");
    const clothesTotal = parseFloat(clothesText.value);
    clothesText.value = "";

    const expense = document.getElementById("total-expense");
    const totalExpense = expense.innerText;
    if (foodTotal < 0 || rentTotal < 0 || clothesTotal < 0) {
        const failError = document.getElementById("error");
        failError.style.display = "block";
        const expBalance = document.getElementById("exp-balance");
        expBalance.style.display = "none"
    }
    else {
        const totalExpenseAmount = foodTotal + rentTotal + clothesTotal;
        expense.innerText = totalExpenseAmount;
        return totalExpenseAmount;
    }

}

// calculate total balance 

function calculateBalance() {
    const incomeText = document.getElementById("income");
    const incomeTotal = parseFloat(incomeText.value);
    incomeText.value = "";

    const balance = document.getElementById("total-balance");
    const balanceTotal = balance.innerText;

    if (incomeTotal < 0) {
        const failError = document.getElementById("error");
        failError.style.display = "block";
        const expBalance = document.getElementById("exp-balance");
        expBalance.style.display = "none"
    }
    else {
        const totalBalanceAmount = incomeTotal - calculateExpense();
        balance.innerText = totalBalanceAmount;
    }

}


// document.getElementById("calculate").addEventListener('click', function () {
//     const incomeText = document.getElementById("income");
//     const incomeTotal = parseFloat(incomeText.value);

    // const foodText = document.getElementById("food");
    // const foodTotal = parseFloat(foodText.value);

    // const rentText = document.getElementById("rent");
    // const rentTotal = parseFloat(rentText.value);

    // const clothesText = document.getElementById("clothes");
    // const clothesTotal = parseFloat(rentText.value);

    // const expense = document.getElementById("total-expense");
    // const totalExpense = expense.innerText;

    // const totalExpenseAmount = foodTotal + rentTotal + clothesTotal;
    // expense.innerText = totalExpenseAmount;

//     const balance = document.getElementById("total-balance");
//     const balanceTotal = balance.innerText;

//     const totalBalanceAmount = incomeTotal - totalExpenseAmount;
//     balance.innerText = totalBalanceAmount;

// })