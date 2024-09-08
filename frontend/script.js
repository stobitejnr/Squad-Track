async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/data'); // Fetch data from the server
        const data = await response.json(); // Parse the JSON data
        const tableBody = document.querySelector('#main-table'); // Get the table body element
        tableBody.innerHTML = ''; // Clear the table before populating it with new data

        // Loop through the data and add it to the table
        data.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">${row.name}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">${row.age} years</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">$${(row.salary)}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">${row.position}</td>`;
            tableBody.appendChild(tr);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData(); // Fetch data when the page loads

let modalBG = document.getElementById('modal-bg');

// Get the modal
let modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
let close = document.getElementsByClassName('close')[0];

// Get the add new data button
let newData = document.getElementById('nav-6');

// When the user clicks on the button, open the modal
newData.onclick = function () {
    modal.style.display = 'block';
    modalBG.style.display = 'block';
    // modal.classList.add('active');
}

// When the user clicks on <span> (x), close the modal
close.onclick = function () {
    modal.style.display = 'none';
    modalBG.style.display = 'none';
}


function saveData() {
    // Get input values from the modal
    let name = document.getElementById('f-leader').value;
    let age = document.getElementById('f-attend').value;
    let salary = document.getElementById('f-income').value;
    let position = document.getElementById('first-timers').value;


    // Clear input fields after creating the new item
    document.getElementById('f-leader').value = '';
    document.getElementById('f-attend').value = '';
    document.getElementById('f-income').value = '';
    document.getElementById('first-timers').value = '';

    // Close the modal
    modal.style.display = 'none';
    modalBG.style.display = 'none';

    // Send a POST request to the server to insert data
    fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;',
        },
        body: JSON.stringify({
            name: name,
            age: age,
            salary: salary,
            position: position
        })
    })
        .then(response => {
            console.log('Response:', response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data received:', data);
            fetchData();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}