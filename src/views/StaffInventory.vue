<template>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Inventory</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet">
    </head>    
    <aside>
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
        <router-link to="/StaffDashboard" >
            <span class="material-icons-sharp">grid_view</span>
            <h3>Dashboard</h3>
        </router-link>
    
        <router-link to="/StaffInventory" class=" active">
            <span class="material-icons-sharp">inventory</span>
            <h3>Inventory</h3>
        </router-link>
    
        <router-link to="/StaffHelpSupport">
            <span class="material-icons-sharp">help</span>
            <h3>Help Support</h3>
        </router-link>
    
        <router-link to="/Logout">
            <span class="material-icons-sharp">logout</span>
            <h3>Logout</h3>
        </router-link>
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
  
  
                  <div>
    <!-- EDIT BUTTON -->
    <button class="edit-btn" @click="openModal">EDIT <i class="fas fa-pencil-alt"></i></button>
  
  
    <!-- MODAL -->
    <div class="modal" v-show="modalVisible">
      <div class="modal-content">
        <button class="close-btn" @click="closeModal">
          <i class="fas fa-xmark"></i>
        </button>
        <h2>Stock Up</h2>
        <div class="form-group">
          <label for="itemId">Item ID</label>
          <input type="text" v-model="itemId" placeholder="Enter Item ID">
        </div>
        <div class="form-group">
          <label for="itemName">Item Name</label>
          <input type="text" v-model="itemName" placeholder="Enter Item Name">
        </div>
        <div class="form-group">
          <label for="itemBrand">Item Brand</label>
          <input type="text" v-model="itemBrand" placeholder="Enter Item Brand">
        </div>
        <div class="form-group">
          <label for="itemCategory">Category</label>
          <select v-model="itemCategory">
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
          <input type="number" v-model="quantity" placeholder="Enter Quantity" min="0">
        </div>
        <div class="button-group">
          
          <button class="action-btn" @click="updateItem">UPDATE</button>
          <button class="action-btn" @click="deleteItem">DELETE</button>
          <button class="action-btn" @click="resetForm">RESET</button>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  
  <script>
