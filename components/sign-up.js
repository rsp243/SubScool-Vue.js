app.component('sign-up-display', {
    template: 
    /* html */
    `
    <div class="sign-up">
        <div class="headle">
            <button class="back-btn">
                <img src="src/img/back-btn.png">
            </button>
            <h3>Регистрация</h3>
        </div>
        <div class="error-message" style="display: none">
            <p>Пользователь с таким номероом телефона уже зарегистрирован. Проверьте номер или войдите с помощью соседнего меню</p>
        </div>
        <div class="sign-up-body">
            <input type="text" placeholder="Имя" id="name">
            <input type="text" placeholder="Фамилия" id="surname">   
            <input type="email" placeholder="Эл. почта" id="email">
            <p>или</p>
            <input type="tel" placeholder="Телефон" id="tel">
            <input type="password" placeholder="Пароль" id="password">
            <input type="password" placeholder="Потворите пароль" id="repeatPassword">

        </div>
        <div class="btn-shell">
            <button class="sign-up-btn">
                Продолжить
                <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 14L2.26338e-06 27.8564L1.93291e-06 0.143594L24 14Z" fill="url(#paint2_linear)"/>
                    <defs>
                    <linearGradient id="paint2_linear" x1="30.3333" y1="37" x2="-10.3333" y2="-10.6667" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4D186F"/>
                        <stop offset="1" stop-color="#B073D5"/>
                    </linearGradient>
                    </defs>
                </svg>
            </button>
        </div>
    </div>
    `,
    data() {}
})