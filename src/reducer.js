export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //remove after developing
    // token: "BQAXgF-ACEH_5eRCMyZ1gYEvWMDQgUiUwRuzkyEbCU60bKR-EsiNafRhbdjBq0gXb89vpcBIBpx4tOa-r6yrjQ6_2LndJBFuV0l200AK2Tjg8hrwInBbHSxLu9BRAbcdqUwTjV5ZWC18G60EzuDrL5HQwNTKF2Q0XFhX8z6LZrIVHTicI5VY3YbC"
};
// state here is prevState
const reducer = (state, action) => {
    //Action  -> type, [data];
    switch (action.type) {
        case 'SET_USER':
            return { // return new state
                ...state, // giữ nguyên mọi state trừ user
                user: action.user
            }
        case 'SET_TOKEN':
            return { // return new state
                ...state, // giữ nguyên mọi state trừ token
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return { // return new state
                ...state, // giữ nguyên mọi state trừ ...
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return { // return new state
                ...state, // giữ nguyên mọi state trừ ...
                discover_weekly: action.discover_weekly
            }
            
        default: // nếu không phải trong các event được định nghĩa thì trả về state cũ để ko crash app
            return state;
    }
}

export default reducer;