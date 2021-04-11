import React,{useState,useRef,useEffect} from 'react';
import CompTitle from '../../Component/CreatePlan/title';
import { db } from '../../../firebase';

export type Income = {
  kyuuyo: number;
  subIncome: number;
};

type TitlePoprs = {
  setSumPlan: React.Dispatch<React.SetStateAction<number | null>>;
}

const Title:React.FC<TitlePoprs> = (props:TitlePoprs) => {
  const {setSumPlan} = props;
    const [selectedDate, setSelectedDate] = useState<Date | null>(
        new Date()
      );
    const [dispDate,setDispDate] = useState<string>((new Date().getFullYear()) + '年' + (new Date().getMonth()+1) + '月');
    const minDate:Date = new Date("2020-03-01");
    const maxDate:Date=new Date();
    const [syunyu, setSyunyu] = useState<Income>({kyuuyo:0, subIncome:0});
    const [plan,setPlan] = useState<Array<string>>([...Array(15).fill('0')]);
    const [result,setResult] = useState<Array<string>>([...Array(15).fill('0')]);
    const [lastResult,setLastResult] = useState<Array<number>>([...Array(15).fill('0')]);
    const calcFlg = useRef<boolean>(false);

    const fetchIncomeData = () => {
      const incomeRef = db.collection("202104");
      incomeRef.get().then((snapshot) => {
        snapshot.forEach((doc) => {
            console.log(doc.data().kyuuyo);
            const resData = doc.data()
            const newIncome:Income={kyuuyo:resData.kyuuyo, subIncome: resData.subIncome}
            setSyunyu(newIncome);
          }
        );
      })
    };
  
    useEffect(() => {
      fetchIncomeData();
    }, []);
    
      const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        if(date !== null) {
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let disp = year + '年' + month  + '月'
            setDispDate(disp);
        }
      };

      const KyuuyoChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,type:number) => {
        if(syunyu !== null){ 
          if(type === 0){
            let newValue=syunyu;
            newValue.kyuuyo = Number(event.target.value);
            setSyunyu(newValue);
          }else if(type === 1){
            let newValue=syunyu;
            newValue.subIncome = Number(event.target.value);
            setSyunyu(newValue);
          }  
        }
    };

    const CalcClick = () => {
        setLastResult(lastResult.map((item,index) => Number(plan[index]) - Number(result[index])));
        calcFlg.current = true;
      };

    return(
        <CompTitle 
            dispDate={dispDate} 
            minDate={minDate} 
            maxDate={maxDate} 
            selectedDate={selectedDate} 
            handleDateChange={handleDateChange} 
            CalcClick={CalcClick}
            syunyu={syunyu}
            KyuuyoChange={KyuuyoChange}
            setSumPlan={setSumPlan}
        />
    )
}

export default Title;