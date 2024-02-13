// script.js content
document.addEventListener('DOMContentLoaded', function () {
    fetch('data/users.json')
        .then(response => response.json())
        .then(data => {
            const userList = document.getElementById('user-list');
            data.forEach(user => {
                const userElement = document.createElement('div');
                userElement.textContent = `Name: ${user.name}, Email: ${user.email}`;
                userList.appendChild(userElement);
            });
        })
        .catch(error => console.error('Error loading the JSON file:', error));
});
