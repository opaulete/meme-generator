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
  <summary>A página contém uma area de preview de como o meme irá ficar</summary><br/>

- O preview é um elemento div com o `id` `meme-preview`;
- O preview possui um elemento com `id` `meme-text` que corresponde ao texto inserido no input `text-input`;
- O preview possui um elemento com `id` `meme-image` que corresponde a imagem inserida no input `image-input`;
- A imagem está totalmente contida dentro do preview de visualização, ou seja, a imagem não ultrapassa o tamanho da div `meme-preview`;
- O texto inserido no elemento `text-input` está visível dentro do preview por cima da imagem inserida em `image-input`.

</details>
