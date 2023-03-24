import React, {useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import axios from "axios";

function SearchResults() {
    const { searchCriteria } = useParams();
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState(searchCriteria || '');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {
        event.preventDefault();
        const queryParams = new URLSearchParams(location.search);
        queryParams.set('q', searchQuery);
        window.location.search = queryParams.toString();
    };

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const getSearchResults = () => {
        const queryParams = new URLSearchParams(location.search);
        const searchQuery = queryParams.get('q');
        if (searchQuery) {
            axios.get(`https://api.example.com/search?q=${searchQuery}`)
                .then(response => {
                    setSearchResults(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };

    // Call the API on first render if there's a search query in the URL
    React.useEffect(() => {
        getSearchResults();
    }, []);

    // Call the API whenever the search query changes
    React.useEffect(() => {
        getSearchResults();
    }, [location.search]);

    return (
        <div className="container">
            <h2>Search Results</h2>
            <form onSubmit={handleSearch}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                    <button className="btn btn-primary" type="submit">Search</button>
                </div>
            </form>
            {searchResults.length > 0 ?
                <div>
                    <p>Showing {searchResults.length} results for "{searchQuery}"</p>
                    <ul className="list-group">
                        {searchResults.map(result => (
                            <li className="list-group-item" key={result.id}>
                                <Link to={`/results/${result.id}`}>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <img src={result.thumbnailUrl} alt={result.title} />
                                        </div>
                                        <div className="col-md-9">
                                            <h4>{result.title}</h4>
                                            <p>{result.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div> :
                <div className="container">
                    <p>No results found for "{searchQuery}"</p>
                    <Link to="/details/123" className="btn btn-primary">
                        Details
                    </Link>
                </div>
            }
        </div>
    );


}

export default SearchResults;
