function users(state = [], action) {
    switch (action.type) {
        case 'ADD_USER':
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
          return [
            ...state.slice(0, action.currentUserID - 1),
            {...state[action.currentUserID - 1], friends: state[action.currentUserID - 1].friends.concat(action.friendID)},
            ...state.slice(action.currentUserID)
          ]

        case 'REMOVE_FRIEND':
          console.log(state, action);
          console.log()
          return [
            ...state.slice(0, action.currentUserID - 1),
            {...state[action.currentUserID - 1], friends: state[action.currentUserID - 1].friends.splice(action.friendID,1)},
            ...state.slice(action.currentUserID)
          ]
        default:
            return state;
    }
}

module.exports = users;
