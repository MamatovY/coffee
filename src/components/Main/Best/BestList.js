import { Row } from "react-bootstrap"
import { Link } from "react-router-dom"


export const BestList = ({ coffeeData, updateAboutId }) => {

    const ListData = coffeeData.map(item => {
        const { id } = item
        return (
            <Link to='/AboutIt' onClick={() => updateAboutId(id)} className='Menu col-xl-3 col-lg-5 col-md-12 col-sm-12' key={id}>
                <div >
                    <div>
                        <img src={item.src} alt="" />
                    </div>
                    <div>
                        {item.name}
                    </div>
                    <div className="MenuSpan">
                        <p>{item.country}</p>
                        <span>
                            {item.price}
                        </span>
                    </div>
                </div>
            </Link>
        )
    })

    return (
        <>
            <Row className="BestMenu">
                {ListData}
            </Row>
        </>
    )
}