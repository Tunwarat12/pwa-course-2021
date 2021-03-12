import {Link} from 'react-router-dom';
import pic from './pic.jpg';
function FriendList() {
    return(
        <div>
         <div>friend List</div>
        <Link to="/">
         <img src={pic}/>
        </Link>
     </div>
    )
};
    
export default FriendList;