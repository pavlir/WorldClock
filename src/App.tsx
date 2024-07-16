import { useState } from 'react';
import './App.css'
import { AddTimeForm } from './components/AddTimeForm';
import { Clock } from './components/Clock';

export interface IClockParams {
  name: string,
  timeZone : string,
  onRemove? : () => void 
}

function App() {
  const [clocks, setClocks] = useState<IClockParams[]>([]);

  const addClock = ({ name, timeZone }: IClockParams) : void => {
    if (name && timeZone) {
      setClocks((prevClocks) => [...prevClocks, { name, timeZone }]);
    }
  };

  const removeClock = (index : number) : void => {
    const filteredClocks = clocks.filter((_, i) => i !== index);
    setClocks(filteredClocks);
  };

  return (
    <>
      <AddTimeForm addClock={addClock} />
      <div className="clocks">
        {clocks.map((c, index) => {
          return <Clock key={index} name={c.name} timeZone={c.timeZone} onRemove={() => removeClock(index)} />;
        })}
      </div>
    </>
  )
}

export default App
