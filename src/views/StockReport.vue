<template>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Stock Report</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet">
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.0/xlsx.full.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.13/jspdf.plugin.autotable.min.js"></script> -->
    </head>
 
        <div class="container">
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
        <router-link to="/Dashboard" >
            <span class="material-icons-sharp">grid_view</span>
            <h3>Dashboard</h3>
        </router-link>
    
        <router-link to="/Inventory">
            <span class="material-icons-sharp">inventory</span>
            <h3>Inventory</h3>
        </router-link>
    
        <router-link to="/StockReport" class="active">
            <span class="material-icons-sharp">bar_chart</span>
            <h3>Stock Report</h3>
        </router-link>
    
        <router-link to="/LoginTracker">
            <span class="material-icons-sharp">track_changes</span>
            <h3>Login Tracker</h3>
        </router-link>
    
        <router-link to="/HelpSupport">
            <span class="material-icons-sharp">help</span>
            <h3>Help Support</h3>
        </router-link>
    
        <router-link to="/Logout">
            <span class="material-icons-sharp">logout</span>
            <h3>Logout</h3>
        </router-link>
    </div>
            </aside>
            <main>
                    <h1 class="dash-text">Stock Report</h1>
   
<div>
    <div class="button-container">
      <button @click="showStockReport"><b>STOCK REPORT</b></button>
      <button @click="showInStockReport"><b>IN STOCK REPORT</b></button>
      <button @click="showLowStockReport"><b>LOW STOCK REPORT</b></button>
    </div>


    <div class="stock-table">
      <table id="stockTable">
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Item Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Current Stock</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in displayedStockData" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.brand }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.stock }}</td>
            <td>{{ item.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>

   

    <div class="download-buttons">
      <button @click="downloadExcel">Download Excel</button>
      <button @click="downloadPDF">Download PDF</button>
    </div>
</div>

<div class = "right">
        <div class= "top">
            <button id ="menu-btn">
                <span class="material-icons-sharp">menu</span>
            </button>
        </div>
    </div>
</main>
  </div>
    </template>
   
    <script>
    import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
   
    export default {
      data() {
        return {
          stockData: [
            { id: '001', name: 'Whiteboard Marker', brand: 'Sharpie', category: 'Writing Supplies', stock: 150, status: 'High' },
            { id: '002', name: 'Notebook', brand: 'Classmate', category: 'Paper Products', stock: 80, status: 'High' },
            { id: '003', name: 'Glue Stick', brand: 'Elmers', category: 'Arts & Crafts Materials', stock: 20, status: 'Low' },
            { id: '004', name: 'Pencil', brand: 'Faber-Castell', category: 'Writing Supplies', stock: 200, status: 'High' },
            { id: '005', name: 'Binder Clips', brand: 'PaperPro', category: 'Organizational Tools', stock: 25, status: 'Low' }
          ],
          displayedStockData: []
        };
      },
      mounted() {
        this.showStockReport(); // Show the full stock report by default
      },
      methods: {
        showStockReport() {
          this.displayedStockData = this.stockData;
        },
        showInStockReport() {
          this.displayedStockData = this.stockData.filter(item => item.status === 'High' || item.status === 'Average');
        },
        showLowStockReport() {
          this.displayedStockData = this.stockData.filter(item => item.status === 'Low');
        },
        downloadExcel() {
          const table = document.querySelector("#stockTable");
          if (!table) {
            console.error("Table not found!");
            return;
          }
   
          const workbook = XLSX.utils.table_to_book(table, { sheet: "Stock Report" });
          const fileName = `StockReport_${new Date().toLocaleDateString().replace(/\//g, '-')}_${this.formatTime(new Date())}.xlsx`;
          console.log("Generating Excel file:", fileName);
          XLSX.writeFile(workbook, fileName);
        },
        downloadPDF() {
          const doc = new jsPDF();
          const logo = new Image();
          logo.src = '../assets/images/logo.png'; // Adjust the path as necessary
   
          logo.onload = () => {
            doc.addImage(logo, 'PNG', 10, 10, 30, 30);
            this.addPDFContent(doc);
          };
   
          logo.onerror = () => {
            console.error('Failed to load logo image.');
            this.addPDFContent(doc);
          };
        },
        addPDFContent(doc) {
          doc.setFontSize(14);
          doc.text("Stock Up", 50, 20);
          doc.text(`Date: ${new Date().toLocaleDateString()} ${this.formatTime(new Date())}`, 50, 30);
          doc.autoTable({ html: "#stockTable", startY: 60 });
          const fileName = `StockReport_${new Date().toLocaleDateString().replace(/\//g, '-')}_${this.formatTime(new Date())}.pdf`;
          doc.save(fileName);
        },
        formatTime(date) {
          const hours = date.getHours();
          const minutes = date.getMinutes();
          const ampm = hours >= 12 ? 'pm' : 'am';
          return `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
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
         font-size:14px;
    }
   
    body {
        background: url(../assets/images/back.png) ;
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
   
    /* .text-muted{
        color:
        .;lvvvvl#7d8da1;
    } */
   
    h4{
        font-size: 0.87;
    }
   
    p{
        color: #677483;
    }
   
    b{
        color: #677483;
    }
   
    side {
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
   
    /* Main Content */
    main{
        margin-top: 2rem;
    }
   
    main .dash-text {
        position: absolute;
        top: 2rem;
        left: 17rem;
        color: black;
    }
   
   
    main b{
        color: white;
    }
   
     /* STOCK TABLE */
     .stock-table {
    position: absolute;
    top: 10rem;
    width: 80%;
    padding: 1rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    left: 17rem;
}
   
    .stock-table table {
      width: 100%;
      border-collapse: collapse;
    }
   
    .stock-table th {
      background-color: #363636;
      color: white;
      padding: 1rem;
      text-align: left;
      font-size: 1rem;
      border-bottom: 2px solid #ddd;
    }
   
    .stock-table td {
      padding: 1rem;
      font-size: 1rem;
      border-bottom: 1px solid #ddd;
    }
   
    .stock-table td:last-child {
      font-weight: bold;
      color: #2596be;
    }
   
    .stock-table tr:hover {
      background-color: #f0f0f0;
    }      
    /* END OF STOCK TABLE */
   
            /* Button Styles */
            .button-container {
      position: absolute;
      top: 0;
      left: 60rem;
      transform: translateX(-50%);
      margin-top: 6rem;
      display: flex;
      gap: 25px;
      justify-content: center;
      width: 50%;
      z-index: 2;
    }
            button {
                padding: 1rem 2rem;
                border: none;
                background-color: #363636;
                color: white;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s ease;
            }
   
            button:hover {
                background-color: #00ffff;
                color: #0000ff;
            }
   
            /* Bottom Buttons */
            .download-buttons {
                position: fixed;
                bottom: 20px;
                right: 4rem;
                display: flex;
                gap: 10px;
            }
   
            .download-buttons button {
                background-color: #363636;
                color: white;
                border-radius: 8px;
                padding: 1rem 2rem;
                transition: all 0.3s ease;
            }
   
            .download-buttons button:hover {
                background-color: #00ffff;
                color: #0000ff;
            }


       
/* Media Queries for Responsiveness */


@media (max-width: 1200px) {

.container {
    width: 94%;
    grid-template-columns: 5rem auto;
}

aside {
        position: fixed;
        width: 6rem;
    }

    aside .logo h2 {
        display: none;
    }

    aside .sidebar h3 {
        display: none;
    }

    aside .sidebar a {
        width: 5.6rem;
    }

    aside .sidebar a:last-child {
        position: absolute;
        bottom: 0px;
    }

    


.button-container {
    position:fixed;
    margin-left: -29.4rem;
  }


.stock-table {
    width: 97%;
    left: 9rem;
    top: 12rem;
}
.download-buttons{
right:2rem;
}

.product-table {
  margin-right: 2rem;
}
}
@media screen  and (max-width: 768px) {
.container {
    width: 100%;
    margin-left: 0;
}

main .dash-text{
  left:2rem
}

.stock-table {
    width: auto;
    left: 6%;
    top: 12rem;
}


.button-container {
    align-items: center;
    margin-left: -43rem;
  }
  .download-buttons{
right:2rem;
}
}

</style>

