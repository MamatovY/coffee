import './Header.css'
import { TopHeader } from "./TopHeader/TopHeader"
import { Container } from 'react-bootstrap'

const House = () => {
    return (
        <>
            <h4>We makes every day full of energy and taste</h4>
            <h4>Want to try our beans?</h4>
            <button type="button" className="btn btn-outline-secondary">More</button>
        </>
    )
}
const dis = () => {
    return (
        <>

        </>
    )
}




export const Header = ({ headImg, headH1 }) => {
    const Visible = headH1 === 'Everything You Love About Coffee' ? House : dis

    return (
        <div className="Header" style={{ backgroundImage: `${headImg}` }}>
            <Container>
                <TopHeader navColor={'navWhite'} />
                <div className="HeaderMain">
                    <h1>
                        {headH1}
                        <div>
                            <img src="img/h2White.svg" alt="" />
                        </div>
                    </h1>
                    <Visible />
                </div>
            </Container>
        </div>
    )
}