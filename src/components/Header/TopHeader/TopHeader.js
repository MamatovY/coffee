import './TopHeader.css'
import { Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
export const TopHeader = ({ navColor, navImg }) => {

    return (
        <div className="TopHeader">
            <Row xs='auto'>


                <Col>
                    <div className='iconHeader'>
                        <div className='iconImg'>
                            <img src={navImg} alt="" />
                        </div>
                        <NavLink to='/' className={navColor} end>
                            Coffee house
                        </NavLink>

                    </div>
                </Col>
                <Col>
                    <NavLink
                        to='/OurCoffee'
                        className={navColor}>Our coffee</NavLink>
                </Col>
                <Col>
                    <NavLink to='/Pleasure'
                        className={navColor}>For your pleasure</NavLink>
                </Col>

            </Row>
        </div>
    )
}