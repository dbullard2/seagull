import logo from '../img/image.svg'

const Navbar = () => {
    return (
        <div className="nav">
            <img src={logo} alt="seagull logo" className="logo" />
            <h1 className="logotype">seagull</h1>
        </div>
    )
}

export default Navbar
