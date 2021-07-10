app.component('profile-display', {
    template: 
    /* html */
    `
    <div class="prof-nav">
    <div class="profile">
        <div class="header">
            <div class="text">
                <p>Добрый день,</p>
                <div class="user-name">
                    <p id="login-profile">{{ first_name }}<br>{{ last_name }}</p>
                </div>
            </div>
            <div class="block-profileImage-exit">
                <div class="profile-photo"></div>
                <button class="exitFromProfile" onclick="document.location.href = '/logout'"><p>Выйти</p></button>
            </div>
        </div>
        <div class="body">
            <div class="profile-info">
                <div class="friends-teaсhers-block">
                    <div class="friends"><p><span>27</span> друзей</p></div>
                    <div class="teachers"><p><span>10</span> учителей</p></div>
                </div>
                <div class="activity-progress">
                    <div class="last-activity">
                        <h4>Последняя активность</h4>
                        <div class="lessons-blocks">
                            <div class="lesson-block">
                                    <p class="theme">"Законы Ньютона"</p>
                                    <p class="name-of-class">Физика</p>
                            </div>
                            <div class="lesson-block">
                                <p class="theme">"Начало стереометрии"</p>
                                <p class="name-of-class">Геометрия</p>
                            </div>
                            <button class="all-activities-btn"><p>Вся активность...</p></button>
                        </div>
                    </div>
                    <div class="progress">
                        <h4>Успеваемость</h4>
                        <div class="grey-block">
                            <div class="green-circle">
                                <div class="mark">4.28</div>
                            </div>
                            <p>Общий средний балл</p>
                            <button class="all-marks-btn"><p>Все оценки...</p></button>
                        </div>
                    </div>
                </div>
                <button class="edit-profile"><p>Редактировать профиль</p></button>
            </div>
        </div>
    </div>
    <div class="navbar">
        <a class="home-btn" href="/"><img src="src/SVG/home.svg" alt=""><p>Курсы</p></a>
        <a class="video-btn" href="/video"><img src="src/SVG/video.svg" alt=""><p>Видео</p></a>
        <a class="chat-btn" href="/chat"><img src="src/SVG/msg.svg" alt=""><p>Чаты</p></a>
        <a class="homework-btn" href="/homework"><img src="src/SVG/homework.svg" alt=""><p>Д.З.</p></a>
    </div>
</div>`,
    data() {
        return{
            first_name: 'Иван',
            last_name: 'Иванов',
        }
    }
})