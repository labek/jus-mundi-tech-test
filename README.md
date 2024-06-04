# Jus Mundi technical test

## Description

### [K**ata: number to french converter**](https://github.com/GaspardPO/kata-number-to-french-converter)

Number can be hard to write in French.

[https://fr.wikipedia.org/wiki/Nombres_en_français](https://fr.wikipedia.org/wiki/Nombres_en_fran%C3%A7ais)

### The algorithm

#### **The units**

> less than 16 follow no rules but each has a specific name."zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize"(from 0 to 16)
>

#### **The tens**

> as French up to 60, or using Belgium-French (septante, huitante, nonante), up to 90, follow the same pattern :
  - "dix",
  - "vingt",
  - "trente",
  - "quarante",
  - "cinquante",
  - "soixante",
  - "septante",
  - "huitante",
  - "nonante"(from 10 to 90)"huitante" could also be "octante".
>

> In French from France, the pattern change at 70:
  - 70 = 60 + 10 = "soixante-dix"
  - 80 = 4 * 20 = "quatre-vingts"
  - 90 = 4 * 20 + 10 = "quatre-vingt-dix" (because why not!)
>

#### **Numbers from 22 to 29, then 32 to 39 ...**

> The rule is easy:
  **-** 22 = 20 + 2 = "vingt-deux",
with a dash in between From 17 to 19, it follows this rule
  **-** 17 = 10 + 7 = "dix-sept"
>

#### **Numbers ending with 1:**

> The rule is the same as above, but with "-et-" which means "and" instead of "-":
  **-** 21 = "vingt-et-un"
Before 1990, the writing was "vingt et un" but since [the 1990 simplification reform](https://fr.wiktionary.org/wiki/Annexe:Rectifications_orthographiques_du_fran%C3%A7ais_en_1990#Num%C3%A9raux_compos%C3%A9s), all words used for numbers are joined-up with dashes.
>

#### **Numbers after 70 and 90:**

> **-** 74 = 60 + 14 = "soixante-quatorze"
 **-**  77 = 60 + 17 = 60 + 10 + 7 = "soixante-dix-sept"
 **-**  95 = 4   * 20 + 15 = "quatre-vingt-quinze"
 **-**  99 = 4 * 20 + 10 + 9 = "quatre-vingt-dix-neuf"
>

> **plurals of "quatre-vingt":**
  - ****80 : 4 * 20 = ****"quatre-vingt**s**" → means 4 times 20 so 20 is plural, thus "vingt**s**" ends with an "s".
**But** when it is not the ending of the word, the plural form disappear:
  **-** 82 = 4 * 4 +2 =  "quatre-vingt-deux", without an "s" at "vingt".*
>

#### **71, 81, 91**

> For some unknown reasons, 71 use an "-et-", 81 and 91 use a dash.
  **-** 71 = 60 + 11 = "soixante-et-onze"
  **-** 81 = 4 * 20 + 1 = "quatre-vingt-un"
  **-** 91 = 4 * 20 + 11 = "quatre-vingt-onze"
>

#### **100 and more**

> One hundred is "cent".
One thousand is "mille".
The rule is joining this and the rest with a dash:
  **-** 130 = 100 + 30 = "cent-trente"
  **-** 1110 = 1000 + 1000 + 10 = "mille-cent-dix"
>

> **plurals of "cent" and "mille:**
Like 80, 100 and 1000 can be plural if it ends a word and then takes an S: "cents", "milles"
  **-** 200 = 2 * 100 = "deux-cents"
  **-** 3 000 = 3 * 1000 = "trois-milles"

When "cent" or "mille" is not ending the word, then it is not plural:
  **-** 252 = 2 * 100 + 52 = "deux-cent-cinquante-deux"
  **-** 2045 = 2 * 1000 + 45 = "deux-mille-quarante-cinq"
  **-** 200000 = 2 * 100 * 1000 = "deux-cent-milles", without S at "cents", but with S at "milles"
  **-** 180000 = (100 + 4 * 20) * 1000 = "cent-quatre-vingt-milles", without S at "vingt", but with S at "milles"
>

### The “Exercice de Style”

Create a packaged application (with the run documentation) that takes a list of numbers (numerical) and returns a list of French numbers (words).

Any production-ready language can be used.

Commit it inside a public repo to be reviewed and discussed.

### Evaluation Criteria:

- Design Patterns used
- Data Architecture
- Clean code
- Algorithm & operational concerns

### Dataset

**Input:**

> [0, 1, 5, 10, 11, 15, 20, 21, 30, 35, 50, 51, 68, 70, 75, 99, 100, 101, 105, 111, 123, 168, 171, 175, 199, 200, 201, 555, 999, 1000, 1001, 1111, 1199, 1234, 1999, 2000, 2001, 2020, 2021, 2345, 9999, 10000, 11111, 12345, 123456, 654321, 999999]
>

## Prerequisites

You would need to have the LTS version of NodeJS installed on your machine to run this script

## Getting started

Here's the command to run the script:

```sh
node index.js
```