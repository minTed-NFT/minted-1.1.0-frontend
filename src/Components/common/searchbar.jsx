import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { List, ListItem, ListItemText} from '@material-ui/core'


class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchKey:'',
            searchResults:[]
           
           
        }
    }
    handleChange=async(event)=>{

        this.setState({
            searchKey:event.target.value
        })
       
        let response = await axios.get(`http://localhost:5001/search/${this.state.searchKey}`)
        .then(res => {
            this.setState({
                searchResults:res.data
            })
         console.log(res.data);

                              
        })    
          .catch(err => console.log(err));
        if (this.state.searchKey===''){
            this.setState({
                searchResults:[]
            })
        }

    
         
    }


    render(){
    return (<>
     <div className='search'>
                    <form action='#'>
                        <div className='search-bar'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-search' viewBox='0 0 16 16'>
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                            < input 
                                type='text' 
                                placeholder='Search' 
                                name='search'
                                value={this.state.searchKey}
                                onChange={this.handleChange} 
                            />
                          
                            {(this.state.searchResults).map((result, index) => (                            
                              <List >
                                <ListItem button>
                                <a href={result.profilePage}>
                                <ListItemText primary={result.username} />
                                </a>
                                </ListItem>
                              </List>
                              ))}
                            
                        </div>
                    </form>
                </div>
      </>)
    }
}
export default SearchBar