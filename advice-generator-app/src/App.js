import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[data,setData] = useState();
  const[loading,setLoading] = useState(true);
  useEffect(()=>{
    setLoading(true)
 fetch('https://api.adviceslip.com/advice').then((res)=> {
  if(res && res.status === 200) return res.json();
  else throw new Error(res?.statusText)
 }).then((data)=>{setData(data?.slip)
  setLoading(false)
 }).catch((err)=>setData(err))
  },[])

  console.log(data)
  return (
    <div className="App">
    {!loading && <> 
      <div className='inside-container'>
        <p className='adviceNo'>ADVICE #{data?.id}</p>
        <div className='adviceText-container'>
        <p className='adviceText'>"{data?.advice}"</p>
        </div>
        <img src={require('./images/pattern-divider-desktop.svg').default} className='img1'/>
      </div>
      <div className='circle'>
        <img className='img2' src={require('./images/icon-dice.svg').default}/>
      </div>
    </>}
    </div>
  );
}

export default App;
