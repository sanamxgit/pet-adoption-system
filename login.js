import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import "./login.css";

const login = () => {
  return (
    <div className="login2">
      <nav className="navbar-container">
        <div className="navbar2">
          <div className="home2">Home</div>
          <Button className="rectangle-button" variant="primary" />
          <div className="navbar-child1" />
          <div className="adopt4">Adopt</div>
          <div className="get-involved2">Get Involved</div>
          <div className="blog2">Blog</div>
          <div className="about-us2">About us</div>
          <div className="navbar-child2" />
          <Button className="register3" variant="outline-primary">
            Register
          </Button>
          <div className="login3">Login</div>
          <img className="vector-icon37" alt="" src="/vector.svg" />
        </div>
      </nav>
      <b className="sign-in">Sign In</b>
      <div className="login-child" />
      <a className="forgot-password-reset">Forgot Password? Reset</a>
      <div className="login-item" />
      <div className="dont-have-an">Don’t have an account? Signup</div>
      <footer className="foots">
        <b className="adopt5">Adopt</b>
        <div className="petopia-pvt-ltd2">Petopia pvt. ltd</div>
        <b className="shop2">Shop</b>
        <b className="order-support2">{`Order & Support`}</b>
        <b className="account2">Account</b>
        <b className="info2">Info</b>
        <b className="follow-along2">Follow Along</b>
        <div className="dog3">Dog</div>
        <div className="kathmandu-np2">Kathmandu, NP</div>
        <div className="pupsicle5">Pupsicle</div>
        <div className="support2">Support</div>
        <div className="log-in2">Log In</div>
        <div className="about2">About</div>
        <div className="all5">All</div>
        <div className="all6">All</div>
        <div className="faq2">FAQ</div>
        <div className="shipping-returns2">{`Shipping & Returns`}</div>
        <div className="create-an-account2">Create an Account</div>
        <div className="store-locator2">Store Locator</div>
        <div className="news2">News</div>
        <img className="vector-icon38" alt="" src="/vector.svg" />
        <img className="vector-icon39" alt="" src="/vector.svg" />
        <img className="vector-icon40" alt="" src="/vector.svg" />
        <div className="petopia2">petopia</div>
        <div className="foots-child" />
        <div className="foots-item" />
        <div className="foots-inner" />
        <img className="vector-icon41" alt="" src="/vector.svg" />
        <img className="vector-icon42" alt="" src="/vector.svg" />
        <img className="vector-icon43" alt="" src="/vector.svg" />
      </footer>
      <Form className="password-parent">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
      </Form>
      <Form className="email-parent">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" />
      </Form>
      <Button className="login-inner" variant="primary">
        Sign In
      </Button>
    </div>
  );
};

export default login;
