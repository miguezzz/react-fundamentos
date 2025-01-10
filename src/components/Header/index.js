import React, { useContext } from 'react';
// import { useTheme } from 'styled-components';

import { Container } from './styles';

import { MyThemeContext } from '../../contexts/MyThemeContext';

export default class Header extends React.Component {
  static contextType = MyThemeContext;

  render() {
    const { theme, onToggleTheme } = this.context;
    // se fossem props, seria: const { theme, onToggleTheme } = this.props;
    // o this vem do extends React.Component. é um método de classe

    return (
      <Container>
        <h1>Vmigu's Blog</h1>
        <button type="button" onClick={onToggleTheme}>
          {theme === 'dark' ? '🌞' : '🌑'}
        </button>
      </Container>
    );
  }
}

// export default function Header() {
//   const { theme, onToggleTheme } = useContext(MyThemeContext);

//   const usetheme = useTheme(); // hook useTheme para acessar o tema atual
//   console.log(usetheme);

//   return (
//     <Container>
//       <h1>Vmigu's Blog</h1>
//       <button type="button" onClick={onToggleTheme}>
//         {theme === 'dark' ? '🌞' : '🌑'}
//       </button>
//     </Container>
//   );
// }
