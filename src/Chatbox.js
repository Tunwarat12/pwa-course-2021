import './App.css';
import {useState} from 'react';
import { Link } from 'react-router-dom';


function Chatbox() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);
  

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () =>{
    setLines([...lines , text]);

    setText("");
  };

  const keyPress = (event) => {

    console.log("hello");
    if (event.which === 13){
      onSend();
    }
  };

  return (
    <div className="App">
      <div className="App-header">
          <Link to="/friend-list"> 
          <button>
            FriendList
          </button>
          </Link>
        </div>
    <div className="App-chatroom">

     </div>
    </div>
  );
}

export default Chatbox;