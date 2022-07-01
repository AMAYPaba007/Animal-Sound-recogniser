

function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0TFj3aRD_/model.json',modelReady);

    
}

function modelReady(){
classifier.classify(gotResults);
console.log("Model Is Loaded");

}

 function gotResults(error, results){
if(error){
    console.error(error);
}else{
console.log(results);

random_r= Math.floor(Math.random()*255)+1;
random_g= Math.floor(Math.random()*255)+1;
random_b= Math.floor(Math.random()*255)+1;

document.getElementById("result_label").innerHTML="I can hear-"+ results[0].label;
document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";

document.getElementById("result_confidence").innerHTML="Accuracy - "+(results[0].confidence*100).toFixed(1)+"%";
document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";

img1= document.getElementById("image_result");

if(results[0].label== "bark"){
    img1.src= "dog.webp";
}

else if(results[0].label== "meow"){
    img1.src= "cat.webp";
}

 else if(results[0].label== "roar"){
    img1.src= "lion.webp";
   
}
else if(results[0].label== "trumpet"){
    img1.src= "elephant.webp";
   
}

else{
    img1.src= "hearing gif.gif";
}
}

}

