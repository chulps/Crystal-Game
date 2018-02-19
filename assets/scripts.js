$( document ).ready(function () {
var random_sum = Math.floor(Math.random() * 100) + 20;
var random_crystal_1 = Math.floor(Math.random() * 12) + 1;
var random_crystal_2 = Math.floor(Math.random() * 12) + 1;
var random_crystal_3 = Math.floor(Math.random() * 12) + 1;
var random_crystal_4 = Math.floor(Math.random() * 12) + 1;
var click_sum = 0; 
var wins = 0;
var losses = 0;

document.getElementById("sum_display").innerHTML = random_sum;
document.getElementById("crystal_1").innerHTML = random_crystal_1;
document.getElementById("crystal_2").innerHTML = random_crystal_2;
document.getElementById("crystal_3").innerHTML = random_crystal_3;
document.getElementById("crystal_4").innerHTML = random_crystal_4;
document.getElementById("click_sum").innerHTML = click_sum;

  
  $("#crystal_1").click(function click1() {
  click_sum = click_sum + random_crystal_1;
  document.getElementById("click_sum").innerHTML = click_sum;
  
  if (click_sum > random_sum){
  	 	
     	random_sum = Math.floor(Math.random() * 100) + 20;
			random_crystal_1 = Math.floor(Math.random() * 12) + 1;
			random_crystal_2 = Math.floor(Math.random() * 12) + 1;
			random_crystal_3 = Math.floor(Math.random() * 12) + 1;
			random_crystal_4 = Math.floor(Math.random() * 12) + 1;
			click_sum = 0; 
      losses++;
      document.getElementById("sum_display").innerHTML = random_sum;
      document.getElementById("crystal_1").innerHTML = random_crystal_1;
      document.getElementById("crystal_2").innerHTML = random_crystal_2;
      document.getElementById("crystal_3").innerHTML = random_crystal_3;
      document.getElementById("crystal_4").innerHTML = random_crystal_4;
      document.getElementById("click_sum").innerHTML = click_sum;
      document.getElementById("counterL").innerHTML = losses;
      alert ("This counts as a loss, Bub");
     }
     
      if (click_sum === random_sum){
  	 	
     	random_sum = Math.floor(Math.random() * 100) + 20;
			random_crystal_1 = Math.floor(Math.random() * 12) + 1;
			random_crystal_2 = Math.floor(Math.random() * 12) + 1;
			random_crystal_3 = Math.floor(Math.random() * 12) + 1;
			random_crystal_4 = Math.floor(Math.random() * 12) + 1;
			click_sum = 0; 
      wins++;
      document.getElementById("sum_display").innerHTML = random_sum;
      document.getElementById("crystal_1").innerHTML = random_crystal_1;
      document.getElementById("crystal_2").innerHTML = random_crystal_2;
      document.getElementById("crystal_3").innerHTML = random_crystal_3;
      document.getElementById("crystal_4").innerHTML = random_crystal_4;
      document.getElementById("click_sum").innerHTML = click_sum;
      document.getElementById("counterW").innerHTML = wins;
      alert ("Nice! That's a win!");
     }
   
	});
  
	$("#crystal_2").click(function click2() {
	click_sum = click_sum + random_crystal_2;
  document.getElementById("click_sum").innerHTML = click_sum;
    if (click_sum > random_sum){
  	 	
     	random_sum = Math.floor(Math.random() * 100) + 20;
			random_crystal_1 = Math.floor(Math.random() * 12) + 1;
			random_crystal_2 = Math.floor(Math.random() * 12) + 1;
			random_crystal_3 = Math.floor(Math.random() * 12) + 1;
			random_crystal_4 = Math.floor(Math.random() * 12) + 1;
			click_sum = 0; 
      losses++;
      document.getElementById("sum_display").innerHTML = random_sum;
      document.getElementById("crystal_1").innerHTML = random_crystal_1;
      document.getElementById("crystal_2").innerHTML = random_crystal_2;
      document.getElementById("crystal_3").innerHTML = random_crystal_3;
      document.getElementById("crystal_4").innerHTML = random_crystal_4;
      document.getElementById("click_sum").innerHTML = click_sum;
      document.getElementById("counterL").innerHTML = losses;
      alert ("This counts as a loss, Bub");
     }
     
      if (click_sum === random_sum){
  	 	
     	random_sum = Math.floor(Math.random() * 100) + 20;
			random_crystal_1 = Math.floor(Math.random() * 12) + 1;
			random_crystal_2 = Math.floor(Math.random() * 12) + 1;
			random_crystal_3 = Math.floor(Math.random() * 12) + 1;
			random_crystal_4 = Math.floor(Math.random() * 12) + 1;
			click_sum = 0; 
      wins++;
      document.getElementById("sum_display").innerHTML = random_sum;
      document.getElementById("crystal_1").innerHTML = random_crystal_1;
      document.getElementById("crystal_2").innerHTML = random_crystal_2;
      document.getElementById("crystal_3").innerHTML = random_crystal_3;
      document.getElementById("crystal_4").innerHTML = random_crystal_4;
      document.getElementById("click_sum").innerHTML = click_sum;
      document.getElementById("counterW").innerHTML = wins;
      alert ("Nice! That's a win!");
     }
  
	});

	$("#crystal_3").click(function click3() {
	click_sum = click_sum + random_crystal_3;
  document.getElementById("click_sum").innerHTML = click_sum;
    if (click_sum > random_sum){
  	 	
     	random_sum = Math.floor(Math.random() * 100) + 20;
			random_crystal_1 = Math.floor(Math.random() * 12) + 1;
			random_crystal_2 = Math.floor(Math.random() * 12) + 1;
			random_crystal_3 = Math.floor(Math.random() * 12) + 1;
			random_crystal_4 = Math.floor(Math.random() * 12) + 1;
			click_sum = 0; 
      losses++;
      document.getElementById("sum_display").innerHTML = random_sum;
      document.getElementById("crystal_1").innerHTML = random_crystal_1;
      document.getElementById("crystal_2").innerHTML = random_crystal_2;
      document.getElementById("crystal_3").innerHTML = random_crystal_3;
      document.getElementById("crystal_4").innerHTML = random_crystal_4;
      document.getElementById("click_sum").innerHTML = click_sum;
      document.getElementById("counterL").innerHTML = losses;
      alert ("This counts as a loss, Bub");
     }
     
      if (click_sum === random_sum){
  	 	
     	random_sum = Math.floor(Math.random() * 100) + 20;
			random_crystal_1 = Math.floor(Math.random() * 12) + 1;
			random_crystal_2 = Math.floor(Math.random() * 12) + 1;
			random_crystal_3 = Math.floor(Math.random() * 12) + 1;
			random_crystal_4 = Math.floor(Math.random() * 12) + 1;
			click_sum = 0; 
      wins++;
      document.getElementById("sum_display").innerHTML = random_sum;
      document.getElementById("crystal_1").innerHTML = random_crystal_1;
      document.getElementById("crystal_2").innerHTML = random_crystal_2;
      document.getElementById("crystal_3").innerHTML = random_crystal_3;
      document.getElementById("crystal_4").innerHTML = random_crystal_4;
      document.getElementById("click_sum").innerHTML = click_sum;
      document.getElementById("counterW").innerHTML = wins;
      alert ("Nice! That's a win!");
     }
	});

	$("#crystal_4").click(function click4() {
	click_sum = click_sum + random_crystal_4;
  document.getElementById("click_sum").innerHTML = click_sum;
    if (click_sum > random_sum){
  	 	
     	random_sum = Math.floor(Math.random() * 100) + 20;
			random_crystal_1 = Math.floor(Math.random() * 12) + 1;
			random_crystal_2 = Math.floor(Math.random() * 12) + 1;
			random_crystal_3 = Math.floor(Math.random() * 12) + 1;
			random_crystal_4 = Math.floor(Math.random() * 12) + 1;
			click_sum = 0; 
      losses++;
      document.getElementById("sum_display").innerHTML = random_sum;
      document.getElementById("crystal_1").innerHTML = random_crystal_1;
      document.getElementById("crystal_2").innerHTML = random_crystal_2;
      document.getElementById("crystal_3").innerHTML = random_crystal_3;
      document.getElementById("crystal_4").innerHTML = random_crystal_4;
      document.getElementById("click_sum").innerHTML = click_sum;
      document.getElementById("counterL").innerHTML = losses;
      alert ("This counts as a loss, Bub");
     }
     
      if (click_sum === random_sum){
  	 	
     	random_sum = Math.floor(Math.random() * 100) + 20;
			random_crystal_1 = Math.floor(Math.random() * 12) + 1;
			random_crystal_2 = Math.floor(Math.random() * 12) + 1;
			random_crystal_3 = Math.floor(Math.random() * 12) + 1;
			random_crystal_4 = Math.floor(Math.random() * 12) + 1;
			click_sum = 0; 
      wins++;
      document.getElementById("sum_display").innerHTML = random_sum;
      document.getElementById("crystal_1").innerHTML = random_crystal_1;
      document.getElementById("crystal_2").innerHTML = random_crystal_2;
      document.getElementById("crystal_3").innerHTML = random_crystal_3;
      document.getElementById("crystal_4").innerHTML = random_crystal_4;
      document.getElementById("click_sum").innerHTML = click_sum;
      document.getElementById("counterW").innerHTML = wins;
      alert ("Nice! That's a win!");
     }
	});
 
});