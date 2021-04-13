import {Switch,Route} from 'react-router-dom';
import HomePage from './component/HomePage'
import SignIn from './component/SignIN/SignIn'
import Profile from './component/Profile/Profile'
import SignUp from './component/SignUp'
import NavBar from './component/NavBar';
import UnderLine from './component/UnderLine';
import CreatePost from './component/CreatePost/CreatePost';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="container-fluid">
    <NavBar/>
    {/* <UnderLine></UnderLine> */}
      <Switch>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/createpost">
              <CreatePost />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
      </Switch>
    </div>
    
  );
}

export default App;
