import React from 'react'
import Free from '../../assets/images/allwaysfree.svg'

const AllwaysFree = ({className}) => {

    const overrideClass = className || '';
    return (
            <img className={ overrideClass + " absolute right-0 bottom-0 w-48 h-48 -mb-16 -mr-16"} src={Free} alt={"Free"}/>
    )
}

export default AllwaysFree
