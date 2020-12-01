export default class UserInfo {

  constructor(dataProfile) {
      this._dataProfile = dataProfile;
      this._nameProfile = document.querySelector(this._dataProfile.profileTitle);
      this._jobProfile = document.querySelector(this._dataProfile.profileSubtitle);
  }

 getUserInfo() {
  const infoProfile = {name: this._nameProfile.textContent, job: this._jobProfile.textContent};
  return infoProfile;
 }

  setUserInfo(userData) {
    this._nameProfile.textContent = userData.name;
    this._jobProfile.textContent = userData.job;
   }
}
