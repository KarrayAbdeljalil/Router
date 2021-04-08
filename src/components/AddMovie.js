import React, { useState } from 'react'
import Modal from "react-modal";
import StarRating from './StarRating';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  Modal.setAppElement('#root')

const AddMovie = ({handleAdd}) => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }
  const [form, setForm] = useState({
      name:"",
      date:"",
      image:"",
      rating: 0,
    });
    const handleRating = (rate) => setForm({ ...form,  rating: rate});
    const handleChange = (e) => setForm({ ...form,  [e.target.name]: e.target.value});
    return (
        <div>
            <button className="button" onClick={openModal}>Add Your Movie</button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                >
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        let newMovie = { ...form ,id: Math.random()};
                        handleAdd(newMovie);
                        closeModal();
                    }
                    }> 
                        <label >Movie Name : </label>
                        <input type="text" value={form.name} name="name" onChange={handleChange} required/>
                        <label >Date : </label>
                        <input type="date" value={form.date} name="date" onChange={handleChange} required/>
                        <label>Movie URL :</label>
                        <input type="url" value={form.image} name="image" onChange={handleChange} required/>
                        <div style={{backgroundColor:"grey"}}>
                            <StarRating rating={form.rating} handleRating={handleRating}/>
                        </div>
                        <div className="dual-button">
                            <button className="add-button" type="submit">Add</button>
                            <button className="cancel-button" onClick={closeModal}>Cancel</button>
                        </div>
                    
                    </form>
                </Modal>
        </div>
    )
}

export default AddMovie
