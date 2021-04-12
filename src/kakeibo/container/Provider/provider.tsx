import React,{createContext,useReducer} from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type KakeiboState = {
    detailPlan:Array<number>;
    sumDetailPlan:number;
    resultPlan:Array<number>;
    sumResultPlan:number;
    calcSumFlg:boolean;
}

const initialState:KakeiboState = {
    detailPlan :[...Array(15)].fill(0),
    sumDetailPlan :0,
    resultPlan:[...Array(15)].fill(0),
    sumResultPlan:0,
    calcSumFlg:false
}

// createSliceでreducerとactionを同時に定義
const kakeiboSlice = createSlice({
    name: 'kakeibo',
    initialState,
    reducers: {
        setDetailPlan: (state, action: PayloadAction<Array<number>>) => {
            return{ 
          ...state,
          detailPlan: action.payload,
            }
        },
        setSumDetailPlan: (state, action: PayloadAction<number>) => {
            return{ 
          ...state,
          sumDetailPlan: action.payload,
            }
        },
        setResultPlan:(state,action:PayloadAction<Array<number>>) => {
            return{
                ...state,
                resultPlan:action.payload
            }
        },
        setSumResultPlan:(state,action:PayloadAction<number>) => { 
            return{
                ...state,
                sumResultPlan:action.payload
            }
        },
        setCalcSumFlg:(state,action:PayloadAction<boolean>) => {
            return{
                ...state,
                calcSumFlg:action.payload
            }
        },
        setInitialState:() => ({
            ...initialState,
        })    
    },
})

export const {
    setDetailPlan,
    setSumDetailPlan,
    setResultPlan,
    setSumResultPlan,
    setCalcSumFlg,
    setInitialState
} = kakeiboSlice.actions;

type KakeiboProviderValue = {
    kakeiboInfo:KakeiboState;
    kakeiboDispatch:React.Dispatch<PayloadAction<
        |number
        |Array<number>
        |boolean
        >
    >;
};

export const KakeiboContext = createContext({} as KakeiboProviderValue);

type KakeiboProviderProps = {
    children:React.ReactNode;
};

const KakeiboProvider:React.FC<KakeiboProviderProps> = (props:KakeiboProviderProps) => {
    const [kakeiboInfo,kakeiboDispatch] = useReducer(
        kakeiboSlice.reducer,initialState);

    return(
        <KakeiboContext.Provider value={{kakeiboInfo,kakeiboDispatch}}>
            {props.children}
        </KakeiboContext.Provider>
    );
};

export default KakeiboProvider