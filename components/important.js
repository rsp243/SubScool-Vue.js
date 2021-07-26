app.component('important-display', {
    template: 
    /* html */
    `
    <div class="important">
        <h3>Скажи что для тебя сейчас самое важное?</h3>
        <div class="choice-important">
            <button class="1-important-btn important-btn ibg">
                <img src="src/img/hobby.jpg">
                <p>Саморазвитие и хобби</p>
            </button>
            <button class="2-important-btn important-btn ibg">
                <img src="src/img/preparing.jpg">
                <p>Подготовка к экзаменам</p>
            </button>
            <button class="3-important-btn important-btn ibg">
                <img src="src/img/correcting.jpg">
                <p>Исправление оценок</p>
            </button>
            <button class="4-important-btn important-btn ibg">
                <img src="src/img/winning.jpg">
                <p>Победа в олимпиадах</p>
            </button>
            <button class="5-important-btn important-btn ibg">
                <img src="src/img/project.jpg">
                <p>Создание своего проекта</p>
            </button>
            <button class="6-important-btn important-btn ibg">
                <img src="src/img/new.jpg">
                <p>Узнать что-то новое</p>
            </button>
        </div>
        <div class="important-footer">
            <button class="important-footer-btn go-further registration-end">
                Всё готово!
            </button>
        </div>
    </div>
    `,
    data() {}
})