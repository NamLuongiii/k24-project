import axios from 'axios';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchPage(props) {
    let [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    const page = searchParams.get('page') || 0;


    useEffect(() => {
        getProduct();
    }, [keyword, page]);

    const getProduct = async () => {
        try {
            const res = await axios({
                url: `https://k24-server-1.herokuapp.com/product?search=${keyword}&page=${page}`,
                method: 'get',
            });

            console.log(res);
        } catch (error) {
            console.log(error.message);
        }
    }
    
    return (
        <div>
            Search
            {keyword}
        </div>
    );
}

export default SearchPage;