export default {
  data() {
    return {
      modalVisible: false, // Modal visibility control
      itemId: '',
      itemName: '',
      itemBrand: '',
      itemCategory: '',
      quantity: 0,
      inventory: [
        { id: '001', name: 'Notebook', brand: 'Brand X', category: 'Paper Products', quantity: 50 },
        { id: '002', name: 'Pen', brand: 'Brand Y', category: 'Writing Supplies', quantity: 150 },
        { id: '003', name: 'Markers', brand: 'Brand Z', category: 'Arts & Crafts Materials', quantity: 30 },
        { id: '004', name: 'Scissors', brand: 'Brand A', category: 'Arts & Crafts Materials', quantity: 70 },
        { id: '005', name: 'Sticky Notes', brand: 'Brand B', category: 'Organizational Tools', quantity: 120 },
        { id: '006', name: 'Glue Stick', brand: 'Brand C', category: 'Arts & Crafts Materials', quantity: 20 },
        { id: '007', name: 'Printer Paper', brand: 'Brand D', category: 'Paper Products', quantity: 90 },
        { id: '008', name: 'Highlighter', brand: 'Brand E', category: 'Writing Supplies', quantity: 40 },
        { id: '009', name: 'File Folder', brand: 'Brand F', category: 'Organizational Tools', quantity: 60 },
        { id: '010', name: 'Calculator', brand: 'Brand G', category: 'Miscellaneous', quantity: 85 },
      ],
      sortKey: '',
      sortOrder: '',
      selectedCategory: ''
    };
  },
  computed: {
    sortedInventory() {
      let sorted = [...this.inventory];

      // Sort by name
      if (this.sortKey === 'name') {
        sorted.sort((a, b) => {
          return this.sortOrder === 'asc'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        });
      }

      // Sort by quantity
      else if (this.sortKey === 'quantity') {
        sorted.sort((a, b) => {
          return this.sortOrder === 'asc' ? a.quantity - b.quantity : b.quantity - a.quantity;
        });
      }

      // Filter by category
      if (this.selectedCategory) {
        sorted = sorted.filter(item => item.category === this.selectedCategory);
      }

      return sorted;
    }
  },
  methods: {
    openModal() {
      this.modalVisible = true;  // Set modal to visible
    },
    closeModal() {
      this.modalVisible = false;  // Set modal to hidden
    },
    resetForm() {
      this.itemId = '';
      this.itemName = '';
      this.itemBrand = '';
      this.itemCategory = '';
      this.quantity = 0;
    },
    updateItem() {
      const index = this.inventory.findIndex(item => item.id === this.itemId);
      if (index !== -1) {
        this.inventory[index] = {
          id: this.itemId,
          name: this.itemName,
          brand: this.itemBrand,
          category: this.itemCategory,
          quantity: this.quantity
        };
        this.resetForm();
        this.closeModal();  // Close modal after updating
      } else {
        alert('Item not found.');
      }
    },
    deleteItem() {
      const index = this.inventory.findIndex(item => item.id === this.itemId);
      if (index !== -1) {
        this.inventory.splice(index, 1);
        this.resetForm();
        this.closeModal();  // Close modal after deleting
      } else {
        alert('Item not found.');
      }
    },
    sortInventory(key, order) {
      if (key === 'category') {
        this.selectedCategory = order; // Set selected category for filtering
        this.sortKey = ''; // Reset sort key
        this.sortOrder = ''; // Reset sort order
      } else {
        this.sortKey = key; // Set sort key
        this.sortOrder = order; // Set sort order
        this.selectedCategory = ''; // Reset selected category
      }
    }
  }
};
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
    font-size: 14px;
  }
  
  
  body {
    background: url(../assets/images/back.png);
    width: 100%;
    height: 100%;
    font-family: poppins, sans-serif;
    font-size: 0.88rem;
    background-color: rgb(160, 173, 237);
    user-select: none;
    overflow: hidden;  
    color: #363949;
  }
  
  
  .container {
    display: grid;
    width: calc(100% - 14rem);
    margin-left: 15rem;
    gap: 1.8rem;
    height: 100vh;
  }
  
  
  a {
    color: #363636;
  }
  
  
  img {
    display: block;
    width: 100%;
  }
  
  
  h1 {
    font-weight: 800;
    font-size: 1.8rem;
  }
  
  
  h2 {
    font-size: 1.4rem;
  }
  
  
  h3 {
    font-size: 0.87rem;
  }
  
  
  .text-muted {
    color: #7d8da1;
  }
  
  
  h4 {
    font-size: 0.87;
  }
  
  
  p {
    color: #677483;
  }
  
  
  b {
    color: #677483;
  }
  
  
  aside {
    height: 100vh;  
    background-color: white;
    position: fixed;
    left: 0;
    top: 0;
    width: 14rem;
    z-index: 10;
  }
  
  
  aside .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.4rem;
    margin-left: 2rem;
  }
  
  
  aside .logo {
    display: flex;
    gap: 0.8rem;
    position: relative;
  }
  
  
  aside .logo img {
    width: 2rem;
    height: 2rem;
  }
  
  
  aside .close {
    display: none;
  }
  
  
  aside .sidebar {
    background: white;
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
    transition: all 300ms ease;
  }
  
  
  aside .sidebar a span {
    font-size: 1.6rem;
    transition: all 300ms ease;
  }
  
  
  aside .sidebar a:last-child {
    position: absolute;
    bottom: 2rem;
    width: 100%;
  }
  
  
  aside .sidebar a.active {
    background: aqua;
    color: blue;
    margin-left: 0;
  }
  
  
  aside .sidebar a.active:before {
    content: '';
    width: 6px;
    height: 100%;
    background: blue;
  }
  
  
  aside .sidebar a:hover {
    color: var(#f74d4d);
  }
  
  
  aside .sidebar a:hover span {
    margin-left: 1rem;
  }
  
  
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
  }
  
  
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
  
  
  main {
    margin-top: 2rem;
    font-family: poppins, sans-serif;
  }
  
  
  main .dash-text {
    position: absolute;
    top: 2rem;
    left: 17rem;
    color: black;
  }
  
  
  .product-table {
    position: absolute;
    top: 10rem;
    width: 85rem;
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
  
  
  .edit-btn {
    background-color: #363636;
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 8px;
    cursor: pointer;
    position: fixed;
    bottom: 3rem;
    right: 4rem;
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
  
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.3s ease-in-out;
    display: flex;
  }
  
  
  .modal-content {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    width: 430px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  
  
  .modal[style*="opacity: 1"] {
    opacity: 1;
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
    margin-left: 45px;
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
  
  
  
  
  /* Media Queries for Responsiveness */
  @media (max-width: 768px) {
  
  
    .container {
        width: 100%;
        margin-left: 0;
    }
  
  
    .dropdown {
    right: 14.5rem;
    width: 11rem;
    top:0.1rem;
    position: relative;
  }
  .dropdown-group {
  font-size: 1rem;
  }
  
  
    .search {
        width: 50%;
        margin: 1rem auto;
        margin-top: 5.5rem;
  
  
    }
  
  
    .product-table {
        width: 90%;
        left: 6%;
        top: 12rem;
    }
  
  
    .edit-btn {
        right: 2rem;
    }
  
  
    main .dash-text {
        left: 5%;
    }
  }
  
  
  @media (max-width: 480px) {
    .search input {
        width: 100%;
    }
  
  
    .product-table {
        padding: 0.5rem;
    }
  
  
    .modal-content {
        width: 50%;
    }
  
  
    .edit-btn {
        padding: 0.5rem 1rem;
    }
  }
  
  
  </style>
  
