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

   return selected;       
}
function storeName(){
    
    return holdCategory;
}

function storeNumber(){
   
    return holdNumber;
}
function updateTable(){
    var catList = document.getElementsByName("Update");
    var selected;
    var i =0;
    var flag = false;
   while( flag == false){
    if (catList[i].checked == true){
        selected = catList[i].value;
        flag = true;
    }
    i++;
   }
   console.log(selected);
   var userCategory = document.getElementById('Category');
   var holdCategory = userCategory.value;
   console.log(holdCategory);
   var userNumber = document.getElementById('entryAmount');
   var holdNumber = userNumber.value;
   console.log(holdNumber);
   var newEl = document.createElement('tr');

   var name= document.createElement('td');
   var nameText = document.createTextNode(holdCategory);
   var number= document.createElement('td');
   var numberText = document.createTextNode(holdNumber);

   name.appendChild(nameText);
   number.appendChild(numberText);
   newEl.appendChild(name);
   newEl.appendChild(number);
   console.log(20);
   switch (selected){
    case "New Fixed Bill":
        name.className = 'Bill_Header';
        number.className = 'Bill_Header';
        document.getElementById("Bill_Table").appendChild(newEl);
        break;
    case "New Expense":
        name.className = 'Expense_Header';
        number.className = 'Expense_Header';
        document.getElementById("Expense_Table").appendChild(newEl);
        break;
    case "Update your new Purchase":
        name.className = 'Misc_Header';
        number.className = 'Misc_Header';
        document.getElementById("Misc_Table").appendChild(newEl);
        break;
    default:
        console.log("No expense selected");
   }
}











