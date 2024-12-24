// function jfun1() {
//   // alert('welcome');
//   document.write("<h1> Wecome to JS</h1>");
// }

function totalMarks() {

  var englishMarks = parseFloat( document.getElementById("english").value || 0);
  var mathsMarks = parseFloat(document.getElementById("maths").value || 0);
  var scienceMarks = parseFloat(document.getElementById("science").value || 0);

  var totalMarks = englishMarks + mathsMarks + scienceMarks;


  var maxMarks=mathsMarks;
  if(englishMarks>maxMarks){
    maxMarks=englishMarks;
  }else if(scienceMarks>maxMarks){
    maxMarks=scienceMarks;
   } 


  alert("Max Marks:" + maxMarks);
}
 
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}