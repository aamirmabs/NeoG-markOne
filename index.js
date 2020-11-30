// NeoG Camp - markOne

// REQUIREMENTS
// Build a CLI app which can quiz users on a certain topic.
// Use nodeJS.
// Use repl.it to host the app.
// This should be similar to the app made in lesson One of levelZero.

// initialize external libraries - readline-sync
var readlineSync = require('readline-sync');

// initialize variables to track the status of quiz
// username, correct answers, question array
var quizName = 'Do you know Gandhi?'
var userName = '';
var correctAnswers = 0;
var wrongAnswers = 0;

var questionBank = [
  {
    question: "When is Mahatma Gandhi's birthday?",
    hint: "You get a holiday in the beginning of October.",
    answer: ["october 2", "oct 2", "2 oct", "2 october", "2nd october", "2nd oct"]
  },
  {
    question: "What is Mahatma Gandhi's mother tongue?",
    hint: "The same as Ambani and Adani.",
    answer: ["gujrati", "gujju"]
  },
  {
    question: "What was Mahatma Gandhi's profession?",
    hint: `It involved a lot of saying "My Lord" and "Your Honour".`,
    answer: ["law", "lawyer", "barrister"]
  },
  {
    question: "From which country did Mahatma Gandhi return to fight for freedom?",
    hint: "It's two words and has the name of the continent in it. And a direction too.",
    answer: ["sa", "south africa"]
  },
  {
    question: "Who assassinated Gandhi?",
    hint: "His last name has 5 letters - the first three are 'GOD'.",
    answer: ["godse", "nathuram godse"]
  },
  {
    question: "True or False: His name is Mohandas Karamchand Mahatma Gandhi.",
    hint: "No-one, literally NO-ONE, names their kids Mahatma!!",
    answer: ["no", "false"]
  },
  {
    question: "Mahatma Gandhi led a march to which place against the Salt Tax?",
    hint: "It sounds similar to 'Danda' (like a stick in hindi).",
    answer: ["dandi", "dandi march"]
  },
  {
    question: "Was Mahatma Gandhi nominated for Noble Peace Prize?",
    hint: "Yes, quite a few times actually!",
    answer: ["yes", "y", "yep"]
  },
  {
    question: "How many times was he nominated?",
    hint: "How many sides does a pentagon have?",
    answer: ["5", "five"]
  },
  {
    question: "Did he win the Noble Peace Prize anytime?",
    hint: "If he did, he would be the first Indian in that category!",
    answer: ["no", "n", "nope"]
  }
];

// Conservative phrases
// arrays of phrases that can be used interchangeably to make the program sound more natural sounding and conversation-ish
var successPhrases = ["That's correct. ", "You got it right. ", "You get +1 points. ", "Yep, that's right. ", "You seem to know a lot about this topic. ", "*clap clap clap emoji* ", "Hooray! This is the right answer. ", "You're doing a lot better that the other ones who took this test. ;-) "]

var failurePhrases = ["Oh no, that's wrong. ", "Thank god we don't have negative marking. ", "That doesn't sound right, maybe you could get the next one right? ", "Hmmm... that's not correct. ", "I wish that was right; but, its not. ", "That's wrong, but come on, don't give up! "]

var hintPhrases = ["Alright, here's a clue. ", "Let me help you out. ", "Looking for a hint? ", "Let me point you in the right direction. ", "Ummm, okay, I'll tell you what... ", "Don't tell anyone but here's a pointer. ", "I'm hoping this rings a bell. ", "Come on, this one's easy... "];

// helper functions
function pause() {
  // using readlineSync as a workaround to pause execution till enter is pressed
  readlineSync.question("\nPress Enter to proceed...", {
    hideEchoBack: true,
    mask: ''
  });
}

function getAnswer(question) {
  // Accepts user response to a question and returns it
  var answer = readlineSync.question(question);
  answer = answer.toLowerCase();
  return answer;
}

function getHint(question) {
  return question.hint;
}

function getRandomIndex(array) {
  // returns a random item from an array
  var len = array.length;
  var index = Math.floor(Math.random() * len);

  return array[index];
}

