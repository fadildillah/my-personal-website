import imgProject from "../../assets/project.jpg";

class ProjectPage extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container-fluid py-5 px-md-5">
            <h2 class="display-4 text-end">Projects</h2>
            <div class="row justify-content-md-center my-sm-3">
                <div class="col col-sm-6 col-12">
                    <div class="card mb-3">
                        <img class="card-img-top" src="${imgProject}" alt="Foto Project">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Nama Project</h5>
                            <p class="card-text">Sedikit deskripsi tentang project kalian</p>
                            <a href="https://google.com" class="card-text" target="_blank">
                                <i class="bi bi-link-45deg" style="font-size: 1rem; color:black;">
                                    Visit Projects
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col col-sm-6 col-12">
                    <div class="card mb-3">
                        <img class="card-img-top" src="${imgProject}" alt="Foto Project">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Nama Project</h5>
                            <p class="card-text">Sedikit deskripsi tentang project kalian</p>
                            <a href="https://google.com" class="card-text" target="_blank">
                                <i class="bi bi-link-45deg" style="font-size: 1rem; color:black;">
                                    Visit Projects
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("project-page", ProjectPage);