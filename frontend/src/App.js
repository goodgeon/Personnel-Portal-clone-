import Sidebar from './components/sidebar'
import Router from './Router/Router'
import GlobalStyles from './components/GlobalStyles'
import Navbar from './components/NavBar'
import styled from 'styled-components'

const APP = styled.div`
  position : relative;
`

function App() {

  return (
    <APP>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Router></Router>

      <GlobalStyles></GlobalStyles>
    </APP >
  );
}

export default App;
