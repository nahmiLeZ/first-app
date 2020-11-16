import React from 'react';

function Menu(props) {
    return (
        <div>
          <ul className="ul-menu">
              <li className="li-header">Главная</li>
              <li className="li-header">О нас</li>
              <li className="li-header">Контакты</li>
          </ul>
        </div>
    );
}

export default Menu;