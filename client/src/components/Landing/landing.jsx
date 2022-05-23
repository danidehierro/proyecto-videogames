import {Link} from 'react-router-dom';
import './Landing.css'

export default function Landing(){
     return(
         <div className='landing'>

             <h1> App VideoGame</h1>
             <Link to= '/home'>
                 <button className='botton'>Start</button>
             </Link>
         </div>
     )

}