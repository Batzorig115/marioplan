const initState = {
    projects : [
        {id : '1', title: 'help me find peach', content: 'blah1'},
        {id : '2', title: 'college', content: 'blah2'},
        {id : '3', title: 'unv', content: 'blah3'}
    ]
}

const projectReducer = ( state = initState, action ) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('create project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state;
        default:
            return state;
    }
    
}

export default projectReducer;