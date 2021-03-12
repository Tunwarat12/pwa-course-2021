import './App.css';
import { Link } from 'react-router-dom';


function App({children}) {

  return (
    <div className="App">
      <div className="App-header">
          <Link to="/friend-list"> 
          <button>
            Friend List
          </button>
          </Link>

          <Link to="/Profile"> 
          <button>
            Profile
          </button>
          </Link>

          <Link to="/Chatbox"> 
          <button>
            Chatbox
          </button>
          </Link>
        </div>
    <div className="App-content">
       {children}
     </div>
    </div>
  );
}

export default App;