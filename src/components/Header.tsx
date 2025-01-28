import "./Header.css"
import Title from "./Title";
import banner from "../assets/banner.jpg"
import logo from "../assets/logotyp2.png"
function Header() {
    return (
    <>
    <div className="header">
        <div className="header-cont">
            <img src={logo} alt="Logotyp" className="logo" />
            <Title />
        </div>
    </div>
    <img src={banner} alt="Filmer staplade på varandra" className="banner" />
    </>
    )
}

export default Header;