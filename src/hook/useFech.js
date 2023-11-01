
import {useCallback, useEffect,useReducer} from "react"

import { API } from "../API"


import {fechReducer,initialState} from "../reducers/fech"

import { ACTIONS } from "../action/Fech"

export const useFech =(endpoint="en")=>{
    const [state,dispach]= useReducer(fechReducer,initialState)
    const getData = useCallback(async ()=>{

        try {
            const {data} = await API.get(`/Any?lang=${endpoint}`)


            if (data.error) {
                console.log(`Set error`);
                dispach({type:ACTIONS.SET_ERROR,payload:data})
                console.log(data);
                
            }else if (!data.error){
                console.log(`SET_DATA`);
                dispach({type:ACTIONS.SET_DATA,payload:data})
                console.log(data);  
            }else{
                console.log(`error`);
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
