let a = 5; // Value can be modified
const b = 10; // Value cannot be modfied

a = a + b;
// console.log(a)


function combineTwo(num1, num2) {
   let result; //null
//    console.log('Result on init', result)
   result = (num1 + num2 ) * 2;
   console.log(result)
}


// combineTwo(a, b)


function stringManipulator(name, age, town) {
    return  `Hello, my name is ${name}.
            I am ${age} years old and I am living in ${town}`
}

console.log(stringManipulator('Pesho', 16, 'Svilengrad'));

// run in browser :D
function rockPaperScissor(){
   const bot_choice = Math.floor(Math.random() * 3);
   const user_choice = prompt("Type your choice in numbers(Any 1 of them): \n 1.Rock \n 2.Paper \n 3.Scissor");
   var choices = {
      bot: "",
      user: ""
   };

   function restart(){
      const res = prompt('Restart? [yes/no]');
      if(res == 'yes'){
         rockPaperScissor();
      } else {
         
      };
   }
   
   if(user_choice == 1 && bot_choice == 0){
      choices[0] = "Rock";
      choices[1] = "Rock";
      alert(`Its a tie! \n [Chosen options: \n You: ${choices[1]}, \n Bot: ${choices[0]}]`);
      console.log(`Its a tie! \n [Chosen options: \n You: ${choices[1]}, \n Bot: ${choices[0]}]`);
      const res = prompt('Restart?');
      restart();
   } else if(user_choice == 1 && bot_choice == 1){
      choices[0] = "Paper";
      choices[1] = "Rock";
      alert(`Bot won! \n [Chosen options: \n You: ${choices[1]}, \n Bot: ${choices[0]}]`);
      console.log(`Its a tie! \n [Chosen options: \n You: ${choices[1]}, \n Bot: ${choices[0]}]`);
      restart();
   } else if(user_choice == 1 && bot_choice == 2){
      choices[0] = "Scissor";
      choices[1] = "Rock";
      alert(`You Won! \n [Chosen options: \n You: ${choices[1]}, \n Bot: ${choices[0]}]`);
      console.log(`Its a tie! \n [Chosen options: \n You: ${choices[1]}, \n Bot: ${choices[0]}]`);
      restart();
   } else if(user_choice == 2 && bot_choice == 0){
      choices[0] = "Rock";
      choices[1] = "Paper";
      alert(`You won! \n [Chosen options: \n You: ${choices[1]}, \n Bot: ${choices[0]}]`);
      console.log(`Its a tie! \n [Chosen options: \n You: ${choices[1]}, \n Bot: ${choices[0]}]`);
      restart();
   } else if(user_choice == 2 && bot_choice == 1){
      choices[0] = "Paper";
      choices[1] = "Paper";
      alert(`Its a tie! \n [Chosen options: \n You: ${choices[1]}, \n Bot: ${choices[0]}]`);
      console.log(`Its a tie! \n [Chosen options: \n You: ${choices[1]}, \n Bot: ${choices[0]}]`);
      restart();
   } else if(user_choice == 2 && bot_choice == 2){
      choices[0] = "Scissor";
      choices[1] = "Paper";
      alert(`Bot won! \n [Chosen options: \n You: ${choices[1]}, \n Bot: ${choices[0]}]`);
      console.log(`Its a tie! \n [Chosen options: \n You: ${choices[1]}, \n Bot: ${choices[0]}]`);
      restart();
   } else if(user_choice == 3 && bot_choice == 0){
      choices[0] = "Rock";
      choices[1] = "Scissor";
      alert(`Bot Won! \n [Chosen options: \n You: ${choices[1]}, \n Bot: ${choices[0]}]`);
      console.log(`Its a tie! \n [Chosen options: \n You: ${choices[1]}, \n Bot: ${choices[0]}]`);
      restart();
   } else if(user_choice == 3 && bot_choice == 1){
      choices[0] = "Paper";
      choices[1] = "Scissor";
      alert(`You Won! \n [Chosen options: \n You: ${choices[1]}, \n Bot: ${choices[0]}]`);
      console.log(`Its a tie! \n [Chosen options: \n You: ${choices[1]}, \n Bot: ${choices[0]}]`);
      restart();
   } else if(user_choice == 3 && bot_choice == 2){
      choices[0] = "Scissor";
      choices[1] = "Scissor";
      alert(`Its a tie! \n [Chosen options: \n You: ${choices[1]}, \n Bot: ${choices[0]}]`);
      console.log(`Its a tie! \n [Chosen options: \n You: ${choices[1]}, \n Bot: ${choices[0]}]`);
      restart();
   }
};


rockPaperScissor();
