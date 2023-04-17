import React from 'react'
import { useLocation } from 'react-router-dom'
import SearchPds from './SearchPds';

const Search = () => {

    const location = useLocation();
    const item = location.state.filterProduct;
    // console.log(item);

  return (
    <div>
        {item.map(pd => {
            return(
                <SearchPds key={pd.id} {...pd}/>
            )
        })}
    </div>
  )
}

export default Search