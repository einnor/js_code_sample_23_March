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
function convertToUpper(){
  var upper = document.getElementById('myText').innerHTML
  document.getElementById('myText').innerHTML =  upper.toUpperCase();
}


//CODE SAMPLE FOR CUSTOM EVENTS
 document.onload= function() {
   document.body.addEventListener("myEventName", doSomething, false);

   function doSomething(e) {
       alert("Event is called: " + e.type);
   }

   var myEvent = new CustomEvent("myEventName");
   document.body.dispatchEvent(myEvent);
 };


 //CODE SAMPLE FOR PROMISE
 function readJSON(filename){
  return new Promise(function (fulfill, reject){
    readFile(filename, 'utf8').done(function (res){
      try {
        fulfill(JSON.parse(res));
      } catch (ex) {
        reject(ex);
      }
    }, reject);
  });
}

function promise(){
  console.log(readJSON('json.txt'));
  document.getElementById('jsondata').innerHTML = readJSON('json.txt');
}
