async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/data');
        const data = await response.json();
        const tableBody = document.querySelector('#main-table');

        data.forEach(row => {
            console.log(row);
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="py-3 ps-4">
                    <div class="flex items-center h-5">
                        <input class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" type="checkbox">
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">${row.name}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">${row.age} years</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">$${parseFloat(row.salary).toFixed(2)}</td>
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