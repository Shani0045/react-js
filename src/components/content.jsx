import './content.css'
import Leftcontent from './left-content';
import Rightcontent from './right-content';

function Content(){
    return (
        <>
            <div className="content">
                <Leftcontent></Leftcontent>
                <Rightcontent></Rightcontent>
            </div>
        </>
    );
};

export default Content;