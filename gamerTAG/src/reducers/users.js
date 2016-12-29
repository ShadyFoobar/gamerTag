function users(state = [], action) {
    switch (action.type) {
        case 'ADD_USER':
            console.log("Adding User",action.gamertags);
            return [
                ...state, {
                    "id": state.length + 1,
                    "email": action.email,
                    "password": action.password,
                    "firstName": action.firstName,
                    "lastName": action.lastName,
                    "status": "",
                    "location": action.location,
                    "age": action.age,
                    "image": "",
                    "style": "",
                    "gamertags": action.gamertags,
                    "friends": [],
                    "games": []
                }
            ]
        default:
            return state;
    }
}

module.exports = users;
