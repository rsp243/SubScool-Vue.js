app.component('rules-display', {
    template: 
    /* html */
    `
    <div class="rules">
        <h3>Правила сервиса</h3>
        <p>Вам необходимо ознакомиться с правилами сервиса и лицензионным соглашением.</p>
        <div class="documents">
            <div class="rules-of-service">
                <button></button>
                <p>Правила сервиса</p>
            </div>
            <div class="license">
                <button></button>    
                <p>Лицензионное соглашение</p>
            </div>
        </div>
        <div class="agree">
            <input type="checkbox" id="agree">
            <label>Я согласен с вышеупомянутыми документами</label>
        </div>
        <div class="btn-shell">
            <button class="rules-btn">
                Продолжить
                <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 14L2.26338e-06 27.8564L1.93291e-06 0.143594L24 14Z" fill="url(#paint3_linear)"/>
                    <defs>
                    <linearGradient id="paint3_linear" x1="30.3333" y1="37" x2="-10.3333" y2="-10.6667" gradientUnits="userSpaceOnUse">
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