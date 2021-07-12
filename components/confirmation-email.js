app.component('confirmation-email-display', {
    template: 
    /* html */
    `
    <div class="confirmation-email">
        <h3>Подтверждение почты</h3>
        <div class="code">
            <div class="insert-code">
                <input placeholder="Введите код">
                <button disabled>
                    <p>Отправить повторно</p>
                    <p class="time"></p>
                </button>
            </div>
            <div class="info-block">
                <p>Чтобы продолжить, вам необходимо подтвердить свою эл.почту. Для этого введите код, который мы отправили на <span>kokochiha30@gmail.com</span></p>
                <button class="change-email">
                    Изменить адрес
                </button>
            </div>
        </div>
        
        <div class="btn-shell">
            <button class="confirmation-email-btn">
                Продолжить
                <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 14L2.26338e-06 27.8564L1.93291e-06 0.143594L24 14Z" fill="url(#paint4_linear)"/>
                    <defs>
                    <linearGradient id="paint4_linear" x1="30.3333" y1="37" x2="-10.3333" y2="-10.6667" gradientUnits="userSpaceOnUse">
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