// BEGIN PROGRAM
// ASCII art taken from https://ascii.co.uk/
console.log(`You walk across a black door that says 'All may enter, but only the knowledgeable may leave'.
    __________
    |  __  __  |
    | |  ||  | |
    | |  ||  | |
    | |__||__| |
    |  __  __()|
    | |  ||  | |
    | |  ||  | |
    | |  ||  | |
    | |  ||  | |
    | |__||__| |
    |__________|

Are you brave enough to open it?
`);

pause();

console.clear();

console.log("\nOf course, you are brave.");
pause();
console.log('\nSlowly, you open the door...');
pause();
console.log(`

    /|
    / |
    /__|______
    |  __  __  |
    | |  ||  | |
    | |  ||  | |
    | |__||__| |^%---
    |  __  __()|  \\  Hello? Anyone home?
    | |  ||  | +"
    | |  ||  | |
    | |  ||  | |
    | |__||__| |
    |__________|

`);
pause();
console.log("\nComing to think of it that was quite a stupid thing to do... But, what the hell, zindagi na milegi dubara!");
pause();
console.log("\nP.S: Note to self - don't open random doors...");
pause();

console.clear();

console.log("\nThe door shuts behind you and chilling some distance away is the Sphinx...");
pause();
console.log(`

                              .sSSSSSSSs
                              sSS=""^^^"s
                  /\\       , /  \\_\\_\\|_/_)
                 /';;     /| \\\\\\/.-. .-./
                / \\;|    /. \\,S'  -   - |
               / -.;|    | '.SS     _|  ;
              ; '-.;\\,   |'-.SS\\   __  /S
              | _  ';\\\\.  \\' SSS\\_____/SS
              |  '- ';\\\\.  \\_SSS[_____]SS
              \\ '--.-';;-. __SSS/\\    SSS
               \\  .--' ';;'.=SSS'\\\\_\\_SSS
                '._ .-'' _';;..=.=.=.\\.=\\
                   ;-._-'  _.;\\.=.=.=.|.=|
         ,     _.-'    '"=._  ;\\=.=__/__/
         )\\ .''   __        ".;|.=.=.=./
         (_\\   .-'  '.   |    \\/=.=.=/'
          /\\\\         \\-,|     |.--'|
         /  \\',       //  \\    | |  |
        ( (__) )  _.-'--,  \\   | |  '--,
         ;----' -'--,__}}}  \\  '--, __}}}
         \\_________}}}       \\___}}}

`);
pause();

console.clear();

console.log(`

                \\\\ /////
                |.   .|
              (   _\\ |
                |  =  |
                |\\___/
            ___/|   \\__
          /' | '----' |'\\
        /   |        |  \\
        /~%  |        ;   \\
      /   /\\/        | \\  \\
      \\  \\ |         | /  /
        '\\ \\|         |/ /'
          '\\;         |/'
          (|         |)
            |_________|
            |    |  |
            |    |  |
            |____|__|
            \\    |  |
              |   )  )
              /   |  |
              |___|__|
              \\===|==|
              /   '-.'-.
              \\______)__)

You almost do poppy in your pants. Who wouldn't, right?\nPsst...we'll keep it a secret
`);
pause();

console.clear();
// ASCII art from https://ascii.co.uk/art/sphinx
console.log(`

                  ___
                ."///".          /￣￣￣￣￣￣￣
                /|<> <>!\\       /  < What's your name, bro? >
              /-|  ^  !-\\     /＼＿＿＿＿＿＿＿＿
              /-- \\_=_/ --\\  /
              )---| W |---(
            /-\\--| W |--/-\\
            (_-_--|_-_|--___)
          (-___  -_-- _-- -_)
          )-_ _--_ _ ___--__|
          (___ --__  __ __--(
          /-_  / __ -_ -__  \\_\\
        _>/  -- /|___| _ \\ -_ )
        /--  _ - _/ _ \\>\\ -  -- \\
      ( / / /   > |~l \\   \\ \\ \\_)
      | |-' | |/  """  \\| |   |_|
      L_|_|_|_/         L_L_|_l_)

`);

userName = getAnswer("Enter your name: ");

console.log('\nThe Sphinx says "Welcome ' + userName + '! We gonna play a quiz about Gandhi bro. You cool with that?".');
pause();
console.log("\nYou gulp and nod your head... mostly cause you don't have an option.")
pause();

