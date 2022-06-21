
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title="Text Utils" abouttext="About Us"/>
      <div className="container my-3">
        <Textform heading="Enter the Text to analyzed below" />
      </div>
    </>
   
    // <>
    // <h1>khan</h1>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with faisal
    //     </a>
    //   </header>
    // </div>
    // </>
  );
}

export default App;
