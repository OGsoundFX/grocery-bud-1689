## Cloning this repo

First clone this repository to your laptop (in the folder that you wish to clone it):

```bash
git clone git@github.com:OGsoundFX/grocery-bud-1689.git
cd grocery-bud-1689
git remote remove origin # disconnect it from the teacher's github repo
gh repo create --private --source=. # create your own github repo in your profile (set to private here but you change to public)
code . # Open this folder in your text editor
```

## Specs

Run the server from your terminal with:

```bash
serve
```

And visit `localhost:8000`
