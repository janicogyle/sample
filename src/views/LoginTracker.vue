<template>
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Tracker</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp "
    rel="stylesheet">   
  </head>

<body>
    <div class="container">
        <!-- <aside>
            <div class="top">
                <div class="logo">
                    <img src="../assets/images/logo cloud.png" alt="logo">
                    <h2 class="stock_up">Stock Up</h2>
                </div>
                 <div class = "close" id = "close-btn">
                    <span class="material-icons-sharp">close</span>
                 </div>
            </div>

            <div class="sidebar">
                <a href="index.html">
                    <span class="material-icons-sharp">grid_view</span>
                    <h3>Dashbord</h3>
                </a>

                <a href="inventory.html">
                    <span class="material-icons-sharp">inventory</span>
                    <h3>Inventory</h3>
                </a>

                <a href="stockreport.html" >
                    <span class="material-icons-sharp">bar_chart</span>
                    <h3>Stock Report</h3>
                </a>

                <a href="logintracker.html" class="active">
                    <span class="material-icons-sharp">track_changes</span>
                    <h3>Login Tracker</h3>
                </a>

                <a href="help.html" >
                    <span class="material-icons-sharp">help</span>
                    <h3>Help Support</h3>
                </a>                

                <a href="#">
                    <span class="material-icons-sharp">logout</span>
                    <h3>Logout</h3>
                </a>
            </div>
        </aside> -->
      </div>  
      
        <!------------------- END OF NAV BAR -------------------------- -->
<main>
            <h1 class="dash-text">Login Tracker</h1>

        <div class="search">
            <input type="text" placeholder="Search">
            <button>
                <i class="fas fa-search"></i>
            </button>
        </div>

        <!--STAFF TABLE-->
        <div class="staff-table">
            <table>
              <thead>
                <tr>
                  <th>Staff ID</th>
                  <th>Name</th>
                  <th>Time In</th>
                  <th>Time Out</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>001</td>
                    <td>Janico Sorio</td>
                    <td>November 23, 2024 08:00 AM</td>
                    <td>November 23, 2024 04:30 PM</td>
                </tr>
                <tr>
                    <td>002</td>
                    <td>Catherine Mon</td>
                    <td>November 23, 2024 08:15 AM</td>
                    <td>November 23, 2024 05:00 PM</td>
                </tr>
                <tr>
                    <td>003</td>
                    <td>Justin Del Rosario</td>
                    <td>November 23, 2024 09:00 AM</td>
                    <td>November 23, 2024 06:00 PM</td>
                </tr>
                <tr>
                    <td>004</td>
                    <td>Kent Ann Ecal</td>
                    <td>November 23, 2024 08:30 AM</td>
                    <td>November 23, 2024 05:15 PM</td>
                </tr>
                <tr>
                    <td>005</td>
                    <td>Johannes De Jesus</td>
                    <td>November 23, 2024 08:30 AM</td>
                    <td>November 23, 2024 05:15 PM</td>
                </tr>
            </tbody>            
            </table>
        </div>
        
        <!--END OF STAFF TABLE-->

        <div class="input-container">
            <input type="text" id="staffIdInput" placeholder="Enter Staff ID">
            <button class="delete-btn" id="deleteButton">
              DELETE <i class="fa-solid fa-trash"></i>
            </button>
          </div>                 

<!-- <script>
    // EME LANG TONG SCRIPT (HINDI PA SURE)
    // Reference the delete button and input field
const deleteButton = document.getElementById('deleteButton');
const staffIdInput = document.getElementById('staffIdInput');

// Clear input field when delete button is clicked
deleteButton.addEventListener('click', () => {
  staffIdInput.value = '';
});

</script> -->

</main>
</body>
</html> 
</template>


<script>

</script>

<style scoped>
   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

* {
    margin: 0; 
    padding: 0;
    outline: 0;
    appearance: none;
    border: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
}

html {
     font-size:14px; 
}

body {
    background: url(../assets/images/back.png);
    width: 100vw;
    height: 100vh;
    font-family: poppins, sans-serif;
    font-size: 0.88rem;
    background-color: rgb(160, 173, 237);
    user-select: none; 
    overflow-x:hidden;  
    color: #363949;
}

.container {
    display: grid;
    width: calc(100% - 14rem); /* Adjust the width to account for the sidebar */
    margin-left: 17rem; /* Add margin to the left to avoid overlap */
    gap: 1.8rem;
    grid-template-columns: auto; /* Change to a single column layout */
}

a{
    color: #363636;
}

img {
    display: block;
    width: 100%;
}

