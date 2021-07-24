app.component('nearer-display', {
    template: 
    /* html */
    `
    <div class="nearer">
        <h3>Отметь, что тебе ближе</h3>
        <div class="choice-direction-nearer">
            <button class="1-direction-btn direction-btn ibg">
                <img src="src/img/science-and-technology.jpg">
                <p>Наука и технологии</p>
            </button>
            <button class="2-direction-btn direction-btn ibg">
                <img src="src/img/programming.jpg">
                <p>Программирование</p>
            </button>
            <button class="3-direction-btn direction-btn ibg">
                <img src="src/img/biology-and-chemistry.jpg">
                <p>Биология и химия</p>
            </button>
            <button class="4-direction-btn direction-btn ibg">
                <img src="src/img/creativity-and-art.jpg">
                <p>Творчество и искусство</p>
            </button>
            <button class="5-direction-btn direction-btn ibg">
                <img src="src/img/languages.jpg">
                <p>Языки и культура</p>
            </button>
            <button class="6-direction-btn direction-btn ibg">
                <img src="src/img/society-and-history.jpg">
                <p>Общество и история</p>
            </button>
            <button class="7-direction-btn direction-btn ibg">
                <img src="src/img/business-and-projects.jpg">
                <p>Бизнес и проекты</p>
            </button>
            <button class="8-direction-btn direction-btn ibg">
                <img src="src/img/writing.jpg">
                <p>Писательство и блоггинг</p>
            </button>
        </div>
        <div class="direction-footer">
            <button class="direction-footer-btn go-further">
                Дальше
            </button>
        </div>
    </div>
    `,
    data() {}
})