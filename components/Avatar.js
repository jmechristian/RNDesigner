import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Avatar = () => {
  const [photo, setPhoto] = useState(
    'https://uinames.com/api/photos/male/20.jpg'
  );

  useEffect(() => {
    fetch('https://uinames.com/api/?ext')
      .then(response => response.json())
      .then(response => {
        setPhoto(response.photo);
      });
  }, []);

  return <Image source={{ uri: photo }} />;
};

export default Avatar;

const Image = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-right: 20px;
  top: 0;
  left: 0;
`;
