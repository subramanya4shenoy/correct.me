import React from 'react'
import empty from '../../assets/images/empty.svg'

export const ZeroState = ({message}) => {
    return (
        <div>
            <img className="h-56 mx-auto" src={empty} alt="Nothing yet!"/>
            <div className="futuraMedium my-4 opacity-50 text-center text-textCommon"> {message} </div>
        </div>
    )
}
