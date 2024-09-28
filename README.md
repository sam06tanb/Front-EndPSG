# Simulated Game Sales Website 

## Overview

This project is a **Simulated Game Sales Website** designed to mimic the functionality of a real-world game store. Users can browse, search, and "purchase" games (no real transactions are made). The project serves as an academic or training purpose platform, allowing contributors to gain experience in both **frontend** and **backend** development, utilizing a variety of modern technologies.

The site **does not involve any actual financial transactions** and is purely a simulated environment for demonstrating e-commerce functionalities.

---

## Project Features

- **Game Listings**: Users can view a wide range of game offerings across different platforms (PC, Xbox, PlayStation, and Nintendo).
- **User Authentication**: Login and registration functionality with password visibility toggle for a better user experience.
- **Search Functionality**: Users can search for games by name or category.
- **Simulated Purchases**: Users can add games to their cart and proceed with a mock checkout process.
- **Backend API Integration**: All actions, such as fetching games and managing user sessions, are handled by the backend.

---

## Technologies Used

### Frontend:
- **React**: Handles the user interface with a dynamic, responsive design.
- **JavaScript**: Provides interactive elements on the site.
- **HTML/CSS**: Structure and styling for the website's look and feel.
- **Axios**: For making HTTP requests to the backend API.

### Backend:
- **Java**: Powers the server-side logic and API functionality.
- **XAMPP**: Used to set up an Apache server and MySQL database locally.
- **SQL**: For database management, storing user data, game inventory, and transaction history.
- **Postman**: Tool for API testing and debugging.
- **IntelliJ IDEA**: IDE used for backend development and debugging.

---

## Project Setup

### Prerequisites

- **Node.js**: Install Node.js to run the frontend using React.
- **XAMPP**: Set up Apache and MySQL for local server and database management.
- **IntelliJ IDEA**: Install for Java backend development.
- **Postman**: Optional for API testing.

### Clone the Repository

```bash
git clone https://github.com/yourusername/game-sales-simulated.git
cd game-sales-simulated
```

### Frontend Setup

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend server:
   ```bash
   npm start
   ```

The frontend server should be running on `http://localhost:3000`.

### Backend Setup

1. Open the `backend` folder in **IntelliJ IDEA**.
2. Set up your MySQL database via **XAMPP**:
   - Open **phpMyAdmin** and create a new database for the project (e.g., `game_sales_db`).
   - Import the SQL file (`database/schema.sql`) to initialize tables and data.
3. Update database connection settings in the backend configuration (e.g., `src/main/resources/application.properties`):
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/game_sales_db
   spring.datasource.username=root
   spring.datasource.password=password
   ```
4. Run the backend server via IntelliJ.

The backend server should be running on `http://localhost:8080`.

### Testing API

Use **Postman** to test backend API endpoints. Example routes include:

- `GET /games`: Fetch all available games.
- `POST /auth/login`: Login endpoint.
- `POST /checkout`: Simulate a game purchase.

---

## Important Notes

- **No Real Transactions**: This project is strictly for educational purposes. No actual payments or financial transactions occur on the site.
- **Simulated Environment**: All purchases and user data are purely for simulating a real game sales platform.

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix (`git checkout -b feature-name`).
3. Make your changes and commit (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Create a Pull Request (PR) for review.

---

## License

This project is open-source under the MIT License.

---

Feel free to adapt this README to your specific project needs!
