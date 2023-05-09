
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL:"https://grey-texts-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "GreyTexts")


const inputFieldEl = document.getElementById("input-field")
const inputFieldEl2 = document.getElementById("input-field-2");
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("msgs")

// onValue(shoppingListInDB, function(snapshot) {
//     if(snapshot.exists()) {
//         let items = Object.entries(snapshot.val());
//         clearList();
//         // items.forEach(appendShoppingList)
//         for(var i=0; i<items.length; i++) {
//             let curitem = items[i];
//             appendShoppingList(curitem);
//         }
//     } 
//     else {
//         shoppingListEl.innerHTML = "No Items here yet..."
//     }
    
// })

function clearList() {
    shoppingListEl.innerHTML = ""
}

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value;
    let inputValue2 = inputFieldEl2.value;
    if(inputValue!='' && inputValue2!='') {
        push(shoppingListInDB, {msg:inputValue,to:inputValue2});
        clearInputFieldEl()
    }
})

function clearInputFieldEl() {
    inputFieldEl.value=""
    inputFieldEl2.value=""
}

// function appendShoppingList(inputValue) {
//     let itemId = inputValue[0];
//     let message = inputValue[1]['msg'];
//     let to = inputValue[1]['to'];
//     let newEl = document.createElement("li");
//     let newdiv = document.createElement("div");
//     newdiv.textContent =`Dear ${to}, ${message}`;
//     newEl.appendChild(newdiv);
//     shoppingListEl.append(newEl);

//     // newEl.addEventListener("dblclick", function() {
//     //     let location = ref(database, `GreyTexts/${itemId}`);
//     //     remove(location);
//     // });
// } 