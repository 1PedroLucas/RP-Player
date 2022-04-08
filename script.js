let Musicas = [
    { titulo: 'Mapa do tesouro!', artista: 'Anderson Feire', src: "musicas/Mapa do Tesouro.mp3", img: 'imagens/Mapa do Tesouro.jpeg' },
    { titulo: 'A igreja vem!', artista: 'Anderson Feire', src: "musicas/01. A igreja vem.mp3", img: 'imagens/a igreja vem.jpg' },
    { titulo: 'Identidade', artista: 'Anderson Freire', src: "musicas/01. Identidade - Playback.mp3", img: 'imagens/identidade.png' },
    { titulo: 'Canção do céu', artista: 'Anderson Freire', src: "musicas/02 Canção do Céu.mp3", img: 'imagens/canção do céu.jpeg' },
    { titulo: 'Raridade', artista: 'Anderson Freire', src: "musicas/09 Raridade (107).mp3", img: 'imagens/raridade.jpeg' },
    { titulo: 'Advogado Fiel', artista: 'Bruna Carla', src: "musicas/ADVOGADO FIEL.mp3", img: 'imagens/advogado.jpeg' },
    { titulo: 'Deus Proverá', artista: 'Gabriela', src: "musicas/Deus Proverá.mp3", img: 'imagens/Deus provera.png' },
    { titulo: 'Eu sei que vem', artista: 'Isadora Pompeu', src: "musicas/Isadora Pompeo  Eu Sei Que Vem (Ao Vivo).mp3", img: 'imagens/eu sei que vem.png' },
    { titulo: 'Fake Love', artista: 'BTS', src: "musicas/FAKE LOVE - BTS.mp3", img: 'imagens/fake.png' },
    { titulo: 'Anpanman', artista: 'BTS', src: "musicas/Anpanman.mp3", img: 'imagens/anpanman.png' },
    { titulo: 'Dynamite', artista: 'BTS', src: "musicas/Dynamite.mp3", img: 'imagens/Dynamite.png' },
    { titulo: 'I dont wanna talk about it', artista: 'Rod Stewart', src: "musicas/I Dont Wanna Talk About It.mp3", img: 'imagens/I dont wanna.png' },
    { titulo: 'Always', artista: 'Bon Jovi', src: "musicas/Always (Bonjovi).mp3", img: 'imagens/always.jpeg' },
    { titulo: 'Stand By Me', artista: 'Seal', src: "musicas/Seal - Stand By Me(MP3_70K).mp3", img: 'imagens/stand by me.PNG' },
    { titulo: 'City Of Stars', artista: 'La La Land', src: "musicas/La La Land (2016 Movie) Official Clip  City Of Stars.mp3", img: 'imagens/City Of Stars.jpeg' },
    { titulo: 'lucky', artista: 'Jason Marz', src: "musicas/Jason Marz (featuring Colbie Caillat)   Lucky MV.mp3", img: 'imagens/lucky.jpeg' },
    { titulo: 'Imaturo', artista: 'Jão', src: "musicas/04 Imaturo.mp3", img: 'imagens/imaturo.png' },
    { titulo: 'Eu vou morrer sozinho', artista: 'Jão', src: "musicas/25 Vou Morrer Sozinho.mp3", img: 'imagens/vou morrer.jpg' },
    { titulo: 'River Flowers in You', artista: 'Yiruma', src: "musicas/River Flows in You -yiruma.mp3", img: 'imagens/river.png' },
    { titulo: 'Canon', artista: 'yiruma', src: "musicas/Yiruma -Canon.mp3", img: 'imagens/canon.png' },
    { titulo: 'Fur Elise', artista: 'Beethoven', src: "musicas/012.FUR ELISE.mp3", img: 'imagens/fur elise.png' },
    { titulo: 'Deus me Livre', artista: 'Jerry Smith', src: "musicas/Jerry Smith - Deus me Livre_ Mais Quem me Dera [ Á(MP3_128K).mp3", img: 'imagens/Deus me livre.png' },
    { titulo: 'Energia Surreal', artista: 'Thiaguinho', src: "musicas/03 - Energia Surreal.mp3", img: 'imagens/olha a chuva.jpeg' },
    { titulo: 'Deus Proverá - Versão Rebeca', artista: 'REBECA', src: "musicas/Deus proverá - REBECA.mp3", img: 'imagens/Deus proverá rebeca.png' },
]
let musica = document.querySelector('audio');
let indexMusica = 0;
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2')
let nomeArtista = document.querySelector('.descricao i')

renderizarMusica(indexMusica)

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

document.querySelector('.anterior').addEventListener('click', () => {
    document.querySelector('.anterior').addEventListener('click', tocarMusica);
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 23;
    }
    renderizarMusica(indexMusica);

});

document.querySelector('.proxima').addEventListener('click', () => {
    document.querySelector('.proxima').addEventListener('click', tocarMusica);
    indexMusica++;
    if (indexMusica > 23) {
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

musica.addEventListener('timeupdate', atualizarBarra)

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

function renderizarMusica(index) {
    musica.setAttribute('src', Musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        imagem.src = Musicas[index].img;
        nomeMusica.textContent = Musicas[index].titulo;
        nomeArtista.textContent = Musicas[index].artista;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica() {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica() {
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none';
}

function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos + ':' + campoSegundos;
}
