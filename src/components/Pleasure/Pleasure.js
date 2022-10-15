import './Pleasure.css'

import { Row, Col, Container } from 'react-bootstrap'
import { BestList } from '../Main/Best/BestList'
import { Header } from '../Header/Header'

export const Pleasure = ({ coffeeData }) => {

    return (
        <>

            <Header headH1={'For your pleasure'}
                headImg={`url(img/Header3.svg)`}
            />
            <div className='Pleasure'>
                <Container >
                    <Row className='OurImg'>
                        <Col xl={5} className='col'>
                            <div>
                                <img src="img/coffee-839233_1920.svg" alt="" />
                            </div>
                        </Col>
                        <Col xl={6} className='col'>
                            <h2>About our goods
                                <div>
                                    <img src="img/h2Black.svg" alt="" />
                                </div>
                            </h2>
                            <div>
                                Extremity sweetness difficult behavior he of. On disposal of as landlord horrible.
                                <br />
                                <br />
                                Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions.
                                <br />
                                As greatly removed calling pleased improve an. Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it went
                                is song that held help face.
                            </div>
                        </Col>
                    </Row>
                    <div className="underline"></div>

                    <div>
                        <Row>
                            <BestList coffeeData={coffeeData} />
                        </Row>

                    </div>
                </Container>
            </div>
        </>
    )
}