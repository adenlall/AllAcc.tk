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
    <meta name="application-name" content="AllAcc">editor.experimental.stickyScroll
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-TileImage" content="/mstile-144x144.png">
    <meta name="theme-color" content="#0b320b">
    <title>Adenlalll - AllAcc</title>
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    {{-- <script src="{{ mix('/js/app.js') }}" defer></script> --}}
    @stack('js0')
  </head>
  <body>


    @include('free.nav')
    @include('free.master')

    @stack('js1')
  </body>
</html>
