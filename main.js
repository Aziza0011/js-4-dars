let randomNumber = Math.round(Math.random() * 100);
if (randomNumber % 3 === 0 && randomNumber % 5 === 0) {
    alert(`Bu ${randomNumber} random son FizzBuzz`);
} else if (randomNumber % 3 === 0) {
    alert(`Bu ${randomNumber} random son Fizz`);
} else if (randomNumber % 5 === 0) {
    alert(`Bu ${randomNumber} random son Buzz`);
} else {
    alert(`Bu ${randomNumber} random son Fizz hammas, Buzz hammas`);
}