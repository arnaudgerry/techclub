function check(){
   var myScore=0;
   var questionOne=document.quiz.quiz1.value;
   var questionTwo=document.quiz.quiz2.value;
   var questionThree=document.quiz.quiz3.value;
   var questionFour=document.quiz.quiz4.value;
   var questionFive=document.quiz.quiz5.value;
   var questionSix=document.quiz.quiz16value;
   var questionSeven=document.quiz.quiz7.value;
   var questionEight=document.quiz.quiz8.value;
   var questionNine=document.quiz.quiz9.value;
   var questionTen=document.quiz.quiz10.value;
   
   if (questionOne=="Float")  {myScore++}
   if (questionTwo=="Both")  {myScore++}
   if (questionThree=="Both")  {myScore++}
   if (questionFour=="Ignores")  {myScore++}
   if (questionFive=="all")  {myScore++}
   if (questionSix=="Object")  {myScore++}
   if (questionSeven=="false")  {myScore++}
   if (questionEight=="Number")  {myScore++}
   if (questionNine=="All")  {myScore++}
   if (questionTen=="Cassandra")  {myScore++}

   document.write(myScore);
} 