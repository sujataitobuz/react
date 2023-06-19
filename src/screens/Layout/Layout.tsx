import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Alert from '../../components/Alert';

export default function Layout() {
  const [mode, setMode] = useState<string>('light')
  const [text, setText] = useState<string>('switch to dark')
  const [alert, setAlert] = useState({});
  const [modal, setModal] = useState(false)

  const showAlert = (message: any, type: any) => {
    setAlert({
      message: message,
      type: type,
    })
    setTimeout(() => {
      setAlert({})
    }, 500)
    setModal(true)
  }

  const modeChange = () => {
    if (mode === 'light') {
      setMode('dark');
      setText('switch to light');
      document.body.style.backgroundColor = 'gray';
      showAlert('success dark mode', 'success')
      document.title ="react app darkMode"
    } else {
      setMode('light');
      setText('switch to dark');
      document.body.style.backgroundColor = 'white';
      showAlert('success light mode', 'primary')
      document.title ="react app lightMode"
    }
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src='https://media.licdn.com/dms/image/C4D0BAQGbMF7PV0i8-A/company-logo_200_200/0/1620126099335?e=2147483647&v=beta&t=tnCsp9_hFT1FyKEHmKB_4e0dE_3kOkFMVqCOgHazzZo' alt="logo" className='w-[50px]' />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">contact</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={modeChange} />
                <label className={`form-check-label ${mode === 'light' ? 'text-black' : 'text-light'}`} >{text}</label>
              </div>
            </form>
          </div>
        </div>
      </nav>
      {modal && <Alert alert={alert} />}

      <Outlet />
    </div>
  )
}