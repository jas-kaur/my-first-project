import React from 'react'

const Items = (props) => {
  return (
    <>
        {props.items
        .filter(item => props.showOnlyStock ? item.stock > 0 : item)
        .filter(item => item.name.toLowerCase().includes(props.query.toLowerCase()))
        .map(item => (
            <tr key={item.id} onClick={() => alert(`${item.name} - ${item.price}`)}>
                <td>{item.name}</td>
                <td>{props.includePrice && `$${item.price}`}</td>
                <td style={{paddingLeft: '50px'}}>{item.stock}</td>
            </tr>
        ))}
    </>
  )
}

export default Items