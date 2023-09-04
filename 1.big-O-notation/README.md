# Big O Notation

La notation Big O (_complexité algorithmique_) permet de meusurer la performance d'un algorithme.
c'est une meusure mathematique qui permet de de juger de l'efficacité du code, cette meusure sera donnée en temps.

>Le O de Big O est un petit nom pour « ordre de grandeur »,
ce qui nous permet d’avoir une mesure fiable de l’efficacité de tout le code produit.

On ne mesure pas directement la vitesse d’un algorithme en secondes.
**On mesure le taux de croissance d’un algorithme via le nombre d’opérations qu’il faut pour terminer.**

[SOURCE](https://www.jesuisundev.com/comprendre-la-notation-big-o-en-7-minutes/)

ce code :

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

> il n'y a que 3 operation, et il n'y aura toujours que 3 operation **O(1)**

est donc plus efficient que celui ci :

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

> le nombre d'operation depend du paramètre _number_ **O(n)**

par ce qu'il contient plus d'operations, cependant, il est est plus lisible.

pour voir ce "_temps_" en action vous pouvez tester ce [Performance Tracker](https://rithmschool.github.io/function-timer-demo/)
