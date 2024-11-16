<template>
    <div>
<nav class="navbar">
    <div class="logo"> 
            <img src="../src/assets/images/logo.png" alt="src/assets/images/logo.png">
    </div>
    <ul>
        <li><router-link to="/dashboard">DASHBOARD</router-link></li>
        <li><router-link to="/inventory">INVENTORY</router-link></li>
        <li><router-link to="/stockreport">STOCK REPORT</router-link></li>
        <li><router-link to="/logintracker">LOGIN TRACKER</router-link></li>
    </ul>
    <div class="logout">
        <router-link to="/logout">LOG OUT <i class="fas fa-sign-out-alt"></i></router-link>            
    </div>
</nav>
</div>
<router-view/>

</template>

<style scoped>

body {
    background-image: url(../src/assets/images/bg.png);
}
.navbar {
    
    background-color: white;
    width: 250px;
    padding: 1px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    position: fixed;
    text-align: center;
}

.navbar .logo {
    
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 20px;
}

.navbar .logo img {
    width: 260px;
    height: 230px;
}

.navbar ul {
    list-style: none;
   margin-right: 5px;
}

.navbar ul li {
    margin: 15px 0;
}

.navbar ul li a {
    color: black;
    text-decoration: none;
    font-size: 18px;
    display: block;
    padding: 16px;
    transition: 0.3s;
    font-weight: bolder;
}

.navbar ul li a:hover {
    background-color: #9b9ea4;
    border-radius: 5px;
}

.navbar .logout a {
    color: black;
    text-decoration: none;
    display: block;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    font-weight: bolder;
    margin-bottom: 50px;
}
.navbar .logout a:hover{
    background-color: #9b9ea4;
    border-radius: 5px;
}


</style>
