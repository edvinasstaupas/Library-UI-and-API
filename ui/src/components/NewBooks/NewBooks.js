import { useEffect, useState } from 'react';
import { fetchBooksNew } from '../../api/apiEndpoints';
import Books from '../Books';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../state/Books/BooksActions';

const NewBooks = () => {
    const dispatch = useDispatch();

    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    const [totalRows, setTotalRows] = useState(5);

    useEffect(() => {
        dispatch(setLoading(true));
        fetchBooksNew({ page: page, size: size }).then((data) => {
            setBooks(data.data.list);
            setTotalRows(data.data.totalRows);
            dispatch(setLoading(false));
        });
    }, [dispatch, page, size]);

    return (
        <>
            <Books
                books={books}
                size={size}
                setSize={setSize}
                page={page}
                setPage={setPage}
                totalRows={totalRows}
            />
        </>
    );
};
export default NewBooks;
