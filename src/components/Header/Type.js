import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
const customCursorStyle = {
  display: 'inline-block',
  '::before': {
    content: '|', // Replace '|' with the character you want to use as the cursor
    color: '#D2614B', // Change the cursor color
    fontSize: '24px', // Change the cursor size
    // Add any other cursor styling you need
  },
};

const Type = () => {
  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }


  return (
    <div>
      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal',fontWeight: 'bold',fontSize:'36px' }}>
        Upscaling Made <span style={{ color: '#D2614B', fontWeight: 'bold' , fontSize:'36px'}}>{" <"}</span> 
        <span style={{ color: '#D2614B', fontWeight: 'bold' , fontSize:'36px'}}>
          <Typewriter
            cursor
            words={['Eat', 'Sleep', 'Code', 'Repeat!']}
            loop={true}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          <span style={{ color: '#D2614B', fontWeight: 'bold' }}>{'> '}</span> 
        </span>
      </h1>
    </div>
  );
};

export default Type;
