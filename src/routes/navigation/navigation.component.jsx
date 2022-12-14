import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

// import { Fragment, useContext } from "react";
// import { Outlet, Link } from "react-router-dom";

// import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
// import { UserContext } from "../../contexts/user.context";
// import "./navigation.styles.scss";

// const Navigation = () => {
//   const { currentUser } = useContext(UserContext);
//   console.log(currentUser);
//   return (
//     <Fragment>
//       <div className="navigation">
//         <Link className="logo-container" to="/">
//           <CrwnLogo className="logo" />
//         </Link>
//         <div className="nav-links-container">
//           <Link className="nav-link" to="/shop">
//             SHOP
//           </Link>
//           <Link className="nav-link" to="/auth">
//             SIGN IN
//           </Link>
//         </div>
//       </div>
//       <Outlet />
//     </Fragment>
//   );
// };

// export default Navigation;
