# Just a bit more... of Javascript

Today I was able to succesfully implement a loop!

As the name suggests, a loop will give the user an opportunity to answer a prompt or a question. If they answer incorrectly, then the "loop" in the code will loop them back to the prompt so they can enter the correct answer.

The first line indicates what the user is prompted, it'll be what they see.

> ex. let yourPhrase = prompt("Pick a number between 1-5)

Next come parameters. If you want them to guess the number 2, we need to specify that. The tags and words you use are important because what you would use in the english language is ***NOT*** what you would use within code.

Keep in mind, there is an overabundance of tags and words that you use in javascript and coding in general. It simply takes repetition to learn the most common ones.

> ex. while (yourPhrase != "2"){answer - prompt(Incorrect! Try Again!);} if (answer == "2"){return "Correct!"}

It's a lot of information, i know. But this all means the following:

1. Box with prompt pops up on your browser.
2. "Pick a number between 1-5"
3. User picks 1
4. "Incorrect! Try Again!"
5. User picks 3
6. "Incorrect! Try Again!"
7. User picks 2
8. "Correct!

The loop will keep asking the user to try again until they put in the correct answer.
Then the loop ends, the prompt goes away, and the user can move on to something else.

