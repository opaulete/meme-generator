# Projeto Meme Generator

Este é meu 5° projeto durante minha jornada na Trybe!

O Meme Generator é uma aplicação que permite aos usuários criarem *memes* personalizados!

## Estrutura do Repositório

- A pasta `src` contém todo o código;

## Funcionalidades Implementadas

## 1. Adicionado os inputs de texto e imagem.

<details>
  <summary>A página contém um input para inserir texto e outro para fazer upload de imagem</summary><br/>

- Foi adicionado uma tag `h1` com o `id` `title`, possuindo o texto **Meme Generator**;
- O input de texto possui o `id` `text-input` e é limitado a 60 caracteres;
- O input de imagem possui o `id` `image-input`, é do tipo `file` e não aceita múltiplos arquivos;
- `image-input` só aceita arquivos do tipo imagens (.JPG .PNG .WEBP .GIFs);
- Foi definido um limite de 3MB para o tamanho da imagem que pode ser inserida;
- Caso seja inserido um arquivo do tipo errado ou maior que o tamanho aceito, uma mensagem de erro será exibida;
- Foi adicionado 3 parágrafos com informações auxiliares;

</details>

## 2. Adicionado um preview para a imagem e o texto inseridos.

<details>
  <summary>A página contém uma área com um preview do meme</summary><br/>

- O preview é um elemento div com o `id` `meme-preview`;
- O preview possui um elemento com `id` `meme-text` que corresponde ao texto inserido no input `text-input`;
- O preview possui um elemento com `id` `meme-image` que corresponde a imagem inserida no input `image-input`;
- A imagem está totalmente contida dentro do preview de visualização, ou seja, a imagem não ultrapassa o tamanho da div `meme-preview`;
- O texto está visível por cima da imagem dentro do preview, o tamanho da fonte é 30px e possui um sombra preta, de 5 pixels na horizontal, 5 pixels na vertical e um raio de desfoque de 5 pixels;

</details>

## 3. Implementado LocalStorage para a imagem e texto inseridos.

<details>
  <summary>A imagem e o texto inseridos pelo usuário são salvas no localStorage</summary><br/>

- O texto é salvo no localStorage com a chave `memeText`;
- A imagem é salva no localStorage com a chave `memeImage`;
- O localStorage só aceita `string`, então é necessário codificar a imagem em **base64**;

</details>
