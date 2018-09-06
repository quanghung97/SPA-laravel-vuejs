<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <title>Shopping Cart</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" type="text/css" href="/css/app.css">
    </head>
    <body>
        <div id="app">
            <app-component/>
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
