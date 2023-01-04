import React from 'react'
import './headerr.css'
import { Link } from 'react-router-dom'

function HeaderPageAbout() {

    const hiddenlistopen = () => {

        const list = document.getElementById('hiddenlist')
        list.classList.toggle("active")

    }

    return (
        <div className='headerdivforerror'>

            <nav>

                <div className='generaldivnavhome'>

                    <div className='forstart'>
                        <Link to={"/"}> <h3> Start Bootstrap  </h3> </Link>
                    </div>

                    <div className='rightsidenavhome'>
                        <Link to={"/"}>  <h5 className='hometextunderline'> HOME</h5> </Link>
                        <Link to={"/about"}> <h5> ABOUT </h5> </Link>
                        <a href='https://github.com/StartBootstrap/sb-clean-blog-angular' target={"_blank"}> <i class="fa-brands fa-github"></i> </a>
                    </div>
                    <i class="fa-solid fa-bars" onClick={hiddenlistopen}></i>

                </div>

            </nav>
            <div id='hiddenlist'>
                <Link to={"/"}> <h5> HOME</h5> </Link>
                <Link to={"/about"}> <h5> ABOUT </h5> </Link>
                <a href='https://github.com/StartBootstrap/sb-clean-blog-angular' target={"_blank"}>  <i class="fa-brands fa-github"></i> </a>
            </div>

            <div className='textheader'>

                <h3>About Me</h3>
                <h6>This is what I do</h6>

            </div>

        </div>
    )
}

export default HeaderPageAbout