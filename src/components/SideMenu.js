import logo from '../img/image.svg'

const SideMenu = () => {
    return (
        <div>
            <div className="nav">
            <img src={logo} alt="seagull logo" className="logo" />
            <h1 className="logotype">seagull</h1>
            </div>
            <br />
            <div className="menu-content">
            <ul className="menu-list">
                <li><i className="fa fa-home"></i> Home</li>
                <li>Explore</li>
                <li>Messages</li>
                <li>Saved</li>
                <li>Profile</li>
            </ul>
            </div>
        </div>
    )
}

export default SideMenu
