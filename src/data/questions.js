export const questions = [
  {
    id: "1",
    question: "Time to hit the road! Who should drive?",
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
        isBranching: false,
        result: "you feel rested",
      },
      {
        id: "5b",
        text: "go busking",
        points: 10,
        fans: 20,
        vibes: -20,
        money: 0,
        isBranching: false,
        result:
          "you spend the day in the sun, you wear yourself out but make some new fans!",
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
        fans: 50,
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
        text: "Nice Motel (-$400)",
        points: 40,
        fans: 0,
        vibes: 30,
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
            inventoryReq: "dog treats",
            prob: 0.5,
            result:
              "a mysterious wild animal approaches your merch box. Luckily, you still have your dog treats, you throw the dog treats to the animal. They happily eat the treats instead of your merch",
            points: 150,
            fans: 0,
            vibes: 0,
            money: 0,
          },
          {
            inventoryReq: "",
            prob: 0.5,
            result:
              "a mysterious wild animal approaches your merch box. It tears a hole in your merch box and eats some.",
            points: 0,
            fans: 0,
            vibes: -20,
            money: -200,
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
            money: -500,
          },
          {
            prob: 0.2,
            result:
              "somehow you don't get pulled over, but you feel bad about about your reckless driving. Vibes decrease",
            points: 100,
            fans: 0,
            vibes: -10,
            money: 0,
          },
        ],
      },
      {
        id: "3c",
        text: "stop for coffee (-$30)",
        points: 0,
        fans: 0,
        vibes: 10,
        money: -30,
        isBranching: false,
        result: "you feel a bit more energized",
      },
    ],
  },
  {
    id: "4",
    question: "Next stop is Wisconsin. Do you stop anywhere on the way?",
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
        text: "cool roadside attractions",
        points: 70,
        fans: 0,
        vibes: 20,
        money: 0,
        isBranching: false,
        result: "nice, they were cool",
      },
      {
        id: "4d",
        text: "coffee (-$20)",
        points: 20,
        fans: 0,
        vibes: 30,
        money: -20,
        isBranching: false,
        result: "you feel energized",
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
        isBranching: false,
        result: "you rock your outfit, serve queen",
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
            points: 300,
            fans: 100,
            vibes: 50,
            money: 0,
          },
          {
            characterCondition: ["elliott", "zach", "julia", "dom", "brian"],
            result: "it's kind of hard to see with the sunglasses on",
            points: -50,
            fans: -10,
            vibes: -20,
            money: 0,
          },
        ],
      },
      {
        id: "6c",
        text: "go buy something new! (-$100)",
        points: 100,
        fans: 20,
        vibes: 20,
        money: -100,
        isBranching: false,
        result: "you look fabulous, darling",
      },
      {
        id: "6d",
        text: "black shirt and jeas",
        isBranching: true,
        result: [
          {
            characterCondition: ["zach"],
            result: "you look absolutely legendary, everyone loves your outfit",
            points: 300,
            fans: 100,
            vibes: 50,
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
        points: 10,
        fans: 50,
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
        text: "take a nap",
        points: 10,
        fans: 0,
        vibes: 30,
        money: 0,
        isBranching: false,
        result: "you dream of massive crowds cheering you on",
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
        fans: 20,
        vibes: 10,
        money: 0,
        isBranching: false,
        result: "Nice, the crowd has fun!",
      },
      {
        id: "8b",
        text: "Play your new original",
        points: 100,
        fans: 5,
        vibes: 20,
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
        result: "you reach mach-10, and arrive at the venue an hour early",
      },
      {
        id: "8d",
        text: "Go to the mic and do an impression",
        isBranching: false,
        points: 0,
        fans: 0,
        vibes: 0,
        money: 0,
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
        points: 0,
        fans: 0,
        vibes: 0,
        money: 0,
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
        points: 0,
        fans: 0,
        vibes: 0,
        money: 0,
        isBranching: false,
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
      "ok, I'll be honest. There's a .01% chance that this works. Are you absolutely sure?",
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
            prob: 0.1,
            result:
              "the crowd erupts in hearty laughter, you go down in history as an absolute legend",
            points: 550,
            fans: 100,
            vibes: 100,
            money: 0,
          },
          {
            prob: 0.9,
            result:
              "you're booed by your family and friends in the audience. Don't say I didn't warn you",
            points: -500,
            fans: -500,
            vibes: -500,
            money: -500,
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
];
