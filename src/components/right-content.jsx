import './content.css'
import { data } from './content';
import { useContext } from 'react';

function Rightcontent(props){
    const name  = useContext(data)
    props.getData(name)
    const json = [10,20,30,40,50,60,70,80,90]
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(resp => resp.json())
    .then(json => console.log(json))

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
        </>
    );
};

export default Rightcontent;