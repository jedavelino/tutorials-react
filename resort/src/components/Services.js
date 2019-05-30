import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info: 'lorem fucking ipsum'
      },
      {
        icon: <FaHiking />,
        title: 'endless hiking',
        info: 'lorem fucking ipsum'
      },
      {
        icon: <FaShuttleVan />,
        title: 'free shuttles',
        info: 'lorem fucking ipsum'
      },
      {
        icon: <FaBeer />,
        title: 'strongest beer',
        info: 'lorem fucking ipsum'
      }
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          ))}
        </div>
      </section>
    )
  }
}
