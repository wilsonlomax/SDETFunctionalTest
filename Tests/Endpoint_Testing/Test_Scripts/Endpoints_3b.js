/* B: GET https://qa.otus.com/lesson/412/assignment/201/course/30223 */
// Mock Response in EndpointTests/JSON/Assessment_JSON Folder: assessment_3b.json

const jsonData = pm.response.json();


pm.test('Status Code is 200', () => {
  pm.response.to.have.status(200);
});

pm.test("Response is JSON", () => {
  pm.expect(pm.response.headers.get('Content-Type')).to.contain('application/json');
});

pm.test('Lesson ID equals 412', () => {

  jsonData.lesson.forEach((item) => {

      pm.expect(item.lesson_id).to.eql(412);

  });

});

pm.test('Assignment ID equals 201', () => {
  
  jsonData.lesson.forEach((item) => {

          pm.expect(item.assignment.assignment_id).to.eql(201)

  });
});

pm.test('Course ID equals 30223', () => {
 
 jsonData.lesson.forEach((item) => {

          pm.expect(item.assignment.course.course_id).to.eql(30223);
          
  });
});