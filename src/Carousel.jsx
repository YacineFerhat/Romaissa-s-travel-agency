import React ,{useState} from 'react';
import { Gallery, GalleryImage } from "react-gesture-gallery";
import data from './data'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Carousel  = () => {
    const donnee =  data
    const [index, setIndex] = useState(0)
    const changeIndex = () => {

    }
    return(
        <div style={{background:`url(${data[index].picture}) center/cover`,transition:'1s', width:'100%', height:'700px'}}>
            <h1 className="title is-2 has-text-black " style={{position:'relative', top:'30%'}}>
            اكتشف سحر العالم معنا
            </h1>
            <h1 className="title is-2" style={{color: index === 1 ? 'black' : 'white' ,position:'relative',top:'40%' }}>
                {donnee[index].name}
            </h1>
            {
                index  > 0 && index < 3  ? 
                <ArrowBackIosIcon onClick={()=>setIndex(index-1)} fontSize="large" style={{position:'relative',color:index===0 || 1 ? 'white' : 'black' , top:'270px', right:'450px'}}/>
                :
                 null
            }
            
            {
                index < 2 ?
                <ArrowForwardIosIcon onClick={()=>setIndex(index+1)} fontSize="large" style={{position:'relative', color:index===0 || 1 ? 'white' : 'black',top:'270px', left:'450px'}}/>
                : null
            }
            </div>

    )
}

export default Carousel ;