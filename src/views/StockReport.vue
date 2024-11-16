<template>
   <div class="main-content">
   <div class="header-controls">
    <!-- Button with custom class -->
    <button class="top-item-button" onclick="togglePopup()">TOP ITEM</button>
</div>

<!-- Pop-up container -->
<div id="popup" class="popup-overlay" onclick="closePopup()">
    <div class="popup-content" onclick="event.stopPropagation()">
        <h2>TOP ITEMS</h2>
        <table class="table-data">
            <tbody>
                <!-- Placeholder for dynamic data -->
                <tr>
                    <td colspan="4" style="text-align: center;">No records found.</td>
                </tr>
            </tbody>
          </table>
        <button onclick="closePopup()">Close</button>
    </div>
</div>

    <div class="button-container">
        <button id="stockHistoryBtn" class="btn-secondary">STOCK REPORT</button>
        <button id="highStockBtn" class="btn-report">HIGH STOCK REPORT</button>
        <button id="lowStockBtn" class="btn-report">LOW STOCK REPORT</button>
    </div>

    <div id="stockReportSection">
        <table>
            <thead>
                <tr>
                    <th>ITEM ID</th>
                    <th>ITEM</th>
                    <th>ORIG NO. OF STOCKS</th>
                    <th>CURRENT STOCKS</th>
                </tr>
            </thead>
            <tbody>
                <!-- Placeholder for data -->
                <tr>
                    <td colspan="4" style="text-align: center;">No data found.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div id="highStockSection" style="display:none;">
        <table>
            <thead>
                <tr>
                    <th>ITEM ID</th>
                    <th>ITEM</th>
                    <th>ORIG NO. OF STOCKS</th>
                    <th>CURRENT STOCKS</th>
                </tr>
            </thead>
            <tbody>
                <!-- Placeholder for data -->
                <tr>
                    <td colspan="4" style="text-align: center;">No data found.</td>
                </tr>
            </tbody>
        </table>
        <div class="total-stock">
            <p>TOTAL NO. OF HIGH STOCK ITEMS:</p>
        </div>   
     </div>

    <div id="lowStockSection" style="display:none;">
        <table>
            <thead>
                <tr>
                    <th>ITEM ID</th>
                    <th>ITEM</th>
                    <th>ORIG NO. OF STOCKS</th>
                    <th>CURRENT STOCKS</th>
                </tr>
            </thead>
            <tbody>
                <!-- Placeholder for data -->
                <tr>
                    <td colspan="4" style="text-align: center;">No data found.</td>
                </tr>
            </tbody>
        </table>
        <div class="total-stock">
            <p>TOTAL NO. OF LOW STOCK ITEMS:</p>
        </div>   
     </div>
</div>
</template> 

<style scoped>
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


        .main-content {
            margin-left: 330px;
            padding: 20px;
            width: calc(100% - 330px);
            display: flex;
            flex-direction: column;
        
        
        }

        .button-container {
            display: flex;
            gap: 10px;
            height: 50px;
            position: fixed;
            margin-left: 300px;
            margin-top: 100px;
        }

        button {
            padding: 15px 30px;
            border: none;
            cursor: pointer;
            text-align: center;
        }

        .btn-secondary, .btn-report {
            background-color: #201e43;
            color: white;
            border: 2px solid;
            border-image: linear-gradient(to right, #5952d5, #0f0b3a) 1;
        }

        button:hover {
            background-color: white;
            color: #201e43;
        }

        table {
            background-color: white;
            color: black;
            border: 3px solid;
            border-image: linear-gradient(to right, #5952d5, #0f0b3a) 1;
            width: 1140px;
            margin-top: 170px;
        }

        th {
            background-color: #201e43;
            color: white;
            padding: 10px;
        }

        td {
            padding: 12px;
            border: 1px solid #e5e7eb;
            text-align: center;
        }

        p {
            font-weight: 500;
            position: absolute;
            color: white;
            margin-top: 10px;
        }

        .header-controls {
            display: flex;
            position: absolute;
            left: 340px;
            top: 40px;
        }

        .top-item-button {
            background-color: #201e43;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            border: 2px solid;
            border-image: linear-gradient(to right, #5952d5, #0f0b3a) 1;
        }

        .top-item-button:hover {
            background-color: white;
            color: #201e43;
        }

        .popup-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 135px;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
        }

        .popup-content {
            position: fixed;
            background: #201e43;
            padding: 20px;
            width: 400px;
            height: 400px;
            border-radius: 8px;
            text-align: center;
            border: 2px solid;
            border-image: linear-gradient(to right, #5952d5, #0f0b3a) 1;
        }

        h2 {
            color: white;
        }

        .table-data {
            width: 300px;
            margin-left: 30px;
            margin-top: 30px;
            margin-bottom: 180px;
        }

        /* Tablet and mobile adjustments */
        @media (max-width: 1024px) {
            .navbar {
                width: 200px;
                padding: 10px;
            }

            .navbar .logo img {
                width: 140px;
            }

            .main-content {
                margin-left: 220px;
                width: calc(100% - 220px);
            }

            .button-container {
                margin-left: 200px;
                margin-top: 100px;
            }

            table {
                width: auto;
                margin-left: 10px;
            }
        }

        @media (max-width: 768px) {
            .navbar {
                width: 100px;
                padding: 10px;
                align-items: center;
            }

            .navbar .logo img {
                width: 100px;
            }

            .navbar ul li {
                margin: 10px 0;
            }

            .navbar ul li a {
                font-size: 16px;
                padding: 8px;
            }

            .main-content {
                margin-left: 100px;
                width: calc(100% - 100px);
            }

            table {
                width: 100%;
                margin-top: 10%;
            }

            .header-controls,
            .button-container {
                position: static;
                margin-top: 10px;
                width: 100%;
            }
        }

        @media (max-width: 480px) {
            .navbar {
                width: 80px;
                padding: 5px;
            }

            .navbar .logo img {
                width: 80px;
            }

            .navbar ul li a {
                font-size: 14px;
                padding: 5px;
            }

            .main-content {
                margin-left: 80px;
                padding: 10px;
                width: calc(100% - 80px);
            }

            .button-container,
            .header-controls {
                flex-direction: column;
                gap: 5px;
                width: 100%;
                margin-left: 0;
                margin-top: 10px;
            }

            .popup-content {
                width: 90%;
                height: auto;
                padding: 15px;
            }
        }
</style>