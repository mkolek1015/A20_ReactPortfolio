import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio" class="s-portfolio target-section">

        <div class="row s-portfolio__header">
            <div class="column large-12">
                <h3>A Few Of My Latest Creations</h3>
            </div>
        </div>

        <div class="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">

            <div class="column folio-item">
                <a href="#modal-01" class="folio-item__thumb">
                    <img src="images/portfolio/MuscleManSS.jpg" 
                         srcset="images/portfolio/MuscleManSS.jpg 1x, 
                                 images/portfolio/MuscleManSS@2x.jpg 2x" alt="">
                    </img>
                </a>
            </div> 
            {/* <!-- end folio-item --> */}
            
            <div class="column folio-item">
                <a href="#modal-02" class="folio-item__thumb">
                    <img src="images/portfolio/Dinner_Developers.jpg" 
                         srcset="images/portfolio/Dinner_Developers.jpg 1x, 
                                 images/portfolio/Dinner_Developers@2x.jpg 2x" alt="">
                    </img>
                </a>
            </div> 
            {/* <!-- end folio-item --> */}

            <div class="column folio-item">
                <a href="#modal-03" class="folio-item__thumb">
                    <img src="images/portfolio/PWGenerator.jpg" 
                         srcset="images/portfolio/PWGenerator.jpg 1x, 
                                 images/portfolio/PWGenerator@2x.jpg 2x" alt="">
                    </img>
                </a>
            </div> 
            {/* <!-- end folio-item --> */}

            <div class="column folio-item">
                <a href="#modal-04" class="folio-item__thumb">
                    <img src="images/portfolio/WeatherDashboard.jpg" 
                         srcset="images/portfolio/WeatherDashboard.jpg 1x, 
                                 images/portfolio/WeatherDashboard@2x.jpg" alt="">
                    </img>
                </a>
            </div> 
            {/* <!-- end folio-item --> */}

            <div class="column folio-item">
                <a href="#modal-05" class="folio-item__thumb">
                    <img src="images/portfolio/fuji.jpg" 
                         srcset="images/portfolio/fuji.jpg 1x, 
                                 images/portfolio/fuji@2x.jpg 2x" alt="">
                    </img>
                </a>
            </div> 
            {/* <!-- end folio-item --> */}

            <div class="column folio-item">
                <a href="#modal-06" class="folio-item__thumb">
                    <img src="images/portfolio/skaterboy.jpg" 
                         srcset="images/portfolio/skaterboy.jpg 1x, 
                                 images/portfolio/skaterboy@2x.jpg 2x" alt="">
                    </img>
                </a>
            </div> 
            {/* <!-- end folio-item --> */}

            <div class="column folio-item">
                <a href="#modal-07" class="folio-item__thumb">
                    <img src="images/portfolio/rucksack.jpg" 
                         srcset="images/portfolio/rucksack.jpg 1x, 
                                 images/portfolio/rucksack@2x.jpg 2x" alt="">
                    </img>
                </a>
            </div> 
            {/* <!-- end folio-item --> */}

            <div class="column folio-item">
                <a href="#modal-08" class="folio-item__thumb">
                    <img src="images/portfolio/sanddunes.jpg" 
                         srcset="images/portfolio/sanddunes.jpg 1x, 
                                 images/portfolio/sanddunes@2x.jpg 2x" alt="">
                    </img>
                </a>
            </div> 
            {/* <!-- end folio-item --> */}

        </div> 
        {/* <!-- end folio-list --> */}


        {/* <!-- Modal Templates Popup
        =========================================================== --> */}
        <div id="modal-01" hidden>
            <div class="modal-popup">
                <img src="images/portfolio/gallery/g-MuscleManSS.jpg" alt="" />
    
                <div class="modal-popup__desc">
                    <h5>Community Fitness</h5>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <ul class="modal-popup__cat">
                        <li>Group-Project-3</li>
                        <li>MERN</li>
                    </ul>
                </div>
    
                <a href="https://lit-headland-55854.herokuapp.com/login" class="modal-popup__details">Project link</a>
            </div>
        </div> 
        {/* <!-- end modal --> */}

        <div id="modal-02" hidden>
            <div class="modal-popup">
                <img src="images/portfolio/gallery/g-Dinner_Developers.jpg" alt="" />
    
                <div class="modal-popup__desc">
                    <h5>Dining with Developers</h5>
                    <p>Dinner planning app which allows a user to search for recipies and wine parings based upon a choice of cuisine, food type, dietary restrictions and wine pariing based upon either cuisine or food type.</p>
                    <ul class="modal-popup__cat">
                        <li>Group Project 1</li>
                        <li>Food</li>
                        <li>APIs</li>
                    </ul>
                </div>
    
                <a href="https://mkolek1015.github.io/Group-Project-1/" class="modal-popup__details">Project link</a>
            </div>
        </div> 
        {/* <!-- end modal --> */}

        <div id="modal-03" hidden>
            <div class="modal-popup">
                <img src="images/portfolio/gallery/g-PWGenerator.jpg" alt="" />
    
                <div class="modal-popup__desc">
                    <h5>Minimalismo</h5>
                    <p>Exercitationem reprehenderit quod explicabo consequatur aliquid ut magni ut. Deleniti quo corrupti illum velit eveniet ratione necessitatibus ipsam mollitia.</p>
                    <ul class="modal-popup__cat">
                        <li>Product Design</li>
                    </ul>
                </div>
    
                <a href="https://mkolek1015.github.io/A3_PW-Generator/" class="modal-popup__details">Project link</a>
            </div>
        </div> 
        {/* <!-- end modal --> */}

        <div id="modal-04" hidden>
            <div class="modal-popup">
                <img src="images/portfolio/gallery/g-WeatherDashboard.jpg" alt="" />
    
                <div class="modal-popup__desc">
                    <h5>Shutterbug</h5>
                    <p>Dolores velit qui quos nobis. Aliquam delectus voluptas quos possimus non voluptatem voluptas voluptas. Est doloribus eligendi porro doloribus voluptatum.</p>
                    <ul class="modal-popup__cat">
                        <li>E-Commerce</li>
                    </ul>
                </div>
    
                <a href="https://mkolek1015.github.io/A5_Weather-Dashboard/" class="modal-popup__details">Project link</a>
            </div>
        </div> 
        {/* <!-- end modal --> */}

        <div id="modal-05" hidden>
            <div class="modal-popup">

                <img src="images/portfolio/gallery/g-fuji.jpg" alt="" />
    
                <div class="modal-popup__desc">
                    <h5>Fuji</h5>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <ul class="modal-popup__cat">
                        <li>Product Design</li>
                    </ul>
                </div>
    
                <a href="https://www.behance.net/" class="modal-popup__details">Project link</a>
            </div>
        </div> 
        {/* <!-- end modal --> */}

        <div id="modal-06" hidden>
            <div class="modal-popup">
                <img src="images/portfolio/gallery/g-skaterboy.jpg" alt="" />
    
                <div class="modal-popup__desc">
                    <h5>Skaterboy</h5>
                    <p>Quisquam vel libero consequuntur autem voluptas. Qui aut vero. Omnis fugit mollitia cupiditate voluptas. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                    <ul class="modal-popup__cat">
                        <li>Branding</li>
                        <li>Product Design</li>
                    </ul>
                </div>
    
                <a href="https://www.behance.net/" class="modal-popup__details">Project link</a>
            </div>
        </div> 
        {/* <!-- end modal --> */}

        <div id="modal-07" hidden>
            <div class="modal-popup">
                <img src="images/portfolio/gallery/g-rucksack.jpg" alt="" />
    
                <div class="modal-popup__desc">
                    <h5>Rucksack</h5>
                    <p>Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem. Ratione officiis quae.</p>
                    <ul class="modal-popup__cat">
                        <li>Branding</li>
                        <li>Product Design</li>
                    </ul>
                </div>
    
                <a href="https://www.behance.net/" class="modal-popup__details">Project link</a>
            </div>
        </div> 
        {/* <!-- end modal --> */}

        <div id="modal-08" hidden>
            <div class="modal-popup">
                <img src="images/portfolio/gallery/g-sanddunes.jpg" alt="" />
    
                <div class="modal-popup__desc">
                    <h5>Sand Dunes</h5>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <ul class="modal-popup__cat">
                        <li>Web Design</li>
                    </ul>
                </div>
    
                <a href="https://www.behance.net/" class="modal-popup__details">Project link</a>
            </div>
        </div> 
        {/* <!-- end modal --> */}


    </section> 
    // {/* <!-- end s-portfolio --> */}
        );
  }
}