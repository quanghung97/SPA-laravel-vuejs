<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=1, shrink-to-fit=no" name="viewport">
        <meta name="description" content="Start your development with a Design System for Bootstrap 4 and Vue.js.">
        <meta name="author" content="Creative Tim, Cristi Jora">
        <link rel="icon" href="<%= BASE_URL %>favicon.png">
        <title>Vue Argon Design System</title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="stylesheet" type="text/css" href="/css/app.css">
    </head>
    <body>
        <noscript>
          <strong>We're sorry but vue-argon-design-system doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
        </noscript>
        <div id="app">
            <app-component/>
        </div>
        <script src="/js/app.js"></script>

    </body>
</html>
