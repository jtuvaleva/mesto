export default class Card{
    constructor(obj, templateSelector, openImageFunc){
        this.templateSelector = templateSelector;
        this._objectName = obj['name'];
        this._objectLink = obj['link'];
        this._openPopupImage = openImageFunc;
    }

    createCard(){
        this.$card =  document.querySelector(this.templateSelector)
                            .content
                            .querySelector('.cards__item')
                            .cloneNode(true);
        this.$cardImage = this.$card.querySelector('.cards__image');
        this.$cardImageText = this.$card.querySelector('.cards__text');
        this.$cardLikeButton = this.$card.querySelector('.cards__like');
        this.$cardDeleteButton = this.$card.querySelector('.cards__delete-btn');

        this.$cardImageText.textContent = this._objectName;
        this.$cardImage.src = this._objectLink;
        this.$cardImage.alt = this._objectName;

        this._setEventListeners();
        
        return this.$card;
    }

    _likeImage() {
        this.$cardLikeButton.classList.toggle('cards__like_active');
    }

    _deleteImage() {
        this.$card.remove();
    }

    _setEventListeners() { 
        this.$cardLikeButton.addEventListener('click', ()=>{
            this._likeImage();
        })

        this.$cardDeleteButton.addEventListener('click', ()=>{
            this._deleteImage();
        })

        this.$cardImage.addEventListener('click', ()=>{
            this._openPopupImage(this._objectName, this._objectLink);
        })
    } 
}

