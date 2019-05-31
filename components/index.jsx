import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



class Search extends React.Component {

    constructor(props){
      super(props);
      this.state ={
          categories: ['desktop', 'laptop','mesoputamia department'],
          value: '',
          suggestions: []
      }
      this.handleChange = this.handleChange.bind(this);
      this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
      this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    }

    componentDidMount(){
  
    }


    handleChange(){
        this.setState({value: event.target.value});
    }


   
  
    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested ({value})  {
      this.setState({
        suggestions: getSuggestions(value)
      });
    };
  
    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested  ()  {
      this.setState({
        suggestions: []
      });
    };
    
    submit(){
      this.props.setUuid(ParseInt(this.state.value)||1001);
    }
  
    render(){
      const { value, suggestions } = this.state;

        const inputProps = {
      placeholder: 'Type a programming language',
      value,
      onChange: this.handleChange
    };
      return (
        
        <>
        
        <div style={{height: '100px', backgroundColor:'red'}}>

        <div style={{height:'100px',  width:'15%', backgroundColor:'#24547C', display:'inline-block', overflow:'auto'}}>
        <img src="https://amazinsearchbar.herokuapp.com/logo.png" style={{display:'block', maxHeight:'100%',transform:'scale(1.3)', maxWidth:'100%', marginLeft: 'auto', marginRight: 'auto'}} ></img>
        </div>

        <div style={{height:'100px', width:'85%', display:'inline-block', backgroundColor:'#24547C'}}>
        
        <form style={{height: '37px', minWidth: '600px', width: '80%', float:'left', marginTop:'20px'}}>
        <select style={{height:'100%', maxWidth:'84px', fontSize:'12px',float:'left', fontFamily: 'sans-serif', color:'#555', backgroundColor:'f3f3f3'}}>
           {this.state.categories.map(el => (<option value={el}>{el}</option>))}
        </select>
    
        <input type="text" value={this.state.value} onChange={this.handleChange} style={{fontSize:'15px',height:'100%', minWidth:'400px', width:'70%', float:'left', borderRadius:'2px', fontFamily: 'sans-serif'}}/>
        <button onClick={this.submit} style={{height: '100%', width: '50px',  backgroundColor: '#febd69', border:'1px solid #febd69', borderRadius:'2px'}}><img style={{maxWidth: '100%', maxHeight: '100%', padding:'2px'}}src="https://png.icons8.com/search"></img></button>
       </form>
        

        </div>
        {/* <div style={{height:'100px', minWidth:'200px',border:'1px solid black'}}></div> */}
        </div>
       
    
       
     
       
       
        </>
      )
    }
  
  }

  window.Search = Search;
  // ReactDOM.render(<App />, document.getElementById('searchbar'));