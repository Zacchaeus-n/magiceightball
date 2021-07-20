// username varaible
let userName = "Jane";

// custom greeting
userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);

// user question variable and display question
let userQuestion = "What day is it?";
console.log(`${userName} asked: ${userQuestion}`);

// generating random number
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

// switching eightBall on random number
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;

  default:
    eightBall = "";
    break;
}

// log out magic ball answer
console.log(`The eight magic ball answered: ${eightBall}`);
