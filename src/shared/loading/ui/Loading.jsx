import ReactLoading from 'react-loading';
import "./style.css";


export const Loading = ({type ="spinningBubbles",color="#fff",height="60px",width="60px", platformHeight="70vh"}) =>{
    return(
        <div className="loading" style={{height:platformHeight}}><ReactLoading type={type} color={color} height={height} width={width}/></div>
    )
}