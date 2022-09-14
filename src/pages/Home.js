
import React from 'react'

const Home = () => {
    return (
        <div className='container'>

            <div className='mt-3'>
                <h3 className='text-info'>About Us</h3>
                <p className='bg-success text-white'>Today there are thousands of publishers with millions of publication in each field of research that are not limited to engineering, science, medical, social science, business, education, mathematics, economics etc. There are a lot of indexing available and some of most reputable databases are Scopus by Elsevier, Web of Science by Clarivate, DOAJ, PubMed, UGC CARE etc. Journals ranging from open access to closed access, free publication to paid publication.
                    Author faces very difficulty in selecting a specific journal according their specific requirement. An author may be researcher, a PhD student, lecturer, professor, HOD, principle of any institution, employee of any private or public sector institution. Many author with low knowledge of computers face issues in formatting of article according to journal guidelines.
                    And about many articles are just rejected due to incorrect scope of journal, formatting not according to journal guidelines, author not submitted in specific review period and much more little reasons that can be avoided with our help.
                    All author needs to get their research published with a tight schedule with minimal budget in indexed and reputed journal. Many institutions require different journals indexed in different databases.
                    So for all these issue we come forward to assist in best way we can</p>
            </div>


            <div className='row  m-0 mt-3'>
                <div className='col-lg-6'>
                    <div class="card p-5" >
                        <img src="https://img.freepik.com/premium-vector/open-book-with-light-bulb-graduation-cap-university-education-concepts_72787-329.jpg?w=740" class="card-img-top rounded-circle" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-center">Research Guidance</h5>
                        </div>
                    </div>

                </div>


                <div className='col-lg-6'>
                    <div  class="card p-5" >
                        <img src="https://as2.ftcdn.net/v2/jpg/00/51/23/23/1000_F_51232326_RyUt8qyBIf9myGPvejoctPYsarx6MiKe.jpg" class="card-img-top rounded-circle" alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title">Research Publication</h5>

                        </div>
                    </div>

                </div>
                
            </div>


            <div className='row m-0 mt-3 bg-info p-4'>

                <div className='col-lg-3'>
                    <div class="card p-2" >
                        <img src="https://img.freepik.com/free-photo/teenager-with-book-looking-away_23-2147845841.jpg" class="card-img-top rounded-circle" alt="..." />
                        <div class="card-body text-center">
                            

                        </div>
                    </div>

                </div>
                <div className='col-lg-3'>
                    <div class="card p-2" >
                        <img src="https://as2.ftcdn.net/v2/jpg/02/31/77/05/1000_F_231770515_r3GD1pzz1oQqzgPuoovC2pTyD5yvdYTL.jpg" class="card-img-top rounded-circle" alt="..." />
                        <div class="card-body text-center">
                            

                        </div>
                    </div>

                </div>
                <div className='col-lg-3'>
                    <div class="card p-2" >
                        <img src="https://as2.ftcdn.net/v2/jpg/01/36/25/33/1000_F_136253398_WmzQYNcSzLgFhp5BGr8OuVbkMZadSUIp.jpg" class="card-img-top rounded-circle" alt="..." />
                        <div class="card-body text-center">
                            

                        </div>
                    </div>

                </div>
                <div className='col-lg-3'>
                    <div class="card p-2" >
                        <img src="https://as2.ftcdn.net/v2/jpg/03/72/86/69/1000_F_372866963_2ziDyVZ949M4lMZVPzWF3lVfgOQEHWo9.jpg" class="card-img-top rounded-circle" alt="..." />
                        <div class="card-body text-center">
                            

                        </div>
                    </div>

                </div>

            </div>


            <div className='row m-0 mt-3 justify-content-around' >

                <div className='col-md-5'>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Mail Us
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <span className='fs-5 text-danger'>Mail</span>: <span className='fs-5 text-info'>submission@inkpubs.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='col-md-5' >
                    <div class="accordion" id="accordionExample1">
                        <div class="accordion-item" >
                            <h2 class="accordion-header " id="headingTwo"  >
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"  >
                                    Address
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample1">
                                <div class="accordion-body">
                                    <span className='fs-5 text-danger'></span>: <span className='fs-5 text-info' >JMD Megapolis Gurugram
Haryana</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <div className='mt-5'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4878.3451026609955!2d77.20792446849849!3d28.69906361646328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1663087962581!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>




        </div>
    )
}

export default Home