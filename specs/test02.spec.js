import Api from '../utils/Api';

describe('API002', () => {

  it('Add new post', () => {
    let post = { title: 'foo', body: 'bar', userId: 1 };
    let res = Api.postNewPost(post);

    expect(res.id).to.equal(101);
  });

  it('Count user posts', () => {
    let res = Api.getAllUsers(1);

    expect(res.length).to.equal(10);
  });

});
