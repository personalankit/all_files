import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex space-x-24 text-[20px]">
            <Link to="/">All</Link>
            <Link to="/?todos=active">Active</Link>
            <Link to="/?todos=completed">Completed</Link>
        </nav>
    )
};

export default Navbar;
