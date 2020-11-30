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
var quizName = 'The markOne Quiz'
var userName = '';
var correctAnswers = 0;
var wrongAnswers = 0;

var questionBank = [
  {
    question: "Q1",
    hint: "hint",
    answer: ["A1","a1"]
  },
  {
    question: "Q2",
    hint: "hint",
    answer: ["A2","a2"]
  },
  {
    question: "Q3",
    hint: "hint",
    answer: ["A3", "a3"]
  },
  {
    question: "Q4",
    hint: "hint",
    answer: ["A4"]
  },
  {
    question: "Q5",
    hint: "hint",
    answer: ["A5"]
  },
  {
    question: "Q6",
    hint: "hint",
    answer: ["A6"]
  },
  {
    question: "Q7",
    hint: "hint",
    answer: ["A7"]
  },
  {
    question: "Q8",
    hint: "hint",
    answer: ["A8"]
  },
  {
    question: "Q9",
    hint: "hint",
    answer: ["A9"]
  },
  {
    question: "Q10",
    hint: "hint",
    answer: ["A10"]
  },
];

// Conservative phrases
// arrays of phrases that can be used interchangeably to make the program sound more natural sounding and conversation-ish
var successPhrases = ["That's correct.", "You got it right.", "You get +1 points.", "Yep, that's right.", "You seem to know a lot about this topic.", "*clap clap clap emoji*", "Hooray! This is the right answer.", "You're doing a lot better that the other ones who took this test. ;-)"]

var failurePhrases = ["Oh no, that's wrong.", "Thank god we don't have negative marking.", "That doesn't sound right, maybe you could get the next one right?", "Hmmm... that's not correct.", "I wish that was right; but, its not.", "That's wrong, but come on, don't give up!"]

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
  return answer;
}

function getHint(question) {
  return question.hint;
}

