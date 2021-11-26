import SearchBar from "../../../components/SearchBar/SearchBar";
import {fetchBooks, fetchBooksBySearch} from "../../../api/apiEndpoints";
import {createContext, useState} from "react";
import Books from "../../../components/Books";

export const BookContext = createContext(null)

const SearchPage = () => {

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const [fromSearch, setFromSearch] = useState(false)

    const BookContextState = {
        books,
        loading,
        fromSearch,
        setBooksFromSearch: (searchData, helper) => {
            fetchBooksBySearch(searchData)
                .then(() => {
                    setBooks(searchData)
                })
                .finally(() => {
                    helper.setSubmitting(false)
                    setLoading(false)
                    setFromSearch(true)
                })
        },
        setBooksAll: () => {
            fetchBooks()
                .then(({data}) => {
                    setBooks(data);
                })
                .catch((error) => {
                    console.log(error.name)
                })
                .finally(() => setLoading(false))
        }
    }

    return (
        <BookContext.Provider value={BookContextState}>
            <SearchBar/>
            <Books/>
        </BookContext.Provider>
    );
};

export default SearchPage;
