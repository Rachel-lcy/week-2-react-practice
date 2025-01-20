import {Link} from 'react-router-dom';

function Home(){
    return(
        <div>
            <header className='Header'>
                <nav className='Header-nav'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <p>This is Home Page</p>
            </header>
        </div>
    )
}
export default Home;