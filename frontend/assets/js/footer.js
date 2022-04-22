const template_f = document.createElement('template');

template_f.innerHTML = `
<footer class="page-footer font-small">
    <div class="container">
        <div class="row">
            <div class="col" id="logo-img">
                <img id="logo" src="assets/img/logo_light.png" alt="logo" />
            </div>

            <div class="col">
                <h1 id="com-title">Communication</h1>

                <div id="comms">
                    <a href="https://www.facebook.com/AirSky-103186629013207/" class="social_media">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook"
                            width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3">
                            </path>
                        </svg>
                    </a>

                    <a href="https://www.instagram.com/airskytickets/" class="social_media">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram"
                            width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                            <circle cx="12" cy="12" r="3"></circle>
                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
                        </svg>
                    </a>

                    <a href="mailto:airskytickets@gmail.com" class="social_media">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="50"
                            height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                            <polyline points="3 7 12 13 21 7"></polyline>
                        </svg>
                    </a>
                </div>

                <div>
                    <p id="tel">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone"
                            width="35" height="35" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                            </path>
                        </svg>
                        2610 000000
                    </p>
                    <a href="https://goo.gl/maps/sxCxQePLF4aRv78F6" id="loc">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin"
                            width="35" height="35" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="12" cy="11" r="3"></circle>
                            <path
                                d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                            </path>
                        </svg>
                        University of Patras, <br>Zip code: 26504, Rio, Axaia, Greece
                    </a>
                </div>

            </div>

            <div class="col" id="info">
                <h1 id="info-title">Information</h1>
                <a href="terms_of_use.html" target="_blanc">Terms of Use</a>
                <a href="private_data_policy.html" target="_blanc">Private Data Policy</a>
                <a href="payment_methods.html" target="_blanc">Payment Methods</a>
                <a href="about_us.html">About us</a>
            </div>
        </div>
    </div>

    <div class="footer-copyright text-center py-2">© 2022 Copyright:
        <a id="company_name" href="search.html"> AirSky.com</a>
    </div>
</footer>
`

document.body.appendChild(template_f.content)