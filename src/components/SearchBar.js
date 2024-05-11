import React from 'react'

export default function SearchBar(props) {
  return (
    <div className='searh container text-center'>
    <h2 className='text-center'>Search different exercises</h2>
    <p className='text-center'> Here you can search for target muscles like abductors, abs, adductors, biceps, calves, cardiovascular system, delts, forearms, glutes, hamstrings, lats, levator scapulae, pectorals, quads, serratus anterior, spine, traps, triceps, upper back</p>
    <form onSubmit={props.handleSubmit}>
      
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search here..."
        value={props.search}
        onChange={props.handleChange}></input>

      <button className='btn btn-primary' type='submit'>Submit</button>
    </form>
      
    </div>
  )
}
