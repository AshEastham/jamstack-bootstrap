---
layout: layouts/home.njk
title: Functions & Control Flow
templateClass: tmpl-post
eleventyNavigation:
  key: Functions & Control Flow
  order: 6
---

<div class="container mt-4">
    <h1>JavaScript - Functions & Control Flow</h1>
    <p>Open the console to view the results</p>
</div>

<script>
  // Function for task 1.
  function outputMessage() {
    console.log("This is a message");
  }
  // Function for task 2.
  function fullNameGenerator(firstName,lastName) {
    var fullName = firstName + ' ' + lastName;
    console.log(fullName);
  }
  // Function for task 3.
  function fullNameGeneratorReturn(firstName,lastName) {
    return firstName + ' ' + lastName;
  }
  // Function for task 4.
  function wearACoat(temperature) {
    var strMessage = 'You do not need to wear a coat';
    if (temperature < 10) {
      strMessage = 'You need to wear a coat';
    }
    return strMessage;
  }
  // Function for task 5
  function wearACoatExtra(temperature) {
    var strMessage;
    // First condition that can be executed, will be executed 
    if (temperature < 0) {
      strMessage = 'You don\'t go outside';
    } else if (temperature < 10) {
      strMessage = 'You need a coat and hat';
    } else if (temperature < 15) {
      strMessage = 'You do need a coat';
    }
    if(!strMessage) {
      strMessage = 'You don\'t need to wear a coat!';
    }
    return strMessage;
  }
  /*
  */
  console.log('Task 1 Below');
  console.log('---------');
  // Calls the outputMessage function
  outputMessage();
  /*
  */
  console.log('\n');
  console.log('Task 2 Below');
  console.log('---------');
  var fName = 'Ash';
  var lName = 'Eastham';
  fullNameGenerator(fName,lName); // console.log('Ash Eastham')
  /*
  */
  console.log('\n');
  console.log('Task 3 Below');
  console.log('---------');
  var fullName = fullNameGeneratorReturn(fName,lName);
  console.log(fullName);
  /*
  */
  console.log('\n');
  console.log('Task 4 Below');
  console.log('---------');
  var temp1 = wearACoat(15);
  var temp2 = wearACoat(9);
  var temp3 = wearACoat(10);
  console.log(temp1);
  console.log(temp3);
  console.log(temp2);
  /*
  */
  console.log('\n');
  console.log('Task 5 & 6 Below');
  console.log('---------');
  console.log(wearACoatExtra(-4));
  console.log(wearACoatExtra(9));
  console.log(wearACoatExtra(14));
  console.log(wearACoatExtra(18));
</script>