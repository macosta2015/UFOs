//A file in our repo folder names app.js 
//We will keep the code that builds the HTML and fills it with data from data.js

// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello(){
    console.log("Hello there!")
};


//some JavaScript runs
//console.log(addition(4, 5));
//addition(4, 5);

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

  function handleClick(){
    let date = d3.select("#datetime").property("value");
  }