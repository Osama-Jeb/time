import { NavLink } from "react-router-dom"
import "./_navigation.scss"
export const Navigation = () => {
    return (
        <>
            <div className="navBar orb">
                <NavLink to={"/"}>Clock</NavLink>
                <NavLink to={"/chronometer"}>Chronometer</NavLink>
                <NavLink to={"/timer"}>Timer</NavLink>
            </div>
        </>
    )
}
