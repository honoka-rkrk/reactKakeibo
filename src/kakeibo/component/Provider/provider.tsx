import React,{createContext} from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers, configureStore, getDefaultMiddleware  } from "@reduxjs/toolkit";

export type KakeiboState = {
    detailPlan:Array<number>;
    sumDetailPlan:number;
    resultPlan:Array<number>;
    sumResultPlan:number;
}

const initialState:KakeiboState = {
    detailPlan :[...Array(15)].fill(0),
    sumDetailPlan :0,
    resultPlan:[...Array(15)].fill(0),
    sumResultPlan:0
}

// createSliceでreducerとactionを同時に定義
const Kakeiboslice = createSlice({
    name: 'kakeibo',
    initialState,
    reducers: {
        setDetailPlan: (state, action: PayloadAction<Array<number>>) => ({
          ...state,
          detailPlan: action.payload,
        }),
        setSumDetailPlan: (state, action: PayloadAction<number>) => ({
          ...state,
          count: action.payload,
        }),
        setResultPlan:(state,action:PayloadAction<Array<number>>) => ({
            ...state,
            resultPlan:action.payload,
        }),
        setSumResultPlan:(state,action:PayloadAction<number>) => ({
            ...state,
            sumResultPlan: action.payload,
        }),
        setInitialState:() => ({
            ...initialState,
        })    
    },
})

// type KakeiboContextType = {
//     kakeiboInfo:KakeiboState,
//     kakeiboDispatch:
// }

// const TextsContext = createContext({} as KakeiboContextType)

// const store = configureStore({
//     reducer: Kakeiboslice.reducer
//   })
  
//   const { actions, reducer } = Kakeiboslice
//   const { setDetailPlan, setSumDetailPlan, setResultPlan,setSumResultPlan,setInitialState} = actions