function is_empty(string) {
    if (string.length == 0) {
        return true;
    }
    return false;
}

function getIndex(tbody) {
    let index = tbody.children.length || 0;
    return index;
}

function clearAll() {
    clearCurrentInventory();
    clearIncomingOrder();
    clearOutgoingOrder();
}

function clearCurrentInventory() {
    document.querySelector("#current_inventory_list").innerHTML = "";
}

function clearIncomingOrder() {
    document.querySelector("#incoming_inventory_list").innerHTML = "";
}

function clearOutgoingOrder() {
    document.querySelector("#outgoing_inventory_list").innerHTML = "";
}

function addCurrentInventory() {
    let productName = document.querySelector("#current_order_product_name").value;
    let productBrand = document.querySelector(
        "#current_order_product_brand"
    ).value;
    let productPrice = document.querySelector(
        "#current_order_product_price"
    ).value;
    let productQuantity = document.querySelector(
        "#current_order_product_quantity"
    ).value;

    if (
        is_empty(productName) ||
        is_empty(productBrand) ||
        is_empty(productPrice) ||
        is_empty(productQuantity)
    ) {
        alert("Please fill out all fields");
        return;
    }

    let tbody = document.querySelector("#current_inventory_list");
    let newIndex = getIndex(tbody) + 1;
    let tr = `<tr>
    <th scope='row'>${getIndex(tbody) + 1}</th>
    <td>${productName}</td>
    <td>${productBrand}</td>
    <td>${productQuantity}</td>
    <td>Rs ${productPrice}</td>
    <td><button class="btn btn-danger" onclick="removeItem(this)">Remove</button></td>`;

    tbody.innerHTML += tr;
    updateSerialNumbers(tbody);
}

function addIncomingOrder() {
    let productName = document.querySelector(
        "#incoming_order_product_name"
    ).value;
    let productBrand = document.querySelector(
        "#incoming_order_product_brand"
    ).value;
    let productPrice = document.querySelector(
        "#incoming_order_product_price"
    ).value;
    let productQuantity = document.querySelector(
        "#incoming_order_product_quantity"
    ).value;

    if (
        is_empty(productName) ||
        is_empty(productBrand) ||
        is_empty(productPrice) ||
        is_empty(productQuantity)
    ) {
        alert("Please fill out all fields");
        return;
    }

    let tbody = document.querySelector("#incoming_inventory_list");
    let newIndex = getIndex(tbody) + 1;
    let tr = `<tr>
    <th scope='row'>${getIndex(tbody) + 1}</th>
    <td>${productName}</td>
    <td>${productBrand}</td>
    <td>${productQuantity}</td>
    <td>Rs ${productPrice}</td>
    <td><button class="btn btn-danger" onclick="removeItem(this)">Remove</button></td>`;

    tbody.innerHTML += tr;
    updateSerialNumbers(tbody);
}

function addOutgoingOrder() {
    let productName = document.querySelector(
        "#outgoing_order_product_name"
    ).value;
    let productBrand = document.querySelector(
        "#outgoing_order_product_brand"
    ).value;
    let productPrice = document.querySelector(
        "#outgoing_order_product_price"
    ).value;
    let productQuantity = document.querySelector(
        "#outgoing_order_product_quantity"
    ).value;

    if (
        is_empty(productName) ||
        is_empty(productBrand) ||
        is_empty(productPrice) ||
        is_empty(productQuantity)
    ) {
        alert("Please fill out all fields");
        return;
    }

    let tbody = document.querySelector("#outgoing_inventory_list");
    let newIndex = getIndex(tbody) + 1;
    let tr = `<tr>
    <th scope='row'>${getIndex(tbody) + 1}</th>
    <td>${productName}</td>
    <td>${productBrand}</td>
    <td>${productQuantity}</td>
    <td>Rs ${productPrice}</td>
    <td><button class="btn btn-danger" onclick="removeItem(this)">Remove</button></td>`;

    tbody.innerHTML += tr;
    updateSerialNumbers(tbody);
}

function removeItem(button) {
    let row = button.parentNode.parentNode;
    let tableBody = row.parentNode;
    tableBody.removeChild(row);
    updateSerialNumbers(tableBody);
}
function updateSerialNumbers(tableBody) {
    let rows = tableBody.querySelectorAll("tr");

    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].querySelectorAll("th, td:first-child");
        cells[0].textContent = i + 1;
    }
}

function toggleSidebar() {
    const sidebar = document.querySelector('aside');
    const body = document.body;
  
    // Toggle the 'aside-visible' class on body
    body.classList.toggle('aside-visible');
  
    // Toggle the 'transform' property on sidebar
    sidebar.style.transform = body.classList.contains('aside-visible') ? 'translateX(0)' : 'translateX(-100%)';
  }

  document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('aside');
    const toggleBtn = document.getElementById('toggle-btn');
    if (event.target !== sidebar && event.target !== toggleBtn && !sidebar.contains(event.target)) {
      sidebar.style.transform = 'translateX(-100%)';
    }
  });