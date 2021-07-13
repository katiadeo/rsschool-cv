# TATIANA MUKHORTOVA


#### CONTACT ME: [Telegram](https://t.me/katiadeo) | [GitHub](https://github.com/katiadeo)


## SUMMARY
*A newbie who is trying to find her way in the World of Programming*  


## SKILLS
* HTML / CSS / JS - *beginner*


## CODE SAMPLE

```javascript
/**
 * Minesweeper game
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 
function minesweeper(matrix) {
  const result = [];
  let count;
  let chuncked;

  matrix.forEach((item, i) => {
    item.forEach((cell, j) => {
      // если поле - true, пушим один
      if (cell === true) {
        result.push(1);
      }

      // если поле - false, запускаем счетчик с нуля
      if (cell === false) {
        count = 0;

        // верхний подмассив: ищем (справа / слева / в середине) -> добавляем к счетчику один
        if (matrix[i - 1]) {
          if (matrix[i - 1][j]) count++;
          if (matrix[i - 1][j + 1]) count++;
          if (matrix[i - 1][j - 1]) count++;
        }

        // нижний подмассив: ищем (справа / слева / в середине) -> добавляем к счетчику один
        if (matrix[i + 1]) {
          if (matrix[i + 1][j]) count++;
          if (matrix[i + 1][j + 1]) count++;
          if (matrix[i + 1][j - 1]) count++;
        }

        // ищем элементы справа / слева - если есть -> добавляем к счетчику один
        if (item[j + 1]) count++;
        if (item[j - 1]) count++;
        result.push(count);
        // result = [1, 2, 1, 2, 1, 1, 1, 1, 1]
      }

      // делим результирущий массив на подмассивы
      const size = matrix[i].length;
      chuncked = result.reduce((acc, curr) => {
        if (acc[acc.length - 1].length === size) {
          acc.push([]);
        }
        acc[acc.length - 1].push(curr);
        return acc;
      }, [[]]);
    });
  });

  return chuncked;
}
```

## EXPERIENCE

- [x] [**HTMLAcademy**](https://htmlacademy.ru/study) - *HTML/CSS/JS free courses*
- [x] [**FreeCodeCamp**](https://www.freecodecamp.org/learn/) - *HTML/CSS/JS courses*
- [x] [**Traversy Media**](https://www.traversymedia.com/) - coding along / YouTube lessons
- [x] [**javascript.info**](https://javascript.info/) - Part 1
- [x] **Head First Java** - covered 6 chapters
- [ ] [**RS-School JS/FE 2021Q1**](https://rs.school/js/) - *upcoming*


## EDUCATION
- `2009 - 2014`
[_Kazan Federal University_](https://kpfu.ru/eng)  
Higher:
Qualified as Teacher of Foreign Languages (English and German)

- `2011 - 2013`
[_Elabuga Institute (branch of Kazan Federal University)_](https://kpfu.ru/eng/academic-units/all-institutes-and-faculties/elabuga-institute)  
Professional retraining:
Qualified as Translator in the field of professional communication (English)


## LANGUAGES
![World map](https://i.ibb.co/4YXzg18/map.png)

### `English:` _fluent_  
 __IELTS General (07.11.2019)__ | _Results: 8 (8.0, 9.0, 7.0, 8.0)_  
### `German:` _working knowledge_
