class Api {
  #config;

  constructor(config) {
    this.#config = config;
  }

  /**
   * Login by username and password (Mock)
   *
   * @param {string} username User's nickname
   * @param {string} password User's password
   * @returns {Promise<unknown>} //todo token
   */
  fetchUser({ username, password }) {
    return new Promise((resolve, reject) => {


      setTimeout(() => {
        if (username && password) {
          resolve({username: 'test'});
        } else {
          reject('User not found');
        }
      }, 3000);
    })
  }
}

export default new Api({});
