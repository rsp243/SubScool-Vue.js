const app = Vue.createApp({
    data() {},
    methods: {},
    computed: {}
})

$(document).ready(function () {
    function ibg(){
        let ibg = document.querySelectorAll(".ibg");
        for (var i = 0; i < ibg.length; i++){
            $(ibg[i]).css('background-image', 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')');
        }
    }
        
    ibg();

    let maxwidth = $('html').css('width');

    maxwidth = Number(maxwidth.slice(0, maxwidth.indexOf('px')))

    $('.name-project').fadeIn(1000);

    function openPanel(name) {
        $('.' + name).fadeIn(1000);
    }

    let mobile_flag = false;
    

    if (maxwidth > 425){
        setTimeout(openPanel, 1000, 'register');
    } else if (maxwidth <= 425){
        setTimeout(openPanel, 1000, 'middle');
        mobile_flag = true
    }

    $('.direction-btn').on('click', function() {
        if ($(this).css('background-image') == 'linear-gradient(122.77deg, rgb(181, 119, 218) 4.73%, rgb(89, 38, 120) 95.59%)') {
            $(this).css('background-image', 'url(' + this.querySelector('img').getAttribute('src') + ')');
        } else {
            $(this).css('background-image', 'linear-gradient(122.77deg, #B577DA 4.73%, #592678 95.59%)');
        }
        $('.direction-footer').fadeIn(1000);
    })

    $('.important-btn').on('click', function() {
        if ($(this).css('background-image') == 'linear-gradient(122.77deg, rgb(181, 119, 218) 4.73%, rgb(89, 38, 120) 95.59%)') {
            $(this).css('background-image', 'url(' + this.querySelector('img').getAttribute('src') + ')');
        } else {
            $(this).css('background-image', 'linear-gradient(122.77deg, #B577DA 4.73%, #592678 95.59%)');
        }
        $('.important-footer').fadeIn(1000);
    })

    $('.direction-footer-btn').on('click', function() {
        $('.nearer').fadeOut(1000);
        setTimeout(openPanel, 1000, 'important');
    })

    $('.class-btn-footer').on('click', function() {
        $('.class').fadeOut(500);  
        $('.class-footer').fadeOut(500);
        setTimeout(openPanel, 500, 'nearer');
    })

    $('.class-btn').on('click', function() {
        $('.go-further').fadeIn(1000);
    })

    $('.ok-btn').on('click', function() {
        $('.youre-special').fadeOut(1000);
        setTimeout(openPanel, 1000, 'class');
    })

    $('.lets-go').on('click', function() {
        $('.successful-registration').fadeOut(1000);
        setTimeout(openPanel, 1000, 'youre-special');
    })

    $('#phone-code-check').on('blur', function() {
        let phoneCheck = document.getElementById('phone-code-check').value
        if (phoneCheck == '1111') {
            $('.confirmation-phone').fadeOut(1000);
            setTimeout(openPanel, 1000, 'successful-registration');
        }
    })

    $('.back-btn').on('click', function() {
        $('.sign-up').fadeOut(1000);
        setTimeout(openPanel, 1000, 'sign-in');
        setTimeout(openPanel, 1000, 'social');
        setTimeout(openPanel, 1000, 'registration-btn-mobile');
    })

    $('.rules-btn').on('click', function() {
        $('.name-project').fadeOut(1000);
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
        if (mobile_flag) {  
            $('.sign-up').fadeOut(1000);
            setTimeout(openPanel, 1000, 'rules')
        }
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