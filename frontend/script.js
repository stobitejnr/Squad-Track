async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/data');
        const data = await response.json();
        const tableBody = document.querySelector('#main-table');

        data.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="py-3 ps-4">
                    <div class="flex items-center h-5">
                        <input class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" type="checkbox">
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">${row.name}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">${row.age} years</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">$${(row.salary)}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">${row.position}</td>
                <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                    <button class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400" type="button">
                        Delete
                    </button>
                </td>
            `;
            tableBody.appendChild(tr);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();


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
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            age: age,
            salary: salary,
            position: position
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    // location.reload();
}