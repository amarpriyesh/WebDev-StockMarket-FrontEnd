import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setSidebar } from '../reducers/sidebar-reducer';
import NewsItem from '../news/news-item';

function SearchResults() {
    const dispatch = useDispatch();
    dispatch(setSidebar({ component: 'none', newsid: 'ddd' }));
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('symbols');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const savedSearchResults = localStorage.getItem('searchResults');
        if (savedSearchResults) {
            setSearchResults(JSON.parse(savedSearchResults));
        }
    }, []);

    const handleSearch = (event) => {
        event.preventDefault();
        getSearchResults();
    };

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchTypeChange = (event) => {
        setSearchType(event.target.value);
    };

    const getSearchResults = () => {
        if (searchQuery) {
            console.log(searchQuery);
            console.log(searchType);
            let apiUrl = `https://api.marketaux.com/v1/news/all?${searchType}=${searchQuery}`;
            apiUrl += '&filter_entities=true&language=en&api_token=x9wRB4wjS2tQqDGHtVIxCQePoJzZjffPlbQZNj44';

            axios
                .get(apiUrl)
                .then((response) => {
                    setSearchResults(response.data.data);
                    localStorage.setItem('searchResults', JSON.stringify(response.data.data));
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <div className="container">
            <h2>Search Results</h2>
            <form>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text">Search for:</label>
                    </div>
                    <select className="form-control" value={searchType} onChange={handleSearchTypeChange}>
                        <option value="symbols">Symbols</option>
                        <option value="exchanges">Exchanges</option>
                        <option value="entity_types">Entity Types</option>
                        <option value="industries">Industries</option>
                        <option value="countries">Countries</option>
                    </select>
                    <input
                        type="text"
                        className="form-control"
                        placeholder={`Search ${searchType}`}
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                    <button className="btn btn-primary" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </form>
            {searchResults.length > 0 ? (
                <ul className="list-group">
                    {searchResults.map((data) => (
                        <NewsItem
                            news={{
                                _id: data.uuid,
                                title: data.title,
                                description: data.description,
                                image: data.image_url,
                                source: data.source,
                                time: data.published_at,
                                symbol: data.entities[0].symbol,
                                company: data.entities[0].name,
                                industry: data.entities[0].industry,
                                sentiment: data.entities[0].sentiment_score,
                            }}
                            key={data._id}
                        />
                    ))}
                </ul>
            ) : (
                <div className="container">
                    {searchQuery && <p>No results found for "{searchQuery}"</p>}
                </div>
            )}
        </div>
    );
}

export default SearchResults;
