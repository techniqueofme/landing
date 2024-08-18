<html>
<body>
<h1>Hello World</h1>
<p>I'm hosted with GitHub Pages.</p>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Date and Apple</title>
    <link rel="stylesheet" href="styles.css">
    <script>
        function displayDate() {
            const dateElement = document.getElementById('date');
            const today = new Date();
            dateElement.innerHTML = today.toDateString();
        }
    </script>
</head>
<body onload="displayDate()">
    <h1 id="date"></h1>
    <p>apple</p>
</body>
</html>


