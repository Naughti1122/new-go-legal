const initialState = {
    issue: [],
}

const Reducers = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_ISSUE':
            return {issue: action.payload};

        default: 
            return state;
    }
};

export default Reducers;