import { LOADING } from './BooksModel';

export const setLoading = (loading) => ({
    type: LOADING,
    loading,
});
