"use strict"

let dogs=[]

dogs.push({name:"Fluffy",Breed:"Poodle",picture:""})
dogs.push({name:"Otto",Breed:"Chihuahua",picture:""})
dogs.push({name:"Alfie",Breed:"French Bulldog",picture:""})

//6 dogs - on 300*400 pixel cards (with nice padding and margins, and a nice background colour)
// An image for each dog
// Display Breed
// Add an age property for every dog
// add an 'Adopt Now' button on each dog

for(let i=0;i<dogs.length;i++){

    let card = document.createElement("div")
    document.body.appendChild(card)
    let dogName=document.createElement("h1")
    card.appendChild(dogName)
    dogName.innerHTML=dogs[i].name

}

