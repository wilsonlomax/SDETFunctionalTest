SQL queries
a. Student, grade level

select name, grade_id from user;

b. Student, assessment name, and corresponding grade

select user.name as Student, 
assessment.title as Assessment_Name, 
assignment.points as Grade
from user
Left Join assignment On user.user_id = assignment.user_id
Left Join assessment On assignment.assessment_id = assessment.id
Order By user.name;

c. The number of assessments that the total available points are greater than 60

select count(*) from assessment
where total_points > 60;

2. Show how you would find where the value is null for allow_multiple_attempts

select * from assessment
where allow_multiple_attempts IS NULL;