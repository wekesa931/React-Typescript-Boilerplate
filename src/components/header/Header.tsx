import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Drawer, Icon, Menu } from 'antd';

import './header.css'

const Header = () => {
  const [current, setCurrent] = useState('home')
  const [ visible, setVisible ] = useState(false)

  const handleClick = (e: any) => {
    setCurrent(e.key)
  }

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <React.Fragment>
      <div className='browserView'>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="home">
            <Link to='/'>
              <Icon type="home" />
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="mail">
            <Link to='/my-posts'>
              <Icon type="mail" />{' '}
              My Posts
            </Link>
          </Menu.Item>
          <Menu.Item key="favorite">
            <Link to='/favorites'>
              <Icon type="like" />{' '}
              Favorite
            </Link>
          </Menu.Item>
        </Menu>
      </div>
      <div className='mobileView'>
        <Icon type="menu-unfold" onClick={showDrawer} style={{
              fontSize: "2.5em",
              margin: "2% 0 0 5%"
        }}/>
        <Drawer
          title="Medium App"
          placement="left"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <Link to='/' onClick={onClose}>
            <Icon type="home" />{' '}
            Home
          </Link>
          <hr />
          <Link to='/my-posts' onClick={onClose}>
            <Icon type="mail" />{' '}
            My Posts
          </Link>
          <hr />
          <Link to='/favorites' onClick={onClose}>
            <Icon type="like" />{' '}
            Favorite
          </Link>
        </Drawer>
      </div>
    </React.Fragment>
  );
}

export default Header
