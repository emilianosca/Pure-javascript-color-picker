// array with the colors
var colorsArray = [
    "#000000",
    "#FFFFFF",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
];

// Function that for each value in the array, create a color-start-point radio button into forms
function createRadioButtons(colorsArray) {
  let list = document.getElementById("radioForms");
  colorsArray.forEach((item)=>{
    let radio = document.createElement("input"); // create a radio button
    radio.setAttribute("type", "radio"); // set the type of the radio button
    radio.setAttribute("name", "color"); // set the name of the radio button
    radio.setAttribute("id", item); // set the id of the radio button
    radio.setAttribute("value", item); // set the value of the radio button
    list.appendChild(radio);

    // create a label for the radio button
    let label = document.createElement("label");
    label.innerText = hexToRgb(item);
    label.setAttribute("for", item);
    list.appendChild(label);
 
  })
}

// Function that converts hex to rgb
function hexToRgb(hex) {
  var m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
  let rgb = { 
      r: parseInt(m[1], 16),
      g: parseInt(m[2], 16),
      b: parseInt(m[3], 16)
  }
  // transfrom the rgb object to a string
  return `(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

function getId(id) {
    return document.getElementById(id);
}
  
function main() {
    createRadioButtons(colorsArray);
    sliderPicker();
    // for all data inside array
    for (let i = 0; i < colorsArray.length; i++) {
      let temporaryColor = colorsArray[i];
        document.getElementById(temporaryColor).addEventListener("click", (e) => {
        deleteSliderPicker();
        tempoVariable = "rgb" + hexToRgb(temporaryColor);
        sliderPicker(tempoVariable);
  
      }
      );
      
    }
}


// Function that creates a new instance of the color picker
function sliderPicker(color) { new iro.ColorPicker ("#sliderPicker", {

    width: 250,
    color: color,
    borderWidth: 5,
    borderColor: "#fff",
    layout: [
      {
        component: iro.ui.Slider,
        options: {
          sliderType: 'hue'
        }
      },
      {
        component: iro.ui.Slider,
        options: {
          sliderType: 'saturation'
        }
      },
      {
        component: iro.ui.Slider,
        options: {
          sliderType: 'value'
        }
      },
  
      {
        component: iro.ui.Slider,
        options: { 
          sliderType: 'kelvin',
          sliderSize: 40,
        }
      }, 
    ]
} ); 

}
   
// Function that erase the instance of the color picker
function deleteSliderPicker() {
    delete sliderPicker();
    document.getElementById("sliderPicker").innerHTML = "";
} 


main();


