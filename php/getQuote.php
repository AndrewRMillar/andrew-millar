<?php 

function randQuote() {
    // Get all the quotes and return a random one 

    $url = 'http://andrew-millar.nl/quotes.json';
    $content = file_get_contents($url);
    $results = json_decode($content);
    $rand = random_int(0, count($results));

    return $results->quotes[$rand];
}

randQuote();
