import React from 'react'
import CardList from '../CardList/CardList'

function Card({ filter }) {
    return (
        <div>
            {
                filter.map((item) => {
                    return (
                        <CardList key={item.id} item={item} />
                    )
                }
                )
            }
        </div>
    )
}

export default Card
