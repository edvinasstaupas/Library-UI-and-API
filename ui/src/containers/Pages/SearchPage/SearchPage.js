import SearchBar from '../../../components/SearchBar/SearchBar';
import Books from '../../../components/Books';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {resetBooks, setSearched} from '../../../state/Books/BooksActions';

const SearchPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetBooks());
        dispatch(setSearched(false));
    }, [dispatch]);

    return (
        <>
            <SearchBar />
            <Books />
        </>
    );
};

export default SearchPage;