// loop to ask all questions
for (var i = 0; i < questionBank.length; i++) {
  var questionObj = questionBank[i];
  var question = "\nQ: " + questionObj.question + '\nA: ';
  var questionsLeft = questionBank.length - i - 1;

  // ask each question to the user
  var userReply = getAnswer(question);

  // check if it is an answer or a request for a hint
  if (userReply == 'H' || userReply == 'h') {
    // print the hint and then ask for answer
    console.log("Hint: " + getRandomIndex(hintPhrases) + getHint(questionObj));
    userReply = getAnswer(question);
  }

  // validate answer
  if (questionObj.answer.includes(userReply)) {
    // tally points and congratulate the user
    correctAnswers++;
    console.log(getRandomIndex(successPhrases));
  }
  else {
    wrongAnswers++;
    console.log(getRandomIndex(failurePhrases) + "You got " + wrongAnswers + " question/s wrong.");
  }

  console.log("Correct: " + correctAnswers + " Remaining: " + questionsLeft);
}


pause();

console.clear();
if (score >= 0.75) {
  console.log("It's good that you remember so much about Gandhi...");

  pause();

  console.log(`

                         .sssssssss.
                   .sssssssssssssssssss
                 sssssssssssssssssssssssss
                ssssssssssssssssssssssssssss
                 @@sssssssssssssssssssssss@ss
                 |s@@@@sssssssssssssss@@@@s|s
          _______|sssss@@@@@sssss@@@@@sssss|s
        /         sssssssss@sssss@sssssssss|s
       /  .------+.ssssssss@sssss@ssssssss.|
      /  /       |...sssssss@sss@sssssss...|
     |  |        |.......sss@sss@ssss......|
     |  |        |..........s@ss@sss.......|
     |  |        |...........@ss@..........|
      \\  \\       |............ss@..........|
       \\  '------+...........ss@...........|
        \\________ .........................|
                 |.........................|
                /...........................\\
               |.............................|
                  |.......................|
                      |...............|



  You have a couple of beers with the Sphinx and head home.
  `);
}
else {
  console.log("The Sphinx is not happy that you don't know much about Gandhi...");

  pause();

  console.log(`
                                                                      _
                                                                  _( (~\\
          _ _                        /                          ( \> > \\
      -/~/ / ~\\                     :;                \\       _  > /(~\/
      || | | /\\ ;\\                   |l      _____     |;     ( \\/    > >
      _\\\\)\\)\\)/ ;;;                  '8o __-~     ~\\   d|      \\      //
    ///(())(__/~;;\\                  "88p;.  -. _\\_;.oP        (_._/ /
    (((__   __ \\\\   \\                 '>,% (\\  (\\./)8"         ;:'  i
    )))--'.'-- (( ;,8 \\               ,;%%%:  ./V^^^V'          ;.   ;.
    ((\\   |   /)) .,88  ': ..,,;;;;,-::::::'_::\\   ||\\         ;[8:   ;
    )|  ~-~  |(|(888; ..''::::8888oooooo.  :\\'^^^/,,~--._    |88::  |
    |\\ -===- /|  \\8;; ':.      oo.8888888888:'((( o.ooo8888Oo;:;:'  |
    |_~-___-~_|   '-\\.   '        'o'88888888b' )) 888b88888P""'     ;
    ; ~~~~;~~         "'--_'.       b'888888888;(.,"888b888"  ..::;-'
      ;      ;              ~"-....  b'8888888:::::.'8888. .:;;;''
          ;    ;                 ':::. ':::OOO:::::::.'OO' ;;;''
    :       ;                     '.      "'::::::''    .'
        ;                           '.   \\_              /
      ;       ;                       +:   ~~--  ':'  -';
                                      ':         : .::/
          ;                            ;;+_  :::. :..;;;
                                      ;;;;;;,;;;;;;;;,;

  The Sphinx beheads you and eats your insides for dinner!!!`);
}

pause();

// display end results
var score = (correctAnswers / questionBank.length) * 100;
var finalResult = `\n   ---=== RESULT ===---
Dear ${userName}, thank you for playing ${quizName}.

Your performance is as follows:
Correct   : ${correctAnswers}
Total     : ${questionBank.length}
Score     : ${score}%
`;
console.log(finalResult);

// END PROGRAM
