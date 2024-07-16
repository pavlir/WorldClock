import { useState, FormEvent, ChangeEvent} from 'react'

interface IAddTimeFormProps {
  addClock: (clock: { name: string; timeZone: string }) => void;
}

export const AddTimeForm : React.FC<IAddTimeFormProps> = ({addClock}) => {
  const [name, setName] = useState<string>('');
  const [timeZone, setTimeZone] = useState<string>('');

  const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addClock({ name, timeZone });

    setName('');
    setTimeZone('');
  };

  const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
    const {target} = event;
    if (target.id == 'name') {
      setName(target.value);
    } else {
      setTimeZone(target.value);
    }
  };

  return (
    <form className='form-add-clock' onSubmit={handleSubmit}>
      <fieldset>
        <legend>Название</legend>
        <input type="text" value={name} name="name" id="name" onChange={handleChange} />
      </fieldset>

      <fieldset>
        <legend>Временная зона</legend>
        <input type="text" value={timeZone} name="timeZone" id="timeZone" onChange={handleChange} />
      </fieldset>

      <button>Добавить</button>
    </form>
  )
}
