---
layout: layouts/home.njk
title: JavaScript
templateClass: tmpl-post
eleventyNavigation:
  key: JavaScript
  children: [JavaScript, Practicals One , Functions & Control Flow]
  order: 5
---

<div class="container mt-4">
    <h1>Basic JavaScript Tasks</h1>
    <p>Open the console log to fine out more!</p>
</div>

<script>
    /* 
      This is a multi-line 
      comment 
    */
    // Arithmetic
    var number1 = 10, number2 = 5;
    var sum;
    sum = number1 + number2;
    console.log('Addition: ' + sum);
    sum = number1 - number2;
    console.log('Subtraction: ' + sum);
    sum = number1 * number2;
    console.log('Multiplication: ' + sum);
    sum = number1 / number2;
    console.log('Division: ' + sum);
    sum = number1 % number2;
    console.log('Modulus: ' + sum);
    // String concatination and appending
    var firstName = 'Ash';
    var lastName = 'Eastham';
    var fullName = firstName + ' ' + lastName;
    // Message code
    console.log(fullName);
    /*
      Bill with tip programme
    */
    var pre_tip_total = 35.86;
    var one_percent = pre_tip_total / 100;
    var tip_percent = 15;
    var tip_amount = one_percent * tip_percent;
    // console.log(tip_amount);
    tip_amount = tip_amount.toFixed(2);
    var bill_total = parseFloat(pre_tip_total) + parseFloat(tip_amount);
    // console.log(bill_total);
    var str_message = 'Your food bill was £' + pre_tip_total + ', you have tipped ' + tip_percent + '% which equals £' + tip_amount + ', bringing your total bill to £' + bill_total;
    console.log(str_message);
</script>