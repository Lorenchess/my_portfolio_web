import React from 'react';
import { FaChess } from "react-icons/fa";
//import {Container, Row, Col} from 'react-bootstrap';
import './LineSeparator.scss'

const LineSeparator = () => {
   return (
      <>
         <div className="mx-auto text-center lines">
         <FaChess size={30} className='icon-separator'/>
         </div>         
      </>
   )
}

export default LineSeparator
