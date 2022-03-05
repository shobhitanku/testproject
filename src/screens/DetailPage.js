import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../component/Detail';

const DetailPage = () => {
    const [data, setData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get('https://api.tvmaze.com/search/shows?q=all')
            .then((res) =>
                setData(
                    res.data &&
                        res.data.find((dta) => dta.show && dta.show.id == id)
                )
            );
    }, []);

    return <div>{data !== null ? <Detail data={data.show} /> : null}</div>;
};

export default DetailPage;
