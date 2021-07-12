app.component('confirmation-phone-display', {
    template: 
    /* html */
    `
    <div class="confirmation-phone">
        <h3>Подтверждение номера телефона</h3>
        <div class="code">
            <div class="insert-code">
                <input placeholder="Введите код">
            </div>
            <div class="info-block">
                <p>Чтобы продолжить, вам необходимо подтвердить свою номер. Для этого введите код, который мы отправили в SMS на <span>+7(900)934-00-26</span></p>
                <button class="change-number">
                    Изменить номер
                </button>
                <button class="resend-phone-code" disabled>
                    <p>Отправить повторно</p>
                    <p class="time"></p>
                </button>
            </div>
        </div>
    </div>
    `,
    data() {}
})