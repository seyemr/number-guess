// arayüz Elemanları
const game = document.querySelector('#game');
guessBtn = document.querySelector('#guess-btn');
guessInput = document.querySelector('#guess-input');
minNum = document.querySelector('.min-num');
maxNum = document.querySelector('.max-num');
message = document.querySelector('.message');

// Oyunda Kullanıcak değerler
let min = 1;
max = 10;
winningNumber = getRandomNum(min, max),
    guessesLeft = 3;

// min ve max değerlerini arayüze gönderme
minNum.textContent = min;
maxNum.textContent = max;

// Yapılan Tahmini İzle
guessBtn.addEventListener('click', () => {
    // input içerisindeki veriyi al ve sayıya çevir
    let guess = parseInt(guessInput.value);

    // oyunu kazandı mı kontrol et
    if (guess === winningNumber) {
        // oyunu Kazandı
        gameOver(true, `KAZANDIN! Doğru Tahmin: ${winningNumber}`);
    } else {
        // yanlış sayı  tahmini
        guessesLeft--;

        if (guessesLeft === 0) {
            // Oyunu Kaybetti
            gameOver(false, `KAYBETTIN! Doğru Cevap: ${winningNumber}`);
        } else {
            // Kalan hak 0 dan fazla ise
            // Çerçeveyi kırmızı yap
            guessInput.style.borderColor = 'red';

            // inputu temizle
            guessInput.value = '';

            // Kullanıcıya kaç hakkının kaldığını söyle
            setMessage(`${guess} doğru değil, ${guessesLeft} hakkınız kaldı`, 'red');
        }
    }
});

// Oyunu bitirme
function gameOver(won, msg) {
    let color = won ? 'green' : 'yellow';
    console.log(color);

    //inputu iptal et
    guessInput.disabled = true;

    // inputun çevresini değiştir
    guessInput.borderColor = color;

    // kullanıcıyı bilgilendir
    setMessage(msg);
}

// Kullanıcıya mesaj verme
function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}

// rastgele Sayı bulma methodu
function getRandomNum(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(random);
    return random;
}