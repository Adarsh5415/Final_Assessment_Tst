import React, { useState } from 'react';

const PictureForm = ({ onPictureSubmit }) => {
  const [pictureLink, setPictureLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onPictureSubmit(pictureLink);
    setPictureLink('');
  }

  return (
    <form className="picture-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={pictureLink}
        onChange={(e) => setPictureLink(e.target.value)}
        placeholder="Enter picture link"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PictureForm;
