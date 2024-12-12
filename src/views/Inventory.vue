<template>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Help Center</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet">
    </head>    
      <aside class="navbar">
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

                <a href="inventory.html" class="active">
                    <span class="material-icons-sharp">inventory</span>
                    <h3>Inventory</h3>
                </a>

                <a href="stockreport.html" >
                    <span class="material-icons-sharp">bar_chart</span>
                    <h3>Stock Report</h3>
                </a>

                <a href="logintracker.html" >
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
        </aside>
        <!------------------- END OF NAV BAR -------------------------- -->
     <main>
            <h1 class="dash-text">Inventory</h1>

            <div class="search">
                <input type="text" placeholder="Search">
                <button>
                    <i class="fas fa-search"></i>
                </button>
            </div>
                <!-- DROPDOWN -->
                <div class="dropdown">
                    <input type="checkbox" id="dropdown-toggle" class="dropdown-toggle">
                    <label for="dropdown-toggle" class="dropdown-button">
                        <span class="dropdown-text">Sort Options</span>
                        <i class="fas fa-caret-down dropdown-arrow"></i>
                    </label>
                
                    <!-- OPTIONS -->
                    <div class="dropdown-menu">
                        <div class="dropdown-group">
                            <div class="label">Alphabetical</div>
                            <div class="value">A-Z (Ascending)</div>
                            <div class="value">Z-A (Descending)</div>
                        </div>
                        <div class="dropdown-group">
                            <div class="label">Stock Levels</div>
                            <div class="value">High Stocks</div>
                            <div class="value">Low Stocks</div>
                        </div>
                        <div class="dropdown-group">
                            <div class="label">Categories</div>
                            <div class="value">Writing Supplies</div>
                            <div class="value">Paper Products</div>
                            <div class="value">Arts & Crafts Materials</div>
                            <div class="value">Organizational Tools</div>
                            <div class="value">Miscellaneous</div>
                        </div>
                    </div>
                </div>                                    
                  <!-- END OF DROPDOWN -->                  
        
                  <!-- PRODUCT TABLE -->
                  <div class="product-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Product ID</th>
                          <th>Name</th>
                          <th>Brand</th>
                          <th>Category</th>
                          <th>Quantity</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>001</td>
                          <td>Notebook</td>
                          <td>Brand X</td>
                          <td>Paper Products</td>
                          <td>50</td>
                          <td>Average</td>
                        </tr>
                        <tr>
                          <td>002</td>
                          <td>Pen</td>
                          <td>Brand Y</td>
                          <td>Writing Supplies</td>
                          <td>150</td>
                          <td>High</td>
                        </tr>
                        <tr>
                          <td>003</td>
                          <td>Markers</td>
                          <td>Brand Z</td>
                          <td>Arts & Crafts Materials</td>
                          <td>30</td>
                          <td>Low</td>
                        </tr>
                        <tr>
                          <td>004</td>
                          <td>Scissors</td>
                          <td>Brand A</td>
                          <td>Arts & Crafts Materials</td>
                          <td>70</td>
                          <td>Average</td>
                        </tr>
                        <tr>
                          <td>005</td>
                          <td>Sticky Notes</td>
                          <td>Brand B</td>
                          <td>Organizational Tools</td>
                          <td>120</td>
                          <td>High</td>
                        </tr>
                        <tr>
                          <td>006</td>
                          <td>Glue Stick</td>
                          <td>Brand C</td>
                          <td>Arts & Crafts Materials</td>
                          <td>20</td>
                          <td>Low</td>
                        </tr>
                        <tr>
                          <td>007</td>
                          <td>Printer Paper</td>
                          <td>Brand D</td>
                          <td>Paper Products</td>
                          <td>90</td>
                          <td>High</td>
                        </tr>
                        <tr>
                          <td>008</td>
                          <td>Highlighter</td>
                          <td>Brand E</td>
                          <td>Writing Supplies</td>
                          <td>40</td>
                          <td>Low</td>
                        </tr>
                        <tr>
                          <td>009</td>
                          <td>File Folder</td>
                          <td>Brand F</td>
                          <td>Organizational Tools</td>
                          <td>60</td>
                          <td>Average</td>
                        </tr>
                        <tr>
                          <td>010</td>
                          <td>Calculator</td>
                          <td>Brand G</td>
                          <td>Miscellaneous</td>
                          <td>85</td>
                          <td>High</td>
                        </tr>
                      </tbody>
                    </table>                    
                  </div>
                </main>
                  <!-- END OF PRODUCT TABLE -->

