import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CategoryTableName = ({ id }) => {
    const [data, setData] = useState();
    const fetchDate = async () => {
        await axios.get(`https://ecommerce-back-end-orpin.vercel.app/api/category/${id}`).then((res) => {
            setData(res.data.name);
        }).catch((err) => {
            console.log(err);
        });
    }
    useEffect(() => {
        fetchDate();
    }, [id])
    return data;
}

export default CategoryTableName