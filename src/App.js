import './App.css';
import Field from './components/field';
import Button from './components/button';
import Gif from './components/img';
import gif from './gifData';

function App() {
  return (
    <div className="App">
      <Field />
      <Button />
      <Gif src={gif.url} title={gif.title}/>
    </div>
  );
}

export default App;