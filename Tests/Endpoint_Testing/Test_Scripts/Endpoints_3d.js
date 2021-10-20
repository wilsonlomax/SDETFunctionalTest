/* D: POST https://qa.otus.com/simple-assessment/assignment/21034/10999090 */
// Mock Response in EndpointTests/JSON/Assessment_JSON Folder: assessment_3d.json

const jsonData = pm.response.json();


pm.test('Status Code is 201', () => {
  pm.response.to.have.status(201);
});

pm.test('Body Contains Keys: "assignment_id", "id", "item_scores" ', () => {
  pm.expect(jsonData).to.contain.keys(["assignment_id", "id", "item_scores"]);
})

pm.test('Assignment ID Equals 21034', () => {
  pm.expect(jsonData.assignment_id).to.eql(21034);
})

pm.test('ID Equals 10999090', () => {
  pm.expect(jsonData.id).to.eql(10999090);
})

pm.test('Item Scores is an Array of Objects', () => {
  pm.expect(jsonData.item_scores).to.be.a('array');
})