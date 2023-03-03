
import { Container } from 'react-bootstrap'
import { TopHeader } from '../Header/TopHeader/TopHeader'
import navBlack from './../../assets/img/navBlack.svg'
import './Footer.css'

export const Footer = () => {
    return (
        <footer >
            <Container>
                <div className="Footer">
                    <TopHeader navColor={'navBlack'} navImg={navBlack} />
                    <div><img src="img/h2Black.svg" alt="" /></div>
                </div>
            </Container>
        </footer>
    )
}