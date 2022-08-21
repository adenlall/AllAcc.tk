<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="194x194" href="/favicon-194x194.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="apple-mobile-web-app-title" content="AllAcc">
    <meta name="application-name" content="AllAcc">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-TileImage" content="/mstile-144x144.png">
    <meta name="theme-color" content="#0b320b">
    <title>{{$user->username}} - AllAcc</title>
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    {{-- <link href="{{ asset('/css/button.css') }}" rel="stylesheet" /> --}}
    {{-- <link rel="stylesheet" type="text/css" href="{{ asset('resources/css/fonts.css') }}" > --}}
    <style>



@font-face {
    font-family: "BeatWord";
    src: url(/fonts/BeatWord.ttf);
}

@font-face {
    font-family: "BillyHatter";
    src: url(/fonts/BillyHatter.otf);
}

@font-face {
    font-family: "Calygraphy";
    src: url(/fonts/Calygraphy.ttf);
}

@font-face {
    font-family: "Gracheva";
    src: url(/fonts/Gracheva.otf);
}

@font-face {
    font-family: "OldGorgeous";
    src: url(/fonts/OldGorgeous.otf);
}

@font-face {
    font-family: "OldMe";
    src: url(/fonts/OldMe.otf);
}

@font-face {
    font-family: "Profont";
    src: url(/fonts/Profont.ttf);
}



*::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }

        *::-webkit-scrollbar-track {
            border-radius: 10px;
            background: rgba(0, 0, 0, 0.1);
        }

        *::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background: rgba(0, 0, 0, 0.2);
        }

        *::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 0, 0, 0.4);
        }

        *::-webkit-scrollbar-thumb:active {
            background: rgba(0, 0, 0, 0.9);
        }


        .slide-in-blurred-top {
            -webkit-animation: slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
            animation: slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
        }

        @-webkit-keyframes slide-in-blurred-top {
            0% {
                -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
                transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
                -webkit-transform-origin: 50% 0%;
                transform-origin: 50% 0%;
                -webkit-filter: blur(40px);
                filter: blur(40px);
                opacity: 0;
            }

            100% {
                -webkit-transform: translateY(0) scaleY(1) scaleX(1);
                transform: translateY(0) scaleY(1) scaleX(1);
                -webkit-transform-origin: 50% 50%;
                transform-origin: 50% 50%;
                -webkit-filter: blur(0);
                filter: blur(0);
                opacity: 1;
            }
        }

        @keyframes slide-in-blurred-top {
            0% {
                -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
                transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
                -webkit-transform-origin: 50% 0%;
                transform-origin: 50% 0%;
                -webkit-filter: blur(40px);
                filter: blur(40px);
                opacity: 0;
            }

            100% {
                -webkit-transform: translateY(0) scaleY(1) scaleX(1);
                transform: translateY(0) scaleY(1) scaleX(1);
                -webkit-transform-origin: 50% 50%;
                transform-origin: 50% 50%;
                -webkit-filter: blur(0);
                filter: blur(0);
                opacity: 1;
            }
        }

        .fade-in {
            -webkit-animation: fade-in 1.2s cubic-bezier(.39, .575, .565, 1.000) both;
            animation: fade-in 1.2s cubic-bezier(.39, .575, .565, 1.000) both
        }

        @-webkit-keyframes fade-in {
            0% {
                opacity: 0
            }

            100% {
                opacity: 1
            }
        }

        @keyframes fade-in {
            0% {
                opacity: 0
            }

            100% {
                opacity: 1
            }
        }
    </style>
    @stack('js0')
</head>

<body>

    @php
    $user_js = json_decode($user->json_config, true);
    @endphp

    <div class="drawer"> {{-- drawer-end --}}
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">

        @include('free.master')
            @include('free.nav')

        </div>
        <div class="drawer-side">
            <label for="my-drawer" class="drawer-overlay"></label>
            @include('content.services')
        </div>
    </div>


    @stack('js1')
</body>

</html>