h1{ 
    font-weight: 800;
    font-size: 1.8rem;
}

h2{ 
    font-size: 1.4rem;
}

h3{
    font-size: 0.87rem;
}

.text-muted{
    color: #7d8da1;
}

h4{
    font-size: 0.87;
}

p{
    color: #677483;
}

b{
    color: #677483;
}

aside{
    height: 100vh;  
    background-color: white;
    position: fixed; /* Fix the sidebar to the left */
    left: 0; /* Position it to the left */
    top: 0; /* Align it to the top */
    width: 14rem; /* Set a specific width for the sidebar */
    z-index: 10; /* Ensure it is above other content */
}

aside .top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.4rem;
    margin-left:2rem ;
}

/* aside .logo img {
    width: 150px; this if for the img logo
 */
 

aside .logo {
    display:flex;
    gap:0.8rem;
    position: relative;
   
}
 aside .logo img {
    width: 2rem;
    height: 2rem;
 }

 aside .close{
    display: none;
 }

 /* ===============side bar ============ */

 aside .sidebar{
    /* background-color: white; */
    background:white;
    display: flex;
    flex-direction: column; 
    height: 86vh;
    position: relative;
    top: 3rem;
 }

 aside h3 {
    font-weight: 500;

 }

 aside .sidebar a {
    display: flex;
    color: #677483;
    margin-left: 2rem;
    gap: 1rem;
    align-items: center;
    position: relative;
    height: 3.7rem;
    transition:  all 300ms ease;

 }
 /* ============ */
 aside .sidebar a span { 
    transition: all 300ms ease;
 }


 aside .sidebar a span{ 
    font-size: 1.6rem;
    transition: all 300ms ease; 
 }

aside .sidebar a:last-child{
    position: absolute;
    bottom: 2rem;
    width: 100% ;
}

aside .sidebar a.active {
    background: aqua;
    color: blue;
    margin-left: 0;
}

aside .sidebar a.active:before{
    content: '';
    width: 6px; 
    height: 100%;
    background: blue;
}

aside .sidebar a.active span{
    color: blue;
    margin-left: calc(1rem - 3px);
}

aside .sidebar a:hover{
    color: var(#f74d4d)
}

aside .sidebar a:hover span {
 margin-left: 1rem;
}


/* SEARCH CONTAINER */
.search {
  position: absolute; 
  top: 2rem; 
  right: 3rem; 
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 8px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden; 
}

.search input {
  border: none;
  padding: 0.6rem 1rem;
  outline: none;
  width: 250px; 
  font-size: 1rem;
  background: none; 
}

/* SEARCH BUTTON */
.search button {
  background-color: #363636; 
  color: white;
  border: none;
  padding: 0.8rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0; 
  margin: 0; 
  transition: background-color 0.3s, color 0.3s;
}

.search button i {
  font-size: 1.2rem;
}

.search button:hover {
  background-color: #00ffff;
  color: #0000ff;
}
/* END OF SEARCH CONTAINER */

main{ 
    margin-top: 2rem;
}

main .dash-text{
    color: black;
}


/* STAFF TABLE */
.staff-table {
  width: 1190px;
  margin-top: 4rem;
  padding: 1rem;
  background-color: white; 
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  overflow: hidden;
}

.staff-table table {
  width: 100%;
  border-collapse: collapse; 
}

.staff-table th {
  background-color: #363636; 
  color: white; 
  padding: 1rem;
  text-align: left; 
  font-size: 1rem;
  border-bottom: 2px solid #ddd; 
}

.staff-table td {
  padding: 1rem;
  font-size: 1rem;
  border-bottom: 1px solid #ddd; 
}

.staff-table tr:hover {
  background-color: #f0f0f0; 
}      
/* END OF STAFF TABLE */


/* DELETE CONTAINER */
.input-container {
  display: flex;
  align-items: center;
  width: 400px; 
  border-radius: 8px;
  overflow: hidden; 
  position: fixed; 
  bottom: 3rem;
  right: 3rem; 
  transition: transform 0.3s, color 0.3s; 
  z-index: 9999; 
}

.input-container input {
  flex: 1;
  padding: 0.8rem;
  border: none;
  outline: none;
  background-color: white;
  color: #000;
  font-size: 1rem;
}

.input-container input::placeholder {
  color: #888;
}

/* DELETE BUTTON */
.delete-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #363636;
  color: white;
  border: none;
  padding: 0.8rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s, color 0.3s;
}

.delete-btn:hover {
  background-color: #00ffff;
  color: #0000ff;
}
/* END OF DELETE CONTAINER */
</style>