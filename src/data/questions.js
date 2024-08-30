import {
  Bread,
  Car,
  Coffee,
  Dog,
  Police,
  Sandwich,
  Tire,
  Wine,
  Wolf,
} from "../assets/extras";

export const questions = [
  {
    id: "1",
    question: "Time to hit the road! Who should drive?",
    icon: <Car />,
    isSecondary: false,
    answers: [
      {
        id: "1a",
        text: "Elliott",
        points: 5,
        fans: 0,
        vibes: 30,
        money: 0,
        isBranching: false,
        result:
          "You have some great conversations, but you're holding on for dear life",
      },
      {
        id: "1b",
        text: "Brian",
        points: 50,
        fans: 0,
        vibes: 20,
        money: 0,
        isBranching: false,
        result:
          "Vibes are chill, you stop by the world's largest ball of yarn, and you're an hour late",
      },
      {
        id: "1c",
        text: "Zach",
        points: 50,
        fans: 0,
        vibes: 20,
        money: 0,
        isBranching: false,
        result: "you reach mach-10, and arrive at the venue an hour early",
      },
      {
        id: "1d",
        text: "Julia",
        points: 50,
        fans: 0,
        vibes: 20,
        money: 0,
        isBranching: false,
        result: "you're hopelessly lost and enjoying every minute of it",
      },
    ],
  },
  {
    id: "5",
    question: "You have an off day, what to do?",
    isSecondary: false,
    answers: [
      {
        id: "5a",
        text: "rest",
        points: 5,
        fans: 0,
        vibes: 30,
        money: 0,
        isBranching: true,
        result: [
          {
            characterCondition: ["zach"],
            result: "you sit around and play blues licks on your guitar",
            points: 50,
            fans: 0,
            vibes: 0,
            money: 0,
          },
          {
            characterCondition: ["elliott", "john", "julia", "dom", "brian"],
            result: "you feel energized",
            points: 20,
            fans: 0,
            vibes: 40,
            money: 0,
          },
        ],
      },
      {
        id: "5b",
        text: "go swimming!",
        points: 10,
        fans: 20,
        vibes: -20,
        money: 0,
        isBranching: true,
        result: [
          {
            characterCondition: ["julia"],
            result: "you've never been a LAAAAAANDGIRL",
            points: 300,
            fans: 0,
            vibes: 50,
            money: 0,
          },
          {
            characterCondition: ["elliott", "john", "zach", "dom", "brian"],
            result: "you have a refreshing swim",
            points: 20,
            fans: 10,
            vibes: 50,
            money: 0,
          },
        ],
      },
      {
        id: "5c",
        text: "write a new song",
        points: 20,
        fans: 0,
        vibes: 10,
        money: 0,
        isBranching: false,
        result: "it's a good song, and you feel inspired and energized",
      },
      {
        id: "5d",
        text: "put up flyers for next show (-$20)",
        points: 20,
        fans: 100,
        vibes: -30,
        money: -20,
        isBranching: false,
        result:
          "a long day, but your posters attract a lot of fans for your next show!",
      },
    ],
  },
  {
    id: "2",
    question: "Wow that was a tiring show. Where do you crash for the night?",
    isSecondary: false,
    answers: [
      {
        id: "2a",
        text: "Bad Motel (-$100)",
        points: 10,
        fans: 0,
        vibes: -30,
        money: -100,
        isBranching: false,
        result: "the shower is too gross to use, your next drive is stinky",
      },
      {
        id: "2b",
        text: "Nice Hotel (-$400)",
        points: 400,
        fans: 0,
        vibes: 250,
        money: -400,
        isBranching: false,
        result:
          "you sleep great and have an awesome continental breakfast! Time to go crush",
      },
      {
        id: "2c",
        text: "Drive through the night",
        points: 0,
        fans: 0,
        vibes: -10,
        money: 0,
        result: "anything to save a few bucks",
        nextQuestion: "3",
      },
    ],
  },
  {
    id: "3",
    question: "You grow weary on the road...",
    isSecondary: true,
    answers: [
      {
        id: "3a",
        text: "take a roadside nap",
        points: 10,
        fans: 0,
        vibes: 0,
        money: 0,
        isBranching: true,
        result: [
          {
            inventoryCondition: "dog treats",
            result:
              "a wild animal approaches your merch box. You throw your dog treats to the animal. They eat the treats and run away",
            points: 150,
            fans: 0,
            vibes: 0,
            money: 0,
            inventory: "empty",
            icon: <Wolf />,
          },
          {
            inventoryCondition: "",
            result:
              "a wild animal approaches your merch box. It tears a hole in your merch box and eats some.",
            points: 0,
            fans: 0,
            vibes: -20,
            money: -200,
            icon: <Wolf />,
          },
        ],
      },
      {
        id: "3b",
        text: "speed up",
        isBranching: true,
        result: [
          {
            prob: 0.8,
            result: "you get pulled over...oof",
            points: 0,
            fans: 0,
            vibes: 0,
            money: -450,
            icon: <Police />,
          },
          {
            prob: 0.2,
            result:
              "somehow you don't get pulled over, but you feel bad about about your reckless driving. Vibes decrease",
            points: 200,
            fans: 0,
            vibes: -10,
            money: 0,
          },
        ],
      },
      {
        id: "3c",
        text: "stop for coffee (-$30)",
        isBranching: true,
        result: [
          {
            characterCondition: ["brian"],
            result: "you have a lil pastry",
            points: 20,
            fans: 10,
            vibes: 10,
            money: -30,
            icon: <Bread />,
          },
          {
            characterCondition: [
              "elliott",
              "john",
              "julia",
              "dom",
              "brian",
              "zach",
            ],
            result: "you feel energized",
            points: 20,
            fans: 10,
            vibes: 10,
            money: -30,
            icon: <Coffee />,
          },
        ],
      },
    ],
  },
  {
    id: "4",
    question: "Next stop is Wisconsin. Do you stop anywhere on the way?",
    icon: <Car />,
    isSecondary: false,
    answers: [
      {
        id: "4a",
        text: "ice cream... of course (-$50)",
        points: 100,
        fans: 10,
        vibes: 50,
        money: -50,
        isBranching: false,
        result:
          "ice cream was a great call, vibes are immaculate and you met some new fans",
      },
      {
        id: "4b",
        text: "no, we need to be punctual",
        points: 10,
        fans: 0,
        vibes: 0,
        money: 0,
        isBranching: false,
        result:
          "You show up to the venue on time. You wait an hour for soundcheck",
      },
      {
        id: "4c",
        text: "stop at a diner (-$100)",
        points: 200,
        fans: 0,
        vibes: 50,
        money: -100,
        isBranching: false,
        result: "you see your friend (holding hands with your ex-man)",
      },
      {
        id: "4d",
        text: "coffee (-$20)",
        isBranching: true,
        result: [
          {
            characterCondition: ["elliott"],
            result: "you realllly needed that",
            points: 150,
            fans: 0,
            vibes: 40,
            money: -20,
            icon: <Coffee />,
          },
          {
            characterCondition: ["zach", "john", "julia", "dom", "brian"],
            result: "you feel energized",
            points: 40,
            fans: 0,
            vibes: 40,
            money: -20,
            icon: <Coffee />,
          },
        ],
      },
    ],
  },
  {
    id: "6",
    question: "Big show is coming up, what do you wear?",
    isSecondary: false,
    answers: [
      {
        id: "6a",
        text: "platform shoes and sparkles",
        points: 50,
        fans: 10,
        vibes: 10,
        money: 0,
        isBranching: true,
        result: [
          {
            characterCondition: ["julia"],
            result: "now you're actually 6 foot!",
            points: 100,
            fans: 10,
            vibes: 10,
            money: 0,
          },
          {
            characterCondition: ["elliott", "john", "zach", "dom", "brian"],
            result: "unexpected. But you rock your outfit, serve queen",
            points: 20,
            fans: 10,
            vibes: 10,
            money: -30,
          },
        ],
      },
      {
        id: "6b",
        text: "sunglasses",
        isBranching: true,
        inventoryCondition: "sunglasses",
        result: [
          {
            characterCondition: ["john"],
            result:
              "john's alter stage-ego 'sean' shines through, the crowd goes wild!",
            points: 200,
            fans: 100,
            vibes: 50,
            money: 0,
            inventory: "empty",
          },
          {
            characterCondition: ["elliott", "zach", "julia", "dom", "brian"],
            result: "it's kind of hard to see with the sunglasses on",
            points: -50,
            fans: -10,
            vibes: -20,
            money: 0,
            inventory: "empty",
          },
        ],
      },
      {
        id: "6c",
        text: "go buy something new! (-$100)",
        isBranching: true,
        result: [
          {
            characterCondition: ["zach"],
            result:
              "you buy another pair of black shirt and jeans, it's gonna be a hell of a show",
            points: 350,
            fans: 10,
            vibes: 20,
            money: -100,
          },
          {
            characterCondition: ["elliott", "john", "julia", "dom", "brian"],
            result: "you look fabulous, darling",
            points: 150,
            fans: 10,
            vibes: 20,
            money: -100,
          },
        ],
      },
      {
        id: "6d",
        text: "black shirt and jeans",
        isBranching: true,
        result: [
          {
            characterCondition: ["zach"],
            result: "you look absolutely legendary, everyone loves your outfit",
            points: 200,
            fans: 50,
            vibes: 20,
            money: 0,
          },
          {
            characterCondition: ["elliott", "john", "julia", "dom", "brian"],
            result: "you and zach are matching, cute",
            points: 50,
            fans: 10,
            vibes: 20,
            money: 0,
          },
        ],
      },
    ],
  },
  {
    id: "7",
    question:
      "Your upcoming show isn't selling a lot of tickets, what do you do?",
    isSecondary: false,
    answers: [
      {
        id: "7a",
        text: "Create some silly ads for instagram (-$200)",
        points: 100,
        fans: 100,
        vibes: -10,
        money: -200,
        isBranching: false,
        result: "a lot of work, but the internet is loving it!",
      },
      {
        id: "7b",
        text: "Put flyers around town! (-$50)",
        points: 10,
        fans: 20,
        vibes: -20,
        money: -50,
        isBranching: false,
        result: "you're in the heat all day, but make a few new fans",
      },
      {
        id: "7c",
        text: "go grab a drink",
        points: 10,
        fans: 0,
        vibes: 30,
        money: 0,
        isBranching: false,
        result: "red wine? or white wine?",
        icon: <Wine />,
      },
      {
        id: "7d",
        text: "text all your friends to come",
        points: 10,
        fans: 1,
        vibes: -5,
        money: 0,
        isBranching: false,
        result: "your second cousin might come!",
      },
    ],
  },
  {
    id: "8",
    question: "Crowd is cheering for an encore! What do you do?",
    isSecondary: false,
    answers: [
      {
        id: "8a",
        text: "Play a rocking cover",
        points: 50,
        fans: 50,
        vibes: 10,
        money: 0,
        isBranching: false,
        result: "Nice, the crowd has fun!",
      },
      {
        id: "8b",
        text: "Play your new original",
        points: 55,
        fans: 5,
        vibes: 50,
        money: 0,
        isBranching: false,
        result: "You have a lot of fun with your new song!",
      },
      {
        id: "8c",
        text: "Don't go back on stage, you need your rest",
        points: 50,
        fans: -10,
        vibes: 30,
        money: 0,
        isBranching: false,
        result: "you feel rested, but at what cost?",
      },
      {
        id: "8d",
        text: "Go to the mic and do an impression",
        isBranching: false,
        points: -10,
        fans: 0,
        vibes: 0,
        money: 0,
        result: "...",
        nextQuestion: "9",
      },
    ],
  },
  {
    id: "9",
    question: "uhhh...are you sure?",
    isSecondary: true,
    answers: [
      {
        id: "9a",
        text: "Yes",
        points: -20,
        fans: 0,
        vibes: 0,
        money: 0,
        result: "... ",
        isBranching: false,
        nextQuestion: "10",
      },
      {
        id: "9b",
        text: "No",
        points: 0,
        fans: 0,
        vibes: 0,
        money: 0,
        isBranching: false,
        result: "thank you",
      },
    ],
  },
  {
    id: "10",
    question:
      "very very low chance this goes over well. You sure you want to do this?",
    isSecondary: true,
    answers: [
      {
        id: "10a",
        text: "Yes",
        points: -40,
        fans: 0,
        vibes: 0,
        money: 0,
        isBranching: false,
        result: "...",
        nextQuestion: "11",
      },
      {
        id: "10b",
        text: "No",
        points: 0,
        fans: 0,
        vibes: 0,
        money: 0,
        isBranching: false,
        result: "thank you",
      },
    ],
  },
  {
    id: "11",
    question:
      "ok, I'll be honest. There's a 1% chance that this works. Are you absolutely sure?",
    isSecondary: true,
    answers: [
      {
        id: "11a",
        text: "Yes",
        points: 0,
        fans: 0,
        vibes: 0,
        money: 0,
        isBranching: true,
        result: [
          {
            prob: 0.01,
            result:
              "the crowd erupts in hearty laughter, you go down in history as an absolute legend",
            points: 750,
            fans: 200,
            vibes: 200,
            money: 500,
          },
          {
            prob: 0.99,
            result:
              "you're booed by your family and friends in the audience. Don't say I didn't warn you",
            points: -400,
            fans: -90,
            vibes: -90,
            money: -400,
          },
        ],
      },
      {
        id: "11b",
        text: "No",
        points: 0,
        fans: 0,
        vibes: 0,
        money: 0,
        isBranching: false,
        result: "thank you",
      },
    ],
  },
  {
    id: "12",
    question:
      "during your drive a tire falls from the sky (this actually happened)...",
    icon: <Tire />,
    isSecondary: true,
    answers: [
      {
        id: "12a",
        text: "uh-oh...",
        points: 0,
        fans: 0,
        vibes: 0,
        money: 0,
        isBranching: true,
        result: [
          {
            inventoryCondition: "lucky shoes",
            result:
              "it's your lucky day, you swerve in the nick of time and avoid the tire! Nice :)",
            points: 500,
            fans: 0,
            vibes: 50,
            money: 0,
          },
          {
            inventoryCondition: "",
            result:
              " the tire smashes into the side of your car! Luckily no one was hurt, but you're going to need a new car...",
            points: 0,
            fans: 0,
            vibes: -20,
            money: -450,
          },
        ],
      },
    ],
  },
  {
    id: "13",
    question: "you encounter a dog! Hecks ya. Pet the dog?",
    icon: <Dog />,
    isSecondary: true,
    answers: [
      {
        id: "13a",
        text: "yes",
        points: 100,
        fans: 1,
        vibes: 10,
        money: 0,
        isBranching: false,
        result: "it's a good boy, it fills you with determination",
      },
      {
        id: "13b",
        text: "no",
        points: -1000000,
        fans: -2,
        vibes: -40,
        money: 0,
        isBranching: false,
        result: "...why?",
      },
    ],
  },
  {
    id: "14",
    question: "give the dog a treat?",
    icon: <Dog />,
    isSecondary: true,
    answers: [
      {
        id: "14a",
        text: "yes",
        points: 300,
        fans: 2,
        vibes: 50,
        money: 0,
        isBranching: false,
        result:
          "the owner is impressed that you had dog treats. They want to come to your show! ",
        inventory: "empty",
      },
      {
        id: "14b",
        text: "no",
        points: -50,
        fans: 0,
        vibes: 0,
        money: 0,
        isBranching: false,
        result: "what are you saving them for?",
      },
    ],
  },
  {
    id: "15",
    question: "The band is HUNGRY. What's the plan?",
    isSecondary: false,
    answers: [
      {
        inventoryCondition: "snacks",
        id: "15a",
        text: "Eat your snacks",
        points: 100,
        fans: 0,
        vibes: 20,
        money: 0,
        isBranching: false,
        result: "It sort of sustains you",
        inventory: "empty",
      },
      {
        id: "15b",
        text: "Bar Food (-$30)",
        points: 20,
        fans: 0,
        vibes: 10,
        money: -30,
        isBranching: false,
        result: "It was a little funky...",
        nextQuestion: "16",
      },
      {
        id: "15c",
        text: "Upscale Meal (-$100)",
        points: 100,
        fans: 0,
        vibes: 100,
        money: -100,
        isBranching: false,
        result: "you go on a journey of flavor",
      },
      {
        id: "15d",
        text: "don't eat",
        isBranching: false,
        points: -50,
        fans: 0,
        vibes: -10,
        money: 0,
        result: "wrong answer, try again",
        nextQuestion: "26",
      },
    ],
  },
  {
    id: "16",
    question:
      "That bar food is not settling well. Walking to stage, your tummy get's rumbly, time to improvise",
    isSecondary: true,
    answers: [
      {
        id: "16a",
        text: "Run off stage",
        points: 0,
        fans: -50,
        vibes: 0,
        money: 0,
        isBranching: false,
        result: "the band starts the show with a 10 minute jam",
      },
      {
        id: "16b",
        text: "Poo your pants",
        points: 0,
        fans: 0,
        vibes: -40,
        money: 0,
        isBranching: false,
        result: "it's gonna be a long show...",
      },
    ],
  },
  {
    id: "17",
    question: "You have a few days off. Do you?",
    isSecondary: false,
    answers: [
      {
        id: "17a",
        text: "Code a fun game for the 6fb website!",
        isBranching: true,
        result: [
          {
            characterCondition: ["john"],
            result: "it's a masterpiece",
            points: 300,
            fans: 150,
            vibes: 50,
            money: 0,
          },
          {
            characterCondition: ["elliott", "zach", "julia", "dom", "brian"],
            result: "you don't know how to code...",
            points: -100,
            fans: 0,
            vibes: -20,
            money: 0,
          },
        ],
      },
      {
        id: "17b",
        text: "Book a few more shows!",
        isBranching: true,
        result: [
          {
            characterCondition: ["elliott"],
            result: "you book an amazing venue and...it sells out!",
            points: 250,
            fans: 200,
            vibes: 50,
            money: 0,
          },
          {
            characterCondition: ["john", "zach", "julia", "dom", "brian"],
            result: "you spend all day emailing venues, and nobody responds...",
            points: -100,
            fans: 0,
            vibes: -20,
            money: 0,
          },
        ],
      },
      {
        id: "17c",
        text: "Rest up and recover",
        isBranching: true,
        result: [
          {
            characterCondition: ["julia", "dom", "brian"],
            result: "you sleep in till 4pm, energy courses through your veins",
            points: 50,
            fans: 0,
            vibes: 200,
            money: 0,
          },
          {
            characterCondition: ["john", "zach", "elliott"],
            result: "you get a little extra sleep",
            points: 50,
            fans: 0,
            vibes: 20,
            money: 0,
          },
        ],
      },
      {
        id: "17d",
        inventoryCondition: "empty",
        text: "Go shopping!",
        points: 50,
        fans: 0,
        vibes: 0,
        money: 0,
        isBranching: false,
        nextQuestion: "18",
      },
    ],
  },
  {
    id: "18",
    question: "What do you buy?",
    isSecondary: true,
    answers: [
      {
        id: "18a",
        text: "snacks (-$30)",
        points: 50,
        fans: 0,
        vibes: 0,
        money: -30,
        isBranching: false,
        result: "yum",
        inventory: "snacks",
      },
      {
        id: "18b",
        text: "extra earplugs (-$10)",
        points: 50,
        fans: 0,
        vibes: 0,
        money: -10,
        isBranching: false,
        result: "your future ears thank you",
        inventory: "earplugs",
      },
      {
        id: "18c",
        text: "A new really really really cool guitar (-$450)",
        isBranching: true,
        result: [
          {
            characterCondition: ["elliott", "zach"],
            result: "your tone changes a little bit",
            points: 450,
            fans: 0,
            vibes: 50,
            money: -450,
            inventory: "new guitar",
          },
          {
            characterCondition: ["john", "julia", "dom", "brian"],
            result: "but you don't play guitar...",
            points: -100,
            fans: 0,
            vibes: -20,
            money: -450,
            inventory: "new guitar",
          },
        ],
        inventory: "new guitar",
      },
      {
        id: "18d",
        text: "dog treats (-$5)",
        points: 0,
        fans: 0,
        vibes: 0,
        money: -5,
        isBranching: false,
        result: "never can have enough",
        inventory: "dog treats",
      },
      {
        id: "18e",
        text: "coffee (-$20)",
        isBranching: true,
        result: [
          {
            characterCondition: ["elliott"],
            result: "you REALLLY needed that",
            points: 60,
            fans: 0,
            vibes: 40,
            money: -20,
          },
          {
            characterCondition: ["zach", "john", "julia", "dom", "brian"],
            result: "you feel energized",
            points: 40,
            fans: 0,
            vibes: 40,
            money: -20,
          },
        ],
      },
    ],
  },
  {
    id: "19",
    question: "oh-no! you forgot your earplugs",
    isSecondary: true,
    answers: [
      {
        id: "19a",
        text: "use your backup earplugs!",
        points: 300,
        fans: 0,
        vibes: 50,
        money: 0,
        isBranching: false,
        result: "good thing you had backups :)",
        inventoryCondition: "earplugs",
        inventory: "empty",
      },
      {
        id: "19b",
        text: "lose your hearing",
        points: -100,
        fans: 0,
        vibes: -25,
        money: 0,
        isBranching: false,
        result: "ouch... your ears are ringing",
        inventoryCondition: "",
      },
    ],
  },
  {
    id: "20",
    question: "Time to order some new merch, what to order?",
    isSecondary: false,
    answers: [
      {
        id: "20a",
        text: "the classic logo shirt (-$150)",
        points: 100,
        fans: 50,
        vibes: 0,
        money: -150,
        isBranching: false,
        result: "tried and true! You'll gain $25 money each turn",
      },
      {
        id: "20b",
        text: "sweatshirts! (-$400)",
        points: 200,
        fans: 100,
        vibes: 0,
        money: -400,
        isBranching: false,
        result:
          "designed by julia and pretty freaking cool, you gain $50 per turn",
      },
      {
        id: "20c",
        text: "stickers (-$25)",
        points: 50,
        fans: 100,
        vibes: 0,
        money: -25,
        isBranching: false,
        result: "you hand them out for free, fans love it!",
      },
      {
        id: "20d",
        text: "vinyl (-$200)",
        points: 100,
        fans: 100,
        vibes: 0,
        money: -200,
        isBranching: false,
        result: "for the diehard fans, you gain 20 fans per turn",
      },
      {
        id: "20e",
        text: "nothing",
        points: 0,
        fans: 0,
        vibes: 0,
        money: 0,
        isBranching: false,
        result: "you buy nothing",
      },
    ],
  },
  {
    id: "21",
    question:
      "the new song you wrote is doing really well live! Spend a day recording it?",
    isSecondary: true,
    answers: [
      {
        id: "21a",
        text: "yes (-$350)",
        points: 500,
        fans: 300,
        vibes: 100,
        money: -350,
        isBranching: false,
        result: "a long day, but it sounds sooooo good. Your fans love it!",
      },
      {
        id: "21b",
        text: "it's not ready yet!",
        points: 0,
        fans: 0,
        vibes: 0,
        money: 0,
        isBranching: false,
        result: "bummer, dude",
      },
    ],
  },
  {
    id: "22",
    question: "",
    isSecondary: true,
    answers: [
      {
        id: "22a",
        text: "",
        points: 300,
        fans: 200,
        vibes: 250,
        money: 0,
        isBranching: false,
        result:
          "the musicians become your life-long friends! You go get nachos together",
      },
      {
        id: "22b",
        text: "",
        points: -200,
        fans: -5,
        vibes: -100,
        money: 0,
        isBranching: false,
        result: "they think you're weird...",
      },
      {
        id: "22c",
        text: "",
        points: 0,
        fans: 0,
        vibes: 0,
        money: 0,
        isBranching: false,
        result: "phew, new people are scary",
      },
    ],
  },
  {
    id: "23",
    question: "You find an awesome vegan sandwich shop",
    icon: <Sandwich />,
    isSecondary: true,
    answers: [
      {
        id: "23a",
        text: "Buy a sandwich (-$20)",
        points: 20,
        fans: 1,
        vibes: 10,
        money: -20,
        isBranching: false,
        result: "OHHHHH that was SOOOO GOOOD!",
        nextQuestion: "24",
      },
      {
        id: "23b",
        text: "Don't buy one",
        points: 0,
        fans: 0,
        vibes: -20,
        money: 0,
        isBranching: false,
        result: "you're a little hungry",
      },
    ],
  },
  {
    id: "24",
    question: "That sandwich was so good...have another?",
    icon: <Sandwich />,
    isSecondary: true,
    answers: [
      {
        id: "24a",
        text: "Buy a sandwich (-$20)",
        points: 10,
        fans: 0,
        vibes: 0,
        money: -20,
        isBranching: false,
        result: "tummy is reaching maximum capacity",
        nextQuestion: "25",
      },
      {
        id: "24b",
        text: "Don't buy one",
        points: 0,
        fans: 0,
        vibes: 0,
        money: 0,
        isBranching: false,
        result: "probably smart",
      },
    ],
  },
  {
    id: "25",
    question: "Ok, maybe just one more????",
    icon: <Sandwich />,
    isSecondary: true,
    answers: [
      {
        id: "25a",
        text: "Buy a sandwich (-$20)",
        isBranching: true,
        result: [
          {
            characterCondition: ["brian"],
            result: "somehow you manage to eat a third sandwich. impressive",
            points: 200,
            fans: 0,
            vibes: 40,
            money: -20,
          },
          {
            characterCondition: ["zach", "john", "julia", "dom", "elliott"],
            result: "you feel sick...",
            points: -50,
            fans: 0,
            vibes: -50,
            money: -20,
          },
        ],
      },
      {
        id: "25b",
        text: "Don't buy one",
        points: 0,
        fans: 0,
        vibes: 0,
        money: 0,
        isBranching: false,
        result: "good call",
      },
    ],
  },
  {
    id: "26",
    question: "The band is HUNGRY. What's the plan?",
    isSecondary: true,
    answers: [
      {
        inventoryCondition: "snacks",
        id: "26a",
        text: "Eat your snacks",
        points: 100,
        fans: 0,
        vibes: 20,
        money: 0,
        isBranching: false,
        result: "It sort of sustains you",
        inventory: "empty",
      },
      {
        id: "26b",
        text: "Bar Food (-$30)",
        points: 20,
        fans: 0,
        vibes: 10,
        money: -30,
        isBranching: false,
        result: "It was a little funky...",
        nextQuestion: "16",
      },
      {
        id: "26c",
        text: "Upscale Meal (-$100)",
        points: 100,
        fans: 0,
        vibes: 100,
        money: -100,
        isBranching: false,
        result: "you go on a journey of flavor",
      },
      {
        id: "26d",
        text: "don't eat",
        isBranching: false,
        points: -50,
        fans: 0,
        vibes: -10,
        money: 0,
        result: "you're persistent, aren't you",
        nextQuestion: "27",
      },
    ],
  },
  {
    id: "27",
    question: "The band is HUNGRY. What's the plan?",
    isSecondary: true,
    answers: [
      {
        inventoryCondition: "snacks",
        id: "27a",
        text: "Eat your snacks",
        points: 100,
        fans: 0,
        vibes: 20,
        money: 0,
        isBranching: false,
        result: "It sort of sustains you",
        inventory: "empty",
      },
      {
        id: "27b",
        text: "Bar Food (-$30)",
        points: 20,
        fans: 0,
        vibes: 10,
        money: -30,
        isBranching: false,
        result: "It was a little funky...",
        nextQuestion: "16",
      },
      {
        id: "27c",
        text: "Upscale Meal (-$100)",
        points: 100,
        fans: 0,
        vibes: 100,
        money: -100,
        isBranching: false,
        result: "you go on a journey of flavor",
      },
      {
        id: "27d",
        text: "don't eat",
        isBranching: false,
        points: -50,
        fans: 0,
        vibes: -10,
        money: 0,
        result: "this isn't going to work",
        nextQuestion: "28",
      },
    ],
  },
  {
    id: "28",
    question: "The band is HUNGRY. What's the plan?",
    isSecondary: true,
    answers: [
      {
        inventoryCondition: "snacks",
        id: "28a",
        text: "Eat your snacks",
        points: 100,
        fans: 0,
        vibes: 20,
        money: 0,
        isBranching: false,
        result: "It sort of sustains you",
        inventory: "empty",
      },
      {
        id: "28b",
        text: "Bar Food (-$30)",
        points: 20,
        fans: 0,
        vibes: 10,
        money: -30,
        isBranching: false,
        result: "It was a little funky...",
        nextQuestion: "16",
      },
      {
        id: "28c",
        text: "Upscale Meal (-$100)",
        points: 100,
        fans: 0,
        vibes: 100,
        money: -100,
        isBranching: false,
        result: "you go on a journey of flavor",
      },
      {
        id: "28d",
        text: "don't eat",
        isBranching: false,
        points: -50,
        fans: 0,
        vibes: -10,
        money: 0,
        result: "you have to eat",
        nextQuestion: "29",
      },
    ],
  },
  {
    id: "29",
    question: "The band is HUNGRY. What's the plan?",
    isSecondary: true,
    answers: [
      {
        inventoryCondition: "snacks",
        id: "29a",
        text: "Eat your snacks",
        points: 100,
        fans: 0,
        vibes: 20,
        money: 0,
        isBranching: false,
        result: "It sort of sustains you",
        inventory: "empty",
      },
      {
        id: "29b",
        text: "Bar Food (-$30)",
        points: 20,
        fans: 0,
        vibes: 10,
        money: -30,
        isBranching: false,
        result: "It was a little funky...",
        nextQuestion: "16",
      },
      {
        id: "29c",
        text: "Upscale Meal (-$100)",
        points: 100,
        fans: 0,
        vibes: 100,
        money: -100,
        isBranching: false,
        result: "you go on a journey of flavor",
      },
      {
        id: "29d",
        text: "don't eat",
        isBranching: false,
        points: -250,
        fans: 0,
        vibes: -10,
        money: 0,
        isBranching: true,
        result: [
          {
            characterCondition: ["dom"],
            result: "fine, you win. You don't eat and somehow you're fine?",
            points: 500,
            fans: 0,
            vibes: -200,
            money: 0,
          },
          {
            characterCondition: ["zach", "john", "julia", "elliott", "brian"],
            result: "I told you, you won't win this",
            points: -150,
            fans: 0,
            vibes: -50,
            money: 0,
            nextQuestion: "29",
          },
        ],
      },
    ],
  },
  {
    id: "30",
    question: "show!",
    isSecondary: true,
    answers: [
      {
        id: "30a",
        text: "",
        points: 0,
        fans: 100,
        vibes: 0,
        money: 0,
        isBranching: false,
        result: "that was a great show!",
      },
      {
        id: "30b",
        text: "",
        points: 0,
        fans: -100,
        vibes: -100,
        money: 0,
        isBranching: false,
        result: "oof, that wasn't your best...",
      },
    ],
  },
];
