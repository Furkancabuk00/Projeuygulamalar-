function translate() {
    var inputText = document.getElementById('input-text').value;
    var outputText = turkishToEnglish(inputText);
    document.getElementById('output-text').innerText = outputText;
}

function turkishToEnglish(text) {
    // Basit bir çeviri işlemi için kendi mantığımızı kullanıyoruz.
    // Bu örnekte, sadece bazı Türkçe karakterlerin yerine geçen İngilizce karakterler ekliyoruz.
    text = text.replace(/ı/g, 'i');
    text = text.replace(/ğ/g, 'g');
    text = text.replace(/ü/g, 'u');
    text = text.replace(/ş/g, 's');
    text = text.replace(/ç/g, 'c');
    text = text.replace(/ö/g, 'o');
    text = text.replace(/İ/g, 'I');
    text = text.replace(/Ğ/g, 'G');
    text = text.replace(/Ü/g, 'U');
    text = text.replace(/Ş/g, 'S');
    text = text.replace(/Ç/g, 'C');
    text = text.replace(/Ö/g, 'O');
    return text;
}
