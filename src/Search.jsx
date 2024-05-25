import React from 'react'
import API from './API'
import './App.css'
import Footer from './Footer'

const Search = () => {
  return (
    <div>
        <div className="search_box">
            <div className="card" style={{marginLeft:'5%', marginRight:'5%', border:'none', marginTop:'5%', backgroundColor:'#202020'}}>
                <div className="card-body" style={{marginTop:'3%', marginBottom:'3%'}}>
                <center>
                  <p id='Third' >
                    Looking For More Movies? Use Our Search
                  </p>
                  <p id='Four' >
                    Thousands of movies in our database & still adding
                  </p>
                  <API></API>
                </center>
                </div>
                
            </div>
        </div>
        <Footer></Footer>

    </div>
  )
}

export default Search
