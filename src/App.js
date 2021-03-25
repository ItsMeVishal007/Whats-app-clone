import Sidebar from './Sidebar'
import Chat from './chat.jsx';
import './App.css';

function App() {
  return (
    // BEM naming convention
    <div className="App">
      <div className='app_body'>
    {/* Side bar */}
    <Sidebar />
    {/* Chat  */}
    <Chat />
      </div>
    </div>
  );
}

export default App;
