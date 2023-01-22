import './content.css'
import './bootstrap.css'
import {useState} from 'react'

function Card(props){
    let [count,setCount] = useState(0)

    function counter(){
        setCount(count+1)
    }

    function clearCounter(){
        setCount(0)
    }
    return(
        <>
        <div className="card w-25 h-50 mt-2" style={{"backgroundcolor":'pink'}}>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.name} is a b2b business company</p>
                <a href="#" className="btn btn-primary" onClick={counter}>Click Me</a>
                <a href="#" className="btn btn-primary ml-2" onClick={clearCounter}>Clear Counter</a>
                <p> Counter is : {count}</p>
            </div>
        </div>  
        </>
    )
}

function Leftcontent(){
    return (
        <>
           <Card name="Tradeindia"></Card>
           <Card name="Indiamart"></Card> 
        </>
    );
};

export default Leftcontent;