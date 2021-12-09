import * as React from 'react';
import Librarian from '../../../components/Librarian/Librarian';
import LibrarianSecurity from "../../../components/Librarian/LibrarianSecurity";

const LibrarianPage = () => {

    return (
        <>
            <LibrarianSecurity/>
            <Librarian/>
        </>
    );
};

export default LibrarianPage;
