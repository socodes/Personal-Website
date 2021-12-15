import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">mdidin.</a>

                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+90 532 210 45 21</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>mdidinxy@gmail.com</span>
                    </div>
                    
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
