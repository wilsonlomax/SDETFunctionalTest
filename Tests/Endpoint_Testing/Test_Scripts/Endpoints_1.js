const jsonData = pm.response.json();

const schema = {
    "students": [
			{
				"first": "string",
				"last": "string",
				"email": "string",
				"studentClasses": []
}],
    "classes": {
        "type": "string"
}};

pm.test("Status code is 200", () => {
    pm.response.to.have.status(200);
});

pm.test("Response is JSON", () => {
    pm.expect(pm.response.headers.get('Content-Type')).to.contain('application/json');
});

pm.test('Expected Schema Found', () => {
    pm.response.to.have.jsonSchema(schema);
});

pm.test("Returns List of Students", () => {
    pm.response.to.have.jsonBody("students");
});

pm.test("Returns Correct Values for a Given Student", () => {
    
    pm.expect(jsonData.students).to.be.a("array"); 

    jsonData.students.forEach((item) => {
        pm.expect(item).to.have.all.keys('first','last','email','studentClasses');
        pm.expect(item.first).to.include.oneOf(['string', null, '']);
        pm.expect(item.last).to.include.oneOf(['string', null, '']);
        pm.expect(item.email).to.include.oneOf(['string',null,'']);
        pm.expect(item.studentClasses).to.be.a('array');
    });

})

pm.test("Returns List of Classes for a Given Student", () => {

        jsonData.students.forEach((student) => {
            student.studentClasses.forEach((course) => {
                pm.expect(course).to.have.all.keys('id','grade');
                pm.expect(course.id).to.not.be.null;
                pm.expect(course.id).to.be.a('number');
                pm.expect(course.grade).to.not.be.null;
                pm.expect(course.grade).to.be.a('number');
                pm.expect(course.grade).to.be.greaterThan(0);

            });
        });

})

pm.test("Returns List of Classes", () => {
    
    const classesObjValues = Object.values(jsonData.classes)

    pm.expect(jsonData.classes).to.have.all.keys('1','2','3','4','5','6','7','8');
    
    classesObjValues.forEach((item) => {
        pm.expect(item).to.be.a('string');
    })
    
});