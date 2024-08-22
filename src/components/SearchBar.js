import React from 'react'

export default function SearchBar(props) {
  return (
    <div className='searh container text-center' id='searchContainer'>
    <h1 className='text-center ' style={{color: '#E2703A', marginBottom: '1.5rem'}}>Search different Exercises</h1>
    <p className='text-center'> Here you can search for target muscles like abductors, abs, adductors, biceps, calves, cardiovascular system, delts, forearms, glutes, hamstrings, lats, levator scapulae, pectorals, quads, serratus anterior, spine, traps, triceps, upper back</p>
    <form onSubmit={props.handleSubmit}>
      
      <input type="text " style={{backgroundColor: '#977541', width: '80rem'}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search any target muscle here"
        value={props.search}
        onChange={props.handleChange}></input>

      <button className='btn btn-primary' type='submit'>Submit</button>
    </form>
      
    </div>
  )
}
