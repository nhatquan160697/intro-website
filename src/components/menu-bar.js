function MenuBar() {
  return (
    <ul id="tmMainNav" className="nav flex-column text-uppercase text-right tm-main-nav">
      <li className="nav-item">
        <a href="#intro" className="nav-link active">
          <span className="d-inline-block mr-3">Intro</span>
          <span className="d-inline-block tm-white-rect"></span>
        </a>
      </li>
      <li className="nav-item">
        <a href="#about" className="nav-link">
          <span className="d-inline-block mr-3">About</span>
          <span className="d-inline-block tm-white-rect"></span>
        </a>
      </li>
      <li className="nav-item">
        <a href="#work" className="nav-link">
          <span className="d-inline-block mr-3">Work</span>
          <span className="d-inline-block tm-white-rect"></span>
        </a>
      </li>
      <li className="nav-item">
        <a href="#clients" className="nav-link">
          <span className="d-inline-block mr-3">Clients</span>
          <span className="d-inline-block tm-white-rect"></span>
        </a>
      </li>
      <li className="nav-item">
        <a href="#talk" className="nav-link">
          <span className="d-inline-block mr-3">Let's Talk</span>
          <span className="d-inline-block tm-white-rect"></span>
        </a>
      </li>
    </ul>
  );
}

export default MenuBar