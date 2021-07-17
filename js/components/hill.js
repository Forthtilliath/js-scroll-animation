const HILL_MARGIN = 500;

export default class Hills {
    constructor(canvas, color, distance) {
        this.canvas = canvas;
        this.pikes = [];
        this.color = color;
        this.distance = distance;
        this.initialize();
    }
    initialize() {
        const pikesNumber = Math.random() * 20 + 10;
        const distBetween = this.canvas.width / pikesNumber;
        for (let n = 0; n < pikesNumber; n++) {
            this.pikes.push({
                x: -HILL_MARGIN + n * distBetween,
                y: Math.random() * 25 * this.distance
            });
        }
    }
    render(context) {
        context.fillStyle = this.color;
        context.strokeStyle = "none";
        context.beginPath();
        const baseY = this.canvas.height - ROAD_HEIGHT;
        context.moveTo(-HILL_MARGIN, baseY);

        this.pikes.forEach(pike => {
            context.lineTo(pike.x, baseY - pike.y);
        });
        
        context.lineTo(this.canvas.width + HILL_MARGIN, baseY);
        context.lineTo(-HILL_MARGIN, baseY);
        context.closePath();
        context.fill();
    }
    animate(timestamp) {
        this.pikes.forEach(
            pike => (pike.x += ROAD_TRAVEL_SPEED / this.distance)
        );
        this.cleanup();
    }
    cleanup() {
        this.pikes
            .filter(pike => pike.x >= (this.canvas.width + HILL_MARGIN))
            .forEach(pike => {
                pike.x -= this.canvas.width + HILL_MARGIN*2;
            });
        
        this.pikes.sort((a, b) => a.x - b.x);
    }
}