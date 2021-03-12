/** Import Router componetent เข้ามาเพื่อเตรียม */
import {BrowserRouter ,Switch,Route} from 'react-router-dom';

import FriendList from './FriendList';
import Chatbox from './Chatbox';
import Profile from './Profile';

function Router(){

    return(
        <BrowserRouter>
        <Switch>
            <Route path="/Profile">
                <Profile/>
            </Route>
            <Route path="/friend-list">
            <FriendList />
            </Route>
            <Route path="/">
                <Chatbox/>
                </Route>
                </Switch>
                </BrowserRouter>
    )

};

export default Router;/**   ส่งออก Router ไปให้โลกใช้งาน */