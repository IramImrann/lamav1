
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import New from './new/New';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import Single from './pages/single/Single';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home/>}/>
          
        
          <Route path="/login" element={<Login/>}/>
          <Route path="users">
            <Route index element={<List/>}/>
            <Route path=":userId" element={<Single/>}/>
            <Route path="new" element={<New/>}/>

          </Route>
          <Route path="products">
            <Route index element={<Single/>}/>
            <Route path=":productId" element={<New/>}/>
          </Route>

          </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
