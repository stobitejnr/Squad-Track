document.getElementById('new-button').addEventListener('click', function () {
    // Get the table element
    let table = document.getElementById('main-table').getElementsByTagName('tbody')[0];

    // Create a new row
    let newRow = table.insertRow();

    // Add cells to the row and fill them with content
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    // Add content to the cells
    cell1.textContent = 'New Row Col 1';
    cell2.textContent = 'New Row Col 2';
    cell3.textContent = 'New Row Col 3';
});