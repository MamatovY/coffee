// import { Container, Row, Col } from 'react-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { AboutIt } from './AboutIt/AboutIt';
import { Footer } from './Footer/Footer';
import { Main } from './Main/Main';
import OurCoffee from './OurCoffee/OurCoffee';
import { Pleasure } from './Pleasure/Pleasure';
import { Component } from 'react';
import product1 from './../assets/img/product1.png'
import product2 from './../assets/img/product2.png'
import product3 from './../assets/img/product3.png'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

      coffeeData: [
        {
          id: 1, ratting: 2, name: 'Solido Coffee Beans 2 kg', price: '15.99$', country: 'Kenya', src: product1,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          id: 2, ratting: 4, name: 'Presto Coffee Beans 1 kg', price: '10.00$', country: 'Kenya', src: product2,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          id: 3, ratting: 3, name: 'ARMISTICE Coffee 1 kg', price: '6.99$', country: 'Columbia', src: product3,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          id: 4, ratting: 6, name: 'Solido Coffee Beans 2 kg', price: '15.99$', country: 'Brazil', src: product1,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          id: 5, ratting: 8, name: 'Presto Coffee Beans 1 kg', price: '10.00$', country: 'Columbia', src: product2,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          id: 6, ratting: 1, name: 'ARMISTICE Coffee 1 kg', price: '6.99$', country: 'Columbia', src: product3,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      ],
      term: '',
      country: '',
      aboutId: '3'
    }
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  updateTerm = (term) => {
    this.setState({ term })
  }

  countryFilter = (items, country) => {
    if (country.length > 0) {
      return items.filter(item => item.country === country)
    }
    return items
  }

  updateCountry = (country) => {
    this.setState({ country })
  }

  updateAboutId = (about) => {
    const aboutId = about - 1
    this.setState({ aboutId })
  }




  render() {
    const { coffeeData, term, country, aboutId } = this.state
    const visible = this.searchEmp((this.countryFilter(coffeeData, country)), term)

    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path='/OurCoffee' element={
              <OurCoffee
                updateAboutId={this.updateAboutId}
                updateTerm={this.updateTerm}
                coffeeData={visible}
                updateCountry={this.updateCountry}
              />
            }
            />
            <Route path='/Pleasure' element={
              <Pleasure
                coffeeData={coffeeData}
              />
            }
            />
            <Route path='/AboutIt' exact element={<AboutIt coffeeItem={coffeeData[aboutId]} />} />
            <Route path='/' exact element={<Main coffeeData={coffeeData} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
