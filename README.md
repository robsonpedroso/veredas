# Site do Veredas Linux

Site estático de uma página sobre o Veredas Linux. É feito com HTML, CSS e JS puros, sem build.

## Ver localmente

```sh
python -m http.server 8000
# abra http://localhost:8000
```

## Publicar no GitHub Pages

1. Crie um repositório (por exemplo `veredas-site`) e envie o conteúdo desta pasta para a branch `main`.
2. Em **Settings → Pages**, escolha **Deploy from a branch**, com a branch `main` e a pasta `/ (root)`.
3. O site fica em `https://<usuario>.github.io/<repositorio>/`. Todos os caminhos são relativos, então funciona em subpasta.

## Downloads (ISOs)

As ISOs são grandes demais para o Pages, então ficam no **GitHub Releases** (limite de 2 GB por arquivo):

1. No repositório `veredas`, crie a release com a tag `v1.00`.
2. Anexe `veredas-1.00-amd64.iso` e `veredas-1.00-amd64-trinity.iso`, que estão em `rkdxOsUbuntuVeredas/out/`.
3. Se o repositório ou a tag forem outros, troque `RELEASE_BASE` em `js/main.js` e os `href` em `index.html`.
4. Em uma nova versão, atualize também os SHA256 na seção de download, usando os arquivos `out/*.sha256`.

## Trocar as capturas de tela

Os arquivos `assets/screens/plasma.svg` e `assets/screens/trinity.svg` são placeholders. Tire os prints em 16:9 (por exemplo 1280×720), salve como `plasma.png` e `trinity.png` e troque os `src` em `index.html`.
