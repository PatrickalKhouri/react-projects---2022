import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items}) => {

  return <div className='grocery-list'>
    {items.map((item) => {
      return <article key={item.id} className='grocery-item'>
        <p className='title'>{item.title}</p>
        <div className='btn-container'>
          <button type='button' className='edit-btn'>
            <FaEdit></FaEdit>
          </button>
          <button type='button' className='delete-btn'>
            <FaTrash></FaTrash>
          </button>
        </div>
      </article>
    })}
  </div>
}

export default List