function getRandomIndex(array){
  // returns a random item from an array
  var len = array.length;
  var index = Math.floor(Math.random() * length)

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

console.log("Of course, you are brave.");
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
    |  __  __()|  \  Hello? Anyone home?
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

console.log("The door shuts behind you and chilling some distance away is the Sphinx...");
pause();
console.log(`

                              .sSSSSSSSs
                              sSS=""^^^"s
                  /\       , /  \_\_\|_/_)
                 /';;     /| \\\/.-. .-./     ／￣￣￣￣￣￣￣
                / \;|    /. \,S'  -   - |    /  < 'Sup, dude! >
               / -.;|    | '.SS     _|  ;   /＼＿＿＿＿＿＿＿＿
              ; '-.;\,   |'-.SS\   __  /S  /
              | _  '; \.  \  SSS\_____/SS
              |  '- '; \.  \_SSS[_____]SS
              \ '--.-';;-. __SSS/\    SSS
               \  .--' ';;'.=SSS'\ _\_SSS
                '._ .-'' _';;..=.=.=.\.= \
                   ;-._-'  _.;\.=.=.=.|.=|
         ,     _.-'    '"=._  ;\=.=__/__/
         )\ .''   __        ".;|.=.=.=./
         (_\   .-'  '.   |    \/=.=.=/'
          /\ \        \-,|     |.--'|
         /  \ ',      //  \    | |  |
        ( (__) )  _.-'--,  \   | |  '--,
         ;----' -'--,__}}}  \  '--, __}}}
         \_________}}}       \___}}}

`);
pause();

console.clear();

console.log(`

          \ /////
          |.   .|
         (   _\ |
          |  =  |
          |\___/
      ___/|   \__
    /' | '----' |'\
   /   |        |  \
  /~%  |        ;   \
 /   /\/        | \  \
 \  \ |         | /  /
  '\ \|         |/ /'
    '\;         |/'
     (|         |)
      |_________|
       |    |  |
       |    |  |
       |____|__|
       \    |  |
        |   )  )
        /   |  |
        |___|__|
        \===|==|
        /   '-.'-.
        \______)__)
`);
pause();
console.log("You almost do poppy in your pants. Who wouldn't, right?\nPsst...we'll keep it a secret");
pause();

console.clear();
console.log(`

                       ___
                     ."///".        ／￣￣￣￣￣￣￣
                    /|<> <>!\      /  < What's your name, bro? >
                   /-|  ^  !-\    /＼＿＿＿＿＿＿＿＿
                  /-- \_=_/ --\  /
                  )---| W |---(
                 /-\--| W |--/-\
                (_-_--|_-_|--___)
               (-___  -_-- _-- -_)
               )-_ _--_ _ ___--__|
               (___ --__  __ __--(
              /-_  / __ -_ -__  \_\
             _>/  -- /|___| _ \ -_ )
            /--  _ - _/ _ \>\ -  -- \
           ( / / /   > |~l \   \ \ \_)
           | |-' | |/  """  \| |   |_|
           L_|_|_|_/         L_L_|_l_)

`);

userName = getAnswer("Enter your name: ");

console.log('The Sphinx says "We gonna play a quiz about Gandhi bro. You cool with that?".');
pause();
console.log("You gulp and nod your head... mostly cause you don't have an option.")
pause();

// loop to ask all questions
for (var i = 0; i < questionBank.length; i++) {
  var questionObj = questionBank[i];
  var question = "\nQ: " + questionObj.question + '\nA: ';
  var questionsLeft = questionBank.length - i - 1;

  // ask each question to the user
  var userReply = getAnswer(question);

  // check if it is an answer or a request for a hint
  if(userReply == 'H' || userReply == 'h'){
    // print the hint and then ask for answer
    console.log("Hint: " + getHint(questionObj));
    userReply = getAnswer(question);
  }

  // validate answer
  if(questionObj.answer.includes(userReply)){
    // tally points and congratulate the user
    correctAnswers++;
    console.log("Correct answer");
  }
  else {
    wrongAnswers++;
    console.log("You got " + wrongAnswers + " question/s wrong.");
  }

  console.log("Correct: " + correctAnswers + " Remaining: " + questionsLeft);
}


// display end results
var score = (correctAnswers/questionBank.length)*100;
var finalResult = `\n   ---=== RESULT ===---
Dear ${userName}, thank you for playing ${quizName}.

Your performance is as follows:
Correct   : ${correctAnswers}
Total     : ${questionBank.length}
Score     : ${score}%
`;
console.log(finalResult);
pause();

console.clear();
if(score >= 0.75){
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
           \  \       |............ss@..........|
            \  '------+...........ss@...........|
             \________ .........................|
                      |.........................|
                     /...........................\
                    |.............................|
                       |.......................|
                           |...............|


  You have a couple of beers with the Sphinx and head home.
  `);
}
else{
  console.log("The Sphinx is not happy that you don't know anything about Gandhi...");

  pause();

  console.log(`
                                                                _
                                                              _( (~\
       _ _                        /                          ( \> > \
   -/~/ / ~\                     :;                \       _  > /(~\/
  || | | /\ ;\                   |l      _____     |;     ( \/    > >
  _\\)\)\)/ ;;;                  '8o __-~     ~\   d|      \      //
 ///(())(__/~;;\                  "88p;.  -. _\_;.oP        (_._/ /
(((__   __ \\   \                  '>,% (\  (\./)8"         ;:'  i
)))--'.'-- (( ;,8 \               ,;%%%:  ./V^^^V'          ;.   ;.
((\   |   /)) .,88  ': ..,,;;;;,-::::::'_::\   ||\         ;[8:   ;
 )|  ~-~  |(|(888; ..''::::8888oooooo.  :\'^^^/,,~--._    |88::  |
 |\ -===- /|  \8;; ':.      oo.8888888888:'((( o.ooo8888Oo;:;:'  |
 |_~-___-~_|   '-\.   '        'o'88888888b' )) 888b88888P""'     ;
 ; ~~~~;~~         "'--_'.       b'888888888;(.,"888b888"  ..::;-'
   ;      ;              ~"-....  b'8888888:::::.'8888. .:;;;''
      ;    ;                 ':::. ':::OOO:::::::.'OO' ;;;''
 :       ;                     '.      "'::::::''    .'
    ;                           '.   \_              /
  ;       ;                       +:   ~~--  ':'  -';
                                   ':         : .::/
      ;                            ;;+_  :::. :..;;;
                                   ;;;;;;,;;;;;;;;,;

The Sphinx beheads you and eats your insides for dinner!!!
  `);
}

// END PROGRAM
