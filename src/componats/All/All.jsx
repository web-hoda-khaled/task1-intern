import React from 'react'
import Job from '../job/Job';
import Article from './../Article/Article';
import Education from './../Education/Education';
import Event from './../Event/Event';

export default function All() {
  return (
    <>
      <Article/>
      <Education />
      <Event/>
      <Job/>


    </>
  )
}
