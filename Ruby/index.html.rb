require 'sinatra'
require 'sqlite3'
require 'bcrypt'

# Create a new SQLite database
db = SQLite3::Database.new("users.db")

# Create a table to store user information
db.execute <<-SQL
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    password TEXT
    );
SQL

get '/' do
    erb :index
end

post '/save_user' do
    name = params[:name]
    email = params[:email]
    password = BCrypt::Password.create(params[:password]) # Encrypt the password using bcrypt

    # Insert the user information into the database
    db.execute("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, password])

    "User saved successfully!"
end

not_found do
    status 404
    "404 - Not Found"
end

__END__

@@index
<!DOCTYPE html>
<html>
<head>
    <title>User Registration</title>
    <style>
        /* Add some basic styling to the form */
        form {
            margin: 20px;
        }
        label {
            display: block;
            margin-bottom: 10px;
        }
        input[type="text"] {
            width: 200px;
        }
        input[type="submit"] {
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <h1>User Registration</h1>
    <form action="/save_user" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <input type="submit" value="Register">
    </form>
</body>
</html>