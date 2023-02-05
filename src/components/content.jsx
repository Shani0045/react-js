import { createContext } from 'react';
import './content.css'
import Leftcontent from './left-content';
import Rightcontent from './right-content';

const data = createContext();
function Content(){
    function getData(d){
        console.log("data: "+d)
    };

    let name = "Shani Kumar"

    return (
        <>
            <div className="content">
               <data.Provider value={name}>
                 <Leftcontent></Leftcontent>
                <Rightcontent age={10} getData={getData}></Rightcontent>
               </data.Provider>
            </div>
        </>
    );
};

export default Content;
export {data};