const jsonData = pm.response.json();

// Status is 200

pm.test('Status is 200 OK', () => {
  pm.response.to.have.status(200);
})

// Response is JSON

pm.test('Response is JSON', () => {
  pm.expect(pm.response.headers.get('Content-Type')).to.contain('application/json');
})

// JSON Body has keys: 'assessment_id','assessment_title','assessment_type','district_id','grading_scale_id','__typename'

pm.test("JSON Body has Only Keys: 'assessment_id','assessment_title','assessment_type','district_id','grading_scale_id','__typename' ", () => {

  pm.expect(jsonData).to.have.all.keys('assessment_id','assessment_title','assessment_type','district_id','grading_scale_id','__typename');

})

// validate id

pm.test('Assessment ID Equals 202089', () => {
  pm.expect(jsonData.assessment_id).to.be.eql(202089)
})

// validate title

pm.test('Assessment Title Equals "PE 3.1 Throwing - Motor Skills & Movement Patterns"', () => {
  pm.expect(jsonData.assessment_title).to.be.eql("PE 3.1 Throwing - Motor Skills & Movement Patterns ");
})

// validate assessment_type

pm.test('Assessment Type Equals 3', () => {
  pm.expect(jsonData.assessment_type).to.be.eql(3);
})

// validate district id

pm.test('District ID Equals 85623', () => {
  pm.expect(jsonData.district_id).to.be.eql(85623);
})

// validate grading_scale_id

pm.test('Grading Scale Equals 751', () => {
  pm.expect(jsonData.grading_scale_id).to.be.eql(751);
})

// validate __typename

pm.test('Typename Equals "AssessmentSearch" ', () => {
  pm.expect(jsonData.__typename).to.be.eql("AssessmentSearch");
})