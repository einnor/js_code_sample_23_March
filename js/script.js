/**
 * Cytonn Technologies
 *
 * @author: Ronnie Nyaga <rnyaga@cytonn.com>
 *
 * Project: js.app
 *
 */

//CODE SAMPLES FOR IN-BUILT EVENT LISTENERS
function postStatus(){
  var myStatus = document.getElementById('myInput').value;
  document.getElementById('status').innerHTML = myStatus;
}
// function deleteItem(){
//   this.parentNode.removeChild(this);
// }
function convertToUpper(){
  var upper = document.getElementById('myText').innerHTML
  document.getElementById('myText').innerHTML =  upper.toUpperCase();
}
