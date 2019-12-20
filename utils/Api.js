import { get, post, put } from './../utils/Request';
import paths from '../resources/Paths';
import { sprintf } from 'sprintf-js';

class Api {

  getAllPosts() {
    return get(paths.GET_PORTS);
  }

  getPost(postId) {
    return get(sprintf(paths.GET_POST, postId));
  }

  getUserPosts(userId) {
    return get(sprintf(paths.GET_USER_POSTS, postId));
  }

  postNewPost(postData) {
    return post(paths.POST_NEW_POST, postData);
  }

  getAllUsers() {
    return get(paths.GET_USERS);
  }

  getUser(userId) {
    return get(sprintf(paths.GET_USER, userId));
  }

}

export default new Api();
