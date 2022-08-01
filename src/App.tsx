import React from 'react';
import { useState, useEffect } from 'react';
import Grid from './UI/Grid/Grid';

const columns: any[] = [{
    text: 'ID',
    dataIndex: 'id',
    width: '20px'
}, {
    text: 'Name',
    dataIndex: 'name'
}, {
    text: 'Username',
    dataIndex: 'username'
}, {
    text: 'Email',
    dataIndex: 'email'
}, {
    text: 'Address',
    dataIndex: 'address',

    columns: [{
        text: 'Street',
        dataIndex: 'street'
    }, {
        text: 'Suite',
        dataIndex: 'suite'
    }, {
        text: 'City',
        dataIndex: 'city'
    }, {
        text: 'ZipCode',
        dataIndex: 'zipcode',
    }, {
        text: 'Geo',
        dataIndex: 'geo',

        columns: [{
            text: 'Lat',
            dataIndex: 'lat',
            width: '60px'
        }, {
            text: 'Lng',
            dataIndex: 'lng',
            width: '60px'
        }]
    }]
}, {
    text: 'Phone',
    dataIndex: 'phone'
}, {
    text: 'Website',
    dataIndex: 'website'
}, {
    text: 'Company',
    dataIndex: 'company',

    columns: [{
        text: 'Name',
        dataIndex: 'name'
    }, {
        text: 'CatchPhrase',
        dataIndex: 'catchPhrase'
    }, {
        text: 'Bs',
        dataIndex: 'bs'
    }]
}];

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => {setData(result)});
    }, []);

    const deleteHandler = (e: any): void => {
        console.log(e);
    }

    return (
        <div style={{height: '100%', width: '100%'}}>
            <Grid
                columns={columns}
                data={data}
                deleteHandler={deleteHandler}
                // width={1000}
                // height={350}
            />
        </div>
    )
}

export default App;