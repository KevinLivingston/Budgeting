var expenses = [];
var initialExpense = document.getElementById("Expense_Initial");
expenses[0] = initialExpense.innerText;
var expensesName = [];
var expenseTypeInit = document.getElementById("Expense_Type");
expensesName[0] = expenseTypeInit.innerText;
var miscInit = document.getElementById("Misc_Remain");
var miscMoney = [];
miscMoney[0] = miscInit.innerText;
var categoryMisc = document.getElementById("Misc_Type");
var miscNames = [];
miscNames[0] = categoryMisc.innerText;
console.log("HI");
console.log(document.getElementById("Misc").checked);

//var fixed date, might be able to use the date object for instant 
//real time update or allow a manual option for date selection
function createEntry() {
    var category = 2;

}
function findCategory() {
    var catList = document.getElementsByName("Update");
    for (var i = 0; i < catList.length; i++) {
       if (catList[i].checked == true){
        console.log(catList[i].id);
       }
    }
}
function storeName(){
    console.log(document.getElementById('Category').value);
}
document.getElementById("submitBut").addEventListener('onclick',storeName, false);











