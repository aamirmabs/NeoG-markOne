# NeoG Camp - markOne

The NeoG Camp is an initiative taken up by Tanay Pratap to introduce young minds to learn skills that are in-demand in the software industry in structured manner with the end goal of successfully mentoring a handful of motivated individuals and enable them to break into the industry.

The camp takes a bootcamp style approach with weekly coding sessions live streamed on YouTube where core concepts are explained in a practical manner by building something. Participants are required to then build something that demonstrates their understanding of the concepts.

## markOne

This repository is the first assignment of the camp to be submitted in the first week.

The task to be implemented is as follows:

- Build a CLI app which can quiz users on a certain topic. - DONE
- Use nodeJS. - DONE
- Use repl.it to host the app. - DONE
- This should be similar to the app made in lesson One of levelZero. - DONE

## Design

### Data Structures and Functions

**Quiz Quesitons** - They are contained in an array as objects. Each object contains a question, a hint and a sub array of possible answers. After we get the players name we run a loop over the question array and print each question and wait for the user response.

```javascript
{
  question: "When is Mahatma Gandhi's birthday?",
  hint: "You get a holiday in the beginning of October.",
  answer: ["october 2", "oct 2", "2 oct", "2 october", "2nd october", "2nd oct"]
  // user can type in any of these expressions and they will validate the answer
}
```

**Dialogue Phrases** - To give the user a sense of freshness in each of the interactions, there are a few arrays with phrases that convey a positive or negative message. Depending on the situation a random phrase from the array will be chosen an displayed on the terminal.

```javascript
var hintPhrases = [
  "Alright, here's a clue. ",
  "Let me help you out. ",
  ...
  ...
  "Come on, this one's easy... ",
];
```

To fetch a random phrase from an array a `Math.random()` is used to fetch a random index position.

```javascript
function getRandomIndex(array) {
  // returns a random item from an array
  var len = array.length;
  var index = Math.floor(Math.random() * len);

  return array[index];
}
```

### User Interaction

All interactions are **through the terminal**. A user types in his response when expected. Other than typing in his/her name, all other interactions are limited to the user providing the response to a question asked.

Users type in a response and wait for the result of the answer validation. If the answer matches one of the expected responses in the answer array of a particular question, then a congratulatory message is printed along with the tally of the users answers. On the other hand if the answer is wrong, the user is shown a negative remark.

As the quiz requires users to type in answers it is possible that there could be variations in the possible answers. For example, if the answer for a question is a `Yes` - the user may type in `yes`, `ya`, `correct` etc. The user response is validated against a set of possible responses and hopefully will match one of them. Although the list of acceptable responses is not conclusive, it does try to provide a degree of flexibility to the validation of the answers.

The user also has the option of **receiving a hint** to help them out. The user need to type in `h` or `hint` as the response to the question. When this option is used, the user gets half the points for a correct answer.

There is no negative marking/loss of points if the answer is wrong.

## Workflow

There is some initial rpg-ish drama just to warm up the player and get them invested in going through with the app. The only purpose of the initial banter is to fetch the users name.

The quiz then begins with a sequence of questions. Behind the scenes runs a `for` loop that iterates over the array of quesitons and presents them to the user one by one. A question is asked and the user types in the reply. If the reply matches with any of the predefined answers saved on the question object a success message is printed and the score is increased. If the answer is wrong a negative messsage is displayed and the user proceeds to the next question.

In case the user needs some guidance then he/she can type in `h` or `help` and a clue is displayed. The user is awarded half the points for a correct answer and none in case of a wrong answer.

After the loop iteration is complete, the results and calculated statistics illustrating the users performance are displayed.

## Credits

- ASCII art has been obtained form the following sources:
  - [Beer Mug - ASCII Art Archive](https://www.asciiart.eu/food-and-drinks/beers)
  - [Sphinx - ASCII.co.uk](https://ascii.co.uk/art/sphinx)
  - [Door - ASCII.co.uk](https://ascii.co.uk/art/doors)
  - [Standing Guy - "SOON GRASSHOPPER" @ ASCII Art Farts](http://www.asciiartfarts.com/20010923.html)
  - [Beheading Devil - ASCIIArt.website](https://asciiart.website/index.php?art=creatures/monsters)
