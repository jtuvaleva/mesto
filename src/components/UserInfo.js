export default class UserInfo{
    constructor({userSelector, jobSelector, avatarSelector}){
        this._username = document.querySelector(userSelector);
        this._job = document.querySelector(jobSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

    setUserInfo(formData) {
        this._username.textContent = formData.name;
        this._job.textContent = formData.about;
        this._ownerId = formData._id;
        this._avatar.src = formData.avatar;
    }

    getUserInfo(){
        if (this._ownerId){
            return {name: this._username.textContent,
                job: this._job.textContent,
                ownerId: this._ownerId
               };
        }
    }
}