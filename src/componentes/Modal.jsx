/* eslint-disable react/prop-types */
import * as React from 'react';
import Box from '@mui/material/Box';
import logo from "./img/logo.png"

import Modal from '@mui/material/Modal';



export default function BasicModal({fnSubmit}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  
  return (
    <div>
      <div>
       <header className="nav">
          <div>
            <img src={ logo } alt="logo"  />
          </div>
          <div>
             <div className="divBotons" >
              <button className='botonModal' onClick={handleOpen}><span className="material-symbols-outlined">filter_alt</span></button>
             </div>
          </div>
       </header>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="boxModal" >
        <div className='divBox'>
           <div className='headBox'>
                <h1>Edit your search</h1>
                <button onClick={handleClose} className='botonModalclose'><span className="material-symbols-outlined">close</span></button> 
           </div>
           <div className='divBarBox'>
              <div className='barBox'>
               <form className='formBox' onSubmit={fnSubmit} >
                <div className='botonBox1'>
                  <span className='spanLocation'>Location</span>
                  <input type="text" placeholder='filter by location' />
                </div>
                <div className='botonBox2'>
                  <span className='spanGuest'>Guest</span>
                  <input type="text" placeholder='filter by number of guest' />
                </div>
                  <button type='submit' className='botonBox3'>
                    <span className="material-symbols-outlined">search</span>
                    <span className='spanSearch'>search</span>
                  </button>
                </form>
               </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}