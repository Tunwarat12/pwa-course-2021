import {Link} from 'react-router-dom';
import pic from './pic.jpg';
function FriendList() {
    return(
        <div>
         Friend List
        <Link to="/">
         <img src={pic}/>
        </Link>
     </div>
    )
};
    
export default FriendList;