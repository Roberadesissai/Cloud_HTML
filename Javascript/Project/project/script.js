document.addEventListener('DOMContentLoaded', function () {
    var names = ['John', 'Jane', 'Alice', 'Bob'];
    var btndb = document.getElementById('btndb');
    var Add_User = document.getElementById('btnau');
    var Delete_User = document.getElementById('btndu');
    var Update_User = document.getElementById('btnuu');
    var submit = document.getElementById('userForm');
    var output = document.getElementById('output');

    btndb.addEventListener('click', function () {

        var randomName = names[Math.floor(Math.random() * names.length)];
        output.style.display = 'block';
        add_user.style.display = 'none';
        output.innerHTML = randomName;
    });

    Add_User.addEventListener('click', function () {
        add_user.style.display = 'block';
        output.style.display = 'none';
    });

    Delete_User.addEventListener('click', function () {
        add_user.style.display = 'none';
        output.style.display = 'none';
        document.querySelector('.inf').style.display = 'none';

        var deleteContainer = document.getElementById('delete_user');
        deleteContainer.innerHTML = '';
        deleteContainer.style.display = 'block';

        names.forEach((name, index) => {
            var nameElement = document.createElement('div');
            nameElement.textContent = name;
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = function () {
                // Remove the name from the array and update the display
                names.splice(index, 1);
                deleteContainer.removeChild(nameElement);
            };
            nameElement.appendChild(deleteButton);
            deleteContainer.appendChild(nameElement);
        });


    });

    Update_User.addEventListener('click', function () {
        add_user.style.display = 'none';
        output.style.display = 'none';
    });

    submit.addEventListener('submit', function (e) {
        e.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        var user = {
            name: name,
            email: email,
            password: password,
        };

        add_user.style.display = 'none';
        document.querySelector('.inf').style.display = 'block';



        document.querySelector('.info_name').innerHTML = user.name;
        document.querySelector('.info_email').innerHTML = user.email;
        document.querySelector('.info_pass').innerHTML = user.password;




    });



});