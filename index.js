import {dogs} from './data.js'

const heart = document.getElementById("heart-btn");
const cross = document.getElementById("cross-btn");
const like = document.getElementById("like");
const reject = document.getElementById("reject");

const name = document.getElementById("name"); 
const bio = document.getElementById("bio");
const background = document.getElementById("background"); 

let currentClick = false;


name.textContent = dogs[0].name + ", " + dogs[0].age;
bio.textContent = dogs[0].bio;
background.style.backgroundImage = dogs[0].avatar;


function getNewDoggo(){
    return dogs.shift();
}



cross.addEventListener("click", () =>{
    if(currentClick === false){
        currentClick = true;
        reject.style.display = 'block';
        setTimeout(() =>{
            reject.style.display = 'none';
            getNewDoggo();
            name.textContent = dogs[0].name + ", " + dogs[0].age;
            bio.textContent = dogs[0].bio;
            background.style.backgroundImage = dogs[0].avatar;
            currentClick = false;
        }, 1000)
    }
})

heart.addEventListener("click", () =>{
    if(currentClick === false){
        currentClick = true;
        like.style.display = 'block';
        setTimeout(() =>{
            like.style.display = 'none';
            getNewDoggo();
            name.textContent = dogs[0].name + ", " + dogs[0].age;
            bio.textContent = dogs[0].bio;
            background.style.backgroundImage = dogs[0].avatar;
            currentClick = false;
        }, 1000)
    }
})
