# 👨‍💻 Developer's Perspective
In real-world applications, inheritance is used to:

Avoid duplicating common logic

Extend base functionality in subclasses

Write modular, reusable, and maintainable code

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>User Inheritance Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 2rem;
      background-color: #f9f9f9;
    }
    .card {
      background-color: white;
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 8px;
      box-shadow: 0 0 5px rgba(0,0,0,0.1);
    }
    .btn {
      padding: 0.5rem 1rem;
      margin: 0.5rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .btn.danger {
      background-color: #dc3545;
    }
  </style>
</head>
<body>

  <h1>User Management</h1>

  <div class="card">
    <h2>Admin Actions</h2>
    <button class="btn" onclick="admin.login()">Login as Admin</button>
    <button class="btn danger" onclick="admin.deleteUser(user)">Delete User</button>
  </div>

  <div class="card">
    <h2>User Actions</h2>
    <button class="btn" onclick="user.login()">Login as User</button>
  </div>

  <script>
    // Parent Class
    class User {
      constructor(username, email) {
        this.username = username;
        this.email = email;
      }

      login() {
        alert(`${this.username} has logged in.`);
      }
    }

    // Child Class
    class Admin extends User {
      constructor(username, email, role) {
        super(username, email); // Call parent constructor
        this.role = role;
      }

      deleteUser(user) {
        alert(`${this.username} deleted user ${user.username}`);
      }
    }

    // Instances
    const user = new User("jaivy_user", "user@example.com");
    const admin = new Admin("sanjeet_admin", "admin@example.com", "superadmin");
  </script>

</body>
</html>

```

## 🧠 Key Concepts Demonstrated:
- class Admin extends User → Inheritance

- super(username, email) → Calls parent constructor

- Shared login functionality (login() in both)

- Extra admin-only method → deleteUser()