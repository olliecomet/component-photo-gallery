import Component from './Component.js';

class ImageItem extends Component {
    renderHTML() {
        const image = this.props.image;

        return /*html*/`
            <li title="${image.description}">
                <img src="${image.url}" alt="${image.title}">
                <h3>${image.title}</h3>
                <p>Number of horns: ${image.horns}</p>
            </li>
        `;
    }
}

export default ImageItem;