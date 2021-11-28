import Books from '../../../components/Books';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../../../api/apiEndpoints';
import { setBookList } from '../../../state/Books/BooksActions';

const AllBooksPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchBooks().then((data) => {
            dispatch(setBookList({ bookList: data.data }));
        });
    }, [dispatch]);

    return (
        <>
            <Books />
        </>
    );
};

export default AllBooksPage;
