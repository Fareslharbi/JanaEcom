import {React, useEffect} from 'react'
import './AsideBar.css'
import logo from '../../assets/logo.png'
import { cities, sections, names } from './mapping'

const AsideBar = () => {
  useEffect(() => {
    const myButton = document.getElementById("togBtn");
  
    const handleClick = () => {
      document.getElementsByClassName('sectionClass').style.display= 'flex'
    };
  
    myButton.addEventListener("click", handleClick);
  
    // Clean up the event listener when the component unmounts
    return () => {
      myButton.removeEventListener("click", handleClick);
    };
  });
  return (
	<div>
	  <link href = "https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel = "stylesheet"></link>
	  <aside>
			<div class="top">
				<div class="logo">
					<img src={logo} alt=''/>
					<h2>Jana<span class="danger">Company</span></h2>
				</div>
				<div class="close" id="close-btn">
					<span class="material-icons-sharp">close</span>
				</div>
			</div>
			<div class="sidebar">
      {
        cities.map(({id, city}) => {
          return (
            <ul key={id}>
              <li>
                <button href='' onClick={useEffect} id="togBtn">{city}
                </button>
                <ul>
                  
                    
                    {
                      sections.map(({id, department}) => {
                        return(
                          <div className='sectionClass'><li><a  href='https://www.google.com/' rel="noopener noreferrer" target='_blank'>{department}</a></li></div>
                        )
                      })
                    }
                    
                    <ul>
                    
                      {
                        names.map(({id, name}) => {
                          return(
                            <div className='namesClass'><li><a  href='https://www.google.com/' rel="noopener noreferrer" target='_blank'>{name}</a></li></div>
                          )
                        })
                      }
                    </ul>
                  
                </ul>
              </li>
            </ul>
          )
        })
      }
			</div>
    </aside>
	</div>
  )
}

export default AsideBar



