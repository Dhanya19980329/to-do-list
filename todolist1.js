<!DOCTYPE html>
<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <title> My Task List </title>
    <link rel="stylesheet" type="text/css" href="css\new2.css">
	 <link href="calendar.css" rel="stylesheet">
    <script src="calendar.js"></script>
  </head>
  <body>
    <div class="header">
      <h2 style="margin:10px">My Task In Apollo Enterprises</h2>
	  <ul id="MainMenu">
	  <li> List </li>
	  <li> Calender </li>
	  <li> Files </li>
	  </ul>
      <input type="text" id="myInput" placeholder="Title...">
      <button type="button" id="add-task" onclick="addtask()">Add Task </button>
    </div>
	<div id="page-body">
    <!-- [PERIOD SELECTOR] -->
    <div id="cal-date">
      <select id="cal-mth"></select>
      <select id="cal-yr"></select>
      <input id="cal-set" type="button" value="SET"/>
    </div>

    <!-- [CALENDAR] -->
    <div id="cal-container"></div>

    <!-- [EVENT] -->
    <div id="cal-event"></div>
  </div>
    <ul id="myUL">
	
     
    </ul>
    <button type="button" id="delete" onclick="removeAll()">Delete</button>
	
    
    <script>
      $(document).ready(function(){
           var result=$("#myUL");
           $("#add-task").click(function(){
               var requestdata=$("#myInput").val();
               $("#myUL").append('<li>'+requestdata+'</li>');

           })
})

    </script>
  </body>
  </html>