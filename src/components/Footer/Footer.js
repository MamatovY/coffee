
import { Container } from 'react-bootstrap'
import { TopHeader } from '../Header/TopHeader/TopHeader'
import './Footer.css'

export const Footer = () => {
    return (
        <footer >
            <Container>
                <div className="Footer">
                    <TopHeader navColor={'navBlack'} />
                    <div><img src="img/h2Black.svg" alt="" /></div>
                </div>
            </Container>
        </footer>
    )
}