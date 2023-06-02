var expenses = [];//Initialize array of expenses
var initialExpense = document.getElementById("Expense_Initial");//retrive the element storing the initial values used for testing
expenses[0] = initialExpense.innerText;//store the initial value in the first value of the array
var expensesName = [];//initialize an array of expense identifiers
var expenseTypeInit = document.getElementById("Expense_Type");//retrive the element used for storing the initial expense identifier, used for testin
expensesName[0] = expenseTypeInit.innerText;//store initial expense identifier
var miscInit = document.getElementById("Misc_Remain");//retrive element which tracks the remaining amount in misc
var miscMoney = [];//initialize an array used for storing the remaining amount in misc, with each entry
miscMoney[0] = miscInit.innerText;//store the first value in misc remaining in the array
var categoryMisc = document.getElementById("Misc_Type");
var miscNames = [];//create an array to be used for storing the identifier for the misc expenses
miscNames[0] = categoryMisc.innerText;//store the first value of the misc identifier
console.log("HI");//test print
console.log(document.getElementById("Misc").checked);//Not sure exactly what this trying to print

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
function updateTable(){// function used to retrive all the values entered by the user when the submit button is clicked
    var catList = document.getElementsByName("Update");//store the list of type of expenses
    var selected;//initialize variable to store which type of expense is selected
    var i =0;//initialize i for looping
    var flag = false;//flag used to break from while loop once the type of expense is discovered
   while( flag == false){//initialize while loop
    if (catList[i].checked == true){//check to see if the certain expense type is "checked" selected by the user
        selected = catList[i].value;//store the name of the type of expense
        flag = true;//update flag to break from loop
    }
    i++;//update i to check next element in list, need to do it for the list length and throw an error if none is found in time to prevent a infinite loop
   }
   console.log(selected);//test print to ensure proper value was discovered
   var userCategory = document.getElementById('Category');//store the element which retrives the identifier value from the user
   var holdCategory = userCategory.value;//store the value inputted for the expense label, identifier
   console.log(holdCategory);//Test print to ensure the variable stored the proper value
   var userNumber = document.getElementById('entryAmount');//retrive the element which holds the input for amount
   var holdNumber = userNumber.value;//access the literal value that was type in by the user
   console.log(holdNumber);//check to make sure value stored properly
   var newEl = document.createElement('tr');//creating a new table row element to prepare for inserting new data into table

   var name= document.createElement('td');//creating a new table data element for the expense identifier
   var nameText = document.createTextNode(holdCategory);//create a text note to attach to the name element
   var number= document.createElement('td');//create a new table data element for the expense amount
   var numberText = document.createTextNode(holdNumber);//create a text node to attach to the expense element

   name.appendChild(nameText);//attatch name text node to name element
   number.appendChild(numberText);//attach number text node to number element
   newEl.appendChild(name);//add the name element to the table row element created shortly before
   newEl.appendChild(number);//add the number element to the table row, DOING THIS AFTER THE NAME ELEMENT HELPS WITH THE ORDER OF THE DOM
   switch (selected){//use a switch statement based on the seleceted variable to decide how to add the table row to the site
    case "New Fixed Bill":
        name.className = 'Bill_Header';//update class name depending on which table the data fits under
        number.className = 'Bill_Header';
        document.getElementById("Bill_Table").appendChild(newEl);//add element to the proper table
        break;//no need to continue checking the statement was satisfied
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
    default://no case matched so do nothing and return a response
        console.log("No expense selected");
   }
}











