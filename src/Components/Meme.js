import React from "react";
import {connect} from 'react-redux';
import {fetchQuotes} from '../Actions/quote';
import {fetchImg} from '../Actions/img';

export class Meme extends React.Component {

  componentDidMount(){
    this.props.dispatch(fetchQuotes());
    this.props.dispatch(fetchImg());
  }


   render(){

console.log(this.props);
    return(
      <div className="capture" style={{backgroundImage: `url(${this.props.fetchedImg})`}}>        
        <form className="navBar">
            <fieldset className="buttonBox">
                <a href="pictures.html"><button type="button" className="button">Shuffle</button></a>
            </fieldset>
        </form>
        <h1>
            <div className="memeText">
              <div className="quoteText">{this.props.quote.quote}</div> 
              <div className="authorText">— {(this.props.quote.author !== '') ? this.props.quote.author : 'Anonymous'}</div>                                
            </div>
        </h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
  quote: state.quote.quote,
  quoteLoading: state.loading,
  quoteError: state.error,
  fetchedPhotographerName: state.img.photographerName,
  fetchedPhotographerUrl: state.img.photographerUrl,
  fetchedImg: state.img.img,
  imgLoading: state.loading,
  imgError: state.error
}};

export default connect(mapStateToProps)(Meme);