"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);


function setup() {
  $("#button").on("click", talk);
}

function talk() {
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes();
  let tellTime = "it is " + time;

    responsiveVoice.speak("What time is it", "UK English Male");
    responsiveVoice.speak(tellTime, "UK English Female");
    responsiveVoice.speak("Wrong. It's pizza time", "UK English Male");
    responsiveVoice.speak("epic", "UK English Female");
}
