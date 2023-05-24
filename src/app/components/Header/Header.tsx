import "./Header.scss"

import { environment } from "../../../environment"

const Header = () => {
    return (
        <header className="header_area">
            <h1 className="header_title">REDIS PAT {environment.version}</h1>
        </header>
    )
}

export default Header