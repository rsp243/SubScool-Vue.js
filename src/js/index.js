const app = Vue.createApp({
    data() {},
    methods: {},
    computed: {}
})
$(document).ready(function () {
    let maxwidth = $('html').css('width');

    maxwidth = Number(maxwidth.slice(0, maxwidth.indexOf('px')))

    $('.name-project').fadeIn(1000);

    function openReqistrationPanel() {
        $('.register').fadeIn(1000);
    }

    function openCircleButton() {
        $('.middle').fadeIn(1000);
    }

    function openSignUpPanel() {
        $('.sign-up').fadeIn(1000);
    }
    
    function openSocialPanel() {
        $('.social').fadeIn(1000);
    }   

    function openSignInPanel() {
        $('.sign-in').fadeIn(1000);
    }   

    function openRegistrationMobilePanel() {
        $('.registration-btn-mobile').fadeIn(1000);
    }
    
    if (maxwidth > 425){
        setTimeout(openReqistrationPanel, 1000);
    } else if (maxwidth <= 425){
        setTimeout(openCircleButton, 1000);
    }

    $('.back-btn').on('click', function() {
        $('.sign-up').fadeOut(1000);
        setTimeout(openSignInPanel, 1000);
        setTimeout(openSocialPanel, 1000);

        setTimeout(openRegistrationMobilePanel, 1000);

    })

    $('.circle').on('click', function() {
        $('.middle').fadeOut(1000);
        setTimeout(openReqistrationPanel, 1000);
    })
    $('.registration-btn').on('click', function() {
        $('.sign-in').fadeOut(1000);
        $('.social').fadeOut(1000);
        $('.registration-btn-mobile').fadeOut(1000);
        setTimeout(openSignUpPanel, 1000);
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
        let nameValue = document.getElementById('name').value;
        let surnameValue = document.getElementById('surname').value;
        let emailValue = document.getElementById('email').value;
        let telValue = document.getElementById('tel').value;
        if (nameValue === "" || surnameValue === "" || emailValue === "" || telValue === "") {
            $('.sign-up .error-message').css('display', '');
        } else {
            $('.sign-up .error-message').css('display', 'none');
            window.location.href = "";
        }
    })
})