function addRow(){
  let table = document.getElementById("table");
  let row = table.insertRow();
  for(let i = 0; i < 3;i++) {
    let cell = row.insertCell(i);
    cell.innerHTML = row.rowIndex + "-"+i;
  }
}

function addRow2(){
  let table = document.getElementById("table");
  let elm = document.createElement('tr');
  let str = "";
  for(let i = 0; i < 3; i++){
    str = str + "<td>"+table.rows.length+"-"+i+ "</td>";
  }
  elm.innerHTML = str;
  table.appendChild(elm);
}
