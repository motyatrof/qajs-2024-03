// const request = require("supertest");
const apiRoot = `https://api.test.appmost.ru/`;

//  anwer (200)
// bad answer (401 Unauthorized)

describe("Logging to site. POST login", () => {
    test("should get answer OK (200)", async ()=>{
        const response = await request(apiRoot)
        .post("login")
        .send({
            code: 4839,
            phone: "79000000000",
        })
        .set('Accept', 'application/json')
        .expect(200);
    });

    test("should get answer Unauthorized (401)", async ()=>{
        const response = await request(apiRoot)
        .post("login")
        .send({
            phone: "111",
            code: 111
        })
        .set('Accept', 'application/json')
        .expect(401);
    });
});
describe("GET requests with no authorization", ()=> {
    describe("GET v1/afisha/types", ()=> {
        test("should get answer OK (200)", async ()=>{
            const response1 = await request(apiRoot)
            .get("/v1/afisha/types")
            .send({ city_id: 1 })
            .expect(200)
            .expect("Content-Type", /json/);
            expect(response1.body).toEqual({"data":[]});

            const response2 = await request(apiRoot)
            .get("/v1/afisha/types")
            .send({ district_id: 1 })
            .expect(200)
            .expect("Content-Type", /json/);
        });
    });

    describe("GET v1/afisha/events/activities/{activity}/seances/{seance}", ()=> {
        test("should get answer OK (200)", async ()=>{
            const activity = 849;
            const seance = 1403;
            const response = await request(apiRoot)
            .get(`v1/afisha/events/activities/${activity}/seances/${seance}`)
            .expect(200)
            .expect("Content-Type", /json/);
        });
    });

    describe("GET get-afisha-rating", ()=> {
        test("should get answer OK (200)", async ()=>{
            const type_t = "activity";
            const id_t = 849;
            const response = await request(apiRoot)
            .get(`get-afisha-rating`)
            .send({
                type : type_t,
                id : id_t,
            })
            .expect(200)
            .expect("Content-Type", /json/);
        });
    });

    describe("GET afisha/activities/{activity}", ()=> {
        test("should get answer FOUND (302)", async ()=>{
            //api.test.appmost.ru/afisha/activities/849?start_date=null&end_date=null
            const activity_id = 849;
            const response = await request(apiRoot)
            .get(`afisha/activities/${activity_id}`)
            .send({
                start_date : null,
                end_date : null,
            })
            .expect(302);
            // с этим запросом непонятки
        });

    });
    describe("GET v1/afisha/events/activities/{activity}", ()=> {
        test("should get answer OK (200)", async ()=>{
            const activity_id = 1074;
            const response = await request(apiRoot)
            .get(`v1/afisha/events/activities/${activity_id}`)
            // .send({
            //     city_id : null,
            //     district_id : null,
            // })
            .expect(200);
        });
    });
    describe("GET v1/afisha/events/activities/{activity}/seances", ()=> {
        test("should get answer (200)", async ()=>{

            const activity_id = 1074;
            const start_date_1 = "2024-07-17";
            const end_date_1 = "2024-07-18";
            const start_date_2 = "2024-07-20";
            const end_date_2 = "2024-07-21";
            
            const response1 = await request(apiRoot)
            .get(`v1/afisha/events/activities/${activity_id}/seances`)
            .send({
                // start_date : start_date_1,
                // end_date : end_date_1,
                date : start_date_1
            })
            .expect(200)
            .expect("Content-Type", /json/);
            const response2 = await request(apiRoot)
            .get(`v1/afisha/events/activities/${activity_id}/seances`)
            .send({
                // start_date : start_date_1,
                // end_date : end_date_1,
                date : start_date_2
            })
            .expect(200)
            .expect("Content-Type", /json/);
        });
        
    });
});
describe("GET requests with authorization", ()=> {
    let token_t;
    beforeAll(async () => {
        const auth_response = await request(apiRoot)
        .post("login")
        .send({
            code: 4839,
            phone: "79000000000",
        })
        .expect(200);
        token_t = auth_response.body.token;
    });
    describe("GET afisha/activities/{activity}", ()=> {
        test("should get answer OK (200)", async ()=>{

            const activity_id = 1074;
            const response = await request(apiRoot)
            .get(`afisha/activities/${activity_id}`)
            .set('authorization', `Bearer ${token_t}`)
            .send({
                date: "2024-07-17"
            })
            .expect(200);
        })
    });
});
