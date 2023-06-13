const Title = () => {
  return (
    <div className="logo">
      <h1>EatsNow</h1>
    </div>
  );
};

const NavBar = () => {
  return (
    <nav>
      <ul className="flex">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#" className="active">
            Cart
          </a>
        </li>
      </ul>
    </nav>
  );
};

export const Header = () => {
  return (
    <header className="flex">
      <div className="container flex">
        <Title />
        <NavBar />
      </div>
    </header>
  );
};
