
import React, { useCallback } from "react";

export default  function Item ({item, onClick}) {
    const {title, images: {downsized_medium}} = item

    const handleClick = useCallback((e) => onClick(item), [item])
    return (
       
    <div className={'Item'} onClick={handleClick}>
            <img className={'Item__Image'} src={downsized_medium.url}  alt={title}/>
    </div>
               
       
    )
}