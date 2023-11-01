
import {useCallback, useEffect,useReducer} from "react"

import { API } from "../API"


import {fechReducer,initialState} from "../reducers/fech"

import { ACTIONS } from "../action/Fech"

export const useFech =(endpoint)=>{
    const [state,dispach]= useReducer(fechReducer,initialState)
    const getData = useCallback(async ()=>{
        try {
            const {data} = await API.get()
            if (data.error) {
                dispach({type:ACTIONS.SET_ERROR,payload:data})
            }else{
                dispach({type:ACTIONS.SET_DATA,payload:data})
                console.log(data);  
            }
            
        } catch (error) {
            console.error(error);
            dispach({type:ACTIONS.SET_ERROR})
        }
    },[endpoint])

useEffect(()=>{
    getData()
    
},[endpoint,getData])

    return state

}
