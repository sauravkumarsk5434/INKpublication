
import React from 'react'

const Header2 = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">INK Publication</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 justify-content-between mb-lg-0 w-50">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                       
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Journals
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="">Scopus Discontinued Journals</a></li>
                                <li><a class="dropdown-item" href="#">Google Scholar Journals</a></li>
                                <li><a class="dropdown-item" href="#">Web of Science</a></li>
                                <li><a class="dropdown-item" href="#">HEC Journals</a></li>
                                <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Scopus Journals
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="">Scopus Q4 Journals</a></li>
                                <li><a class="dropdown-item" href="#">Scopus Q4 Journals</a></li>
                                <li><a class="dropdown-item" href="#">Scopus Q3 Journals</a></li>
                                <li><a class="dropdown-item" href="#">Scopus Q2 Journals</a></li>
                                <li><a class="dropdown-item" href="#">Scopus Q1 Journals</a></li>
                                
                            </ul>
                        </li>
                                
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/publication-process">Publication Proces</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Payment</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#"><i class=""><i class="fa-solid fa-moon"></i></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                        </li>
                        <div className='socialmedia' class="d-flex flex-row">
                            <li className='medialink' class="p-2"><i class="fa-brands fa-square-facebook"></i></li>
                            <li className='medialink' class="p-2"><i class="fa-brands fa-square-twitter"></i></li>
                            <li className='medialink' class="p-2"><i class="fa-brands fa-linkedin"></i></li>
                        </div>


                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header2