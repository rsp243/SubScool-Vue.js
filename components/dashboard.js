app.component('dashboard-display', {
    template: 
    /* html */
    `
    <div class="courses">
    <div class="availible-courses">Доступные курсы</div>
    <div class="slider">
        <div class="slider__body" onmouseenter="mouseenterlog()" onmouseleave="mouseleavelog()">
            <div class="slider-item"><h3>1</h3></div>
            <div class="slider-item"><h3>2</h3></div>
            <div class="slider-item"><h3>3</h3></div>
            <div class="slider-item"><h3>4</h3></div>
            <div class="slider-item"><h3>5</h3></div>
            <div class="slider-item"><h3>6</h3></div>
            <div class="slider-item"><h3>7</h3></div>
            <div class="slider-item"><h3>8</h3></div>
            <div class="slider-item"><h3>9</h3></div>
            <div class="slider-item"><h3>10</h3></div>
            <div class="slider-item"><h3>11</h3></div>
            <div class="slider-item"><h3>12</h3></div>
            <div class="slider-item"><h3>13</h3></div>
            <div class="slider-item"><h3>14</h3></div>
            <div class="slider-item"><h3>15</h3></div>
            <div class="slider-item"><h3>16</h3></div>
            <div class="slider-item"><h3>17</h3></div>
            <div class="slider-item"><h3>18</h3></div>

        </div>
    </div>
    <div class="info-block">
        <div class="today-schedule">
            <p class="today-name">Сегодня</p>
            <div class="menu">
                <div class="menu-block" 
                v-for="(today, index) in today"
                :key="today.id">
                    <p>{{ today.lesson }}: {{ today.type }}. Тема: {{ today.theme }}</p>
                    <div class="start-panel">
                        <div class="time"><strong>До {{ today.time }}</strong></div>
                        <button class="play-video"><p>></p></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="calendar">
            <p class="calendar-name">Календарь</p>
            <div class="menu">
                <div class="menu-block" 
                v-for="(calendar, index) in calendar"
                :key="calendar.id">
                    <p>{{ calendar.lesson }}: {{ calendar.type }}. Тема: {{ calendar.theme }}</p>
                    <div class="start-panel">
                        <div class="time"><strong>До {{ calendar.time }}</strong></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
      </div>`,
    data() {
        return{
            calendar: [
                { id: 1, lesson: 'Геометрия', type: 'Видеоурок', time: '21.00, 13.07.2021', theme: "Скрешивающиеся прямые"},
                { id: 2, lesson: 'Физика', type: 'Презентация', time: '20.00, 14.07.2021', theme: "Второй закон Ньютона"},
                { id: 3, lesson: 'География', type: 'Видеоурок', time: '15.00, 15.07.2021', theme: "Русская равнина. Исследование местности"}
            ],
            today: [
                { id: 1, lesson: 'Геометрия', type: 'Видеоурок', time: '21.00, 13.07.2021', theme: "Скрешивающиеся прямые"},
                { id: 2, lesson: 'Физика', type: 'Презентация', time: '20.00, 14.07.2021', theme: "Второй закон Ньютона"},
                { id: 3, lesson: 'География', type: 'Видеоурок', time: '15.00, 15.07.2021', theme: "Русская равнина. Исследование местности"}
            ],
        }
    },
    computed: {
        /*lesson_name() {
            this.selectedVariant += 1
            return this.calendar[this.selectedVariant].lesson + ': ' + this.calendar[this.selectedVariant].theme  
        },*/
    }
})