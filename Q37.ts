// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
//Make a large shirt and a medium shirt with the default message,
//and a shirt of any size with a different message.

function make_shirt(
  size: string = "Large",
  message: string = "I love typescript"
) {
  console.log(
    `I have ordered the size of shirt which is ${size}, with the message printed on it ${message}`
  );
}
make_shirt(); //with default value of large size
make_shirt("medium"); //medium size shirt
make_shirt("small", "Royal Tag");
