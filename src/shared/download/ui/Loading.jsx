import ReactLoading from 'react-loading';
import "./style.css";


export const Loading = () =>{
    return(
        <div className="download"><ReactLoading type={"spinningBubbles"} color={"#fff"} height={"60px"} width={"60px"}/></div>
    )
}