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
        case 'ADD_FRIEND':
        // NOT ADDING TO ARRAY CORRECTLY
          console.log("adding Friend", action.currentUserID, action.friendID);
          console.log(state[action.currentUserID].friends)
          return [
            ...state.slice(0, action.currentUserID),
            {...state[action.currentUserID], friends: [state[action.currentUserID].friends].push(action.friendID)},
            ...state.slice(action.currentUserID + 1)
          ]
        default:
            return state;
    }
}

module.exports = users;
