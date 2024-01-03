import { Link } from "react-router-dom"

export default function Nav (props) {
    return (
        <div className="nav">
            <Link className='nav-item' to="/">
                Home
            </Link>
            <Link className='nav-item' to={'/stocks'}>
               Stocks 
            </Link>
            <Link className='nav-item' to="/about">
                About
            </Link>
            
        </div>
    )
}