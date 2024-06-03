/*
  Browsers can't read JSX

  Conventions
    - All elements must be closed
    - Empty elements (br, hr, img, input,...) must be closed with a slash (/)
    - JSX uses camelCase style (oncLick, tabIndex, ...)
    - Use curly braces to include literal JavaScript
    - Use double curly braces with objects
*/

import {useState} from 'react'; // This is a hook

function App() {
  const [userName, setUserName] = useState('')
  
  const handleInput = (event) => {
    setUserName(event.target.value)
  }

  let title = <h2>Welcome to React, <span>{userName}</span></h2>
  
  return (
    <main>
      <div className='container'>      
        {title}
          <input 
            type='text' 
            className='input' 
            placeholder='User Name' 
            onChange={handleInput}
          />
      </div>
    </main>
  );
}

export default App;
