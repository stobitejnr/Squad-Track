async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/data');
        const data = await response.json();
        const tableBody = document.querySelector('#main-table tbody');
        data.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                        <td>${row.name}</td>
                        <td>${row.email}</td>
                        <td>${row.number}</td>
                        <td>${row.position}</td>
                    `;
            tableBody.appendChild(tr);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();

document.getElementById('new-button').addEventListener('click', function () {
    // Get the table element
    let table = document.getElementById('main-table').getElementsByTagName('tbody')[0];

    // Create a new row
    let newRow = table.insertRow();

    // Add cells to the row and fill them with content
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    // Add content to the cells
    cell1.textContent = 'New Row Col 1';
    cell2.textContent = 'New Row Col 2';
    cell3.textContent = 'New Row Col 3';
    cell4.textContent = 'New Row Col 4';
});