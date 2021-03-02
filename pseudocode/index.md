---
layout: layouts/home.njk
title: Pseudocode
templateClass: tmpl-post
eleventyNavigation:
  key: Pseudocode
  order: 8
---

<div class="container mt-4">
  <h1>Pseudocode Tasks</h1>
  <p>Open the console to view the results!</p>

  <code>
    <pre>
      LOOP through numbers 0 - 100
        IF the number is a multiple of 3 and 5
          THEN output "fizzbuzz"    
        ELSE IF number is a multiple of 3
          THEN output "fizz"
        ELSE IF the number is a multiple of 5
          THEN output "buzz"
        ELSE
          THEN output number
    </pre>
  </code>

  <pre>
    Create a JavaScript object which contains information on recipes such as:
    strRecipeTitle (String) - title of the recipe
    servings (Integer) - how many people it serves
    arrIngredients (Array of strings) - List of all ingredients needed for the recipe
    strMethod (String) - The method to making the recipe.
    
    LOOP through each Recipe
      OUTPUT {Recipe title}
      LOOP through each ingredient for the specific recipe
        OUTPUT each {ingredient}
    
    {
      strRecipeTitle: 'Beef Stew',
      servings: 5,
      arrIngredients: [
        Stewing beef, 
        3 Carrots,
        3 Celery,
        1 Large Onion, 
        1 Tin of Chopped Tomatoes,
        500ml Beef Stock,
        200ml Red Wine,
        2 Tbsp Tomato Puree,
        Mixed herbs,
        Salt,
        Pepper 
      ],
      strMethod: "
        Step 1: ,
        Step 2: , 
        Step 3:
      "
    }
  </pre>

</div>

<script>
  let strMessage;
  // Counter which increments from 1 to 100 
  for(counter = 1; counter <= 100; counter++) {
    // If the number is divisable by both 3 and 5, output FizzBuzz
    if(counter % 15 == 0) {
      strMessage = "FizzBuzz";
    // If the number is divisable by 3, output Fizz
    } else if (counter % 3 == 0) {
      strMessage = "Fizz";
    // If the number is divisable by 5, output Buzz  
    } else if (counter % 5 == 0) {
      strMessage = "Buzz";
    // Otherwise output the number  
    } else {
      strMessage = counter;
    }
    // Console log message to display results.
    console.log(strMessage);
  }
</script>