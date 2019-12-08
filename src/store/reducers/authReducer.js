const initState = {
    authError : null
}

const authReducer = ( state = initState, action ) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authorError: null
            }
        default:
            return state;
    }
    return state;
}

export default authReducer;