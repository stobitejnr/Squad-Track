async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/second'); // Fetch data from the server
        const data = await response.json(); // Parse the JSON data
        const tableBody = document.querySelector('#main-table'); // Get the table body element
        tableBody.innerHTML = ''; // Clear the table before populating it with new data

        let i = 0;
        // Loop through the data and add it to the table
        data.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">${row.name}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">${row.age} years</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">$${(row.salary)}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">${row.position}</td>
<td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button  onclick="deleteRow(${i})" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                                    type="button">
                                Delete
                            </button>
                        </td>`;
            tr.id = i;
            tableBody.appendChild(tr);
            i++;
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData(); // Fetch data when the page loads

async function deleteRow(rowId) {
    // Get the row element by id
    const row = document.getElementById(rowId);

    // Get all the cell values in the row
    const cells = row.getElementsByTagName('td');
    const data = Array.from(cells).slice(0, -1).map(cell => cell.innerText);

    // Assuming the order of cells: [name, age, salary, position]
    const [name, , , position] = data;


    // Define headers and body content
    let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
        "name": name,
        "position": position
    });

    // Send DELETE request
    let response = await fetch("http://localhost:3000/seconder", {
        method: "DELETE",
        body: bodyContent,
        headers: headersList
    });

    // Process the response
    let result = await response.text();
    location.reload();
    
}

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

    async function postData() {


        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "name": name,
            "age": age,
            "salary": salary,
            "position": position
        });

        let response = await fetch("http://localhost:3000/second", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        let data = await response.text();
        console.log(data);

    }

    postData();
    location.reload();
}