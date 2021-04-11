export default class Card{
    constructor({obj, handleCardClick, handleCardDelete, handleLike}, templateSelector){
        this.templateSelector = templateSelector;
        this._objectName = obj['name'];
        this._objectLink = obj['link'];
        this._objectOwnerId = obj['owner']['_id']
        this._id = obj['_id'];
        this._objectLikes = obj['likes'];
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
        this._handleLike = handleLike;
    }

    createCard(ownerID){
        this.$card = document.querySelector(this.templateSelector)
                            .content
                            .querySelector('.cards__item')
                            .cloneNode(true);

        this.$cardImage = this.$card.querySelector('.cards__image');
        this.$cardImageText = this.$card.querySelector('.cards__text');
        this.$cardLikeButton = this.$card.querySelector('.cards__like');
        this.$cardLikeNumber = this.$card.querySelector('.cards__like-number');
        this.$cardDeleteButton = this.$card.querySelector('.cards__delete-btn');
        
        if (ownerID !== this._objectOwnerId){
            this.$cardDeleteButton.setAttribute("style", "display:none");
        }

        if (this._isOwnerLike(this._objectLikes, ownerID)){
            this.likeImage();
        }

        this.$cardImageText.textContent = this._objectName;
        this.$cardLikeNumber.textContent = this._objectLikes.length;
        this.$cardImage.src = this._objectLink;
        this.$cardImage.alt = this._objectName;

        this._setEventListeners();
        
        return this.$card;
    }

    _isOwnerLike(likes, ownerID) {
        const ownerlikes = likes.filter(function (el) {
            return el._id === ownerID;
        })
        return ownerlikes.length > 0;
    }

      

    getId() {
        return this._id;
    }

    getLikeStatus() {
        return this.$cardLikeButton.classList.contains('cards__like_active');
    }

    likeImage(){
        this.$cardLikeButton.classList.toggle('cards__like_active');
    }

    displayLikeNumber(result) {
        this.$cardLikeNumber.textContent = result
        if(result <= 0) {
            this.$cardLikeNumber.textContent = "0";
        }
    }

    deleteImage() {
        this.$card.remove();
    }

    _setEventListeners() { 
        this.$cardLikeButton.addEventListener('click', ()=>{
            this._handleLike();
        })

        this.$cardDeleteButton.addEventListener('click', (evt)=>{
            evt.preventDefault();
            this._handleCardDelete();
        })

        this.$cardImage.addEventListener('click', ()=> {
            this._handleCardClick(this._objectName, this._objectLink);
        })
    } 
}