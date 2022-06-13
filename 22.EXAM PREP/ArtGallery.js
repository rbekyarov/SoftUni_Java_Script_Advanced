class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.personalitys = { "Vip": 500, "Middle": 250, "Normal": 50 };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        let posibleModel = Object.keys(this.possibleArticles);
        let searchModel = posibleModel.find(x => x == articleModel);

        if (!searchModel) {
            throw new Error("This article model is not included in this gallery!")
        }
        let searchName = this.listOfArticles.find(x => x.articleName == articleName);
        if (searchName) {
            searchName.quantity += quantity;
        } else {
            this.listOfArticles.push({ articleModel, articleName, quantity })
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }
    inviteGuest(guestName, personality) {
        if (this.guests.length > 0) {
            let searchGuestName = this.guests.find(x => x.guestName == guestName);
            if (searchGuestName) {
                throw new Error(`${guestName} has already been invited.`)
            }
        }
        this.guests.push({ guestName, points: this.personalitys[personality], purchaseArticle: 0 });

        return `You have successfully invited ${guestName}!`
    }
    buyArticle(articleModel, articleName, guestName) {
        let searchArtName = this.listOfArticles.find(x => x.articleName == articleName);

        if (!searchArtName) {
            throw new Error("This article is not found.")
        }
        if (searchArtName.articleModel != articleModel) {
            throw new Error("This article is not found.")
        }
        if (searchArtName.quantity == 0) {

            return `The ${articleName} is not available.`
        }
        let searchGuestName = this.guests.find(x => x.guestName == guestName);
        if (!searchGuestName) {
            return "This guest is not invited."
        }
        if (searchGuestName.points < this.possibleArticles[articleModel]) {
            return "You need to more points to purchase the article."
        } else {
            searchGuestName.points -= this.possibleArticles[articleModel];
            searchArtName.quantity--;
            searchGuestName.purchaseArticle++;
            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
        }
    }
    showGalleryInfo(criteria) {
        let info = [];
        if (criteria == 'article') {
            info.push("Articles information:")
            for (let art of this.listOfArticles) {
                info.push(`${art.articleModel} - ${art.articleName} - ${art.quantity}`)
            }
            return info.join('\n')
        } else {
            info.push("Guests information:")
            for (let g of this.guests) {
                info.push(`${g.guestName} - ${g.purchaseArticle}`)
            }
            return info.join('\n')
        }
    }
}
const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));