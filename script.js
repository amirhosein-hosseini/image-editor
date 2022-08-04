const preview = document.querySelector("#preview");
const previewScale = document.querySelector("#preview-scale");
const previewFlip = document.querySelector("#preview-flip");
const brightnessSlider = document.querySelector("#brightness");
const brightnessSliderValue = document.querySelector("#brightness-value");
const rotateSlider = document.querySelector("#rotate");
const rotateSliderValue = document.querySelector("#rotate-value");

const handleRotate = () => {
  const rotate = rotateSlider.value;
  rotateSliderValue.innerText = rotate;

  // TODO: write your code here
  preview.style.transform = "rotate(" + String(rotate) + "deg)";
  const second_rotate = rotate/180;
  const my_deg = Math.abs(Math.sin(Math.PI * second_rotate)) + Math.abs(Math.cos(Math.PI * second_rotate))
  preview.style.transform += "scale(" + String(my_deg) + ")";
};

let last_value;
let amir;

const handleBrightness = () => {
  const brightness = brightnessSlider.value;
  brightnessSliderValue.innerText = brightness;

  // TODO: write your code here
  if (last_value === undefined){
    preview.style.filter += "brightness(" + String(brightness) + ")";
    last_value = parseFloat(brightness);
  }
  else{
    const new_string = "brightness(" + String(brightness) + ")";
    const last_string = "brightness(" + String(last_value) + ")";
    const last_filter = preview.style.filter;
    const new_filter = last_filter.replace(last_string , new_string); 
    preview.style.filter = new_filter;
    last_value = parseFloat(brightness);
  }

};

const handleFilter = (e) => {
  const { target } = e;
  const { id: filter } = target;
  // filter: "grayscale" | "sepia" | "invert" | "hue-rotate" | "contrast" | "saturate" | "blur"
  const my_filter = target.id;
  // TODO: write your code here
  if (my_filter === "blur"){
    preview.style.filter = "blur(2px)";
    last_value = undefined;
    brightnessSlider.value = "1";
    brightnessSliderValue.innerText = "1"
  }
  else if (my_filter === "saturate" || my_filter === "contrast"){
    preview.style.filter = my_filter + "(2)";
    last_value = undefined;
    brightnessSlider.value = "1";
    brightnessSliderValue.innerText = "1"
  }
  else if (my_filter === "hue-rotate"){
    preview.style.filter = "hue-rotate(90deg)";
    last_value = undefined;
    brightnessSlider.value = "1";
    brightnessSliderValue.innerText = "1"
  }
  else if (my_filter === "none"){
    preview.style.filter = "none";
    last_value = undefined;
    brightnessSlider.value = "1";
    brightnessSliderValue.innerText = "1"
  }
  else{
    preview.style.filter = my_filter + "(1)";
    last_value = undefined;
    brightnessSlider.value = "1";
    brightnessSliderValue.innerText = "1"
  }
  
};

const handleFlip = (flip) => {
  //  flip: "vertical" | "horizontal"
  // TODO: write your code here
  let fil = previewFlip.style.transform;
  if (flip === "vertical" && previewFlip.style.transform === "scale(1, 1)"){
    previewFlip.style.transform = "scale(1, -1)"
  }
  else if (flip === "vertical" && previewFlip.style.transform === "scale(1, -1)"){
    previewFlip.style.transform = "scale(1, 1)"
  }
  else if (flip === "vertical" && previewFlip.style.transform === "scale(-1, 1)"){
    previewFlip.style.transform = "scale(-1, -1)"
  }
  else if (flip === "vertical" && previewFlip.style.transform === "scale(-1, -1)"){
    previewFlip.style.transform = "scale(-1, 1)"
  }
  else if (flip === "horizontal" && previewFlip.style.transform === "scale(1, -1)"){
    previewFlip.style.transform = "scale(-1, -1)"
  }
  else if (flip === "horizontal" && previewFlip.style.transform === "scale(-1, 1)"){
    previewFlip.style.transform = "scale(1, 1)"
  }
  else if (flip === "horizontal" && previewFlip.style.transform === "scale(-1, -1)"){
    previewFlip.style.transform = "scale(1, -1)"
  }
  else{
    if (flip === "vertical"){
      previewFlip.style.transform = "scale(1, -1)"
    }
    else if (flip === "horizontal"){
      previewFlip.style.transform = "scale(-1, 1)"
    }
  }
};

const handleMouseEnter = () => {
  // TODO: write your code here
  previewScale.style.transform = "scale(2)"
};

const handleMouseLeave = () => {
  // TODO: write your code here
  previewScale.style.transform = "none"
};

const handleMouseMove = (e) => {
  const imageWidth = previewScale.offsetWidth;
  const imageHeight = previewScale.offsetHeight;
  const imageOffsetTop = previewScale.offsetTop;
  const imageOffsetLeft = previewScale.offsetLeft;
  const pageX = e.pageX;
  const pageY = e.pageY;

  // TODO: write your code here
  my_positionx = pageX - imageOffsetLeft;
  my_positiony = pageY - imageOffsetTop;

  previewScale.style.transformOrigin = String(my_positionx) + 'px ' + String(my_positiony) + 'px';
};
