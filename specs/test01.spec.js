import Api from '../utils/Api';

describe('API001', () => {

  it('Get the first user', () => {
    let res = Api.getUser(1);

    expect(res.name).to.equal('Leanne Graham');
  });

  it('Count users', () => {
    let res = Api.getAllUsers();

    expect(res.length).to.equal(10);
  });

});
