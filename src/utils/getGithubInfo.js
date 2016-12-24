import axios from 'axios'

/**
 * 获取用户 Github 基本信息
 * @param  {[type]} username [description]
 * @return {[type]}          [description]
 */
function getUserInfo( username ){
  return axios.get(`https://api.github.com/users/${username}`)
}

/**
 * 获取用户 Github 仓库信息
 * @param  {[type]} username [description]
 * @return {[type]}          [description]
 */
function getUserRepos( username ) {
  return axios.get(`https://api.github.com/users/${username}/repos`)
}

function getGithubInfo( username ){
  return axios.all([ getUserInfo( username ), getUserRepos( username)] )
    .then( arr => {
      return {
        userInfo: arr[0].data,
        userRepos: arr[1].data
      }
    });
}

export default getGithubInfo
