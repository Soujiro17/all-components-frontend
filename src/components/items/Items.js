import React from 'react'
import { Card } from '../';
import { Grid, CircularProgress } from '@material-ui/core';
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';

export default function Items({ data, orderbyprice }) {

    const [results, setResults] = useState(data);

    const [pageNumber, setPageNumber ] = useState(0);


    const productPerPage = 16;
    const pagesVisited = pageNumber * productPerPage;
    const displayUsers = results.slice(pagesVisited, pagesVisited + productPerPage).map(element => {
        return(
        <Grid key = {element._id} item xs = {2} style = {{maxWidth: '200px', maxHeight: '320px', margin: '10px'}}>
            <Card title = {element.product} stock = {element.stock} price = {element.price} link = {element.link} image = {element.img_link} />
        </Grid>
        )
    });

    const pageCount = Math.ceil(results.length / productPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    useEffect(() => {

        if(orderbyprice === "true"){
            setResults(data.sort((a,b) => a.price - b.price));
        }else{
            setResults(data.sort((a,b) => b.price - a.price))
        }

    }, [data, setResults, orderbyprice])

    return (
        <>
            { displayUsers.length? <>
            <Grid container style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', maxHeight: '75vh'}}>
                {displayUsers}
            </Grid>
            <div className = "pagination" style = {{width: '100%', display: 'flex', position: 'absolute', bottom: '0', justifyContent: 'center', maxHeight: '7vh', marginBottom: '10px'}}>
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
