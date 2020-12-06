import React, { Component } from 'react'
import {connect } from 'react-redux'
import MoviesCard from './MoviesCard'

class MovieContainer extends Component {
    render() {
        const {movies} = this.props
        let content ='';

        content =  movies.Response === 'True' ? movies.Search.map((movie,index) => <MoviesCard  key={index} movie={movie}/>)
        :null;
        console.log(content)
        return (
            <div className="container">
                <div className="row">
                {content}            
                </div>    
            </div>
        )
    }
}

const mapStateToProps = state =>({
    movies:state.movies.movies
})

export default connect(mapStateToProps)(MovieContainer)