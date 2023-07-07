import { Button, Container } from 'react-bootstrap';
import './App.css';
import Comparetion from './Comparetion';
import Chart from './Chart';
import { useState } from 'react';

function App() {

  const [select, setSelect] = useState(false)
  const [which, setWhich] = useState(false)

  const compare = () => {
    setSelect(true)
    setWhich(true)
  }

  const chart = () => {
    setSelect(true)
    setWhich(false)
  }

  return (
    <div className="App">
      <Container className='outer-container'>
        <div className='header d-flex'>
          <h3 className='me-0 brand'>Percent Pro</h3>
          <div className='btn-area'>
            <Button className='btn ' onClick={compare} style={{ fontSize: "0.6rem" }}>Kıyaslama</Button>
            <Button className='btn ' onClick={chart} style={{ fontSize: "0.6rem" }}>Yüzdelik ve Grafik</Button>
          </div>
        </div>
        {select && (which ? (<Comparetion />) : (<Chart />))}

      </Container>
    </div>
  );
}

export default App;
