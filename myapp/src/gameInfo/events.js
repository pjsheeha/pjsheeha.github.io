

let outWithFriends = {
  name: "out-with-friends",
  required: () => true,
  branches: [
    {
      title: "Want to go out?",
      description: "Your friends want to go out! What will you do tonight?",
      type: "action",
      choices: [
        {
          title: "Stay In",
          outcome: {
            spirit: -2,
            cash: 100,
            description: "A lonely night in. You saved some cash but you miss your friends.",
          }
        },
        {
          title: "Go Out",
          outcome: {
            cash: -60,
            spirit: +1,
            description: "You had a great time! Wallet feels a little lighter though...",
          }
        },
        {
          title: "Buy a Round!",
          outcome: {
            cash: -120,
            spirit: +2,
            description: "You were the life of the party! How much did those wings cost?",
          }
        }
      ]
    }
  ]
}

exports.events = [
  outWithFriends
]