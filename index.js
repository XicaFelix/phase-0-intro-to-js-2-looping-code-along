// Code your solutions in this file

function writeCards(guests,event){
    const messages = [];
    for (let index = 0; index < guests.length; index++) {
        let guest = guests[index];
        const message= `Thank you, ${guest}, for the wonderful ${event} gift!`;
        messages.push(message);
        debugger;
    }
    return messages;
}


writeCards(["Ada", "Brendan", "Ali"], "birthday");


function countDown(value){
    console.log(value);
    while (value > 0) {
        value --;
        console.log(value);
    }
}
countDown(5);
/*

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }


 const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);
*/



