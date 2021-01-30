<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laravel Mix</title>
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
    <noscript>
        <strong>We're sorry but this page doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app">
        <example-component></example-component>
    </div>
    <script src="/js/app.js"></script>
</body>
</html>
