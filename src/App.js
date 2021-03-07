import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import FriendDetail from './Components/FriendDetail/FriendDetail';



function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/friend/:friendId">
          <FriendDetail/>
          </Route>
          <Route path="/Home">
          <Home/>
          </Route>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
        
    </div>
  );
}

export default App;
