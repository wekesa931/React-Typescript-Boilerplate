import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';


const Header: React.SFC = () => {
  const [current, setCurrent] = useState('home')

  const handleClick = (e: any) => {
    setCurrent(e.key)
  }

  return ( 
    <div style={{textAlign: 'right'}}>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="home">
            <Link to='/'>
              <Icon type="home" />
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="mail">
            <Icon type="mail" />
            My Posts
          </Menu.Item>
          <Menu.Item key="favorite">
            <Icon type="like" />
            Favorites
          </Menu.Item>
          <Menu.Item key="list">
            <Link to='/todos'>
              <Icon type="unordered-list" />
              Todos
            </Link>
          </Menu.Item>
        </Menu>
      </div>
   );
}

export default Header;