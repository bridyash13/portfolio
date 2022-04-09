/* eslint-disable */
import React from 'react'
import './projects.css'
import crowd from "../../images/station-crowd.jpg";
import vax from "../../images/vaccine.jpg";
import olymp from "../../images/olymp.jpg";

const Projects = () => {
  return (
    <section id='project'>
        <h2>Projects</h2>

        <div className='container projects_container'>
            <article className='project'>
                <div className='project_head'>
                    <h3>Krowd Kam</h3>
                    <h5> Website which provides real-time crowd updates of public places,
                    tourist locations and places people visit frequently.</h5>
                </div>
            </article>
            <article className='project'>
                <div className='project_head'>
                    <h3>Sentiment Analysis of COVID-19 Vaccines</h3>
                    <h5>A website where the authorities and general users can view data and
                    statistics of what are people’s opinions on various vaccines.</h5>
                </div>
            </article>
            <article className='project'>
                <div className='project_head'>
                    <h3>Olympics Event Management</h3>
                    <h5>A sports event management website where users get details of various
                    sporting events and hosts can host them.</h5>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Projects