export default class UserInfo{
    constructor({userSelector, jobSelector}){
        this._username = document.querySelector(userSelector);
        this._job = document.querySelector(jobSelector);
    }

    getUserInfo(){
        return {name: this._username.textContent,
                job: this._job.textContent};
    }

    setUserInfo(formData){
        this._username.textContent = formData.profileUsername;
        this._job.textContent = formData.profileBio;
    }
}