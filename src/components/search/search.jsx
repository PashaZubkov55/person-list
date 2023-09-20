import React from 'react'
export  const Search = ()=>{
    return(
        <form className="search">
            <div className="search__wrapper">
                <div className="search__fild">
                    <input type="text" className="searchField" placeholder='search...' />
                </div>
                <div className="search__button">
                    <button className="searchButton">search</button>
                </div>
            </div>
        </form>
    )
}
