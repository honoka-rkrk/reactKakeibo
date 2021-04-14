import React,{createContext,useReducer} from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type KakeiboState = {
    date:string,
    userID:number,
    mainIncome:number,
    subIncome:number,
    detailPlan:Array<number>;
    sumDetailPlan:number;
    resultPlan:Array<number>;
    sumResultPlan:number;
    lastResultPlan:Array<number>;
    sumLastResultPlan:number;
    calcSumFlg:boolean;
}

const initialState:KakeiboState = {
    date:'',
    userID:-1,
    mainIncome:-1,
    subIncome:-1,
    detailPlan :[...Array(15)].fill(0),
    sumDetailPlan :0,
    resultPlan:[...Array(15)].fill(0),
    sumResultPlan:0,
    lastResultPlan:[...Array(15)].fill(0),
    sumLastResultPlan:0,
    calcSumFlg:false
}

// createSliceでreducerとactionを同時に定義
const kakeiboSlice = createSlice({
    name: 'kakeibo',
    initialState,
    reducers: {
        setIncome: (state, action: PayloadAction<Array<number>>) => {
            return{ 
          ...state,
          mainIncome: action.payload[0],
          subIncome:action.payload[1]
            }
        },
        setDetailPlan: (state, action: PayloadAction<Array<number>>) => {
            
            return{ 
          ...state,
          detailPlan: action.payload,
            }
        },
        setSumDetailPlan: (state, action: PayloadAction<number>) => {
            console.log(action.payload);
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
            console.log(action.payload);
            return{
                ...state,
                sumResultPlan:action.payload
            }
        },
        setLastResultPlan:(state,action:PayloadAction<Array<number>>) => {
            console.log(action.payload);
            return{
                ...state,
                lastResultPlan:action.payload
            }
        },
        setSumLastResultPlan:(state,action:PayloadAction<number>) => { 
            console.log(action.payload);
            return{
                ...state,
                sumLastResultPlan:action.payload
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
    setIncome,
    setDetailPlan,
    setSumDetailPlan,
    setResultPlan,
    setSumResultPlan,
    setLastResultPlan,
    setSumLastResultPlan,
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