import { Col, Container, Row } from 'react-bootstrap'
import { BestList } from '../Main/Best/BestList'
import { Component } from 'react'
import './OurCoffee.css'
import { Header } from '../Header/Header';

class OurCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    updateTerm = (e) => {
        let term = e.target.value
        this.setState({ term })
        this.props.updateTerm(term)
    }
    render() {

        return (
            <>

                <Header headH1={'Our Coffee'}
                    headImg={`url(img/Header2.svg)`}
                />
                <div className='OurCoffee'>
                    <Container>
                        <Row className='OurImg'>
                            <Col xl={5} className='col'>
                                <div>
                                    <img src="img/girl-865304_1920.svg" alt="" />
                                </div>
                            </Col>
                            <Col xl={6} className='col'>
                                <h2>About our beans
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
                            <form >
                                <Row>
                                    <Col sm={3} xxl="auto" >

                                        Looking for

                                    </Col>
                                    <Col sm={7} xxl="auto" className="form1">
                                        <div>
                                            <input
                                                value={this.state.term}
                                                onChange={this.updateTerm}
                                                type="text" />

                                        </div>
                                    </Col>
                                    <Col sm={3} xxl="auto">
                                        <div>
                                            Or filter
                                        </div>
                                    </Col>
                                    <Col sm={3} xxl="auto">
                                        <div>
                                            <input
                                                onClick={() => this.props.updateCountry('')}
                                                className="btn btn-outline-secondary" type="button" value="All" />
                                        </div>
                                    </Col>
                                    <Col sm={3} xxl="auto">
                                        <div>
                                            <input
                                                onClick={() => this.props.updateCountry('Brazil')}
                                                className="btn btn-outline-secondary" type="button" value="Brazil" />
                                        </div>
                                    </Col>
                                    <Col sm={3} xxl="auto">
                                        <div>
                                            <input
                                                onClick={() => this.props.updateCountry('Kenya')}
                                                className="btn btn-outline-secondary" type="button" value="Kenya" />
                                        </div>
                                    </Col>
                                    <Col sm={3} xxl="auto">
                                        <div>
                                            <input
                                                onClick={() => this.props.updateCountry('Columbia')}
                                                className="btn btn-outline-secondary" type="button" value="Columbia" />
                                        </div>
                                    </Col>
                                </Row>
                            </form>
                        </div>

                        <div>
                            <Row>
                                <BestList updateAboutId={this.props.updateAboutId} coffeeData={this.props.coffeeData} />
                            </Row>

                        </div>
                    </Container>
                </div>
            </>
        )
    }
}

export default OurCoffee