

import { ACTIONS } from "../action/Fech";

export const initialState ={
    loading: true,
    error_reducer:false,
    dara:{}
}
export const fechReducer =(state,action)=>{
    switch (action.type) {
        case ACTIONS.SET_DATA:
            return{
                loading: false,
                error_reducer:false,
                data: {
                    
                    category: action.payload.category,
                    error: action.payload.error,
                    flags: action.payload.flags,
                    id: action.payload.id,
                    joke: action.payload.joke,
                    lang: action.payload.lang,
                    safe: action.payload.safe,
                    type: action.payload.type
                    }
            }
        case(ACTIONS.SET_ERROR):
            return{
                ...initialState,
                error_reducer: true,
                loading: false,data: {
                    
                    additionalInfo: action.payload.additionalInfo,
                    error: action.payload.error,
                    causedBy: action.payload.causedBy,
                    code: action.payload.code,
                    internalError: action.payload.internalError,
                    message: action.payload.message,
                    timestamp: action.payload.timestamp
                }
            }
        
        default:
            return state
    }

}