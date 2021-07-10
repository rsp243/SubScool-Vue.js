app.component('sign-up-display', {
    template: 
    /* html */
    `
    <div class="sign-up">
        <h3>Регистрация</h3>
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