import React, { Component } from 'react'
import SearchForm from './SearchForm'
import Spinner from '../Spinner'
import MovieContainer from './MovieContainer'

import {connect } from 'react-redux'

class Landing extends Component {
    render() {
        const {loading} =this.props
        return (
          <div className="contanier">
                <SearchForm />         
                {loading ? <Spinner /> : <MovieContainer />}       
          </div>
        )
    }
}


const mapStateToProps = state =>({
    loading:state.movies.loading
})

export default connect(mapStateToProps)(Landing)