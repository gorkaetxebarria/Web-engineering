function addColumn(){
  let table = document.getElementById("table");
  let rows = table.getElementsByTagName("tr");
  let newColPos = rows[0].cells.length;
  
  for(let i = 0; i < rows.length; i++) {
    let cell = rows[i].insertCell(newColPos);
    cell.innerHTML = i + "-"+rows[0].cells.length;
  }
}
