
import './App.css';
import Heade from './Component/Heade';
import Todoadd from './Component/Todoadd';
import Todolist from './Component/Todolist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Heade />
      <Todoadd />
      <Todolist/>
      </header>
    </div>
  );
}

export default App;
