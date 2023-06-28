
//var fixed date, might be able to use the date object for instant 
//real time update or allow a manual option for date selection
/* May be unecessary if i can store the values, and update one the tables on the web page with the updateTable() method coded below
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
*/
window.addEventListener('load', newBudget());
reCalc = document.getElementById('Total_Remain');
reCalc.addEventListener('click', function () {
    var value;
    var fixNum = document.getElementById('Bill_Total').innerText;
    var expNum = document.getElementById('Expense_Total').innerText;
    var miscNum = document.getElementById('Misc_Total').innerText;
    value = parseFloat(fixNum) + parseFloat(expNum) + parseFloat(miscNum);
    console.log(value);
    document.getElementById('CurrentAmount').innerText = parseFloat(document.getElementById('InitAmount').innerText) -value;
    try{
    if(parseFloat(document.getElementById('CurrentAmount').innerText) < 0){
        throw new Error("Budget exceeded!!")
    }
}
    catch(e){
        alert(e);
    }
}

    , false);
var starter;

/*Commented out for ease for editing css*/
function newBudget() {
    var starting_Amount = +prompt('Welcome to my budget program.Getting more practice with web design while also creating something that can help.The way this budget works is we will start with a amount to base the budget off of, usually this is the amount of money in your checking account. It could be rounded down in order to givw you comfort from budget to budget for savings or soemthing. Then you will begin to enter your spending as you move through the month. You will select from Fixed Bill, basically month bills that have due dates. The expenses options is for necessary expesnses but not bills necessarily such as gas, savings,groceries. lastly there is a misc category which best fits what is not needed. you must also enter a identifier for the bills/expenses, and also a value for the amount, in order for it to be entered in any tables, the current amount is the amount you are left with in checking.S Please enter the total amount in your account', ' 1' + '-99,999');
    var storage = document.getElementById('InitAmount');
    if (isNaN(starting_Amount)) {
        console.log("This aint a number");
        newBudget();
    }
    else {
        starting_Amount = starting_Amount.toFixed(2);
        storage.innerText =  starting_Amount;
    }
}

function updateTable() {// function used to retrive all the values entered by the user when the submit button is clicked
    var catList = document.getElementsByName("Update");//store the list of type of expenses
    var selected;//initialize variable to store which type of expense is selected
    var i = 0;//initialize i for looping
    var flag = false;//flag used to break from while loop once the type of expense is discovered
    var entryTime = new Date();
    var month = entryTime.getMonth();
    console.log(month);
    var day = entryTime.getDay();
    while (flag == false) {//initialize while loop
        try{
        if (catList[i].checked == true) {//check to see if the certain expense type is "checked" selected by the user
            selected = catList[i].value;//store the name of the type of expense
            flag = true;//update flag to break from loop
        }
    }
    catch(err){
        alert('NO ENTRY TYPE SELECTED');
        flag = true
    }
        i++;//update i to check next element in list, need to do it for the list length and throw an error if none is found in time to prevent a infinite loop
    }
    console.log(selected);//test print to ensure proper value was discovered

    var userCategory = document.getElementById('Category');//store the element which retrives the identifier value from the user
    try{    
    var holdCategory = userCategory.value;//store the value inputted for the expense label, identifier
   if(holdCategory == ""){
    throw new Error("EMPTY IDENTIFIER PROVIDED")
   }
}
    catch(e){
        alert(e);
        selected = 0;
    }
    var userNumber = document.getElementById('entryAmount');//retrive the element which holds the input for amount
   try{    
    var holdNumber = userNumber.value;//store the value inputted for the expense label, identifier
   if((holdNumber == 0) || (holdNumber < 0 )){
    throw new Error("Dollar Amount cannot be empty, 0 or Negative")
   }
}
    catch(e){
        alert(e);
        selected = 0;
    }
    var holdNumber = userNumber.value;//access the literal value that was type in by the user
    var newEl = document.createElement('tr');//creating a new table row element to prepare for inserting new data into table
    var formatDate = "" + month + "/" + day;
    var name = document.createElement('td');//creating a new table data element for the expense identifier
    var nameText = document.createTextNode(holdCategory);//create a text note to attach to the name element
    var number = document.createElement('td');//create a new table data element for the expense amount
    var numberText = document.createTextNode(holdNumber);//create a text node to attach to the expense element
    var date = document.createElement('td');
    var dateText = document.createTextNode(formatDate);
    date.appendChild(dateText);
    name.appendChild(nameText);//attatch name text node to name element
    number.appendChild(numberText);//attach number text node to number element
    newEl.appendChild(date);
    newEl.appendChild(name);//add the name element to the table row element created shortly before
    newEl.appendChild(number);//add the number element to the table row, DOING THIS AFTER THE NAME ELEMENT HELPS WITH THE ORDER OF THE DOM
    var total;
    switch (selected) {//use a switch statement based on the seleceted variable to decide how to add the table row to the site
        case "New Fixed Bill":
            date.className = 'Bill_Date';
            name.className = 'Bill_Id';//update class name depending on which table the data fits under
            number.className = 'Bill_Amount';
            document.getElementById("Bill_Table").appendChild(newEl);//add element to the proper table
            var el = document.getElementById('Bill_Total');
            el.innerText = updateTotal(1);
            break;//no need to continue checking the statement was satisfied
        case "New Expense":
            date.className = 'Expense_Date'
            name.className = 'Expense_Id';
            number.className = 'Expense_Amount';
            document.getElementById("Expense_Table").appendChild(newEl);
            var el = document.getElementById('Expense_Total');
            el.innerText = updateTotal(2);
            break;
        case "Update your new Purchase":
            date.className = "Misc_Date";
            name.className = 'Misc_Id';
            number.className = 'Misc_Amount';
            document.getElementById("Misc_Table").appendChild(newEl);
            var el = document.getElementById('Misc_Total');
            el.innerText = updateTotal(3);
            break;
        default://no case matched so do nothing and return a response
            console.log("No expense selected");
    }
}
function updateTotal(n) {
    var values;
    var runningTotal = 0;
    switch (n) {
        case 1:
            values = document.getElementsByClassName('Bill_Amount');
            break;
        case 2:
            values = document.getElementsByClassName('Expense_Amount');
            break;
        case 3:
            values = document.getElementsByClassName('Misc_Amount');
            break;
        default:
            console.log("No addition type selected");
    }
    for (var i = 0; i < values.length; i++) {
        runningTotal += Number(values[i].innerText);
    }
    console.log(runningTotal);
    return runningTotal;
}









