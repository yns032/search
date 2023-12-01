import React from 'react'

function CardList({ item }) {

    const { id, email, name } = item
    return (
        <div className=' '>
            <div className='flex-wrap'>
                <img src={`https://robohash.org/${id}set_set3/bgset_bg1/3.14159?size=180x180`}
                    alt={`item ${item.name}`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default CardList
