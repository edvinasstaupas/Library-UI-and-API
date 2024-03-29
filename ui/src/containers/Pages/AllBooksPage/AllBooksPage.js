import Books from '../../../components/Books';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchBooks } from '../../../api/apiEndpoints';
import { setLoading } from '../../../state/Books/BooksActions';
import handleError from '../../../components/errors';
import { useHistory } from 'react-router-dom';

const AllBooksPage = () => {
    const dispatch = useDispatch();

    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    const [totalRows, setTotalRows] = useState(5);

    const history = useHistory();

    useEffect(() => {
        dispatch(setLoading(true));
        fetchBooks({ page: page, size: size })
            .then((data) => {
                setBooks(data.data.list);
                setTotalRows(data.data.totalRows);
                dispatch(setLoading(false));
            })
            .catch((error) => history.push(handleError(error.response)));
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

export default AllBooksPage;
