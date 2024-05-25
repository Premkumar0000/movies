import React from 'react'
import m1 from './images/m1.PNG'
import m2 from './images/m2.PNG'
import m3 from './images/m3.PNG'
import m4 from './images/m4.PNG'
import m5 from './images/m5.PNG'
import m6 from './images/m6.PNG'
import m7 from './images/m7.PNG'
import m8 from './images/m8.PNG'
import m9 from './images/m9.PNG'
import m10 from './images/m10.PNG'
import m11 from './images/m11.PNG'
import m12 from './images/m12.PNG'
import Search from './Search'
import './App.css'

const Movie_cards = () => {
  return (
    <div>
      <div className="six" style={{marginTop:'5%'}}>
        <div className="card" style={{marginLeft:'5%', marginRight:'5%', border:'none'}}>
          <div className="card-body" style={{backgroundColor:'#0F0F0F'}}>
            <h4 className="card-title">
              <div className="card-deck" style={{backgroundColor:'#0F0F0F'}}>
                <div className="card" style={{border:'none', backgroundColor:'#0F0F0F'}}>
                  <img className="card-img-top" src={m1} alt=""/>
                </div>
                <div className="card" style={{border:'none', backgroundColor:'#0F0F0F'}}>
                  <img className="card-img-top" src={m2} alt=""/>
                </div>
                <div className="card" style={{border:'none', backgroundColor:'#0F0F0F'}}>
                  <img className="card-img-top" src={m3} alt=""/>
                </div>
                <div className="card" style={{border:'none', backgroundColor:'#0F0F0F'}}>
                  <img className="card-img-top" src={m4} alt=""/>
                </div>
                <div className="card" style={{border:'none', backgroundColor:'#0F0F0F'}}>
                  <img className="card-img-top" src={m5} alt=""/>
                </div>
                <div className="card" style={{border:'none', backgroundColor:'#0F0F0F'}}>
                  <img className="card-img-top" src={m6} alt=""/>
                </div>
              </div>
            </h4>
          </div>
        </div>
        {/* card2 */}
        <div className="card" style={{marginLeft:'5%', marginRight:'5%', border:'none'}}>
          <div className="card-body" style={{backgroundColor:'#0F0F0F'}}>
            <h4 className="card-title">
              <div className="card-deck" style={{backgroundColor:'#0F0F0F'}}>
                <div className="card" style={{border:'none', backgroundColor:'#0F0F0F'}}>
                  <img className="card-img-top" src={m7} alt=""/>
                </div>
                <div className="card" style={{border:'none', backgroundColor:'#0F0F0F'}}>
                  <img className="card-img-top" src={m8} alt=""/>
                </div>
                <div className="card" style={{border:'none', backgroundColor:'#0F0F0F'}}>
                  <img className="card-img-top" src={m9} alt=""/>
                </div>
                <div className="card" style={{border:'none', backgroundColor:'#0F0F0F'}}>
                  <img className="card-img-top" src={m10} alt=""/>
                </div>
                <div className="card" style={{border:'none', backgroundColor:'#0F0F0F'}}>
                  <img className="card-img-top" src={m11} alt=""/>
                </div>
                <div className="card" style={{border:'none', backgroundColor:'#0F0F0F'}}>
                  <img className="card-img-top" src={m12} alt=""/>
                </div>
              </div>
            </h4>
          </div>
        </div>
      </div>
      <Search></Search>
    </div>
  )
}

export default Movie_cards
