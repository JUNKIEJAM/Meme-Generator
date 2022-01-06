const imageFileInput=document.querySelector("#imageFileInput");
const topTextInput=document.querySelector("#topTextInput")
const bottomTextInput=document.querySelector("#bottomTextInput")
const canvas=document.querySelector("#meme");

let image;

imageFileInput.addEventListener("change",()=>{

    const imageDataUrl=URL.createObjectURL(imageFileInput.files[0]);

    console.log(imageDataUrl);
});

function updateMemeCanvas(canvas,image,topText,bottomText){
    console.log(canvas);
    console.log(image);
    console.log(topText);
    console.log(bottomText);
}


