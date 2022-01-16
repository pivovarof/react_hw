import React from 'react';
import { Button } from '../../Common/Button/Button';

import './ListItems.css'

const ListItem = ({ item, onDelete }) => {

    return (        
            <li className='listItemWrap' >
                <span>{item.number}</span>
                <div className="buttonsWrap">
                    <Button lable='EDIT'  />
                    <Button lable='DELETE' onSave={onDelete} />
                </div>
            </li>        
    )
}

export default ListItem;