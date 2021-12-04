import { useEffect } from 'react';
import { fetchBooksNew } from '../../api/apiEndpoints';
import Books from '../Books';
import { useDispatch } from 'react-redux';
import { setBookList, setSearched } from '../../state/Books/BooksActions';

const NewBooks = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchBooksNew().then((data) => {
            dispatch(setBookList(data.data));
            dispatch(setSearched(true));
        });
    }, [dispatch]);

    return (
        <>
            <Books />
        </>
    );
};
export default NewBooks;
