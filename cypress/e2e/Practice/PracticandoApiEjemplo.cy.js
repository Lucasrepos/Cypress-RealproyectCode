
describe('Formulario API ejemplo', function () {

    it('API Formulario X', () => {

        cy.request('GET','https://gateway.marvel.com:443/v1/public/characters?apikey=3e39dc85f580bbaefeaa4e113356d673&ts=07/10/2022, 22:30:37&hash=60f3ee05f259d381a35b61d1d483744d').then((response) => {

            expect(response.status).equal(200)
            expect(response.body.data.results[0].name).equal('3-D Man')
            expect(response.body.data.results[1].name).equal('A-Bomb (HAS)')
        })


    })
})

