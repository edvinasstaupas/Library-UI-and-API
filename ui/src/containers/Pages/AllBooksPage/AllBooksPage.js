import Books from '../../../components/Books';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from "react";
import {fetchBooks, login} from "../../../api/apiEndpoints";
import {setBooks} from "../../../state/Books/BooksActions";


const SearchPage = () => {

    const state = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchBooks()
            .then((data) => {
                dispatch(
                    setBooks(data.data)
                );
            });
    }, [state, dispatch])

    return (
        <>
            <Books/>
        </>
    )
};

export default SearchPage;
