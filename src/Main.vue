<template>
   
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dashboard</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp "
        rel="stylesheet">  
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
       
    </head>
 
        <div class="container">
        
             <!-- Profile on top  -->

    <div class = "right">
        <div class= "top">
            <button id ="menu-btn">
                <span class="material-icons-sharp">menu</span>
            </button>
        </div>
    </div>
        <!-- End of top -->
        </div>    
    
    
            <!--_----------------- OA END OF NAV BAR -------------------------- -->
                <!-- End Recent  -->
    
        <!-- <script src="./order.js"></script>
        <script src="./index.js"></script> -->
   < <router-view/>>
    </template>
    
    <script> 
    
    </script>
    
    <style>
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
   background: url(../src/assets/images/back.png);
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


/* DROPDOWN CONTAINER */
.dropdown {
 position: relative;
 width: 250px; 
 top: 2rem;
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
}

main .dash-text{
   color: black;
}

/* PRODUCT TABLE */
.product-table {
 width: 1190px;
 margin-top: 4rem;
 padding: 1rem;
 background-color: white;
 border-radius: 8px;
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
 overflow: hidden;
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
/* tabble mode  */
@media screen and (max-width: 1200px) {

.container{
    width: 94%;
    grid-template-columns: 5rem auto 23rem;
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

main .recent-orders{
    width:100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 2rem 0 0 8.8rem;
}

main .recent-orders table{
    width: 84vw;
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