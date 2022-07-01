
import './App.css';
import Square from './Square';
import Input from './Input';
import{useState} from 'react';

function App() {

  const [colorValue,setColorValue] = useState('');
  const [hexValue,setHexValue] = useState('');
  const[isDarktext,setIsDarkText] = useState(true)
  return (
    <div className="App">
     <Square
     colorValue={colorValue}
     hexValue={hexValue}
     isDarktext={isDarktext}
     />
     <Input colorValue={colorValue}
            setColorValue={setColorValue}
            setHexValue={setHexValue}
            isDarktext={isDarktext}
            setIsDarkText={setIsDarkText}
            />
    </div>
  );
}

export default App;
