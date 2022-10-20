function createList(){
  let date = new Date();

  let today = document.createTextNode(date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate());
  let time = document.createTextNode(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

  let dayOfWeekNumber = date.getDay(); 
  let nameOfDay;
  switch(dayOfWeekNumber){
    case 0: nameOfDay = document.createTextNode("Sunday"); break;
    case 1: nameOfDay = document.createTextNode("Monday"); break;
    case 2: nameOfDay = document.createTextNode("Tuesday"); break;
    case 3: nameOfDay = document.createTextNode("Wednesday"); break;
    case 4: nameOfDay = document.createTextNode("Thursday"); break;
    case 5: nameOfDay = document.createTextNode("Friday"); break;
    case 6: nameOfDay = document.createTextNode("Saturday"); break;
  }

  let newList = document.createElement("ul");
  newList.style.border = "1px solid black";
  newList.style.float = "left";
  newList.style.padding = "1rem 1rem 1rem 2rem";
  
  let listItem1 = document.createElement("li");
  let listItem2 = document.createElement("li");
  let listItem3 = document.createElement("li");

  listItem1.appendChild(today);
  newList.appendChild(listItem1);
  listItem2.appendChild(nameOfDay);
  newList.appendChild(listItem2);
  listItem3.appendChild(time);
  newList.appendChild(listItem3);

  document.body.append(newList);
}