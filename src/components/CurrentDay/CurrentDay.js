import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Search from './Search/Search'
import Today from './Today/Today'
import './CurrentDay.css';

const CurrentDay = () => {

   return(

    <>
    <div className="currentday-container">
    <Today />
    <Search />
    
    </div>

    </>

   )



}

export default CurrentDay;