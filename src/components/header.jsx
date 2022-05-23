import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const navigate = useNavigate();

    const [search, setSearch] = useState('');

    const handleSearch = () => {
        navigate(`/search?keyword=${search}`);
    }

    return (
        <div>
            Header
            <input type="text" value={search} onChange={e => {
                setSearch(e.target.value);
            }} />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default Header;