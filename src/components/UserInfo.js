export default class UserInfo {

    constructor(nameProfile,jobProfile) {
        this._nameProfile = nameProfile;
        this._jobProfile = jobProfile;
    }

   getUserInfo() {
     const getNameProfile = document.querySelector(this._nameProfile).textContent;
     const getJobProfile = document.querySelector(this._jobProfile).textContent;
     const infoProfile = {getNameProfile,getJobProfile};

     return infoProfile;
   }

   setUserInfo(obj) {
   const getNameProfile = document.querySelector(this._nameProfile);
   const getJobProfile = document.querySelector(this._jobProfile);

   getNameProfile.textContent = obj.name;
   getJobProfile.textContent = obj.job;
   }

}