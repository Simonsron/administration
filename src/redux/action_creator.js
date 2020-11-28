import {INCRE,PRE} from './action_types'


export const createIncre = value=>({type:INCRE,data:value})
export const createPre = value=>({type:PRE,data:value})