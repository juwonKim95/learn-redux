
import './App.css';
import Countercontainer from './containers/countercontainer';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div className="App">
      <Countercontainer/>
      <TodosContainer/>
    </div>
  );
}

export default App;
