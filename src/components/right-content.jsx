import './content.css'
import { data } from './content';
import { useContext, useReducer } from 'react';

function Rightcontent(props){
    const name  = useContext(data)
    props.getData(name)
    const json = [10,20,30,40,50,60,70,80,90]
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(resp => resp.json())
    .then(json => console.log(json))

    const initial_state = 0;
    const reducer = (state,action)=>{
        switch(action){
            case "increment":
                return state+1
            case "decrement":
                return state-1
            default:
                return state
        }
    }

    const [current_state,dispatch] = useReducer(reducer,initial_state)

    return (
        <>
            <div className="right-content">
                {name} is {props.age}
                {json.map((d)=>{
                    return (
                        <h3>{d}</h3>
                    )
                })}
            </div>

            <div>
                <h3>{current_state}</h3>
                <button onClick={()=>dispatch("increment")}>Increment</button>
                <button onClick={()=>dispatch("decrement")}>Decrement</button>
                
            </div>
        </>
    );
};

export default Rightcontent;