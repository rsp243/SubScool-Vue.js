app.component('sign-in-display', {
    template: 
    /* html */
    `
    <div class="sign-in">
        <h3>Вход</h3>
        <div class="sign-in-body">
            <input type="text" placeholder="Логин" id="login">
            <input type="password" placeholder="Пароль" id="password">
        </div>
        <a href="">Забыли пароль?</a>
        <button class="sign-in-btn">Войти<span>>></span></button>
        <div class="error-message" style="display: none;">
            <p>Неверный логин или пароль</p>
        </div>
    </div>
    `,
    data() {}
})