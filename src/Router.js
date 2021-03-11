/** Import Router componetent เข้ามาเพื่อเตรียม */
import {BrowserRouter ,Switch,Route} from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';

function Router(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/friend-list">
            <FriendList />
            </Route>
            <Route path="/">
            <App/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
};

export default Router;/**   ส่งออก Router ไปให้โลกใช้งาน */