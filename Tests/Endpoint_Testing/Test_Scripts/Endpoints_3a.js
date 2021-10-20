/* A: GET https://qa.otus.com/assessment/assess/264428 */
// Mock Response in EndpointTest/JSON/Assessment_JSON Folder: assessment_3a.json

const jsonData = pm.response.json();


pm.test("Status Code is 200", () => {
  pm.response.to.have.status(200);
});

pm.test("Response is JSON", () => {
  pm.expect(pm.response.headers.get('Content-Type')).to.contain('application/json');
});

pm.test('Body has all keys: "assessment_id","assessment_title","assessment_type","district_id","grading_scale_id","__typename" ', () => {
  
  pm.expect(jsonData).to.have.all.keys(["assessment_id","assessment_title","assessment_type","district_id","grading_scale_id","__typename"]);
});

pm.test('Assessment ID equals', () => {
  pm.expect(jsonData.assessment_id).to.eql(264428);
});