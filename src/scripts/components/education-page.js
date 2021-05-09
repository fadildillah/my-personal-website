import upnLogo from "../../assets/upnvj.png";

class EducationPage extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container-fluid py-3 px-3">
            <h2 class="display-4 ps-md-5 my-3">Education</h2>
            <div class="row py-3">
                <div class="col-3 px-3 text-center">
                    <img src="${upnLogo}" alt="Logo UPN" class="img-fluid" width="120" height="150">
                </div>

                <div class="col-9 px-3">
                    <h4 class="fw-bold">UPN Veteran Jakarta</h4>
                    <p class="lead">S1 Informatika - Fakultas Ilmu Komputer</p>
                    <p>2018 - Present</p>
                </div>
            </div>

            <div class="row py-3">
                <div class="col-3 px-3 text-center">
                    <img src="${upnLogo}" alt="Logo UPN" class="img-fluid" width="120" height="150">
                </div>

                <div class="col-9 px-3">
                    <h4 class="fw-bold">UPN Veteran Jakarta</h4>
                    <p class="lead">S1 Informatika - Fakultas Ilmu Komputer</p>
                    <p>2018 - Present</p>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("education-page", EducationPage);