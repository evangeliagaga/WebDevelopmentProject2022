const template_h = document.createElement('template');

template_h.innerHTML = `
<header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12">
          <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
              <div class="navbar-brand logo-img">
                <a href="search.html">
                  <img id="logo" src="assets/img/logo_light.png" alt="logo" />
                </a>
              </div>
              <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar-collapse">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>

            <div class="collapse navbar-collapse" id="navbar-collapse">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active navbar-buttons" href="search.html" role="button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plane-departure"
                      width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z"
                        transform="rotate(-15 12 12) translate(0 -1)"></path>
                      <line x1="3" y1="21" x2="21" y2="21"></line>
                    </svg>
                    <p>Tickets</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active navbar-buttons" href="#comms" role="button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-messages" width="50"
                      height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path>
                      <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path>
                    </svg>
                    <p>Communication</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active navbar-buttons" href="register.html" role="button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-plus" width="50"
                      height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                      <path d="M16 11h6m-3 -3v6"></path>
                    </svg>
                    <p>Register</p>
                  </a>
                </li>
                <li class="nav-item" id="connect">
                  <a class="nav-link active navbar-buttons" href="login.html" role="button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-login" width="50"
                      height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                      <path d="M20 12h-13l3 -3m0 6l-3 -3"></path>
                    </svg>
                    <p>Log in</p>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
`

document.body.appendChild(template_h.content)