import React from 'react'
import { Card } from '../';
import { Grid, CircularProgress } from '@material-ui/core';
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
            <Card title = {element.product} stock = {element.stock} price = {element.price} link = {element.link} image = {element.img_link} />
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
        }else{
            setSearchResults(results.sort((a,b) => b.price - a.price))
        }

    }, [value, data, orderbyprice])

    return (
        <>
            { displayUsers.length? <>
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
            </> : <CircularProgress color = "inherit" style = {{margin: 'auto'}}></CircularProgress>
            }
        </>
    )
}
