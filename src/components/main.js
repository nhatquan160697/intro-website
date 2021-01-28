import MenuBar from './menu-bar'
import Copyright from './copy-right'
import Intro from './intro'
import About from './about'
import Work from './work'
import Clients from './clients'
import Contacts from './contacts'

function App() {
  return (
    <main className="container-fluid">
      <div className="row">        
        <nav id="tmSidebar" className="tm-bg-black-transparent tm-sidebar">
          <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>
          <div className="tm-sidebar-sticky">
            <div className="tm-brand-box">
              <div className="tm-double-border-1">
                <div className="tm-double-border-2">
                  <h1 className="tm-brand text-uppercase">Dream Pulse</h1>
                </div>
              </div>
            </div>
            <MenuBar />
            <Copyright />
          </div>
        </nav>

        <Intro />
        <About />
        <Work />
        <Clients />
        <Contacts />
      </div>
    </main>
  );
}

export default App;
