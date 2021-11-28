import React from 'react'

const Menu = ({selected, onMenuChange}) => {

    const menuList = ["Recieved"];

    return (
        <div className="text-2xl futuraMedium px-10 text-textCommon">
            {menuList.map((item, index) => {  
                return <div className={"py-2 mb-2 pl-4 cursor-pointer hover:bg-primarylighter " + ((selected === item) ? "border-primarymain border-l-4": " opacity-50")}
                            onClick={(e) => { onMenuChange(item) }}
                            key={index+"_menu"}>
                                {item}
                        </div>
            })}
        </div>
    )
}

export default Menu
