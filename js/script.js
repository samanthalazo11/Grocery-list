const $meals = $('.meals');
const $ingredient = $('.ingredient');
const $ingredient1 = $('.ingredient1');
const $ingredient2 = $('.ingredient2');
const $ingredient3 = $('.ingredient3');
const $ingredient4 = $('.ingredient4');

console.log($meals)




$.ajax({
    url:'https://www.themealdb.com/api/json/v1/1/search.php?f=a'
    }).then(
      (data) => {

         for (let index = 0; index < data.meals.length; index++) {
             console.log(data.meals[index])
             console.log(data.meals[index].strMeal)
            $meals[index].append(data.meals[index].strMeal)

        }

        for (let index = 0; index < data.meals.length; index++) {
            console.log(data.meals[index])
            console.log(data.meals[index].strMeal)
           $ingredient[index].append(data.meals[index].strIngredient1)
           $ingredient1[index].append(data.meals[index].strIngredient2)
           $ingredient2[index].append(data.meals[index].strIngredient3)
           $ingredient3[index].append(data.meals[index].strIngredient4)
           $ingredient4[index].append(data.meals[index].strIngredient5)
       }


    },
      (error) => {
     console.log('bad request: ', error);
    });




$(document).ready(function(){

    $('#button').click(
        function(){
            var input = $('input[name=skills]').val();
            $('ul.grocery').append('<li>'+ input + ' <i class= "fa fa-check"></i> <i class="fa fa-ban"></i></li>');
        });

        $('ul.grocery').on('click', '.fa-ban', function(){
            $(this).parent('li').fadeOut(200);
        });
        $('ul.grocery').on('click', '.fa-check', function(){
            $(this).parent('li').toggleClass('checked');
        });
        $('input').focus(function(){
            $(this).val(' ');
           });



})

// const dropdowns =document.querySelectorAll('.dropdown');
// dropdowns.forEach(dropdown =>{
//     const select = dropdown.querySelector('.select');
//     const caret = dropdown.querySelector('.caret');
//     const menu = dropdown.querySelector('.menu')
//     const options = dropdown.querySelector('.menu li');
//     const selected = dropdown.querySelector('#selected');
// }
//     );

//     select.addEventListener('click', () => {
//         select.classList.toggle('select-clicked');
//         caret.classList.toggle('caret-rotate');
//         menu.classList.toggle('menu-open');
//     });

//     options.forEach(options => {
//         option.addEventListener('click', () =>{
//             selected.innerText = option.innerText;
//             select.classList.remove('select-clicked');
//             caret.classList.remove('menu-open');


//         });
//     });
