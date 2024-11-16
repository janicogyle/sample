<template>
    <div class="Dashboard">
        <div class="row" id="one">
          <h2 class="text-lg font-bold">TOP ITEMS IN INVENTORY</h2>

          <form method="POST">
            <table class="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>APPLES</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>BANANAS</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>ORANGES</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>MAGNO</td>
                </tr>
              </tbody>
            </table>
          </form>
          
        </div>
        
        <div class="container">
          <div class="row" id="two">
            <h2 class="text-lg font-bold">TO DO LIST:</h2>
            <ul class="todo-list">
              <li>
                <input type="checkbox" checked />
                <span>Kakain</span>
              </li>
              <li>
                <input type="checkbox" checked />
                <span>Matututulog</span>
              </li>
              <li>
                <input type="checkbox" checked />
                <span>luto</span>
              </li>
              <li>
                <input type="checkbox" checked />
                <span>hugas</span>
              </li>
              <li>
                <input type="checkbox" checked />
                <span>linis</span>
              </li>
            </ul>
          </div>
    
          <div class="row" id="three">
            <h2 class="text-lg font-bold">RECENTLY PURCHASED ITEM</h2>
            <canvas id="stockChart"></canvas>
            <table class="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>APPLES</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>BANANAS</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>ORANGES</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>WATERMELON</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="row" id="four">
          <h2 class="text-lg font-bold">LOGIN TRACKER</h2>
          <table class="table">
            <thead>
              <tr>
                <th>STAFF ID</th>
                <th>NAME</th>
                <th>DATE & TIME</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>101</td>
                <td>LENG</td>
                <td>12/25/24 9:25:43.6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

</template>

<script>

export default {
  name: 'Dashboard',
  components: { }   
}
</script>

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

      .table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;

      }
      .table th, .table td {
        border: 1px solid #cccccc;
        padding: 10px;
        text-align: left;
      }
      .todo-list {
        margin-top: 10px;
        text-align: left;
        margin-left: 40px;
      }
      .todo-list input {
        margin-right: 10px;
        
      }
      canvas {
       position: absolute;
      }
</style>