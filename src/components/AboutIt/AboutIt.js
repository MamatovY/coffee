import { Container, Row, Col } from 'react-bootstrap'
import { Header } from '../Header/Header'
import './AboutIt.css'

export const AboutIt = ({ coffeeItem }) => {
    return (
        <>
            <Header headH1={'Our Coffee'}
                headImg={`url(img/Header2.svg)`} />
            <div className="AboutIt">
                <Container>
                    <Row className='OurImg'>
                        <Col xl={5} className='col'>
                            <div className='OurMainImg'>
                                <img src={coffeeItem.src} alt="" />
                            </div>
                        </Col>
                        <Col xl={6} className='col'>
                            <h2>About it
                                <div>
                                    <img src="img/h2Black.svg" alt="" />
                                </div>
                            </h2>
                            <div className='AboutText'>
                                <div className="country">
                                    <span className='MenuSpan'> Country:</span> {coffeeItem.country}
                                </div>
                                <div className="description">
                                    <span className='MenuSpan'>Description: </span>
                                    {coffeeItem.text}
                                </div>
                                <div className="price">
                                    Price: <h3>{coffeeItem.price}</h3>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}