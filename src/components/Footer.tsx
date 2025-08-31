export default function Footer() {
  return (
    <footer>
      <div className="top-footer">
        <p>Aryan Sharma</p>
      </div>
      <div className="middle-footer">
        <ul className="footer-menu">
          <li className="footer_menu_list">
            <a href="#home">Home</a>
          </li>
          <li className="footer_menu_list">
            <a href="#about">About</a>
          </li>
          <li className="footer_menu_list">
            <a href="#skill">Skill</a>
          </li>
          <li className="footer_menu_list">
            <a href="#projects">Projects</a>
          </li>
          <li className="footer_menu_list">
            <a href="#contact">Contact</a>
          </li>
        </ul>   
      </div>
      <div className="footer-social-icons">
        <a href="https://www.linkedin.com/in/aryan-sharma-196a22233/" className="icon" target="_blank" rel="noopener noreferrer">
          <i className="uil uil-linkedin-alt"></i>
        </a>
        <a href="https://github.com/Zilean12" className="icon" target="_blank" rel="noopener noreferrer">
          <i className="uil uil-github-alt"></i>
        </a>
      </div>
      <div className="bottom-footer">
        <p>Copyright &copy; <a href="#home" style={{ textDecoration: 'none' }}>Aryan Sharma - Zilean12</a> - All rights reserved</p>
      </div>
    </footer>
  );
}