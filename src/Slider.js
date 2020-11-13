import React,{useState} from 'react';
import './slider.scss';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ImgComp from './ImgComp';
import i1 from "./images/1.jpeg";
import i2 from "./images/2.jpg";
import i3 from "./images/3.jpg";
// import i4 from "./images/4.jpg";
// import i5 from "./images/5.jpg";
// import i6 from "./images/6.jpg";

function Slider(){
    // let's create an array  for component to show inside the slider
    // Let's Add components to the array
    let sliderArr= [<ImgComp src={i1}/>,
        <ImgComp src={i2}/>,
        <ImgComp src={i3}/>,
        // <ImgComp src={i4}/>,
        // <ImgComp src={i5}/>,
        // <ImgComp src={i6}/>
    ];
    const [x,setX] = useState(0);

    const goLeft=()=>{
        
        //sliderArr.length is the number of images 
        // This is step is done so that after last value it comes back to first
        (x=== 0) ? setX(-100*(sliderArr.length-1)) : setX(x+100);
    };

    const goRight= () => {
        
        (x=== -100*(sliderArr.length-1)) ? setX(0) : setX(x-100);

    };
return(
    <div className="slider">
        {
            sliderArr.map((item,index)=>{
                return(
                    <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                        {item}
                    </div>
                );
            })
        }
        {/* Lets add two buttons to navigate */}
        <button id="goLeft" onClick={goLeft}><ArrowBackIosIcon style={{ fontSize: 40, color:"whitesmoke" }} /></button>
        <button id="goRight" onClick={goRight}><ArrowForwardIosIcon style={{ fontSize: 40, color:"whitesmoke" }} /></button>

    </div>
)
}

export default Slider;