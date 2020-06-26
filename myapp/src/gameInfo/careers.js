

let doctor = {
    name: "Doctor",
    salaries: [
        140000,
        180000,
        240000
    ],
    debt: { total: 400000, interestRate: .06, name: "Medical School"},
    skills: [
        "science",
        "communication",
        "dexterity"
    ],
    certification: "doctor",
    requiredCertification: "doctor"
}

let programmer = {
    name: "Programmer",
    salaries: [
        60000,
        90000,
        120000,
        160000
    ],
    debt: { total: 140000, interestRate: .06, name: "University Loans" },
    skills: [
        "science",
        "communication",
        "dexterity"
    ],
    certification: "programmer"
}

let construction = {
    name: "Construction Worker",
    salaries: [
        45000,
        65000,
        80000,
        100000
    ],
    debt: { total: 0, interestRate: .00 },
    skills: [
        "management",
        "dexterity",
        "endurance"
    ]
}

exports.careers = [doctor, programmer, construction];