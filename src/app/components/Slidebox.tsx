"use client"

import { useState } from "react";
import { ImageTypes, Slide } from "./Images"
import Lightbox from "yet-another-react-lightbox";
import { ImageTile } from "./ImageTile";
import 'yet-another-react-lightbox/styles.css';
import zoom from "yet-another-react-lightbox/plugins/zoom";


const Slidebox = ({ imagesSlides, images }: { imagesSlides: Slide[], images: ImageTypes[] }) => {
    const [index, setIndex] = useState(-1);

    const handleClick = (index: number) => {
        setIndex(index);
    }
    return (
        <div>
            <div className="grid px-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6 mt-4">
                {
                    images.map((image: ImageTypes, index: number) => (
                        <ImageTile photo={image} key={image.id} index={index} handleClick={handleClick} />
                    ))
                }
            </div>
            <Lightbox
                index={index}
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={imagesSlides}
                plugins={[zoom]}
            />

        </div>
    );
}

export default Slidebox;
