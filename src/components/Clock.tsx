import { useEffect, useState } from 'react';
import { IClockParams } from '../App'

export const Clock : React.FC<IClockParams> = (props) => {
  const {name, timeZone, onRemove} = props;
  const [time, setTime] = useState<Date>(new Date());

  const getTimeString = () : string => {
    const localTime = new Date(time.getTime() + (parseFloat(timeZone) * 3600 * 1000));
    return `${localTime.getHours()}:${localTime.getMinutes()}:${localTime.getSeconds()}`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [])

  return (
    <div className='world-clock'>
      <h2>{name}</h2>
      <p>{getTimeString()}</p>
      <button onClick={onRemove}>Удалить</button>
  </div>
  )
}