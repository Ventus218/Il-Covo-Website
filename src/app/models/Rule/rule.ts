import { TileRepresentable } from "../tile-representable";

export class Rule implements TileRepresentable {
    text: String;
    imgUrl: String;

    constructor(text: String, imgUrl: String) {
        this.text = text
        this.imgUrl = imgUrl
    }
}
