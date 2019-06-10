
import React, { Component } from 'react'

import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {

state={services:[

            {
            icon:<FaCocktail/>,
            title:"free cocktails",
            info:"Free Cocktails for our customers!",
            info2:"Cocktail specialist"
            },
            {
            icon:<FaHiking/>,
            title:"free Hiking",
            info:"Free Hiking for our customers!",
            info2:"Hiking improves health"
            },
            {
            icon:<FaShuttleVan/>,
            title:"free ShuttleVan",
            info:"Free ShuttleVan for our customers!",
            info2:"Super cool Shuttle Vans"
            },
            {
            icon:<FaBeer/>,
            title:"free Beer",
            info:"Free Beer for our customers!",
            info2:"Chill with cold Beer"
            }
            
        ]
    };

    render() {
        return (
            <section className="services">

            <Title title='services'></Title>

            <div className="services-center">

            {this.state.services.map((item,index) => {

                return (

                <article key={index} className="services">                
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
                <p>{item.info2}</p>
                </article>
                );
            })
        }    

            </div>

            </section>
        
        
        )
    }
}
