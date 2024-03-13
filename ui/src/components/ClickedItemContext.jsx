import React, { createContext, useContext, useState } from 'react';

const ClickedItemContext = createContext();

export const useClickedItem = () => useContext(ClickedItemContext);

export const ClickedItemProvider = ({ children }) => {
    const [clickedItems, setClickedItems] = useState([]); // 使用数组来跟踪点击的项目

    // 添加或移除项目的函数
    const toggleItem = (item) => {
        setClickedItems((currentItems) => {
            const index = currentItems.indexOf(item);
            if (index > -1) {
                // 如果项目已经在列表中，移除它
                return currentItems.filter((_, i) => i !== index);
            } else {
                // 否则，添加到列表中
                return [...currentItems, item];
            }
        });
    };

    return (
        <ClickedItemContext.Provider value={{ clickedItems, toggleItem }}>
            {children}
        </ClickedItemContext.Provider>
    );
};
