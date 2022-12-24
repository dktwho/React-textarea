import { useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState('')

  const [value1, setValue1] = useState('')
  
  function translit(letters) {
    const items = {
      а: 'a',
      б: 'b',
      в: 'v',
      г: 'g',
      д: 'd',
      е: 'e',
      ё: 'e',
      ж: 'j',
      з: 'z',
      и: 'i',
      к: 'k',
      л: 'l',
      м: 'm',
      н: 'n',
      о: 'o',
      п: 'p',
      р: 'r',
      с: 's',
      т: 't',
      у: 'u',
      ф: 'f',
      х: 'h',
      ц: 'c',
      ч: 'ch',
      ш: 'sh',
      щ: 'shch',
      ы: 'y',
      э: 'e',
      ю: 'u',
      я: 'ya',
    };
    return letters.split('').map((char) => items[char] || char).join('');
  }

  function reduceNum(str) {
    return (str.split('').map((el) => Number(el)).reduce((a,b) => a + b, 0))
  }

  return (
    <div className="App">
      <textarea value={value} onChange={(e) => setValue(e.target.value)} />
      <p>{translit(value)}</p>
      <br />
      <hr />
      
      <textarea rows='6' cols='30' type='number' value={value1} onChange={(e) => setValue1(e.target.value)}/>
      <p>Сумма вводимых чисел: {reduceNum(value1)}</p>
      <p>Кол-во вводиммых чисел: {value1.length}</p>
    </div>
  );
}

export default App;
