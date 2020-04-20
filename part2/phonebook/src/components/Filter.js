import React from 'react';

const Filter = ({ filter, handleChange }) => {
    return (
        <form>
            <div>
            filter shown with <input value={filter} onChange={(e) => {handleChange(e)}} />
            </div>
        </form>
    )
}

export default Filter;