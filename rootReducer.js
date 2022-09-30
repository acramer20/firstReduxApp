const INITIAL_STATE = {
    face: '┐( ˘_˘ )┌'
  };

function moodReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'CRY_LAUGH':
            return { ...state, face: action.payload };
        case 'SAD':
            return { ...state, face: action.payload};
        case 'DEAD':
            return { ...state, face: action.payload};
        case 'ROLL_EYES':
            return { ...state, face: action.payload};
        default: 
            return state;
    }
}