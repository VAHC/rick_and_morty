const app = require('../app');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS (get) onsearch y detail', () => {
    describe('Get /onsearch/{id}', () => {
        xit('Responde con status: 200', async () => {
            await agent.get('/onsearch/1');
            expect(200);
        })

        xit('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', async () => {
            const {body} = await agent.get('/onsearch/1');
            const keys = Object.keys(body) // array que contiene las propiedades del objeto ['id', 'name', 'species', ...]
            expect(keys).toContain('id')
            expect(keys).toContain('name')
            expect(keys).toContain('species')
            expect(keys).toContain('gender')
            expect(keys).toContain('image')
        })

        xit('Si hay un error responde con status: 500', async () => {
            await agent.get('/onsearch/1000');
            expect(500);
        })
    })
})

xdescribe('Test de RUTAS (get) onsearch y detail', () => {
    describe('Get /detail/{id}', () => {
        it('Responde con status: 200', async () => {
            await agent.get('/detail/1');
            expect(200);
        })

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "image", "status" y "origin"', async () => {
            const {body} = await agent.get('/detail/1');
            const keys = Object.keys(body) // array que contiene las propiedades del objeto ['id', 'name', 'species', ...]
            expect(keys).toContain('id')
            expect(keys).toContain('name')
            expect(keys).toContain('species')
            expect(keys).toContain('gender')
            expect(keys).toContain('image')
            expect(keys).toContain('status')
            expect(keys).toContain('origin')
        })

        it('Si hay un error responde con status: 500', async () => {
            await agent.get('/detail/1000');
            expect(500);
        })
    })
})

describe('TEST de RUTAS/fav', () => {
    xit('Responde con status 200 y un array de favoritos', async () => {
        const {body} = await agent.get('/get');
        expect(200);
        expect(body).toBeDefined();
        expect(body).toBeInstanceOf(Array);
        expect(body).toEqual([]);
        expect(body).toMatchObject([]);
    })

    xit('Responde con status 200 y un objeto con los datos del personaje guardado', async () => {
        const char = {
            id: 1,
            name: "Rick Sanchez",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          }
          const data = await agent.post('/create').send(char)
          expect(200)
          expect(data.body).toMatchObject(char)
    })

    it('Responde con status 200 y un objeto con propiedad success en TRUE', async () => {
        const data = await agent.delete('/get/1')
        expect(200)
        expect(data.body.success).toBe(true)
    })
})