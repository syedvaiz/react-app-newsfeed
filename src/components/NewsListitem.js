import React from 'react';
import './styles/newsListStyle.css';
const NewsListitem = () => {
    return(
        <div className='parentContainer'>
        <div className='mainContainer'>
            <img src="http://tineye.com/images/widgets/mona.jpg"
            alt=""
            width="150px"
            height="125" />
            <div>
                <p className='newsTitle'>
                    Water World
                </p>
                <p className='textWrapper'>
                    KSDJFKJHPEIUFGHVNCKXVN; K JHFKLDHKLJ GUDFHGKJDHLFGKJDFH OIHJLK;DFHG 
                </p>
            </div>
        </div>
        </div>
    );
}
export default NewsListitem;