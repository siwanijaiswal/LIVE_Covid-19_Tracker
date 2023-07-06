import React, { useEffect, useState } from 'react'
import './covid.css'

const Covid = () => {

    const[data, setData] = useState([]);

    const getCovidData = async () => {

        try{
        const res= await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise[0]);          
        setData(actualData.statewise[0]);       
        }
        catch(err) {
            console.log(err);

        }
    }

   useEffect(() => {
        getCovidData();

   }, []);

  return (
    <>
    <section>
    <h1> Live </h1>
    <h2>Covid-19 CORONA VIRUS Tracker</h2>

    <ul>
        <li className='card_1'>
        <div className='card__main_1'>
        <div className='card__inner_1'>
        <p className='card__name_1'> <span> OUR</span> COUNTRY </p>
        <p className='card__total_1 card__small_1'> INDIA</p>
        </div>
        </div>
        </li>
        
        <li className='card_2'>
        <div className='card__main_2'>
        <div className='card__inner_2'>
        <p className='card__name_2'> <span> Total</span> RECOVERED </p>
        <p className='card__total_2 card__small_2'>{data.recovered}</p>
        </div>
        </div>
        </li> 

        <li className='card_3'>
        <div className='card__main_3'>
        <div className='card__inner_3'>
        <p className='card__name_3'> <span> Total</span> CONFIRMED </p>
        <p className='card__total_3 card__small_3'>{data.confirmed} </p>
        </div>
        </div>
        </li>

         <li className='card_4'>
        <div className='card__main_4'>
        <div className='card__inner_4'>
        <p className='card__name_4'> <span> Total </span> DEATH</p>
        <p className='card__total_4 card__small_4'> {data.deaths}</p>
        </div>
        </div>
        </li>

         <li className='card_5'>
        <div className='card__main_5'>
        <div className='card__inner_5'>
        <p className='card__name_5'> <span> Total </span> ACTIVE</p>
        <p className='card__total_5 card__small_5'>{data.active}</p>
        </div>
        </div>
        </li>

         <li className='card_6'>
        <div className='card__main_6'>
        <div className='card__inner_6'>
        <p className='card__name_6'> <span> Last </span> UPDATED </p>
        <p className='card__total_6 card__small_6'> { data.lastupdatedtime}</p>
        </div>
        </div>
        </li>

    </ul>
    </section>
    </>
  )
}

export default Covid
