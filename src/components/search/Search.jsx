import React from 'react'

function Search({ onChangeSearch, placeholder }) {
    return (
        <div className='m-3 text-center'>
            <input type='text'
                placeholder={placeholder}
                onChange={onChangeSearch} />
        </div>
    )
}

export default Search
