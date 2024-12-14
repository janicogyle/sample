<template>


    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Help Center</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet">
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
        <router-link to="/StaffDashboard" >
            <span class="material-icons-sharp">grid_view</span>
            <h3>Dashboard</h3>
        </router-link>
    
        <router-link to="/StaffInventory">
            <span class="material-icons-sharp">inventory</span>
            <h3>Inventory</h3>
        </router-link>

        <router-link to="/StaffHelpSupport" class=" active">
            <span class="material-icons-sharp">help</span>
            <h3>Help Support</h3>
        </router-link>
    
        <router-link to="/Logout">
            <span class="material-icons-sharp">logout</span>
            <h3>Logout</h3>
        </router-link>
    </div>
            </aside>
           
           
                <div class="main-content">
                    <h1 class="dash-text">Help Center</h1>
                </div>
   
             
                <div class="about">
                    <h1>About Our System</h1>
                    <p>The StockUp Inventory Management System helps educational institutions efficiently manage their inventory of school supplies and resources.</p>
                </div>
   
                <div class="qrg-wrapper">
    <div class="header">
      <h1>Quick Reference Guides</h1>
    </div>
    <div class="qrg-inner">
      <div
        class="qrg-item"
        v-for="(item, index) in qrgItems"
        :key="index"
        @click="toggleQRG(index)"
        :class="{ active: item.active }"
      >
        <h3>
          <b>{{ item.title }}</b>
          <span class="qrg-plus" :class="{ active: item.active }">
            <i class="fa-solid fa-plus"></i>
          </span>
        </h3>
        <div class="qrg-body" v-show="item.active" :style="{ maxHeight: item.active ? '1000px' : '0px' }">
          <b>Steps:</b>
          <ul>
            <li v-for="(step, stepIndex) in item.steps" :key="stepIndex">
              <b>{{ stepIndex + 1 }}.</b> {{ step }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
   
  <div class="faq-wrapper">
    <div class="header">
      <h1>Frequently Asked Questions</h1>
    </div>


    <div class="faq-inner">
      <div
        class="faq-item"
        v-for="(item, index) in faqItems"
        :key="index"
        @click="toggleFAQ(index)"
        :class="{ active: item.active }"
      >
        <h3>
          {{ item.question }}
          <i class="fa-solid fa-chevron-down chevron" :class="{ active: item.active }"></i>
        </h3>
        <div class="faq-body" :style="{ height: item.active ? 'auto' : '0' }">
          <p>{{ item.answer }}</p>
        </div>
      </div>
    </div>
  </div>  
   
                <!-- CONTACT FORM -->
                <div class="contact-form">
                    <div class="header">
                        <h2>Contact Support</h2>
                    </div>
                    <form id="contactForm" class="contact-form-inner" action="mailto:stockup.imsystem@gmail.com" method="post" enctype="text/plain">
                        <input type="text" placeholder="Your Name" required>
                        <input type="email" placeholder="Your Email" required>
                        <input type="text" placeholder="Subject" required>
                        <textarea placeholder="Your Question or Message" rows="4" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </template>
   
   
        <!--BAHALA KANA DITO JOHANNES HAHAHAHAHAHAHHA-->
<script>
export default {
  data() {
    return {
      qrgItems: [
        {
          title: 'Navigating the Dashboard',
          active: false,
          steps: [
            'Log in to the system using your username and password.',
            'Click on the Dashboard option from the navigation bar.',
            'View key information such as: Popular items, Recent user activities, Inventory summaries.',
            'Use shortcuts on the dashboard to access specific features.',
          ],
        },
        {
          title: 'Adding New Items to Inventory',
          active: false,
          steps: [
            'Navigate to the Inventory section.',
            'Click on the Add Item button.',
            'Fill in the required details such as: Item name, Category, Quantity, Other specifications.',
            'Click the Save button to add the item to the inventory.',
          ],
        },
        {
          title: 'Removing Items from Inventory',
          active: false,
          steps: [
            'Go to the Inventory section.',
            'Select the item you wish to remove.',
            'Click the Delete button.',
            'Confirm the deletion to remove the item from the system.',
          ],
        },
        {
          title: 'Generating Stock Reports',
          active: false,
          steps: [
            'Go to the Reports section from the dashboard.',
            'Choose the type of report you wish to generate.',
            'Set the filters such as date range, categories, or item status.',
            'Click on Generate Report to view or download the report.',
          ],
        },
      ],
      faqItems: [
        {
          question: "What should I do if I cannot access the dashboard?",
          answer: "Ensure you’re logged in with the correct credentials. If the issue persists, contact system support for assistance.",
          active: false,
        },
        {
          question: "How do I add new items to the inventory?",
          answer: "Navigate to the Inventory section and click Edit. Fill in the required details (e.g., name, category, quantity) and click Add button.",
          active: false,
        },
        {
          question: "What happens if I enter incorrect stock levels?",
          answer: "Click Edit in the Inventory section. Input the correct details of the existing item and click the Update button.",
          active: false,
        },
        {
          question: "How can I view the login history for all users?",
          answer: "Admins can view login history in the Login Tracker, where all staff login/logout records are displayed.",
          active: false,
        },
        {
          question: "How can I contact support for further assistance?",
          answer: "Use the Contact Support option in the Help Center to reach our technical team. Provide a detailed description of the issue for faster resolution.",
          active: false,
        },
        {
          question: "How can I delete an item from the inventory?",
          answer: "Navigate to the Inventory section and click Edit. Fill in the required details (e.g., name, category, quantity) of the item you want to delete and click the Delete button.",
          active: false,
        },
        {
          question: "How can I update the details of an item?",
          answer: "Navigate to the Inventory section and click Edit. Fill in the required details (e.g., name, category, quantity) of the item you want to update and click the Update button.",
          active: false,
        },
      ],
      bodyHeight: '0',
    };
  },
  methods: {
    toggleQRG(index) {
      this.qrgItems.forEach((item, i) => {
        item.active = i === index ? !item.active : false;
        this.bodyHeight = item.active ? 'auto' : '0';
      });
    },
    toggleFAQ(index) {
      this.faqItems.forEach((item, i) => {
        item.active = i === index ? !item.active : false;
        this.bodyHeight = item.active ? 'auto' : '0';
      });
    },
  },
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
        width: 100vw;
        height: 100vh;
        font-family: poppins, sans-serif;
        font-size: 0.88rem;
        background-color: rgb(160, 173, 237);
        user-select: none;
        overflow-x: hidden;  
        color: #363949;
    }
   
    .container {
    display: grid;
    width: calc(93% - 14rem); /* Adjust the width to account for the sidebar */
    margin-left: 17rem; /* Add margin to the left to avoid overlap */
    gap: 1.8rem;
    grid-template-columns: auto; /* Change to a single column layout */
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
   
 
   
    main .dash-text {
        position: absolute;
        top: 1rem;
        left: 17rem;
        color: black;
   
    }
   
   
    /* ABOUT SECTION */
    .about {
        width: 60rem;
        margin: 0.1rem auto;
        padding: 1rem;
        background: #363636;
        color: white;
        border-radius: 10px;
        text-align: center;
        position: relative;
        left: 4rem;
        transform: translateX(0); /* Removed translateX(-50%) */
        z-index: 1;
    }
   
   
    .about h2 {
        padding: 0.8rem;
    }
   
    .about p {
        background: white;
        color: #363636;
        padding: 1rem;
        border-radius: 5px;
        font-size: 15px;
    }
/* QUICK REFERENCE GUIDE */
.qrg-wrapper {
  width: 65rem;
  padding: 1rem;
  border-radius: 10px;
  position: relative;
  margin: 0.1rem auto;
  left: 4rem;
  z-index: 1;
}


.qrg-inner {
  background: #f9f9f9;
  border-radius: 10px;
  padding: 1rem;
}


.qrg-item {
  border: 2px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
  transition: background-color 0.3s ease;
  font-size: 1rem;
}


.qrg-item h3 {
  font-weight: bold;
  font-size: 1rem;
}


.qrg-item b {
  color: #363636;
}


.qrg-item .qrg-body {
  padding-left: 10px;
  transition: max-height 0.5s ease-in-out;
  overflow: hidden;
}


.qrg-item ul {
  list-style-type: disc;
  padding-left: 20px;
}


.qrg-item .qrg-plus {
  float: right;
  font-size: 15px;
  cursor: pointer;
}


.qrg-item.active h3 {
  color: #0000ff;
}


.qrg-item:hover {
  background-color: #f9f9f9;
}


.qrg-item .qrg-plus.active {
  color: #0000ff;
}
 /* FREQUENTLY ASKED QUESTIONS */
.faq-wrapper {
  width: 65rem;
  margin: 0.1rem auto;
  padding: 1rem;
  color: white;
  border-radius: 10px;
  left: 4rem;
  z-index: 1;
  position: relative;


}


.faq-inner {
  background: #f9f9f9;
  border-radius: 10px;
  padding: 1rem;
}


.faq-item {
  border: 2px solid #ccc;
  padding: 15px;
  border-radius: 10px;
  background-color: white;
  font-size: 1rem;
}


.faq-item h3 {
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
  color: #363636;
}


.faq-item .chevron {
  font-size: 15px;
  cursor: pointer;
  transition: transform 0.3s ease;
}


.faq-item .chevron.active {
  transform: rotate(180deg);
}


.faq-item .faq-body {
  padding-left: 10px;
  height: 0;
  overflow: hidden;
  color: #677483;
  transition: height 0.3s ease;
}


.faq-item .faq-body p {
  margin: 0;
  color: #363636;
}


.faq-item:hover {
  background-color: #f1f7f5;
}


.faq-item.active h3 {
  color: #0000ff;
}


.faq-item .chevron.active {
  color: #0000ff;
}
   
    .header {
        background: #363636;
        color: #fff;
        padding: 0.8rem;
        border-radius: 10px;
        text-align: center;
    }
   
    .header h1 {
        margin:  0;
    }
   
    .contact-form {
        width: 50rem;
        margin: 0.1rem auto;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0 2px  10px rgba(0, 0, 0, 0.1);
        position: relative;
        left: 4rem;
        transform: translateX(0); /* Removed translateX(-50%) */
        z-index: 1;
    }
   
    .contact-form-inner {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 1rem;
    }
   
    .contact-form input,
    .contact-form textarea {
        padding: 0.8rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;
        color: #363636;
    }
   
    .contact-form input:focus,
    .contact-form textarea:focus {
        border-color: #00ffff;
        outline: none;
    }
   
    .contact-form button {
        padding: 0.8rem;
        background: #363636;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        transition: background 0.3s ease;
    }
   
    .contact-form button:hover {
        background: #00ffff;
        color: #0000ff;
    }






@media (max-width: 957px) {
body {
    font-size: 0.75rem; /* Smaller font size for mobile */
}


.container {
    width: 100%; /* Full width on mobile */
    margin-left: 0; /* Remove left margin */
}


.about, .qrg-wrapper, .faq-wrapper, .contact-form {
    width: 90%; /* Adjust width for mobile */
    margin: 0 auto; /* No margin for very close spacing */
    position: relative;
    left: 0;
}


h1, h2, h3 {
    font-size: 1.2rem;
}


.qrg-item, .faq-item {
    font-size: 0.9rem;
}


.contact-form input, .contact-form textarea,
.contact-form button {
    font-size: 0.9rem;
}
    @media (max-width: 768px) {


        .main-content .dash-text {
        font-size: 2rem;
    }
    .container {
        width: 100%;
        margin-left: 1rem;
       
    }


    .about, .qrg-wrapper, .faq-wrapper, .contact-form {
        width: 90%;
        margin: 0 auto;
        position: relative;
        left: 0;
        margin-right: 3rem;
        margin-bottom: 0 auto;


    }


    h1, h2, h3 {
        font-size: 1.2rem;
    }


    .qrg-item, .faq-item {
        font-size: 0.9rem;
    }


    .contact-form input, .contact-form textarea,
    .contact-form button {
        font-size: 0.9rem;
    }
}


@media (max-width: 480px) {
    .main-content .dash-text {
        font-size: 1.5rem;
        left: 2rem;
    }


    h1, h2, h3 {
        font-size: 1rem;
    }


    .qrg-item, .faq-item {
        font-size: 0.8rem;
    }


    .contact-form input, .contact-form textarea,
    .contact-form button {
        font-size: 0.8rem;
    }
}
}
</style>
