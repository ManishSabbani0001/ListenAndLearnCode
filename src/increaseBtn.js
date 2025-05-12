 import React, {useState} from 'react'
 import { FaRegHeart } from "react-icons/fa";
//  import React, {Component} from "react";
 import './increaseBtn.css'
//  export default class MyComponent extends Component {
// render() {
//     const buttonStyle = {
//         backgroundColor: 'blue'
//     }
//     return(
//     <div>
// <FaRegHeart id="heartIcon" style={buttonStyle}/>
// </div>
//     )
// }
// };
function Increase() {
    const[num, setNum] = useState()
    const[iconColor, setIconColor] = useState('red')
    const myNum =() => {
        setIconColor('red')
     const num = 0;
        if(num<1){
        setNum(num+1);
        } 
    };
    return (
        <div className='iconNum'>
        <FaRegHeart id="heartIcon" onClick={myNum} style={{iconColor}}/>
        <p id='number'>{num}</p>
        </div>
    )
}
export default Increase;
