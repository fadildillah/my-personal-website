class ContactPage extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container-fluid py-3 px-md-5 bg-light">
            <h2 class="display-5">Contact</h2>
            <div class="py-sm-2">
                <p class="lead">Get in touch with me. <span><a href="mailto:fadillahm704@gmail.com" target="_blank">Send Email</a></span></p>
                <div class="d-flex">
                    <a href="https://github.com/fadildillah" target="_blank">
                        <i class="bi bi-github" style="font-size: 2rem; color:black"></i>
                    </a>
                    <a href="https://linkedin.com/in/muhammad-fadillah-491668192/" target="_blank">
                        <i class="bi bi-linkedin" style="font-size: 2rem; color:black"></i>
                    </a>
                    <a href="https://wa.me/6281908919537" target="_blank">
                        <i class="bi bi-whatsapp" style="font-size: 2rem; color:black"></i>
                    </a>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("contact-page", ContactPage);
