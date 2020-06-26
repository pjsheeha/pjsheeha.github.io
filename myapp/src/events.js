// Winner
event = {
    name: "tree-fall",
    required: (user) => user.hasCar,
    branches: [
        {
            required: user => user.hasInsurance === 'good',
            description: "Good outcome", 
            options: [
            ]
        },
        {
            required: user => user.hasInsurance === 'bad',
            description: "Medium outcome"
        },
        {
            required: () => true,
            description: "Bad outcome"
        }
    ]
}


event = {
    name: "tree-insurance",
    type: "event",
    required: (user) => (user.hasCar && (user.insurance === 'good')),
    title: "The neighbor's tree fell on your car!",
    description: "While you were out, a tree in the neighbor's yard fell on your car. Your insurance says they'll take care of it.",
    outcomes: {
        cash: -500,
        spirit: -1,
        // lostAssets: ['car'],
        // gainedAssets: ['car']
    }
}

action = {
    name: "tree-lawsuit",
    type: "action",
    required: (user) => (user.hasCar && (user.insurance === 'bad' || !user.insurance)),
    impact: (data) => 1250 + data.car.cost, // cash impact
    title: "The neighbor's tree fell on your car!",
    description: "While you were out, a tree in the neighbor's yard fell on your car. Looks like your insurance won't cover it and they aren't claiming fault. Should we sue them?",
    options: [
        {
            name: "Don't Sue",
            outcomes: [
                {
                    cash: -500,
                    spirit: -20,
                    lostAssets: ['car'],
                    description: "You don't sue your neighbors. You're out of a car."
                }
            ]
        },
        {
            name: "Sue Them",
            outcomes: [
                {
                    cash: -10000, // (data) => data.car.cost
                    spirit: -10,
                    lostAssets: ['car'],
                    chance: 25,
                    description: "After an expensive lawsuit, the court finds your neighbors not at fault. You lose your car."
                },
                {
                    cash: 5000,
                    spirit: 10,
                    chance: 75,
                    description: "You won! The neighbors have to pay for a new car!",
                }
            ] 
        }
    ]
}