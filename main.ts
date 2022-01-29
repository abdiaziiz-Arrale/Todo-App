type Contact = {
	id: number;
	name: string;
	phone: string;
	address:string;
}

const contacts: Contact[] = [];

contacts.push({ id: 1, name: 'Ahmed Abdillahi', phone: '34567', address: 'new hargeisa' });
contacts.push({ id: 2, name: 'Jama Abdillahi', phone: '34545667', address: 'new hargeisa' });
contacts.push({ id: 3, name: 'Abdiaziiz Ali Mohamed', phone: '4435656', address: 'new hargeisa' });
contacts.push({ id: 4, name: 'Abdiaziiz Ali Mohamed Arrale', phone: '44356560', address: 'new hargeisa12' });

renderTable();

function add() {
	const idInput = document.querySelector('#id') as HTMLInputElement;
	const id = idInput.value;
	const nameInput = document.querySelector('#person-name') as HTMLInputElement;
	const name = nameInput.value;

	const phoneInput = document.querySelector('#phone-number') as HTMLInputElement;
	const phone = phoneInput.value;
	const addressInput = document.querySelector('#address') as HTMLInputElement;
	const address = addressInput.value;

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
	const tbodyElement = document.querySelector('tbody');
	tbodyElement.remove();

	const newTbodyElement = document.createElement('tbody');
	newTbodyElement.className = 'text-center';
	
	for (const contact of contacts) {
		const row = document.createElement('tr');
		const idColumn = document.createElement('td');
		idColumn.textContent = contact.id.toString();
		idColumn.className = 'border border-gray-300 py-2';
	
		const nameColumn = document.createElement('td');
		nameColumn.textContent = contact.name;
		nameColumn.className = 'border border-gray-300 py-2';
	
		const phoneColumn = document.createElement('td');
		phoneColumn.textContent = contact.phone;
		phoneColumn.className = 'border border-gray-300 py-2';
	

		const addressColumn = document.createElement('td');
		addressColumn.textContent = contact.address;
		addressColumn.className = 'border border-gray-300 py-2';

		row.appendChild(idColumn);
		row.appendChild(nameColumn);
		row.appendChild(phoneColumn);
		row.appendChild(addressColumn);
	
		newTbodyElement.appendChild(row);
	}

	const tableElement = document.querySelector('table');
	tableElement.appendChild(newTbodyElement);

}
