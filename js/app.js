function monthlyExpense() {
    const foodText = document.getElementById("food");
    const foodTotal = parseFloat(foodText.value);

    const rentText = document.getElementById("rent");
    const rentTotal = parseFloat(rentText.value);

    const clothesText = document.getElementById("clothes");
    const clothesTotal = parseFloat(rentText.value);

    const expense = document.getElementById("total-expense");
    const totalExpense = expense.innerText;

    const totalExpenseAmount = foodTotal + rentTotal + clothesTotal;
    expense.innerText = totalExpenseAmount;

    return monthlyExpense();
}

function monthlyBalance() {
    const incomeText = document.getElementById("income");
    const incomeTotal = parseFloat(incomeText.value);

    const balance = document.getElementById("total-balance");
    const balanceTotal = balance.innerText;

    const totalBalanceAmount = incomeTotal - monthlyExpense();
    balance.innerText = totalBalanceAmount;
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