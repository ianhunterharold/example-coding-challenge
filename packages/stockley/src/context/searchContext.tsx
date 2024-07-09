import React, { useState } from 'react';

const SearchContext = React.createContext(undefined);

export const SearchProvider = (props: any) => {
  const example = 'x';
  // anything you want to update and define in here
  const [inputValue, setInputValue] = useState('');
  const [selectedStock, setSelectedStock] = useState('');
  const [tab, setTab] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  const removeFavorite = name => {
    let remove = favorites.filter(item => item !== name);
    setFavorites(remove);
  };

  const updateFavoriteStocks = isFavorite => {
    if (isFavorite && !favorites.includes(selectedStock)) {
      setFavorites([...favorites, selectedStock]);
    } else {
      let remove = favorites.filter(item => item !== selectedStock);
      setFavorites(remove);
    }

    // storage.save({}); do we need this?
  };
  return (
    <SearchContext.Provider
      value={{
        example: example,
        inputValue: inputValue,
        setInputValue: setInputValue,
        selectedStock: selectedStock,
        setSelectedStock: setSelectedStock,
        tab: tab,
        setTab: setTab,
        favorites: favorites,
        setFavorites: setFavorites,
        updateFavoriteStocks: updateFavoriteStocks,
        removeFavorite: removeFavorite,
        searchHistory: searchHistory,
        setSearchHistory: setSearchHistory,
      }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
