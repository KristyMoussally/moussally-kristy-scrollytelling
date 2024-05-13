# Rapport d'optimisation du projet ScrollyTelling

[PageSpeed Insights](https://pagespeed.web.dev/analysis/https-kristy-tim-momo-com/lgzezwrr2i?form_factor=desktop)

Page Speed Insights - Rapport du 12 mai 2024, 12:52:00.

## Problème #1

### Chargement du contenue médias

### Action concrète pour résoudre le problème

- Réduire le poids des médias en mettant les images en lazy load.
- Mettre cet méthode dans tous les images retrouvés dans le html.
- Donc pas tous les images s'activent en même temps.
- Réduction du poids du srpitesheet

### Résultat

- Le solution a réduit un peu le problème, mais il est moins critique que la dernière fois.
- La réduction du poids des srpitesheet à améliorer le chargement du contenue des médias (ils ont moins de steps et moins long)

## Problème #2

### Les codes exterieurs (css et javascript)

### Action concrète pour résoudre le problème

- Réduire / simplifier les fichiers javascript, css et html.
- Enlevé les codes pas nécéssaires.
- Ex.: les fonts pas utilisés, les bordures sur tous les éléments,...

### Résultat

- Le problème n'est plus critique à la performance du site.
- La performance s'est amélioré.

## Problème #3

### Chargement des ressources

### Action concrète pour résoudre le problème

- Enlevé complètement les commentaires et code inutiles.
- enlevé les markers: false.

### Résultat

- Le performance s'est amélioré, mais le Chargement du contenue grands médias est plus critique.

## Rapport projet ScrollyTelling après optimisation

[PageSpeed Insights](https://pagespeed.web.dev/analysis/https-kristy-tim-momo-com/glwlcbwxoa?form_factor=desktop)

Page Speed Insights - Report from May 12, 2024, 10:29:37 PM
