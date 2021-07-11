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
            </button>
        </div>
    </div>
    `,
    data() {}
})