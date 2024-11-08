<template>
   <div class="main-content">
        <div class="header">
            <div class="dropdown">
                <!-- Combined Dropdown -->
                <select id="combinedDropdown">
                   <optgroup label="Alphabetical">
                       <option value="a-z">A-Z (Ascending)</option>
                       <option value="z-a">Z-A (Descending)</option>
                   </optgroup>
                   <optgroup label="Quantities">
                       <option value="high-stocks">High Stocks</option>
                       <option value="low-stocks">Low Stocks</option>
                   </optgroup>
                   <optgroup label="Categories">
                       <option value="writing">Writing Supplies</option>
                       <option value="paper">Paper Products</option>
                       <option value="arts">Arts & Crafts Materials</option>
                       <option value="org-tools">Organizational Tools</option>
                       <option value="miscellaneous">Miscellaneous</option>
                   </optgroup>
               </select>
           </div>
           <div class="search">
            <input type="text" placeholder="Search">
            <button>
                <i class="fas fa-search"></i>
            </button>
        </div>

        </div>
        
       
        <table id="inventory-table">
            <thead>
                <tr>
                    <th>Item ID</th>
                    <th>Item Name</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="6" style="text-align: center;">No records found.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <button class="edit-button" id="editBtn">EDIT</button>

    <div id="myModal" class="modal">
        <div class="modal-content">
            <button class="close-btn" id="closeModal">X</button>
            <h2 class="title">STOCK UP</h2>
            <div class="input-group">
                <label for="item-id">ITEM ID</label>
                <input type="text" id="item-id" placeholder="Enter Item ID">
            </div>
            <div class="input-group">
                <label for="item-name">ITEM</label>
                <input type="text" id="item-name" placeholder="Enter Item Name">
            </div>
            <div class="input-group">
                <label for="quantity">QUANTITY</label>
                <input type="number" id="quantity" placeholder="Enter Quantity">
            </div>
            <div class="input-group">
                <label for="status">STATUS</label>
                <input type="text" id="status" placeholder="Enter Status">
            </div>
            <div class="button-group">
                <button class="btn">ADD</button>
                <button class="btn">UPDATE</button>
                <button class="btn">DELETE</button>
                <button class="btn">RESET</button>
            </div>
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
}

.navbar {
    background-color: white;
    width: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    position: fixed;
    text-align: center;
    font-weight: bold;
    transition: width 0.3s, padding 0.3s; /* Smooth transition */
}

.navbar .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
}

.navbar .logo img {
    width: 230px;
}

.navbar ul {
    list-style: none;
}

.navbar ul li {
    margin: 20px 0;
}

.navbar ul li a {
    color: black;
    text-decoration: none;
    font-size: 18px;
    display: block;
    padding: 15px;
    transition: 0.3s;
}

.navbar ul li a:hover, .navbar .logout a:hover {
    background-color: #9b9ea4;
    border-radius: 5px;
}

.navbar .logout a {
    color: black;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
}

.main-content {
    margin-left: 300px; 
    padding: 20px;
    width: calc(100% - 300px);
    display: flex;
    flex-direction: column;
}
.header{
    width: 100%;
    padding: 0;
    display: flex;
}
.dropdown {
    justify-content: right;
    margin-bottom: 20px;
    width: 50%;
    flex:1;
    
}
.search {
    width: 50%;
    justify-content: right;
    margin-bottom: 20px;
    flex:1;
    text-align: right;
}

    @media (max-width: 768px) {
        .header {
          flex-direction: column;
        }
      }
.search input {
    background-color: rgba(3, 25, 69, 0.5);
    color: #ddd;
    padding: 10px;
    border: 2px solid;
    border-image: linear-gradient(to right, #5952d5, #0f0b3a) 1;
    margin-right: 10px;
    width: 250px;
}

.search button {
    background-color: #201e43;
    color: white;
    border: 2px solid;
    border-image: linear-gradient(to right, #5952d5, #0f0b3a) 1;
    padding: 10px;
    cursor: pointer;
}

.search button:hover {
    background-color: white;
    color: #201e43;
}

select {
    background-color: #201e43;
    color: white;
    padding: 10px;
    margin-right: 10px;
}

table {
    background-color: white;
    width: 100%;
    border: 3px solid;
    border-image: linear-gradient(to right, #5952d5, #0f0b3a) 1;
    margin-top: 20px;
}

th, td {
    border: 1px solid #000;
    padding: 10px;
    text-align: left;
    font-size: 14px;
}

th {
    background-color: #201e43;
    color: white;
}

.edit-button {
    background-color: #201e43;
    color: white;
    border: 2px solid;
    border-image: linear-gradient(to right, #5952d5, #0f0b3a) 1;
    padding: 10px 25px;
    cursor: pointer;
    position: fixed;
    bottom: 20px;
    right: 20px;
}

.edit-button:hover {
    background-color: white;
    color: #201e43;
}

.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 30px;
    border-radius: 5px;
    width: 380px;
    position: relative;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #201e43;
    color: white;
    padding: 5px;
    border: none;
    cursor: pointer;
}

.input-group {
    margin-bottom: 20px;
}

.input-group label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
}

.input-group input {
    width: 100%;
    padding: 8px;
    font-size: 14px;
}

.button-group {
    display: flex;
    justify-content: space-between;
}

.btn {
    background-color: #201e43;
    color: white;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    margin-top: 10px;
}

.btn:hover {
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


    .modal-content {
        margin: 5% auto;
        width: 65%;
    }
    .btn {
        padding: 8px 10px; 
        margin: 5px 0; 
        width: 90%; 
    }
}
</style>