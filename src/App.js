import logo from './logo.svg';
import './App.css';
import styled, {keyframes} from 'styled-components';
import styledBox from './StyledBoxes';

function App() {

  const [fadeInBox, fadeInBoxSetter] = useState(false);

  useEffect(() => {
    setTimeout(() => {  
      fadeInBoxSetter(true);
    }, 500)
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {fadeInBox && <Box />}
    </div>
  );
}

export default App;
