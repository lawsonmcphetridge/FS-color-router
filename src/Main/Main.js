import React from 'react';
import { useParams } from 'react-router-dom';
import './Main.css';

export default function Main() {
  const params = useParams();
  return (
    <div className='main' style={{ backgroundColor: `rgb(${params.red}, ${params.green}, ${params.blue})` }}>
    </div>
  );
}
