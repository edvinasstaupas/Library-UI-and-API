import { useEffect } from 'react';
import { fetchBooksNew } from '../../api/apiEndpoints';
import Books from '../Books';
import { useDispatch } from 'react-redux';
import { setBookList } from '../../state/Books/BooksActions';

const NewBooks = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchBooksNew().then((data) =>
            dispatch(setBookList({ bookList: data.data }))
        );
    }, [dispatch]);

    return (
        <>
            <Books />
        </>
    );
};

export default NewBooks;
