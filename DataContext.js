import React, { createContext, useContext, useState } from 'react';
import Item from './utils/Item';

const DataContext = createContext();

export const useData = () => {
    return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
    const [itemsList, setItemsList] = useState([
        new Item('Grey Thrills Cap', 'base64DataHere'),
        new Item('White Sams Shirt', 'base64DataHere'),
        // ... more items
    ]);

    return (
        <DataContext.Provider value={{ itemsList, setItemsList }}>
            {children}
        </DataContext.Provider>
    );
};