import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { loadButtons, loadClear,loadBackspace,loadAns } from '../redux/calculatorRedux/CalculatorAction';
import { CALCULATOR_KEY } from '../redux/calculatorRedux/CalculatorReducer';
const Calculator = () => {

  const dispatch=useDispatch();

  const viewCalculator=useSelector((state)=>{
    return (state[CALCULATOR_KEY]);
  })
  useEffect(() => {
    if (viewCalculator.number.length > 0) {
      dispatch(loadAns());
    }
  }, [viewCalculator.number, dispatch]);

  
  return (
    <>
    <section>
        <div className='bg-gray-900 w-96 h-auto mx-auto rounded-lg overflow-hidden  '>
          <div className='text-gray-200 w-full font-bold text-3xl h-16 items-center pl-10'>
            <p>CALCULATOR APP</p>
          </div>

          <div className='w-full h-15'>
            <input 
             type="text" 
             placeholder='0'
             value={viewCalculator.number}
             readOnly
             className='w-full h-full border border-white bg-gray-900 text-4xl text-right pr-5 text-gray-100 '

            />
          </div>
          <div className='w-full h-15'>
            <input 
             type="text" 
             placeholder=''
             value={(viewCalculator.ans).length===0 ? viewCalculator.number:(viewCalculator.ans)}
             
             readOnly
             className='w-full h-full border border-white bg-gray-900 text-2xl text-right pr-3 text-gray-100 '

            />
          </div>

          <div className='grid  grid-cols-4 gap-2 mt-3 mx-3'>
            <button onClick={()=>dispatch(loadClear())} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>AC</button>
            <button onClick={()=>dispatch(loadBackspace())} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>C</button>
            <button onClick={()=>dispatch(loadButtons('/'))}className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>/</button>
            <button onClick={()=>dispatch(loadButtons('+'))} className='text-white w-20 h-40 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow row-span-2 '>+</button>


            <button onClick={()=>dispatch(loadButtons(9))} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>9</button>
            <button onClick={()=>dispatch(loadButtons(8))} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>8</button>
            <button onClick={()=>dispatch(loadButtons(7))} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>7</button>
            <button onClick={()=>dispatch(loadButtons(4))} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>4</button>

            <button onClick={()=>dispatch(loadButtons(5))} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>5</button>
            <button onClick={()=>dispatch(loadButtons(6))} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>6</button>
            <button onClick={()=>dispatch(loadButtons('-'))}className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>-</button>
            <button onClick={()=>dispatch(loadButtons(1))} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>1</button>

            <button onClick={()=>dispatch(loadButtons(2))}className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>2</button>
            <button onClick={()=>console.log(dispatch(loadButtons(3)))}className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>3</button>
            <button onClick={()=>dispatch(loadButtons('*'))}className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>*</button>
            <button onClick={()=>dispatch(loadButtons('.'))} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>.</button>

            <button onClick={()=>dispatch(loadButtons(0))}className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>0</button>
            <button onClick={()=>console.log(dispatch(loadAns()))}className='text-white w-40 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow col-span-2'>=</button>
           
            
          </div>
        </div>
    </section>
    </>
  )
}

export default Calculator
