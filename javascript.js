function calculateExpense(id){
    const field = document.getElementById(id);
    const fieldSting =field.value;
    const fieldNumber = parseInt(fieldSting);
    return fieldNumber;
}
    
function getElementByValue(id){
    const elementValue = document.getElementById(id);
    const elementValueString = elementValue.innerText;
    const elementNumber = parseInt(elementValueString);
    return elementNumber;
}
function setInnerText(id, value){
    const innerTextValue = document.getElementById(id);
    innerTextValue.innerText = value;
}

document.getElementById('calculate-btn').addEventListener('click', function(){
    const expense = getElementByValue('total-expense');
    const incomeFieldNumber = calculateExpense('income');
    const foodFieldNumber =calculateExpense('food');
    const rentFieldNumber =calculateExpense('rent');
    const clothesFieldNumber =calculateExpense('clothes');
    // all field are positive number .
    if (isNaN(incomeFieldNumber) || isNaN(foodFieldNumber) || isNaN(rentFieldNumber) || isNaN(clothesFieldNumber) || incomeFieldNumber <= 0 || foodFieldNumber <= 0 || rentFieldNumber <= 0 || clothesFieldNumber <= 0 ){
        alert('please input number type value');
        return ;
    }
    // else if (incomeFieldNumber <= 0 || foodFieldNumber <= 0 || rentFieldNumber <= 0 || clothesFieldNumber <= 0) {
    //      alert('please input positive number');
    //     return ;
    // }
    const totalExpense = foodFieldNumber + rentFieldNumber + clothesFieldNumber;
    if (incomeFieldNumber < totalExpense) {
        const warning = alert('your expence is getarthan your income');
        return warning;
    }
    setInnerText('total-expense', totalExpense);
    

    // Expenses cannot be more than income.
    const incomeFieldNumbers = calculateExpense('income');
    const expenses = getElementByValue('total-expense');
    const balanceAmount = incomeFieldNumbers - expenses ;
    setInnerText('balance', balanceAmount);

    
})

//    Part -2 
document.getElementById('btn-primary').addEventListener('click', function(){
    const saveingField = calculateExpense('save')
     // valitation 
     if (isNaN(saveingField) || saveingField <= 0 ) {
        const warning = alert('please input number type value');
        return warning;       
    }
    // else if (saveingField <= 0 ) {
    //     const warning = alert('please input positive number');
    //     return warning;
    // }
    
    const incomeFieldNumber = calculateExpense('income');
    const saveFieldParsent = saveingField  / 100;

    const currentAmount =  incomeFieldNumber * saveFieldParsent ;
 
    
    const saveingAmount = document.getElementById('saving-amount');
    saveingAmount.innerText = currentAmount;
    const previousBalance = getElementByValue('balance');
    const savingAmount = getElementByValue('saving-amount');
    const remaining = previousBalance - savingAmount;
    setInnerText('remaining-balance', remaining);
})