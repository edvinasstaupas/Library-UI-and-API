import SearchBar from '../../../components/SearchBar/SearchBar';
import Books from '../../../components/Books';
import {useSelector} from 'react-redux';
import {useEffect} from "react";


const SearchPage = () => {

    const state = useSelector((state) => state.user);


    useEffect(() => {

    }, )

    return (
        <>
            <SearchBar/>
            <Books/>
        </>
    )
};

export default SearchPage;
