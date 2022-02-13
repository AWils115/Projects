import React from "react";
import styles from './Search.module.scss';

const Search = ({ setSearch, updatePageNumber }) => {
    /**
     * * First we destructure our props and create a searchBtn() function
     * * to prevent the default behaviour of our app.
     * * We then render our search bar, when a user types in, the input is passed to
     * * the setSearch hook that will pass it back to the api. 
     */
    let searchBtn = (e) => {
        e.preventDefault();
    };
    return (
        <form 
            className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
            >
            <input 
                onChange={(e) => {
                    updatePageNumber(1);
                    setSearch(e.target.value);
                }}
                placeholder='Search for Characters'
                className={styles.input}
                type='text'
                />
            <button
                onClick={searchBtn}
                className={`${styles.btn} btn btn-primary fs-5`}
                >
                Search
            </button>
        </form>
    )
};

export default Search;