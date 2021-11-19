var button=document.querySelector(".btn");
console.log(button);
button.addEventListener("click",onClick);

function onClick(){
    // console.log("hi");
    // let textColor=document.querySelectorAll('h1');
    let textColor=document.querySelectorAll('.colorchange');
    textColor[0].style.color="red";
}

  /* for add row to the table  */

  var button1=document.querySelector(".btn2");

  button1.addEventListener("click",myFunction);

  function myFunction(){
      // console.log('hi')
     let tableItem= document.getElementById("itemtable");

     let newItem=tableItem.insertRow(4);
     var newItem1= newItem.insertCell(0);
     var newItem2=newItem.insertCell(1);
     var newItem3= newItem.insertCell(2);
     newItem1.innerHTML="Tom";
     newItem2.innerHTML=6423190769;
     newItem3.innerHTML="<button>Delete</button>";

     button1.disabled=true;

      
  }
   /* for  delete row from the table  */

var buttonDelete=document.querySelectorAll("#itemtable .deletebtn1");
//console.log(buttonDelete);

Array.from(buttonDelete).forEach((btn) =>{
  btn.addEventListener("click",function(e){

    let li =e.target.parentElement;
    //console.log(e.target); current element <button>
    // console.log(li); parent element <td >
    li.parentNode.remove();
  });
  
});

//   var deleteBtn=document.querySelectorAll("button")

// deleteBtn[1].addEventListener("click", function(){
//     document.querySelector("#row1").remove();
// })
// deleteBtn[2].addEventListener("click", function(){
//     document.querySelector("#row2").remove();
// })
// deleteBtn[3].addEventListener("click", function(){
//     document.querySelector("#row3").remove();
// })

 /* for add theme  */

 var themeButton=document.querySelector(".btn3");

 themeButton.addEventListener("click" ,myTheme);

function myTheme() {
    let presentTheme=document.querySelector(".themChanger");
    presentTheme.classList.toggle("dark");
    themeButton.innerText="Dark Theme"
 
}


