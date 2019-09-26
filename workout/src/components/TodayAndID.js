import React from "react";


function Today() {
let today = new Date();
var d = today.getDate();
var dd = d.toString();
var m = today.getMonth() + 1; //January is 0!
var mm = m.toString();
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
} 
if (mm < 10) {
  mm = '0' + mm;
}
var yy= yyyy.toString().slice(-2);
today = mm + '/' + dd + '/' + yy; 

    return today;
}
function Id() {
    var id = new Date();
    var d = id.getDate();
    var dd = d.toString();
    var m = id.getMonth() + 1; //January is 0!
    var mm = m.toString();
    var yyyy = id.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    } 
    if (mm < 10) {
      mm = '0' + mm;
    }
    var yy= yyyy.toString().slice(-2);
    var id = dd + '/' + mm + '/' + yy; 
    
        return(
            id 
        );
    }
function Weekday() {
  let weekDay = new Date().getDay();
  return ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday',
          'Friday', 'Saturday'][weekDay];
}

    export {Today, Id, Weekday }