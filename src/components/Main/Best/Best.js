import { Container } from 'react-bootstrap'
import './Best.css'
import { BestList } from './BestList'

export const Best = ({ coffeeData }) => {
    return (
        <div className="Best Main">
            <Container>
                <h2>Our best</h2>
                <BestList coffeeData={coffeeData} />
            </Container>
        </div>
    )
}