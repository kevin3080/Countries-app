import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import SearchIcon from '@mui/icons-material/Search';
import { Country } from './components/Country';
import { Routes, Route } from "react-router-dom";
import { CountryDetail } from './components/CountryDetail';

function App() {


  return (
    <div className="app">
      <Navbar />

      <Routes>

        <Route path='/' element={
          <div className="app_body">
            <div className="inputs">
              <div className="search_input">
                <SearchIcon />
                <input type="text" placeholder='Search for a country...' />
              </div>
              <div className="select_region">
                <select>
                  <option>All</option>
                  <option>Africa</option>
                  <option>America</option>
                  <option>Asia</option>
                  <option>Europe</option>
                  <option>Oceania</option>
                </select>
              </div>
            </div>

            <div className="countries">
              <Country />
            </div>

          </div>
        }
        />
        <Route path='Country-details' element={<CountryDetail/>}/>
      </Routes>


    </div>

  )
}

export default App
