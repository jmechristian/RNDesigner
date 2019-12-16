import React from 'react';
import styled from 'styled-components';

const SectionScreen = () => {
  return (
    <Container>
      <Text>Sections</Text>
    </Container>
  );
};

SectionScreen.navigationOptions = {
  title: 'Section'
};

export default SectionScreen;

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text``;
