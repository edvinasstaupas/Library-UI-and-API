import {useEffect} from "react";
import {fetchBooksNew} from "../../api/apiEndpoints";

const NewBooks = () => {

    useEffect(() => {
        fetchBooksNew()
            .then()
    }, [])

    return (
        <>
            <p>new books</p>
        </>
    );
};

export default NewBooks;
