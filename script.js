let grandTotal = 0;

// Item name input
const nameInput = document.createElement("input");
nameInput.id = "item-name-input";
nameInput.setAttribute("aria-label", "Item Name");
document.body.appendChild(nameInput);

// Quantity input
const qtyInput = document.createElement("input");
qtyInput.id = "item-qty-input";
qtyInput.type = "number";
qtyInput.setAttribute("aria-label", "Item Quantity");
document.body.appendChild(qtyInput);

// Price input
const priceInput = document.createElement("input");
priceInput.id = "item-price-input";
priceInput.type = "number";
priceInput.setAttribute("aria-label", "Item Price");
document.body.appendChild(priceInput);

// Add button
const addBtn = document.createElement("button");
addBtn.id = "add";
addBtn.innerText = "Add";
addBtn.setAttribute("aria-label", "Add Item");
document.body.appendChild(addBtn);

// Table
const table = document.createElement("table");
table.setAttribute("role", "table");

// Header
const header = document.createElement("tr");
["Item", "Qty", "Price", "Subtotal"].forEach(text => {
  const th = document.createElement("th");
  th.innerText = text;
  th.setAttribute("role", "columnheader");
  header.appendChild(th);
});
table.appendChild(header);

// Initial row
const initialRow = document.createElement("tr");
const totalLabel = document.createElement("td");
totalLabel.innerText = "Grand Total";
const totalValue = document.createElement("td");
totalValue.colSpan = 3;
totalValue.innerText = "0";
initialRow.appendChild(totalLabel);
initialRow.appendChild(totalValue);
table.appendChild(initialRow);

document.body.appendChild(table);

// Total display
const totalDisplay = document.createElement("h3");
totalDisplay.id = "total";
totalDisplay.innerText = "0";
document.body.appendChild(totalDisplay);

// Add button logic
addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const qty = Number(qtyInput.value);
  const price = Number(priceInput.value);

  if (!name || qty <= 0 || price <= 0) return;

  const subtotal = qty * price;
  grandTotal += subtotal;

  const row = document.createElement("tr");

  [name, qty, price, subtotal].forEach(val => {
    const td = document.createElement("td");
    td.innerText = val;
    td.setAttribute("role", "cell");
    row.appendChild(td);
  });

  table.appendChild(row);

  // Update total
  totalDisplay.innerText = grandTotal;
  totalValue.innerText = grandTotal;

  // Clear inputs
  nameInput.value = "";
  qtyInput.value = "";
  priceInput.value = "";
});
