import React, { useEffect, useState } from 'react';
import DataTable, { Alignment } from 'react-data-table-component';
import axios from 'axios';
import './TabelaDeAtividades.css';

const columns = [
    {
        name: "Username",
        selector: row => row.username

    }
];

const customStyles = {

    headRow: {
        style: {
            backgroundColor: '#664934',

        },
    },
    headCells: {
        style: {
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#D9CABF',
        },
    },
    rows: {
        style: {
            backgroundColor: '#C2B4AB',
            color: '#593B25',
            fontSize: '14px',
            fontWeight: '600',
            '&:nth-of-type(even)': {
                backgroundColor: '#CDBFB5',
            },
        },
    },
};

function TabelaDeAtividades() {
    const [rows, setRows] = useState([]);

    const fetchData = () => {
        axios.get('http://localhost:3000/api/user', {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImwiLCJpYXQiOjE3MTk0NzQ2ODMsImV4cCI6MTcxOTQ3ODI4M30.UVQQy8ZUvBdGoUvHu84wlAlNgZbYJ-uWDNbKT69pobk`
            }
        })
        .then(response => {
            console.log(response.data);
            setRows(response.data);
        })
        .catch(error => {
            console.error("There was an error fetching the data!", error);
        });
    };

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='tabelaativ'>
            <DataTable
                columns={columns}
                data={rows}
                customStyles={customStyles}
            />
        </div>
    );
}

export default TabelaDeAtividades;
