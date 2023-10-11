// ----------------------------------------------------------------

/* Declare and initialize global variables
-------------------------------------------------- */
var pageBg = document.querySelector("html");
var sliders = document.getElementsByTagName("input");
var rgb = [0, 0, 0];

/* Event handlers for range sliders
-------------------------------------------------- */
for (var i = 0; i < sliders.length; i++) {
  // Loop through the three range inputs and for each one, add an onchange event listener
  sliders[i].onchange = function () {
    // If an input range slider is moved, grab it’s id attribute value
    var whichSlider = this.getAttribute("id");
    // …also, grab the numerical value that it is set to
    var sliderValue = this.value;
    // Declare a new variable to hold the new RGB value that calls a function that updates the global rgb variable, passing in what slider was moved (whichSlider), and its value (sliderValue)
    newRgb = changeRgb(whichSlider, sliderValue);
    // Call a function that builds a new CSS background-color property (as a string), passing it the updated RGB array (newRgb)
    var newCSS = writeCSS(newRgb);
    // Directly change the background-color of the page using the new CSS rgb value
    pageBg.style.backgroundColor = newCSS;
  };
}

/* Functions
-------------------------------------------------- */
// STEP 1: Write a function called changeRgb that accepts two parameters, channel and value
function changeRgb(channel, value) {
  // STEP 2: Build a switch based on the value of the channel parameter (red, green, or blue)
  switch (channel) {
    case "red":
      // STEP 3: Inside the "red" case, update the appropriate global rgb array element (0) with the new value
      rgb[0] = value;
      break;
    case "green":
      // STEP 3: Inside the "green" case, update the appropriate global rgb array element (1) with the new value
      rgb[1] = value;
      break;
    case "blue":
      // STEP 3: Inside the "blue" case, update the appropriate global rgb array element (2) with the new value
      rgb[2] = value;
      break;
  }
  // STEP 4: Return the updated rgb array back to the event handler
  return rgb;
  console.log(rgb);
}

// STEP 5: Write a new function called writeCSS that accepts one parameter, the updated rgb array
function writeCSS(updatedRgb) {
  // STEP 6: Declare a new local variable called newColor that will contain the new string that will be used to update the CSS background-color property in the following format: rgb(0,0,0) - initialize it with the start of the string, 'rgb('
  var newColor = "rgb(";

  // STEP 7: Create a while loop that iterates through the array passed into this function, called updatedRgb
  var i = 0;
  while (i < updatedRgb.length) {
    // STEP 8: For each element of the array, add to the string newColor, the red, green, and blue values, each followed by a comma
    newColor += updatedRgb[i];
    if (i < updatedRgb.length) {
      newColor += ", ";
    }
    i++;
  }

  // STEP 9: Slice off the last comma from the string contained by the variable, newColor - we don’t need it
  newColor = newColor.slice(0, -2);

  // STEP 10: Finish off the newColor string by adding the closing ')'
  newColor += ")";

  // STEP 11: Return the string newColor back to the event handler
  return newColor;
}

// STEP 12: Enjoy the application in your browser!

// This page inspired by https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values
