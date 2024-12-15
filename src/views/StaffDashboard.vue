<template>

    <head>

       <meta charset="UTF-8">

       <meta name="viewport" content="width=device-width, initial-scale=1.0">

       <title>Dashboard</title>

       <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp "

       rel="stylesheet"> 

       <link href="https://fonts.googleapis.com/icon?family=Material+Icons"

     rel="stylesheet">

         <!-- style sheet eme -->

       <link rel="stylesheet" href="style.css">

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
           <router-link to="/StaffDashboard" class=" active">
               <span class="material-icons-sharp">grid_view</span>
               <h3>Dashboard</h3>
           </router-link>
       
           <router-link to="/StaffInventory">
               <span class="material-icons-sharp">inventory</span>
               <h3>Inventory</h3>
           </router-link>
       
           <router-link to="/StaffHelpSupport" >
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

             <h1 class="dash-text">Dashboard</h1>

              <div class="date">

                <input type="date">

              </div>

   

           <div class="insights">

               <div class="sales">

                     <span class="material-icons-sharp"> analytics </span>

                   <div class="middle">

                       <div class="left">

                           <h3>Total Stocks</h3>

                           <h2>800 stocks</h2>

                       </div>

                   </div>

               </div>

               <!-- end of ka emehan sales track -->

   

               <!-- start of income  -->

               <div class="expenses">

                   <span class="material-icons">trending_up</span>   

                 <div class="middle">

                     <div class="left">

                         <h3>Total High Stocks</h3>

                         <h2>400 stocks</h2>

                     </div>   

                 </div>

                 

             </div>

   

             <!-- 2nd card total stocks -->

   

             <div class="income">

               <span class="material-icons"> trending_down</span>

             <div class="middle">

                 <div class="left">

                     <h3>Total Low Stock</h3>

                     <h2>400 stocks </h2>

                 </div>

             </div>

         </div>

   

         <!-- 3nd card INCOME  -->

   </div>

       <!--   INVENTORY TRACKER  -->

       <div class="recent-orders">

           <h2> Inventory</h2>

           <table>

               <thead>

                   <tr>

                       <th>Product Id</th>

                       <th>Product</th>

                       <th>Category</th>

                       <th>Quantity</th>

                       <th>Status</th>

                </tr>

            </thead>

           <tbody>

               <tr>

                   <td>101</td>

                   <td>Pencil</td>

                   <td>Writing Supply</td>

                   <td>11</td>

                   <td class="warning">Low</td>

               </tr>

               <tr>

                   <td>101</td>

                   <td>Pencil</td>

                   <td>Writing Supply</td>

                   <td>11</td>

                   <td class="warning">Low</td>

               </tr>

               <tr>

                   <td>101</td>

                   <td>Pencil</td>

                   <td>Writing Supply</td>

                   <td>11</td>

                   <td class="warning">Low</td>

               </tr>

               <tr>

                   <td>101</td>

                   <td>Pencil</td>

                   <td>Writing Supply</td>

                   <td>11</td>

                   <td class="warning">Low</td>

               </tr>

               <tr>

                   <td>101</td>

                   <td>Pencil</td>

                   <td>Writing Supply</td>

                   <td>11</td>

                   <td class="warning">Low</td>

               </tr>

           </tbody>

        </table>

        <a href="#"> Show All</a>

       </div>

       <div class="right">

                <div class="top">

                    <button id="menu-btn" @click="toggleMenu">

                        <span class="material-icons-sharp">menu</span>

                    </button>

                </div>

            </div>

           <!-- End of top -->

       </main>

       <!-- END OF MAIN -->

       <!-- Profile on top  -->

   

   </div>

               <!-- End Recent  -->

   

       <!-- <script src="./order.js"></script>

       <script src="./index.js"></script> -->

   </template>

   

   <script>

 export default {

    data() {

        return {

            isMenuVisible: false

        };

    },

    methods: {

        toggleMenu() {

            this.isMenuVisible = !this.isMenuVisible;

        }

    }

};

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

       background-repeat: no-repeat;

       background-attachment: fixed;

       background-size: cover;

       width: 100vw;

       height: 100vh;

       font-family: poppins, sans-serif;

       font-size: 0.88rem;

       user-select: none;

       overflow-x:hidden;  

       color: #363949;

   }

   

   .container{

       display: grid;

       width: 96%;

       gap:3vh;

       grid-template-columns: 14rem auto ;

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

   

   /*  ======== MAIN DASH BOARD ============== */

   main{

       margin-top: 1rem;

       grid-column: 2;

       padding: 1rem;

   }

   

   

   main .dash-text{

       color: black;

   }

   

   main .date{

       display: inline-block;

       background: rgba(148, 129, 129, 0.18);

       border-radius:  0.4rem;

       margin-top: 1rem;

       padding: 0.5rem 1.6rem;

   }

   

   main .date input[type="date"]{

       background: transparent;

       color: #212640;;

   }

   

   main .insights {

       display: grid;

       grid-template-columns: repeat(3, 1fr);

       gap: 1.6rem;

   

   }

   

   main .insights > div {

       background: rgba(250, 250, 550, 0.5);

       padding: 1.3rem;

       border-radius: 2rem ;

       margin-top: 1rem;

       box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

       transition: all 300ms ease;

   }

   

   main .insights > div:hover {

       box-shadow: none;

   }

   

   main .insights > div span {

       background: blue;

       padding: 0.5rem;

       border-radius: 50%;

       color: white;

       font-size: 2rem;

   }

   

   main .insights > div.expenses span {

       background: green;

   }

   main .insights > div.income span {

       background-color: red;

   }

   

   main .insights > div .middle {

       display: flex;

       align-items: center;

       justify-content: space-between;

   }

   

   main .insights h3{

       margin: 1rem 0 0.6rem;

       font-size: 1rem;

   }

   

   main .insights .progress {

       position: relative;

       width: 92px;

       height: 92px;

       border-radius: 50%;

   }

   

   

   main .insights .progress .number{

       position: absolute;

       top: 0;

       left: 0;

       height: 100%;

       width: 100%;

       display: flex;

       align-items: center;

   }

   

   main .insights small{

       margin-top: 1.6rem;

       display: block;

   }

   

   /* ======================Inventory========== */

   

   main .recent-orders{

       margin-top: 2rem;

   }

   

   main .recent-orders  h2 {

       margin-bottom: 0.8rem;

   }

   

   main .recent-orders table{

       background:rgba(250, 250, 550, 0.8);

       width: 100%;

       border-radius: 2rem;

       padding: 1.8rem;

       text-align: center;

       box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

       /* transition: all 300ms ease; */

   }

   

   

   main .recent-orders table:hover{

       box-shadow: none;

   }

   

   main table tbody td{

       height: 2.8rem ;

       border-bottom: 1px solid grey;

       color: #677483;

   }

   

   main table tbody tr:last-child{

       border: none

   }

   

   main .recent-orders a{

       text-align: center;

       display: block;

       margin: 1rem auto;

       color: #7380ec ;

   }

   

   /* POTANG INAA MOOOO LOG IN TRACKER  */

   

   main .tracker{

       margin-top: 1rem;

   }

   

   main .tracker  h2 {

       margin-bottom: 0.8rem;

   }

   

   main .tracker table{

       background:rgba(250, 250, 550, 0.8);

       width: 100%;

       border-radius: 2rem;

       padding: 1.8rem;

       text-align: center;

       box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

       /* transition: all 300ms ease; */

   }

   

   

   main .tracker table:hover{

       box-shadow: none;

   }

   

   main table tbody td{

       height: 2.8rem ;

       border-bottom: 1px solid grey;

       color: #677483;

   }

   

   main table tbody tr:last-child{

       border: none

   }

   

   main .tracker a{

       text-align: center;

       display: block;

       margin: 1rem auto;

       color: #7380ec ;

   }

   

   .warning{

       color: Red ;

   }

   

   .primary{

       color: #7380ec;

   }

   

   /* PROFILE PICS  */

   .profile-photo img{

       border-radius: 50%;

       height: 40px;

       width: 40px;

   }

   

   /* RIGHT SIDE  */

    .right{

       margin-top: 1.4rem;

    }

   

    .right .top{

       display: flex;

       justify-content: end;

       gap: 2rem;

       /* background-color; */

    }

   

    .right .top button{

       display: none;

    }

   

   

    .right .top .profile{

       display: flex;

       gap: 2rem;

       text-align: right;

    }

   

   /* =================Media Queries ======================= */

   /* tabble mode  */

   @media screen and (max-width: 1200px) {

   

       .container{

           width: 94%;

           grid-template-columns: 5rem auto;

       }

       aside{

           position: fixed;

           width: 6rem;

       }

   

       aside .logo h2{

           display: none;

       }

   

       aside .sidebar h3{

           display: none;

       }

   

       aside .sidebar a {

           width: 5.6rem;

       }

   

       aside .sidebar a:last-child{

           position: absolute;

           bottom:0px;

       }

   

       main .insights{

           grid-template-columns: 1fr;

           gap: 0;

       }

   

       main .recent-orders {

           width: 100%;

           position: relative;

           left: auto;

           transform: none;

           margin: 2rem 0 0 0;

       }

   

       main .recent-orders table{

           width: 100%;

       }

   

       

   

       main .tracker{

           width: 100%;

           position: relative;

           left: auto;

           transform: none;

           margin: 2rem 0 0 0;

       }

       main .tracker table{

           width: 100%;

       }

   

   

       main table thead tr th:last-child,

       main table thead tr th:first-child {

       display: none;

   

       }

   

       main table tbody tr td:last-child,

       main table tbody tr td:first-child {

       display: none;

   }

   

   /* mobile */

   /* ==========================MOBILE ====================== */

   @media screen  and (max-width: 768px) {

       .container {

           width: 100%;

           grid-template-columns: 1fr;

       }

   

   

       aside {

           position: fixed;

           left: 0;

           top: 0;

           width: 18rem;

           height: 100vh;

           background: rgba(250, 240, 540, 0.3);

           backdrop-filter: blur(9px);

           transform: translateX(-100%); /* Hide by default */

           z-index: 3;

       }

       

       aside.show {

           transform: translateX(0); /* Slide into view */

       }

   

   @keyframes showMenu {

       to {

           left: 0;

       }

   }

   

       aside .logo {

           margin-left: 1rem;  

       }

   

       aside .logo h2{

           display: inline;

       }

       aside .sidebar  h3{

           display: inline;

       }

   

       aside .sidebar a{

           width: 100%;

           height: 3.4rem;

       }

   

       aside .sidebar a:last-child{

          position: absolute;

          bottom: 0;

       }

   

       aside .close{

           display: inline-block;

           cursor: pointer;

       }

       main {

           margin-top: 8rem;

           padding: 0 1rem;

       }

   

       main{

           grid-column: 1;

       

       }

   

       main .recent-orders{

           position: relative;

           margin: 3rem 0 0 0;

           width: 100%;

       }

   

       main .recent-orders table{

           width: 100%;

           margin: 0;

       }

   

       main .tracker{

           position: relative;

           margin: 3rem 0 0 0;

           width: 100%;

       }

   

       main .tracker table{

           width: 100%;

           margin: 0;

       }

   

   

   

   

   

       .right {

           width: 94%;

           margin: 0 auto 4rem;

       }

   

       .right .top{

           position: fixed;

           top: 0;

           left: 0;

           align-items: center;

           padding: 0 0.8rem;

           height: 4.6rem;

           background: rgb(248, 248, 248);

           width: 100%;

           margin: 0;

           z-index: 2;

           box-shadow:  0 1rem 1rem rgb(194, 216, 226);

       }

   

       .right .top .theme-toggler{

           width: 4.4rem;

           position: absolute;

           left: 66%;

       }

   

       .right .profile .info{

           display: none;

       }

   

       .right .top button{

           display: inline-block;

           background: transparent;

           cursor: pointer;

           color: rgb(9, 5, 5);

           position: absolute;

           left: 1rem;

       }

   

       .right .top button span {

           font-size: 2rem;

   

       }

   }

   }

   

   </style>

