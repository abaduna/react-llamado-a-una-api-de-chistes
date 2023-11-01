


import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'en', label: 'English' },
  { value: 'cs', label: 'Czech' },
  { value: 'de', label: 'Germany' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'pt', label: 'Portuguese' },
];

const Serch = ({ findLenguaje, setEndpoint }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Valor seleccionado:', selectedOption.value);
    // findLenguaje(selectedOption.value)
    setEndpoint(selectedOption.value); // Actualiza el endpoint en App.js
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <>
      <form method='post' onSubmit={handleSubmit}>
        <label>
          Elegir el idioma
          <Select options={options} value={selectedOption} onChange={handleSelectChange} />
          <button className='btn btn-primary mt-2' type='submit'>
            Elegir
          </button>
        </label>
      </form>
    </>
  );
};

export default Serch;