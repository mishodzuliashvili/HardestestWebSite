import logo from './logo.svg';
import './App.css';
const high = (fun) => {
  fun("gela")
}
const auxF = res => console.log(res)
high(auxF);

function App() {
  return (
    <h1>{0 === 0 ? <p>zz</p> : <p>hey</p>}</h1>
  );
}

export default App;