<!-- EDIT CONTAINER -->
<button class="edit-btn">
    EDIT <i class="fas fa-pencil-alt"></i>
</button>

<!-- MODAL -->
<div class="modal" id="editModal">
  <div class="modal-content">

    <button class="close-btn" id="closeBtn">
      <i class="fas fa-xmark"></i>
    </button>
    <h2>Stock Up</h2>
    <div class="form-group">
      <label for="itemId">Item ID</label>
      <input type="text" id="itemId" placeholder="Enter Item ID">
  </div>
  <div class="form-group">
      <label for="itemName">Item Name</label>
      <input type="text" id="itemName" placeholder="Enter Item Name">
  </div>
  <!-- Added Item Brand Input -->
  <div class="form-group">
      <label for="itemBrand">Item Brand</label>
      <input type="text" id="itemBrand" placeholder="Enter Item Brand">
  </div>
  <!-- Added Category Dropdown -->
  <div class="form-group">
      <label for="itemCategory">Category</label>
      <select id="itemCategory">
          <option value="">Select Category</option>
          <option value="Writing Supplies">Writing Supplies</option>
          <option value="Paper Products">Paper Products</option>
          <option value="Arts & Crafts Materials">Arts & Crafts Materials</option>
          <option value="Organizational Tools">Organizational Tools</option>
          <option value="Miscellaneous">Miscellaneous</option>
      </select>
  </div>
  <div class="form-group">
      <label for="quantity">Quantity</label>
      <input type="number" id="quantity" name="quantity" placeholder="Enter Quantity" min="0">
  </div>
  <div class="button-group">
      <button id="addBtn" class="action-btn">ADD</button>
      <button id="updateBtn" class="action-btn">UPDATE</button>
      <button id="deleteBtn" class="action-btn">DELETE</button>
      <button id="resetBtn" class="action-btn">RESET</button>
  </div>
</div>
</div>
  
  </template>
  
  <script>
// EME LANG TONG SCRIPT (HINDI PA SURE)
    // Get references to elements
    // const editBtn = document.querySelector('.edit-btn');
    // const modal = document.getElementById('editModal');
    // const closeBtn = document.getElementById('closeBtn');
    // const addBtn = document.getElementById('addBtn');
    // const updateBtn = document.getElementById('updateBtn');
    // const deleteBtn = document.getElementById('deleteBtn');
    // const resetBtn = document.getElementById('resetBtn');
    // const itemIdInput = document.getElementById('itemId');
    // const itemNameInput = document.getElementById('itemName');
    // const itemBrandInput = document.getElementById('itemBrand'); // New reference
    // const itemCategorySelect = document.getElementById('itemCategory'); // New reference
    // const quantityInput = document.getElementById('quantity');
    // const inventoryBody = document.getElementById('inventoryBody');

    // // Open modal when edit button is clicked
    // editBtn.addEventListener('click', () => {
    //     modal.style.display = 'flex';
    // });

    // // Close modal when close button is clicked
    // closeBtn.addEventListener('click', () => {
    //     modal.style.display = 'none';
    // });

    // // Add new item
    // addBtn.addEventListener('click', () => {
    //     const itemId = itemIdInput.value;
    //     const itemName = itemNameInput.value;
    //     const itemBrand = itemBrandInput.value; // Retrieve item brand
    //     const itemCategory = itemCategorySelect.value; // Retrieve category
    //     const quantity = quantityInput.value;

    //     if (itemId && itemName && itemBrand && itemCategory && quantity) {
    //         const newRow = document.createElement('tr');
    //         newRow.innerHTML = `
    //             <td>${itemId}</td>
    //             <td>${itemName}</td>
    //             <td>${itemBrand}</td>
    //             <td>${itemCategory}</td>
    //             <td>${quantity}</td>
    //             <td>In Stock</td>
    //         `;
    //         inventoryBody.appendChild(newRow);
    //         resetForm();
    //         modal.style.display = 'none';
    //     }
    // });

    // // Update existing item
    // updateBtn.addEventListener('click', () => {
    //     const itemId = itemIdInput.value;
    //     const itemName = itemNameInput.value;
    //     const itemBrand = itemBrandInput.value; // Retrieve item brand
    //     const itemCategory = itemCategorySelect.value; // Retrieve category
    //     const quantity = quantityInput.value;

    //     if (itemId && itemName && itemBrand && itemCategory && quantity) {
    //         const rows = inventoryBody.getElementsByTagName('tr');
    //         let itemFound = false;

    //         for (let row of rows) {
    //             if (row.cells[0].textContent === itemId) {
    //                 row.cells[1].textContent = itemName;
    //                 row.cells[2].textContent = itemBrand;
    //                 row.cells[3].textContent = itemCategory;
    //                 row.cells[4].textContent = quantity;
    //                 itemFound = true;
    //                 break;
    //             }
    //         }

    //         if (itemFound) {
    //             resetForm();
    //             modal.style.display = 'none';
    //         } else {
    //             alert('Item not found');
    //         }
    //     }
    // });

    // // Delete item
    // deleteBtn.addEventListener('click', () => {
    //     const itemId = itemIdInput.value;

    //     if (itemId) {
    //         const rows = inventoryBody.getElementsByTagName('tr');
    //         let itemFound = false;

    //         for (let row of rows) {
    //             if (row.cells[0].textContent === itemId) {
    //                 row.remove();
    //                 itemFound = true;
    //                 break;
    //             }
    //         }

    //         if (itemFound) {
    //             resetForm();
    //             modal.style.display = 'none';
    //         } else {
    //             alert('Item not found');
    //         }
    //     }
    // });

    // // Reset input fields
    // resetBtn.addEventListener('click', resetForm);

    // // Function to reset form fields
    // function resetForm() {
    //     itemIdInput.value = '';
    //     itemNameInput.value = '';
    //     itemBrandInput.value = ''; // Reset item brand
    //     itemCategorySelect.selectedIndex = 0; // Reset category to default
    //     quantityInput.value = '';
    // }
