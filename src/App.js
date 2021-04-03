import logo from './logo.svg';
import './App.css';
import MoviesContainer from './containers/MoviesContainer';
import Tab from './components/Tab';

const App = () => {
  return (
    <div className="App">
      <header className='App-header'>
        <h1 className='App-title'>React Movies App</h1>     
      </header>
      {/* <MoviesContainer/>   */}
      <Tab/>
    </div>
  );
}

export default App;
