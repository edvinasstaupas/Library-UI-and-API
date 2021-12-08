import SearchBar from '../../../components/SearchBar/SearchBar';
import Books from '../../../components/Books';
import {useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {setLoading} from '../../../state/Books/BooksActions';
import {fetchBooksBySearch} from "../../../api/apiEndpoints";

const SearchPage = () => {
    const dispatch = useDispatch();

    const [params, setParams] = useState({title: "", author: "", page: 0, size: 5,});
    const [books, setBooks] = useState([])
    const [totalRows, setTotalRows] = useState(5);

    const postSearch = (searchData, helper) => {
        dispatch(setLoading(true));
        if (searchData.title === null) {
            searchData.title = '';
        }
        if (searchData.author === null) {
            searchData.author = '';
        }
        setParams({
                title: searchData.title,
                author: searchData.author,
                size: params.size,
                page: 0,
            }
        )
        helper.setSubmitting(false);
    };

    function setSize(value) {
        setParams({
            title: params.title,
            author: params.author,
            size: value,
            page: params.page,
        })
    }

    function setPage(value) {
        setParams({
            title: params.title,
            author: params.author,
            size: params.size,
            page: value,
        })
    }

    useEffect(() => {
        dispatch(setLoading(true));
        fetchBooksBySearch({page: params.page, size: params.size}, {title: params.title, author: params.author})
            .then((data) => {
                setBooks(data.data.list);
                setTotalRows(data.data.totalRows);
                dispatch(setLoading(false))
            })
    }, [dispatch, params]);

    return (
        <>
            <SearchBar postSearch={postSearch}/>
            <Books books={books} size={params.size} setSize={setSize} page={params.page} setPage={setPage}
                   totalRows={totalRows}/>
        </>
    );
};

export default SearchPage;
