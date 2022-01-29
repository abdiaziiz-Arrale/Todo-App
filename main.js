var contacts = [];
contacts.push({ id: 1, name: 'Ahmed Abdillahi', phone: '34567', address: 'new hargeisa' });
contacts.push({ id: 2, name: 'Jama Abdillahi', phone: '34545667', address: 'new hargeisa' });
contacts.push({ id: 3, name: 'Abdiaziiz Ali Mohamed', phone: '4435656', address: 'new hargeisa' });
contacts.push({ id: 4, name: 'Abdiaziiz Ali Mohamed Arrale', phone: '44356560', address: 'new hargeisa12' });
renderTable();
function add() {
    var idInput = document.querySelector('#id');
    var id = idInput.value;
    var nameInput = document.querySelector('#person-name');
    var name = nameInput.value;
    var phoneInput = document.querySelector('#phone-number');
    var phone = phoneInput.value;
    var addressInput = document.querySelector('#address');
    var address = addressInput.value;
    if (name.length < 2 || phone.length < 3) {
        return;
    }
    // TODO: Reject duplicate contacts.
    // if (contacts.filter(c => c.name.toLowerCase()===c.name ||c.phone){}
    // 	if(existingContacts.length >0){
    // 		alert('alrready');
    // 		return;
    // 	}
    // }
    contacts.push({
        id: contacts.length + 1,
        name: name,
        phone: phone,
        address: address
    });
    renderTable();
    nameInput.value = '';
    phoneInput.value = '';
    addressInput.value = '';
}
function renderTable() {
    var tbodyElement = document.querySelector('tbody');
    tbodyElement.remove();
    var newTbodyElement = document.createElement('tbody');
    newTbodyElement.className = 'text-center';
    for (var _i = 0, contacts_1 = contacts; _i < contacts_1.length; _i++) {
        var contact = contacts_1[_i];
        var row = document.createElement('tr');
        var idColumn = document.createElement('td');
        idColumn.textContent = contact.id.toString();
        idColumn.className = 'border border-gray-300 py-2';
        var nameColumn = document.createElement('td');
        nameColumn.textContent = contact.name;
        nameColumn.className = 'border border-gray-300 py-2';
        var phoneColumn = document.createElement('td');
        phoneColumn.textContent = contact.phone;
        phoneColumn.className = 'border border-gray-300 py-2';
        var addressColumn = document.createElement('td');
        addressColumn.textContent = contact.address;
        addressColumn.className = 'border border-gray-300 py-2';
        row.appendChild(idColumn);
        row.appendChild(nameColumn);
        row.appendChild(phoneColumn);
        row.appendChild(addressColumn);
        newTbodyElement.appendChild(row);
    }
    var tableElement = document.querySelector('table');
    tableElement.appendChild(newTbodyElement);
    function search(event) {
        var inputElement = event.target;
        var value = inputElement.value;
        var result = contacts.filter(function (c) { return c.name.startsWith(value); });
        renderTable(result);
    }
}
