import logo from './Holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from "./utils";

function App(){
	return(
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>email</label>
        <input name='email' type='email'/>
        <label htmlFor='password'>password</label>
        <input name='password' type='password'/>
        <button type='submit'>OK</button>
      </div>
      <div className="App-footer">
      Copyright {getFullYear()} - {getFooterCopy()}
      </div>
    </div>
  );
}
export default App;