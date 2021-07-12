const app = Vue.createApp({
    data() {},
    methods: {},
    computed: {}
})
$(document).ready(function () {
    let maxwidth = $('html').css('width');

    maxwidth = Number(maxwidth.slice(0, maxwidth.indexOf('px')))

    $('.name-project').fadeIn(1000);

    function openPanel(name) {
        $('.' + name).fadeIn(1000);
    }
    
    if (maxwidth > 425){
        setTimeout(openPanel, 1000, 'register');
    } else if (maxwidth <= 425){
        setTimeout(openPanel, 1000, 'middle');
    }

    $('.back-btn').on('click', function() {
        $('.sign-up').fadeOut(1000);
        setTimeout(openPanel, 1000, 'sign-in');
        setTimeout(openPanel, 1000, 'social');
        setTimeout(openPanel, 1000, 'registration-btn-mobile');
    })

    $('.rules-btn').on('click', function() {
        $('.rules').fadeOut(1000);
        setTimeout(openPanel, 1000, 'confirmation-email');
    })

    $('.confirmation-email-btn').on('click', function() {
        $('.confirmation-email').fadeOut(1000);
        setTimeout(openPanel, 1000, 'confirmation-phone');
    })

    $('.circle').on('click', function() {
        $('.middle').fadeOut(1000);
        setTimeout(openPanel, 1000, 'register');
    })

    $('.registration-btn').on('click', function() {
        $('.sign-in').fadeOut(1000);
        $('.social').fadeOut(1000);
        $('.registration-btn-mobile').fadeOut(1000);
        setTimeout(openPanel, 1000, 'sign-up');
    })

    $('.sign-in-btn').on('click', function() {
        let loginValue = document.getElementById('login').value;
        let passwordValue = document.getElementById('password').value;
        if (loginValue === "" || passwordValue === "") {
            $('.sign-in .error-message').css('display', '');
        } else if (loginValue === "admin" && passwordValue === "admin"){
            window.location.href = "main.html";
        }
    })  

    $('.sign-up-btn').on('click', function() {  
        $('.sign-up').fadeOut(1000);
        setTimeout(openPanel, 1000, 'rules')
        /*let nameValue = document.getElementById('name').value;
        let surnameValue = document.getElementById('surname').value;
        let emailValue = document.getElementById('email').value;
        let telValue = document.getElementById('tel').value;
        if (nameValue === "" || surnameValue === "" || emailValue === "" || telValue === "") {
            $('.sign-up .error-message').css('display', '');
        } else {
            $('.sign-up .error-message').css('display', 'none');
            window.location.href = "";
        }*/
    })
})