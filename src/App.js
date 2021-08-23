import './App.css';
import Navbar from './components/Navbar'
import SideMenu from './components/SideMenu'

function App() {
  return (
    <div className="App">
      <div className="left-column"><SideMenu /></div>
      <div className="main-column"></div>
      <div className="right-column"></div>
    </div>
  );
}

export default App;
