export default class Sun {
    constructor() {
        this.element = document.querySelector('.sun');
        this.initialTop = 0;
        this.initialLeft = 0;
        this.isUpping = true;
        this.topContainer = 0;
        this.heightContainer = 0;
        this.ratioMarginWithTop = 0.1;
        this.marginWithTop = 0;

        // this.ratioY = Math.random() * 0.55 + 0.05; // entre 0.05 et 0.6 strict min et max
        this.ratioX = Math.random() * 0.5 + 0.025;
        this.ratioY = Math.random() * 0.4 + 0.1;
    }

    /**
     * Recalcule la position à la suite d'un resize
     * @param {DOMRect} rect Rectangle du container visuel
     */
    recalculatePosition(rect) {
        this.heightContainer = Math.floor(rect.height);
        // Espacement avec le top du container
        this.marginWithTop = Math.floor(rect.height * this.ratioMarginWithTop);
        // Top du container + Espacement, afin que le soleil n'est pas à monter tout en haut avant de redescendre
        this.topContainer = Math.floor(rect.top + this.marginWithTop);

        // Adapte la position dans le container de façon aléatoire
        this.initialTop = Math.floor(rect.top + rect.height * this.ratioY);
        this.initialLeft = Math.floor(rect.left + rect.width * this.ratioX);
        this.element.style.top = this.initialTop + 'px';
        this.element.style.left = this.initialLeft + 'px';
    }

    /**
     * Récupère la position top et left du soleil
     * @returns {{left: Number, top: Number}}
     */
    getInitialPosition() {
        return {
            left: this.initialLeft,
            top: this.initialTop,
        };
    }

    /**
     * Récupère la différence en y du soleil avec le top du container
     * @param {Number} y Valeur à comparer
     * @returns {Number} Valeur positive
     */
    getDiffFromMaxTop(y) {
        return Math.abs(y - this.topContainer);
    }

    /**
     * Retourne le ratio du positionnement Y du soleil par rapport au container
     * @param {*} y
     * @returns
     */
    getRatioYWithContainer(y) {
        return y / this.heightContainer;
    }

    /**
     * Génère la règle pour modifier la taille du soleil
     * @param {Number} ratio
     */
    setScale(ratio) {
        this.element.style.transform = `scale3d(${1 + ratio * 2}, ${1 + ratio * 2}, 1)`;
    }

    setScaleFromX(x = 0) {
        let diffFromMaxTop = this.getDiffFromMaxTop(+this.initialTop - x * 0.5);
        let ratioWithContainer = this.getRatioYWithContainer(diffFromMaxTop);
        this.setScale(ratioWithContainer);

        // Retourne les valeurs au cas où on en ait besoin par la suite (utile lors du mouvement)
        return {
            diffFromMaxTop,
            ratioWithContainer,
        };
    }

    /**
     * 
     * @param {Number} x Valeur correspondant au niveau du scroll par rapport à 0
     */
    move(x) {
        // Met à jour la taille du soleil
        let v = this.setScaleFromX(x);

        // Met à jour la position
        this.element.style.top = v.diffFromMaxTop + this.topContainer + 'px';
        this.element.style.left = this.initialLeft + x + 'px';
    }
}