</script>


<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

*{
   margin: 0; 
   padding: 0;
   outline: 0;
   appearance: none;
   border: 0;
   text-decoration: none;
   list-style: none;
   box-sizing: border-box;
}

html{
    font-size:14px; 
     }

body {
   background: url(../assets/images/back.png);
   width: 100%;
   height: 100%;
   font-family: poppins, sans-serif;
   font-size: 0.88rem;
   background-color: rgb(160, 173, 237);
   user-select: none; 
   overflow:hidden;  
   color: #363949;
}
.container {
   display: grid;
   width: calc(100% - 14rem); /* Adjust the width to account for the sidebar */
   margin-left: 15rem; /* Add margin to the left to avoid overlap */
   gap: 1.8rem;
   height: 100vh;
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


/* DROPDOWN CONTAINER */
.dropdown {
 position: absolute;
 width: 250px; 
 top: 6rem;
 margin-left: 17rem;
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.dropdown-toggle {
 display: none;
}

/* DROPDOWN BUTTON */
.dropdown-button {
 width: 100%;
 padding: 0.8rem 1rem;
 background-color: #363636; 
 color: white; 
 border: none;
 border-radius: 8px; 
 display: flex;
 justify-content: space-between;
 align-items: center;
 cursor: pointer;
 font-size: 1rem;
 transition: background-color 0.3s, color 0.3s;
 transition: transform 0.3s ease;
}

.dropdown-button .dropdown-text {
 margin-right: 10px; 
}

.dropdown-button .dropdown-arrow {
 font-size: 1rem;
 transition: transform 0.3s, color 0.3s; 
}

.dropdown-button:hover {
 background-color: #00ffff; 
 color: #0000ff; 
}

.dropdown-button:hover .dropdown-arrow {
 color: #0000ff; 
}

/* DROPDWON MENU */
.dropdown-menu {
 display: none; 
 position: absolute;
 top: 100%; 
 width: 100%;
 background-color: white; 
 border-radius: 8px;
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
 z-index: 10;
 padding: 0.5rem;
 color: #333; 
}

.dropdown-toggle:checked + .dropdown-button + .dropdown-menu {
 display: block;
}

.dropdown-group {
 margin-bottom: 1rem;
}

.label {
 font-weight: bold;
 padding: 0.4rem 0;
 color: #333;
 font-size: 1rem;
}

.value {
 padding: 0.6rem 1rem;
 font-size: 1rem;
 cursor: pointer;
 transition: background-color 0.3s, color 0.3s;
}

.value:hover {
 background-color: #00ffff; 
 color: #0000ff; 
}

.dropdown-toggle:checked + .dropdown-button .dropdown-arrow {
 transform: rotate(180deg); 
}

.value:hover {
 background-color: #00ffff; 
 color: #0000ff; 
}

.value:hover .dropdown-arrow {
 color: #0000ff; 
}

/* END OF DROPDWON */

main{ 
   margin-top: 2rem;
   font-family: poppins, sans-serif;
}

main .dash-text{
   position: absolute;
   top: 2rem;
   left: 17rem;
   color: black;
   
}

/* PRODUCT TABLE */
.product-table {
position: absolute;
top: 10rem;
width: 90rem;
padding: 1rem;
background-color: white;
border-radius: 8px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
overflow: hidden;
left: 17rem;
}

.product-table table {
 width: 100%;
 border-collapse: collapse; 
}


.product-table th {
 background-color: #363636; 
 color: white; 
 padding: 1rem;
 text-align: left; 
 font-size: 1rem;
 border-bottom: 2px solid #ddd; 
}

.product-table td {
 padding: 1rem;
 font-size: 1rem;
 border-bottom: 1px solid #ddd; 
}

.product-table tr:hover {
 background-color: #f0f0f0; 
}

.product-table td:last-child {
 font-weight: bold;
}

/* END OF PRODUCT TABLE */


/* EDIT CONTAINER */
.edit-btn {
 background-color: #363636;
 color: white;
 border: none;
 padding: 1rem 2rem;
 border-radius: 8px;
 cursor: pointer;
 position: fixed;
 bottom: 3rem;
right: 3rem;
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 transition: transform 0.3s, color 0.3s; 
}

.edit-btn i {
 margin-left: 10px;
}

.edit-btn:hover {
 background-color: #00ffff;
 color: #0000ff;
}

/* MODAL CONTAINER */
.modal {
          display: none; 
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          justify-content: center;
          align-items: center;
          z-index: 9999;
      }
      .modal-content {
          background-color: white;
          padding: 2rem;
          border-radius: 8px;
          width: 430px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          position: relative;
      }
      .modal-content h2 {
          text-align: center;
      }
      .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #363636;
          cursor: pointer;
          transition: color 0.3s;
      }
      .close-btn:hover {
          color: #0000ff;
      }
      .form-group {
          margin-bottom: 1rem;
      }
      .form-group label {
          display: block;
          margin-bottom: 0.5rem;
      }
      .form-group input,
      .form-group select {
          width: 100%;
          padding: 0.8rem;
          border: 1px solid #ddd;
          border-radius: 4px;
      }
      .button-group {
          display: flex;
          gap: 9px;
          justify-content: flex-start;
      }
      .action-btn {
          padding: 0.8rem 1.5rem;
          background-color: #363636;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
      }
      .action-btn:hover {
          background-color: #00ffff;
          color: #0000ff;
      }
/* END OF EDIT CONTAINER */

/* =================Media Queries ======================= */
/* =================Media Queries ======================= */
@media screen and (max-width: 1200px) {
   .container {
       width: 94%; /* Adjust the width for smaller screens */
       margin-left: 0; /* Remove left margin on smaller screens */
   }

   aside {
       width: 6rem; /* Reduce width of sidebar */
   }

   aside .sidebar a {
       width: 100%; /* Full width for sidebar links */
   }

   aside .logo h2 {
       display: none; /* Hide logo text */
   }

   aside .sidebar h3 {
       display: none; /* Hide sidebar titles */
   }

   main {
       margin-top: 2rem; /* Adjust margin for main content */
       padding: 0 1rem; /* Add padding to main content */
   }
}

@media screen and (max-width: 768px) {
   aside {
       position: fixed;
       left: -100%; /* Start off-screen */
       background: white;
       width: 60%; /* Adjust sidebar width */
       height: 100vh;
       z-index: 3;
       box-shadow: 1rem 3rem 4rem white;
       display: none; /* Hide sidebar initially */
       animation: showMenu 400ms ease forwards;
   }

   @keyframes showMenu {
       to {
           left: 0; /* Slide in the sidebar */
       }
   }

   aside .logo {
       margin-left: 1rem;   
   }

   aside .sidebar a {
       width: 100%; /* Full width for sidebar links */
       height: 3.4rem; /* Adjust height */
   }

   aside .close {
       display: inline-block; /* Show close button */
       cursor: pointer;
   }

   main {
       margin-top: 8rem; /* Ensure main content is below the sidebar */
       padding: 0 1rem; /* Add padding */
   }
}

</style>