module.exports = {
    users: [
        {
            id: 1,
            email: "nt@yahoo.com",
            password: "password",
            firstName: "Nic",
            lastName: "Tolmais",
            status: "Online",
            location: "STL",
            age: "24",
            image: "",
            style: "Casual",
            gamertags: {
                battlenet: "Prodigy",
                league: "Shady Foobar",
                xbox: "TOPGUNCHIEF14",
                playstation: "",
                steam: "TicTacTolmais"
            },
            friends: [
                2, 4
            ],
            games: [
                {
                    id: 1,
                    skill: "Pro"
                }, {
                    id: 2,
                    skill: "Pro"
                }, {
                    id: 3,
                    skill: "Pro"
                }, {
                    id: 4,
                    skill: "Pro"
                }, {
                    id: 5,
                    skill: "Pro"
                }
            ]
        }, {
            id: 2,
            email: "dr@yahoo.com",
            password: "password",
            firstName: "Dale",
            lastName: "Race",
            status: "Offline",
            location: "St.Charles",
            age: "23",
            image: "",
            style: "Hardcore",
            gamertags: {
                battlenet: "",
                league: "",
                xbox: "RaceCar",
                playstation: "RaceCar",
                steam: "TheRaceMan"
            },
            friends: [1],
            games: [
                {
                    id: 0,
                    skill: "Pro"
                }
            ]
        }, {
            id: 3,
            email: "abc@yahoo.com",
            password: "password",
            firstName: "ABC",
            lastName: "DEF",
            status: "Offline",
            location: "New York",
            age: "30",
            image: "",
            style: "Casual",
            gamertags: {
                battlenet: "CoolGuy",
                league: "Blargna",
                xbox: "CoolGuy",
                playstation: "CoolGuy",
                steam: "CoolBlarg"
            },
            friends: [],
            games: [
                {
                    id: 2,
                    skill: "Average"
                }, {
                    id: 3,
                    skill: "Pro"
                }
            ]
        }, {
            id: 4,
            email: "zx@yahoo.com",
            password: "password",
            firstName: "Bob",
            lastName: "Rob",
            status: "Offline",
            location: "California",
            age: "100",
            image: "",
            style: "Casual",
            gamertags: {
                battlenet: "OGman",
                league: "DaBomb",
                xbox: "OGman",
                playstation: "",
                steam: ""
            },
            friends: [1],
            games: [
                {
                    id: 4,
                    skill: "Average"
                }, {
                    id: 5,
                    skill: "Pro"
                }
            ]
        }
    ],
    games: [
        {
            id: 0,
            title: 'League of Legends',
            img: 'images/grid-list/league.jpg',
        }, {
            id: 1,
            title: 'Rocket League',
            img: 'images/grid-list/Rocket-League.jpg',
        }, {
            id: 2,
            title: 'League of Legends',
            img: 'images/grid-list/league.jpg',
        }, {
            id: 3,
            title: 'League of Legends',
            img: 'images/grid-list/league.jpg',
        }, {
            id: 4,
            title: 'Rocket League',
            img: 'images/grid-list/Rocket-League.jpg',
        }, {
            id: 5,
            title: 'League of Legends',
            img: 'images/grid-list/league.jpg',
        }
    ]
};
