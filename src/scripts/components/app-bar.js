class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav class="navbar sticky-top navbar-light bg-white px-lg-5">
                <div class="container-fluid">
                    <a class="navbar-brand brand__name" href="#">
                        <span class="fw-bold">Muhammad Fadillah</span>
                    </a>

                    <ul class="navbar-nav d-flex flex-row app__bar">
                        <li class="nav-item mx-2">
                            <a class="nav-link" href="#about">About</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav d-flex flex-row app__bar">
                        <li class="nav-item mx-2">
                            <a class="nav-link" href="#education">Education</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav d-flex flex-row app__bar">
                        <li class="nav-item mx-2">
                            <a class="nav-link" href="#project">Project</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav d-flex flex-row app__bar">
                        <li class="nav-item mx-2">
                            <a class="nav-link" href="#skills">Skills</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav d-flex flex-row app__bar">
                        <li class="nav-item mx-2">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        `;
    }
}

customElements.define("app-bar", AppBar);