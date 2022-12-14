
describe('Formulario API ejemplo', function () {

    it('API Formulario X', () => {

        cy.request('POST','http://XXXXXXXXXXX:8081/auth/login', LoguinCredentials).then((response) => {

            expect(response.status).equal(200)
            expect(response.body.data.results[0].name).equal('3-D Man')
            expect(response.body.data.results[1].name).equal('A-Bomb (HAS)')
        })

        var LoguinCredentials = {
            "email": "XXXXXX@XXXX.XXX",
            "password": "XXXXXXX"
          }
    })
})
