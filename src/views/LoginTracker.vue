<template>
     <div class="main-content">
            <div class="search">
                <input type="text" placeholder="Search">
                <button>
                    <i class="fas fa-search"></i>
                </button>
            </div>

            <table class="staff-table">
                <thead>
                    <tr>
                        <th>STAFF ID</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>DATE AND TIME</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Placeholder for dynamic data -->
                    <tr>
                        <td colspan="4" style="text-align: center;">No records found.</td>
                    </tr>
                </tbody>
            </table>

            <div class="delete-section">
                <input type="text" placeholder="STAFF ID" class="staff-id-input" />
                <button class="delete-button">DELETE</button>
            </div>
        </div>
</template>

<style>
 * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            display: flex;
            min-height: 100vh;
            background-color: #111022;
        }

        .container {
            display: flex;
            width: 100%;
        }

        .navbar {
            background-color: white;
            width: 300px; /* Original width for larger screens */
            padding: 20px; /* Original padding */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100vh;
            text-align: center;
            font-weight: bold;
            position: fixed; /* Keep fixed for larger screens */
            transition: width 0.3s, padding 0.3s; /* Smooth transition */
        }

        .navbar .logo {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 10px;
        }

        .navbar .logo img {
            width: 230px; /* Original logo size */
            height: auto;
        }

        .navbar ul {
            list-style: none;
            padding: 0; /* Remove padding */
        }

        .navbar ul li {
            margin: 20px 0; /* Original margin */
        }

        .navbar ul li a {
            color: black;
            text-decoration: none;
            font-size: 18px; /* Original font size */
            display: block;
            padding: 15px; /* Original padding */
            transition: 0.3s;
        }

        .navbar ul li a:hover {
            background-color: #9b9ea4;
            border-radius: 5px;
        }

        .navbar .logout a {
            color: black;
            text-decoration: none;
            padding: 12px; /* Original padding */
            border-radius: 5px;
        }

        .navbar .logout a:hover {
            background-color: #9b9ea4;
            border-radius: 5px;
        }

        .main-content {
            margin-left: 300px; /* Space for the fixed navbar */
            padding: 20px; /* Padding for main content */
            width: calc(100% - 270px); /* Make sure to use remaining width */
            position: relative; /* Position relative for absolute children */
            display: flex; /* Use flexbox to arrange items */
            flex-direction: column; /* Stack items vertically */
            justify-content: space-between; /* Space out content */
            height: 100vh; /* Full height for the main content */
        }

        .search {
            display: flex;
            justify-content: flex-end; /* Move search to the right */
            margin-bottom: 20px; /* Space below the search bar */
        }

        .search input {
            background-color: rgba(3, 25, 69, 0.5);
            color: #ddd;
            padding: 10px;
            border: 2px solid;
            border-image: linear-gradient(to right, #5952d5, #0f0b3a) 1;
            margin-right: 10px;
            width: 250px; /* Adjusted for better responsiveness */
            height: 36px; /* Reduced height */
        }

        .search button {
            background-color: #201e43;
            color: white;
            border: 2px solid;
            border-image: linear-gradient(to right, #5952d5, #0f0b3a) 1;
            padding: 10px;
            cursor: pointer;
            height: 36px; /* Reduced height */
        }

        .search button:hover {
            background-color: white;
            color: #201e43;
        }

        .staff-table {
            background-color: white;
            width: 100%; /* Make it responsive */
            border: 3px solid;
            border-image: linear-gradient(to right, #5952d5, #0f0b3a) 1;
            margin-top: 20px; /* Space above the table */
        }

        .staff-table th, .staff-table td {
            border: 1px solid #000000; /* Border color */
            padding: 10px; /* Adjusted padding */
            text-align: left;
            font-size: 14px; /* Reduced font size */
        }

        .staff-table th {
            background-color: #201e43;
            color: white;
        }

        .staff-table tr:hover {
            background-color: rgba(220, 220, 220, 0.5); /* Hover effect */
        }

        .delete-section {
            display: flex;
            justify-content: flex-end; /* Align delete section to the right */
            margin-top: auto; /* Push delete section to the bottom */
        }

        .staff-id-input {
            background-color: white;
            padding: 8px; /* Adjusted padding */
            border: 1px solid #d1d5db; 
            font-size: 14px; /* Font size */
            margin-right: 10px; /* Space between input and button */
            width: auto; /* Adjust width for better responsiveness */
        }

        .delete-button {
            background-color: #201e43;
            color: white;
            padding: 8px 16px; /* Adjusted padding */
            border: 2px solid;
            border-image: linear-gradient(to right, #5952d5, #0f0b3a) 1;
            cursor: pointer;
        }

        .delete-button:hover {
            background-color: white;
            color: #201e43;
        }

/* Media Query for smaller screens */
@media (max-width: 768px) {
    .navbar {
        width: 100px; 
        padding: 10px; 
        display: flex; 
        flex-direction: column; 
        align-items: center; 
    }

    .navbar .logo img {
        width: 100px; 
    }

    .navbar ul {
        list-style-type: none; 
        padding: 0; 
        margin: 0; 
        display: flex; 
        flex-direction: column; 
        align-items: center; 
    }

    .navbar ul li {
        margin: 10px 0;
        display: flex; 
        justify-content: center; 
    }

    .navbar ul li a {
        font-size: 27px; 
        padding: 8px; 
        display: flex; 
        align-items: center;
    }

    .nav-text {
        display: none; 
    }
  
    .navbar .logout a {
        font-size: 27px; 
        padding: 8px; 
        display: flex; 
        align-items: center; 

    }

    .main-content {
        margin-left: 110px; 
        width: calc(100% - 120px); 
    }

    .search input {
        width: 100%; 
    }

    .delete-section {
        flex-direction: row;
        align-items: flex-start; 
    }

    .staff-id-input {
        width: 50%;
        margin-bottom: 10px; 
    }
}

</style>