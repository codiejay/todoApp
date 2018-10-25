// Messages and data
let task = "";
let importance = false;
let delButton;
let doneButton;
let taskCount = $(".taskCount");



// Values
let taskValue = $("input:text")



// Welcome Page!
const welcomePage = $(".welcome")

// TaskIn Page
const taskIn = $(".taskIn");


// TaskOut Page
const taskOut = $(".taskOut")

// Hiding  the welcomepage and showing the Input-task page!
welcomePage.on("click", ".welcome_start", function(){
    welcomePage.hide(1000)
    taskIn.delay(1000);
    taskIn.show(3200)
})


taskIn.on("click", function(e){ //setting an event listener on the entire body of the Task-in page!
   if($(e.target).attr("id") === "add"){ //if the "Add" button is clicked && the input-value ISNT === " "
      if(taskValue.val() === ""){
          $(".taskIn_error").show(); //pops an error message if input-box is empty
      }

        else if($("input:text").val() !== "")
      {
        $(".taskIn_error").hide()
          task = taskValue.val();
          if($("input:checked").length > 0){
              importance = true;
          }
        //   increase task counter;
        taskCount.html(parseInt(taskCount.html()) + 1);

        $("input:checked").prop("checked", false); //Unmarking the checkBox;
        taskValue.val("");
        if(importance === true){ //making templates for if the task is important or not!
        $("<div class='taskOut_Item important'> <p> " + task + "</p> <span><i class='material-icons done strike' style='font-size:24px' id='check'>check</i><i class='material-icons delete' id='deletes' style='font-size:24px'>delete</i></span>   <div class='seperator'></div>").appendTo(taskOut);
        }
        else{
        $("<div class='taskOut_Item '> <p> " + task + "</p> <span><i class='material-icons done strike' style='font-size:20px' id='check'>check</i><i class='material-icons delete' id='deletes' style='font-size:20px'>delete</i></span>   <div class='seperator'></div>").appendTo(taskOut);
        }
          
          importance = false;
          doneButton = $(".taskOut_Item").children("span").children(".done");
          delButton = $(".taskOut_Item").children("span").children(".delete");
          

          
         
        
        }
   }

   

// Take you from the taskIn page to the taskOyut page!
   else if($(e.target).attr("id") === "tolist"){
    taskOut.show(2000)
    taskIn.hide(2000)
   }
})






// returning user to the taskIn page!
taskOut.children(".taskOut_header").on("click", function(){
    taskOut.hide(2000);
    taskIn.show(2200);
})

// Hiding the error message when the input box is clicked again!
$("input:text").focus(function () { 
    $(".taskIn_error").hide(1000)
    
});



// this function is to check at every second or even less if the length and updating the task-counter;
taskOut.on("click", function(e){
    if($(e.target).attr("id") === "deletes"){
       $(e.target).parents(".taskOut_Item").hide(1000);
       taskCount.html(parseInt(taskCount.html()) - 1);
    }

    else if($(e.target).attr("id") === "check"){
      $(e.target).parents(".taskOut_Item").fadeOut(1000);
      taskCount.html(parseInt(taskCount.html()) - 1);
      
       
    }

})


