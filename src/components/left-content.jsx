// import './content.css'
import './bootstrap.css'
import {useState,useEffect, useMemo, useRef, createContext} from 'react'
import { data } from './content'

function Card(props){
    let [count,setCount] = useState(0)
    const element  = useRef("")

    function ratePositive(){
        setCount(count+1)
        element.current.innerText = `Rating*: ${count}`
    }

    function rateNegative(){
        if(count>0){
            setCount(count-1)
            element.current.innerText = `Rating*: ${count}`

        }
        else{
            setCount(count)
            element.current.innerText = `Rating*: ${count}`
            
        }
    }

    useEffect(function(){
        console.log("use effecrt run")
    },[])

    //[] for run only one time [count] run only for count

    function clearCounter(){
        setCount(0)
        element.current.innerHTML = `Rating: ${count}`

    }

    return(
        <>
        <div className="h-25 mt-3">
        <div className="card bg-warning" style={{"width":"18rem"}}>
            <data.Consumer>
                { function(name){
                    return(
                        <p> created by {name}</p>
                    )
                }
                }
            </data.Consumer>
            <img className="card-img-top" src="https://img.starbiz.com/2018/12/28/salman-khan-1-e602.jpg" />
            <div className="card-body">
                <h5 className="card-title font-weight-bold">{props.name}</h5>
                <p className="card-text">{props.name} is a bollywood actor</p>
                <p ref={element}>Rating* :</p>
                <a href="#" className="btn btn-primary mt-5" onClick={ratePositive}>Rate+</a>
                <a href="#" className="btn btn-primary ml-2 mt-5" onClick={rateNegative}>Rate-</a>
                <a href="#" className="btn btn-primary ml-2 mt-5" onClick={clearCounter}>Clear</a>
            </div>
        </div>   
        </div>
        </>
    )
}

function Leftcontent(){
    return (
        <>
           <div className='d-flex justify-content-around w-100 flex-wrap'>
            <Card name="Salman Khan"></Card>
            <Card name="Salman Khan"></Card>
            <Card name="Salman Khan"></Card>
            <Card name="Salman Khan"></Card>
            <Card name="Salman Khan"></Card>
            <Card name="Salman Khan"></Card>
           </div>
        </>
    );
};

export default Leftcontent;