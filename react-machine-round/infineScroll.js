// Build an Infinite Scroll Component: Develop a component that loads more data as the user scrolls down the page.

import React, { useState, useEffect, useRef } from 'react';


const InfiniteScroll = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const loader = useRef(null);

    useEffect(() => {
        fetchData();
    }, [page]);

    const fetchData = () => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
            .then(response => response.json())
            .then(newData => {
                setData(prevData => [...prevData, ...newData]);
                setLoading(false);
            });
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !loading) {
                setPage(prevPage => prevPage + 1);
            }
        }, {
            threshold: 1.0
        });

        if (loader.current) {
            observer.observe(loader.current);
        }

        return () => {
            if (loader.current) {
                observer.unobserve(loader.current);
            }
        };
    }, [loading]);

    return (
        <div>
            <h2>Infinite Scroll</h2>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
            {loading && <p>Loading...</p>}
            <div ref={loader} />
        </div>
    );
}

module.exports = InfiniteScroll;