import React from 'react';
import Header  from './headerFeild';
import NewsListitem from './NewsListitem';

function App(){
  return (
     <div>
        <Header />
        <NewsListitem />
        <NewsListitem />
        <NewsListitem />
        <NewsListitem />
     </div>
  );
}

export default App;