import React,{useState} from 'react'
import Swal from 'sweetalert2';

export default function Book() {
  const storedMovie = JSON.parse(localStorage.getItem('movie'));
  const [showForm,setShowForm]=useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    Swal.fire('Congrats', 'Your ticket is booked', 'success').then(result => {
        window.location.href = '/'
      })
  };

  return (
    <>
    <p>
        <b>{storedMovie.show.name}</b>
    </p>
    <p dangerouslySetInnerHTML={{ __html: storedMovie.show.summary }}></p>
    {!showForm && (
        <button onClick={handleButtonClick}>Book Ticket</button>
      )}
      {showForm && (
        <form onSubmit={handleFormSubmit}>
        Movie Name <input type='text' readOnly className='form-control' value={storedMovie.show.name} ></input><br></br>
        Show Day <input type='text' readOnly className='form-control' value={storedMovie.show.schedule.days[0]} ></input><br></br>
        Show Time <input type='text' readOnly className='form-control' value={storedMovie.show.schedule.time}></input><br></br>
        Language <input type='text' readOnly className='form-control' value={storedMovie.show.language} ></input><br></br>
        Duration <input type='text' readOnly className='form-control' value={storedMovie.show.runtime} ></input><br></br>
        <button className='btn btn-primary'>Book Show</button>
        </form>
      )}
    </>
  )
};
