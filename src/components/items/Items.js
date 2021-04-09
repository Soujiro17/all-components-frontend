import React from 'react'
import { Card } from '../';
import { Grid } from '@material-ui/core';
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';

export default function Items({ data, value, orderbyprice }) {

    const [pageNumber, setPageNumber ] = useState(0);
    const [searchResults, setSearchResults ] = useState([]);


    const productPerPage = 16;
    const pagesVisited = pageNumber * productPerPage;
    const displayUsers = searchResults.slice(pagesVisited, pagesVisited + productPerPage).map(element => {
        return(
        <Grid key = {element._id} item xs = {2} style = {{maxWidth: '200px', maxHeight: '320px', margin: '10px'}}>
            <Card title = {element.product} stock = {element.stock} price = {element.price} link = {element.link} image = "https://materializecss.com/images/sample-1.jpg" />
        </Grid>
        )
    });

    const pageCount = Math.ceil(searchResults.length / productPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    useEffect(() => {

        const results = data.filter(item => {
            return item.product.toLowerCase().includes(value.trim());
        })

        setSearchResults(results);

        if(orderbyprice === "true"){
            setSearchResults(results.sort((a,b) => a.price - b.price));
        }

    }, [value, data, orderbyprice])

    return (
        <>
            <Grid container style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', maxHeight: '75vh', height: '75vh'}}>
                {displayUsers}
            </Grid>
            <div className = "pagination" style = {{width: '100%', display: 'inline-flex', justifyContent: 'center', maxHeight: '7vh', position: 'absolute', bottom: '0', marginBottom: '10px'}}>
            <div className = "pagination-items">
                <ReactPaginate
                previousLabel={"Previous"}
                nextLabel = {"Next"}
                pageCount = {pageCount}
                onPageChange = {changePage}
                containerClassName = {"pagination"}
                previousLinkClassName = {"previousBttn"}
                nextLinkClassName = {"nextBttn"}
                disabledClassName = {"disabled"}
                activeClassName = {"active"}
                />
            </div>
            </div>  
        </>
    )
}
