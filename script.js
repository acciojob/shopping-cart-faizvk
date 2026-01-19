//your code here
let total = 0;

// Create input for item name
const itemInput = document.createElement("input");
itemInput.id = "item-name-input";
itemInput.setAttribute("aria-label", "Item Name");
document.body.appendChild(itemInput);

// Create input for price
const priceInput = document.createElement("input");
priceInput.id = "item-price-input";
priceInput.setAttribute("aria-label", "Item Price");
priceInput.type = "number";
document.body.appendChild(priceInput);

// Create Add button
const addBtn = document.createElement("button");
addBtn.id = "add";
addBtn.innerText = "Add";
addBtn.setAttribute("aria-label", "Add Item");
document.body.appendChild(addBtn);

// Create table
const table = document.createElement("table");
table.setAttribute("role", "table");

// Table header
const headerRow = document.createElement("tr");
headerRow.setAttribute("role", "row");

const itemHeader = document.createElement("th");
itemHeader.id = "item";
itemHeader.innerText = "Item";
itemHeader.setAttribute("role", "columnheader");

const priceHeader = document.createElement("th");
priceHeader.id = "price";
priceHeader.innerText = "Price";
priceHeader.setAttribute("role", "columnheader");

headerRow.appendChild(itemHeader);
headerRow.appendChild(priceHeader);
table.appendChild(headerRow);

// Initial row
const initialRow = document.createElement("tr");
initialRow.setAttribute("role", "row");

const initialItem = document.createElement("td");
initialItem.innerText = "Grand Total";
initialItem.setAttribute("role", "cell");

const initialPrice = document.createElement("td");
initialPrice.innerText = "0";
initialPrice.setAttribute("role", "cell");

initialRow.appendChild(initialItem);
initialRow.appendChild(initialPrice);
table.appendChild(initialRow);

document.body.appendChild(table);

// Total display
const totalDisplay = document.createElement("h3");
totalDisplay.id = "total";
totalDisplay.innerText = "Grand Total: 0";
document.body.appendChild(totalDisplay);

// Add button click handler
addBtn.addEventListener("click", () => {
  const itemName = itemInput.value.trim();
  const priceValue = priceInput.value.trim();

  // Invalid input check
  if (!itemName || !priceValue || Number(priceValue) <= 0) {
    return;
  }

  const price = Number(priceValue);
  total += price;

  const row = document.createElement("tr");
  row.setAttribute("role", "row");

  const itemCell = document.createElement("td");
  itemCell.innerText = itemName;
  itemCell.setAttribute("role", "cell");

  const priceCell = document.createElement("td");
  priceCell.innerText = price;
  priceCell.setAttribute("role", "cell");

  row.appendChild(itemCell);
  row.appendChild(priceCell);

  table.appendChild(row);

  // Update total
  totalDisplay.innerText = `Grand Total: ${total}`;

  // Clear inputs
  itemInput.value = "";
  priceInput.value = "";
});
