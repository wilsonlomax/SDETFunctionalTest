/* C: POST https://qa.otus.com/assessment/take-rubric */
// Mock Response in EndpointTests/JSON/Assessment_JSON Folder: assessment_3c.json

const jsonData = pm.response.json();


pm.test("Status Code is 201", () => {
  pm.response.to.have.status(201);
});

pm.test('Body has All Keys: "assessment_id", "assessment_title"', () => {
  pm.expect(jsonData).to.have.keys(["assessment_id", "assessment_title"]);
});

pm.test('Assessment Key Values to not be Null', () => {
  pm.expect(Object.values(jsonData)).to.not.be.null;
});