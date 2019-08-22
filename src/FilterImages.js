import Component from './Component.js';

class FilterImages extends Component {
    onRender(select) {
        const onFilter = this.props.onFilter;

        select.addEventListener('input', () => {
            onFilter(select.value);

            // callback function prop????

        });
    }

    renderHTML() {
        const images = this.props.images;
        const types = getUniqueTypes(images);
        const optionsHTML = renderOptionsHTML(types);

        return /*html*/`
            <select name="keyword-filter" id="keyword-filter">
                <option value="all" selected>All Images</option>
                ${optionsHTML}
            </select>
        `;
    }
}

function getUniqueTypes(images) {
    const types = [];

    images.forEach(image => {
        if(!types.includes(image.keyword)) {
            types.push(image.keyword);
        }
    });

    types.sort();
    return types;
}

function renderOptionsHTML(keywords) {
    const optionsArray = keywords.map(keyword => {

        return /*html*/`
            <option value="${keyword}">${keyword}</option>
        `;
    });

    return optionsArray.join('');
}

export default FilterImages;