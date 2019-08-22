import Component from './Component.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
import FilterImages from './FilterImages.js';
import images from '../data/images.js';

class App extends Component {
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const props = {
            images: images
        };

        const imageList = new ImageList(props);
        const imageListDOM = imageList.renderDOM();
        
        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(imageListDOM);
        
        const filterImagesProps = {
            images: images,
            onFilter: (imageType) => {
                let filteredImages;

                if(imageType === 'all') {
                    filteredImages = images;
                }
                else {
                    filteredImages = images.filter(image => {
                        return image.type === imageType;
                    });
                }

                const updateProps = { images: filteredImages };
                imageList.update(updateProps);
            }
        };

        const filterImages = new FilterImages(filterImagesProps);
        const filteredImagesDOM = filterImages.renderDOM();

        const optionsSection = dom.querySelector('.options-section');
        optionsSection.appendChild(filteredImagesDOM);
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- Header appears here! -->
  
                <main> 
                    <section class="options-section"> 
                        <!-- Filter appears here! -->
                    </section> 

                    <section class="list-section"> 
                        <!-- Images appear here! -->
                    </section> 

                    <footer> 
                        <p>&copy Ollie is Awesome LLC 2019</p> 
                    </footer> 
                </main>
            </div> 
        `;
    }
}

export default App;