import './Main.css'
import { Container } from 'react-bootstrap'
import { Best } from './Best/Best'
import { Header } from '../Header/Header'
import headerImg1 from './../../assets/img/coffeePage1.png'

export const Main = ({ coffeeData }) => {

    return (
        <>
            <Header headH1={'Everything You Love About Coffee'}
                headImg={headerImg1}
            />
            <div className='Main'>
                <Container>
                    <div>
                        <h2>About Us</h2>
                        <div className='MainText'>Extremity sweetness difficult behavior he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </div>
                        <br />
                        <div className='MainText'>
                            Now residence basswoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.</div>
                    </div>


                </Container>
            </div>

            <Best coffeeData={coffeeData} />

        </>
    )
}