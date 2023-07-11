import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav>
          <li>
            <NavLink to={"/"}>HOME</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>ABOUT</NavLink>
          </li>
        </nav>
      </header>
    </>
  );
}
export default Header;
