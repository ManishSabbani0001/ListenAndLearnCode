import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSend } from "react-icons/lu";
import { IoMdHome } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import logo1 from './Assets/img1.jpg'
import logo2 from './Assets/img2.jpg'
import logo3 from './Assets/img3.jpg'
import logo4 from './Assets/img4.jpg'
import logo5 from './Assets/img5.jpg'
import logo6 from './Assets/img6.jpg'
import logo7 from './Assets/img7.jpg'
import logo8 from './Assets/img8.jpeg'
import logo9 from './Assets/img9.jpeg'
import logo10 from './Assets/img10.jpeg'
import logo11 from './Assets/img11.jpeg'
import logo12 from './Assets/img17.jpeg'
import logo13 from './Assets/reelicon.png'
import './App.css';
function App() {
  const settings = {
    dots: true,
    infinite: false,
    arrows: false
  };
  return (
      <div>
      <header className="App-header">
        <p id='head'>Instagram</p>
        <div className="headerView">
        <FaRegHeart id='loveSymbol'/>
        <RiMessengerLine id='icon'/>
        </div>
        </header>
         <div className="status-Container">
           <div className="mainStatus">
             <div className="div-status">
               <img src = {logo3} alt="statusPic" id="status"></img>
               <p id="userName">Sabbani Manish</p>
             </div>
             <div className="div-status">
               <img src = {logo4} alt="statusPic" id="status"></img>
               <p id="userName">Haji_Almass</p>
             </div>
             <div className="div-status">
               <img src = {logo5} alt="statusPic" id="status"></img>
              <p id="userName">Numan</p>
             </div>
             <div className="div-status">
             <img src = {logo6} alt="statusPic" id="status"></img>
               <p id="userName">Ramesh</p>
             </div>
             <div className="div-status">
               <img src = {logo7} alt="statusPic" id="status"></img>
               <p id="userName">Sai Ganesh</p>
             </div>
             <div className="div-status">
               <img src = {logo8} alt="statusPic" id="status"></img>
               <p id="userName">Ashish</p>
             </div>
             <div className="div-status">
               <img src = {logo9} alt="statusPic" id="status"></img>
               <p id = "userName">Nagaraju</p>
             </div>
           </div>
           </div>
           <div className="Mini-container">
             <div id="profileText">
             <div id="div-img">
             <img src={logo1} alt="imgpic" id='profile'></img></div>
             <p id="txt">Sabbani Manish</p></div>
             <div id="ThreeDotsIcon">
             <BsThreeDotsVertical id="icon1"/>
             </div>
           </div>
           <div>
            <img src={logo2} alt="imgpic1" id="profile1"></img>
           </div>
           <div className="threeIcons">
           <div className="iconsOfthree">
           <FaRegHeart id="heartIcon" /><p id="likes">7,002</p>
           <BiMessageRounded id="msgIcon" /><p id="msgs">49</p>
          <LuSend id="sendIcon"/><p id="msgs">20</p></div>
           <div className="rightIcon">
           <FaRegBookmark id="bookmark"/>
           </div>
           </div>
          <div className="footer">
             <img src={logo10} alt="imgpic" id='userPic'></img>
             <p id="likedPeople">Liked by sai_krishna_and others</p></div>
             <p id="comment">Your pic is a hero level</p>
             <p id="time">30minutes ago</p> 
             <div className="Mini-container">
             <div id="profileText">
             <div id="div-img">
             <img src={logo1} alt="imgpic" id='profile'></img></div>
             <p id="txt">Sabbani Manish</p></div>
             <div id="ThreeDotsIcon">
             <BsThreeDotsVertical id="icon1"/>
           </div>
           </div>
            <div>
       <Slider {...settings}>
         <div>
            <img src={logo11} alt="imgpic1" height='400' width='100%'></img>
         </div>
        <div>
           <img src={logo2} alt="imgpic1" height='400' width='100%'></img>
        </div>
         <div>
           <img src={logo3} alt="imgpic1" height='400' width='100%'></img>
         </div>
         <div>
           <img src={logo4} alt="imgpic1" height='400' width='100%'></img>
         </div>
       </Slider><br/>
     </div>
           <div className="threeIcons">
           <div className="iconsOfthree">
           <FaRegHeart id="heartIcon" /><p id="likes">100</p>
           <BiMessageRounded id="msgIcon" /><p id="msgs">15</p>
           <LuSend id="sendIcon"/><p id="msgs">10</p></div>
           <div className="rightIcon">
         <FaRegBookmark id="bookmark"/>
         </div>
           </div>
           <div className="footer">
           <img src={logo12} alt="imgpic" id='userPic'></img>
             <p id="likedPeople">Liked by Suraj_Vicky and others</p></div>
           <p id="comment">Wow usa tour enjoy cheyi mama..</p>
             <p id="time">5minutes ago</p> 
             <div className="Mini-container">
             <div id="profileText">
             <div id="div-img">
             <img src={logo1} alt="imgpic" id='profile'></img></div>
             <p id="txt">Sabbani Manish</p></div>
             <div id="ThreeDotsIcon">
             <BsThreeDotsVertical id="icon1"/>
           </div>
           </div>
           <div>
            <img src={logo9} alt="imgpic1" id="profile1"></img>
           </div>
           <div className="threeIcons">
             <div className="iconsOfthree">
           <FaRegHeart id="heartIcon" /><p id="likes">150</p>
           <BiMessageRounded id="msgIcon" /><p id="msgs">50</p>
           <LuSend id="sendIcon"/><p id="msgs">30</p></div>
           <div className="rightIcon">
           <FaRegBookmark id="bookmark"/>
           </div>
           </div>
          <div className="footer">
             <img src={logo12} alt="imgpic" id='userPic'></img>
             <p id="likedPeople">Liked by Sai_Gaesh and others</p></div>
             <p id="comment">Superb pic statue...</p>
             <p id="time">2hours ago</p> <br/><br/>
            <div className="bottomPage">
             <IoMdHome id="f_icon"/>
             <IoSearch id='f_icon'/>
             <FaRegPlusSquare id='f_icon'/>
             <img src={logo13} alt="imgpic1" id="btmImg"></img>
             <img src = {logo3} alt="statusPic" id="btmPic"></img>
             </div>
        </div>
        
        
  );
}

export default App;
