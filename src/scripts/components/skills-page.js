import reactLogo from "../../assets/react.png";

class SkillsPage extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container py-sm-5">
            <h2 class="display-4 text-center">Skills & Tools</h2>
            <div class="skills__list py-sm-4">
                <div class="card shadow-lg rounded skills__item" style="width: 150px;">
                    <img class="card-img-top" src="${reactLogo}" alt="React">
                    <div class="card-body">
                        <p class="card-text lead text-center">React</p>
                    </div>
                </div>
            
                <div class="card shadow-lg rounded skills__item" style="width: 150px;">
                    <img class="card-img-top" src="${reactLogo}" alt="React">
                    <div class="card-body">
                        <p class="card-text lead text-center">React</p>
                    </div>
                </div>
            
                <div class="card shadow-lg rounded skills__item" style="width: 150px;">
                    <img class="card-img-top" src="${reactLogo}" alt="React">
                    <div class="card-body">
                        <p class="card-text lead text-center">React</p>
                    </div>
                </div>
                
                <div class="card shadow-lg rounded skills__item" style="width: 150px;">
                    <img class="card-img-top" src="${reactLogo}" alt="React">
                    <div class="card-body">
                        <p class="card-text lead text-center">React</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("skills-page", SkillsPage);