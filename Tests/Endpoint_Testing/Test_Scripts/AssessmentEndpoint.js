const jsonData = pm.response.json();

/***************************
 * 
 *  Endpoints Question 2
 * 
 * *************************/


pm.test('Status is 200 OK', () => {
    pm.response.to.have.status(200);
})

pm.test('Response is JSON', () => {
    pm.expect(pm.response.headers.get('Content-Type')).to.contain('application/json');
})

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




/***************************
 * 
 *  Endpoints Question 3
 * 
 * *************************/

/* A: GET https://qa.otus.com/assessment/assess/264428 */
// Mock Response in EndpointTest/JSON/Assessment_JSON Folder: assessment_3a.json

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


/* B: GET https://qa.otus.com/lesson/412/assignment/201/course/30223 */
// Mock Response in EndpointTests/JSON/Assessment_JSON Folder: assessment_3b.json

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


/* C: POST https://qa.otus.com/assessment/take-rubric */
// Mock Response in EndpointTests/JSON/Assessment_JSON Folder: assessment_3c.json


pm.test("Status Code is 201", () => {
    pm.response.to.have.status(201);
});

pm.test('Body has All Keys: "assessment_id", "assessment_title"', () => {
    pm.expect(jsonData).to.have.keys(["assessment_id", "assessment_title"]);
});

pm.test('Assessment Key Values to not be Null', () => {
    pm.expect(Object.values(jsonData)).to.not.be.null;
});


/* D: POST https://qa.otus.com/simple-assessment/assignment/21034/10999090 */
// Mock Response in EndpointTests/JSON/Assessment_JSON Folder: assessment_3d.json

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