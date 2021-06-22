/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  title: 'Milanea a la napolitana',
};

/* describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync()
    .then(() => Recipe.create(recipe)));
    describe('GET /recipes', () => {
      it('responds with 200', async () => {
        try {
          await agent.get('/recipes').expect(200);
        } catch (err) {
          console.log(err);
        }
      }).timeout(10000);
      it('responds an array with 100 recipes', async () => {
        try {
          const res = await agent.get('/recipes');
          expect(res.body).to.have.lengthOf(100);
        } catch (err) {
          console.log(err);
        }
      }).timeout(10000);
      it('If the title query is passed, the recipe should match with that title', async () => {
        try {
          const res = await agent.get('/recipes?title=pasta');
          expect(res.body[0].title).to.be.equal('pasta');
        } catch (err) {}
      }).timeout(10000);
      it('If an id parameter is passed it must return the recipe associated with that id', async () => {
        try {
          const res = await agent.get('/recipes/716381');
          expect(res.body[0].title).to.be.equal('Nigerian Snail Stew');
        } catch (err) {}
      }).timeout(10000);
    });
});

describe('POST /addRecipe', () => {
  it('responds with 200', async () => {
    try {
      await agent.post('/addRecipe').send({title: 'Lasagna de verduras', summary: 'Le pones amor tuki tuki'}).expect(200);
    } catch (err) {
      console.log(err);
    }
  });

  it('If you dont pass the title, it responds with a 404', async () => {
    try {
      await agent.post('/addRecipe').send({}).expect(404);
    } catch (err) {
      console.log(err);
    }
  });
  it('If you dont pass the summary, it respond with a 404', async () => {
    try {
      await agent.post('/addRecipe').send({title: 'Lasagna de verduras'}).expect(404);
    } catch (err) {
      console.log(err);
    }
  });
  it('It should create a new recipe correctly', async () => {
    try {
      const res = await agent
        .post('/addRecipe')
        .send({title: 'Lasagna de verduras', summary: 'Le pones amor tuki tuki'});
      expect(res.body.title).to.be.equal('Lasagna de verduras');
    } catch (err) {
      console.log(err);
    }
  });
}); */