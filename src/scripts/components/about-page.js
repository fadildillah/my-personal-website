import aboutPhoto from "../../assets/about.jpg";

class AboutPage extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container-fluid about__me py-4 px-3">
            <div class="row justify-content-md-center">
                <div class="col col-sm-6 col-12">
                    <div class="d-flex flex-column mx-md-2">
                        <h2 class="display-4 text-center">About Me</h2>
                        <p class="lead my-md-3 mx-md-3">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus soluta ex perspiciatis, est, molestias velit ratione reiciendis ullam iste alias earum impedit autem libero nihil. Excepturi quisquam placeat quaerat nihil.
                            Adipisci pariatur quisquam corporis perspiciatis facere laboriosam ullam, dicta nobis dolores facilis qui neque veritatis quo sint sit accusamus consequatur tempora maxime? Iure ab maiores illum totam pariatur. Ipsum, quis.
                        </p>
                    </div>
                </div>
                <div class="col col-md-5 about__photo align-self-md-center">
                    <img src="${aboutPhoto}" alt="Foto about" class="img-fluid rounded">
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("about-page", AboutPage);