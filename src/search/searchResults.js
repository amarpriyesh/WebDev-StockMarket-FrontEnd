import React, {useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import axios from "axios";
import {setSidebar} from "../reducers/sidebar-reducer";
import {useDispatch} from "react-redux";
import NewsItem from "../news/news-item";

function SearchResults() {
    const dispatch = useDispatch()
    dispatch(setSidebar({component:"none",newsid:"ddd"}));
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
            axios.get(`https://api.marketaux.com/v1/news/all?symbols=${searchQuery}&filter_
            entities=true&language=en&api_token=IKdLsrWdrAo18pM4p5DaEGSDDxgsugTVMnf5UDvs`)
                .then(response => {
                    setSearchResults(response.data.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };

    // Call the API on first render if there's a search query in the URL
    React.useEffect( () => {
         getSearchResults();
    }, []);

    // Call the API whenever the search query changes
    React.useEffect( () => {
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
            {searchResults ?
                <div>
                    <ul className="list-group">
                        {searchResults.map(data => <NewsItem news={{_id:data.uuid,title:data.title,description:data.description,image:data.image_url,source:data.source,time:data.published_at,symbol:data.entities[0].symbol,company:data.entities[0].name,industry:data.entities[0].industry,sentiment:data.entities[0].sentiment_score}} key={data._id}/>)}
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
