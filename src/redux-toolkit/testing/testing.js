import React, { useState } from 'react';

function ImageUploadForm() {
  const [image, setImage] = useState(null);
  const [inputData, setInputData] = useState({
    field1: '',
    field2: '',
    // Add more fields as needed
  });

  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your form submission logic here, including image upload and data submission
    // You can use FormData to send both the image and input data
    const formData = new FormData();
    formData.append('file', image);
    formData.append('field1', inputData.field1);
    formData.append('field2', inputData.field2);
    // Append more fields as needed

    // Send the formData to the server using AJAX or fetch
    // Example using fetch:
    fetch(`http://localhost:5000/data`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="field1" value={inputData.field1} onChange={handleInputChange} placeholder="Field 1" />
      <input type="text" name="field2" value={inputData.field2} onChange={handleInputChange} placeholder="Field 2" />
      <input type="file" onChange={handleImageUpload} accept="image/*" />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ImageUploadForm;