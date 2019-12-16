import React, { useState, useEffect, useCallback } from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Animated, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuItem from './MenuItem';

const mapStateToProps = state => {
  return { action: state.action };
};

const screenHeight = Dimensions.get('window').height;

const Menu = props => {
  const [top, setTop] = useState(new Animated.Value(screenHeight));
  const dispatch = useDispatch();

  useEffect(() => {
    toggleMenu();
  }, [props.action]);

  const toggleMenu = () => {
    if (props.action === 'openMenu') {
      Animated.spring(top, {
        toValue: 54
      }).start();
    }

    if (props.action === 'closeMenu') {
      Animated.spring(top, {
        toValue: screenHeight
      }).start();
    }
  };

  const closeMenu = () => {
    dispatch({ type: 'CLOSE_MENU' });
  };

  return (
    <AnimatedContainer style={{ top: top }}>
      <Cover>
        <Image source={require('../assets/background2.jpg')} />
        <Title>Jamie Christian</Title>
        <Subtitle>Jamie@JMEChristianDigital.com</Subtitle>
      </Cover>
      <TouchableOpacity
        onPress={closeMenu}
        style={{
          position: 'absolute',
          top: 120,
          left: '50%',
          marginLeft: -22,
          zIndex: 1
        }}
      >
        <CloseView>
          <Ionicons name='ios-close' size={44} color='#546bfb' />
        </CloseView>
      </TouchableOpacity>
      <Content>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </Content>
    </AnimatedContainer>
  );
};

export default connect(mapStateToProps)(Menu);

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
  align-items: center;
  justify-content: center;
`;

const Content = styled.View`
  height: ${screenHeight};
  background: #f0f3f5;
  padding: 50px;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: 13;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;

const items = [
  {
    icon: 'ios-settings',
    title: 'Account',
    text: 'settings'
  },
  {
    icon: 'ios-card',
    title: 'Billing',
    text: 'payments'
  },
  {
    icon: 'ios-compass',
    title: 'Learn React',
    text: 'start course'
  },
  {
    icon: 'ios-exit',
    title: 'Log out',
    text: 'see you soon!'
  }
];
