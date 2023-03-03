import './Pleasure.css'

import { Row, Col, Container } from 'react-bootstrap'
import { BestList } from '../Main/Best/BestList'
import { Header } from '../Header/Header'
import headerImg from './../../assets/img/coffeePage3.png'
import h2Black from './../../assets/img/h2Black.svg'
import pleasureAbout from './../../assets/img/coffeePage3About.png'

export const Pleasure = ({ coffeeData }) => {

    return (
        <>

            <Header headH1={'For your pleasure'}
                headImg={headerImg}
            />
            <div className='Pleasure'>
                <Container >
                    <Row className='OurImg'>
                        <Col xl={5} className='col'>
                            <div>
                                <img src={pleasureAbout} alt="" />
                            </div>
                        </Col>
                        <Col xl={6} className='col'>
                            <h2>About our goods
                                <div>
                                    <img src={h2Black} alt="" />
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