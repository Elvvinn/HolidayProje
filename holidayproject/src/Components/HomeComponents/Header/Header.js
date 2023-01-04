import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
function HeaderSection() {

    const hiddenlistopen = () => {

        const list = document.getElementById('hiddenlist')
        list.classList.toggle("active")

    }


    return (

        <header>

            <nav>
                <div className='generaldivnavhome'>

                    <div className='forstart'>
                        <Link to={"/"}> <a> <h3> Start Bootstrap  </h3> </a> </Link>
                    </div>

                    <div className='rightsidenavhome'>
                        <Link to={"/"}> <a> <h5 className='hometextunderline'> HOME</h5> </a> </Link>
                        <Link to={"/about"}> <h5> ABOUT </h5> </Link>
                        <a href='https://github.com/StartBootstrap/sb-clean-blog-angular' target={"_blank"}> <i class="fa-brands fa-github"></i> </a>
                    </div>
                    <i class="fa-solid fa-bars" onClick={hiddenlistopen}></i>

                </div>

            </nav>
            <div id='hiddenlist'>
                <Link to={"/"}> <a> <h5> HOME</h5> </a> </Link>
                <Link to={"/about"}>  <h5> ABOUT </h5> </Link>
                <a href='https://github.com/StartBootstrap/sb-clean-blog-angular' target={"_blank"}> <i class="fa-brands fa-github"></i> </a>
            </div>

            <Link to={"/login"}> <button className='trybtn'> TRY LOGGING IN </button>  </Link>

            <div className='textheader'>

                <h3>Clean Blog</h3>
                <h6>Blog Theme by Start Bootstrap</h6>

            </div>

        </header>

    )
}

export default HeaderSection