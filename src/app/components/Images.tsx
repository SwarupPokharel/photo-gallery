import axios from "axios";
import { unstable_cache } from "next/cache";
import Slidebox from "./Slidebox";

export type ImageTypes = {
    id: number;
    tags: string;
    webformatURL: string;
    largeImageURL: string;
    type: string;
    likes: number;
    views: number;
}

export type Slide = {
    src: string;
    width: number;
    height: number;
}

const imagesSlides = (images: ImageTypes[]): Slide[] => {
    const newImages: Slide[] = images.reduce((acc: Slide[], cur) => {
        acc.push({
            src: cur.largeImageURL,
            width: 3840,
            height: 5070
        });
        return acc;
    }, []);
    return newImages;
}

const getCachedImages = unstable_cache(async (images) => imagesSlides(images), ['slide-image']);

const getImages = async (searchData: string): Promise<{ hits: ImageTypes[] } | undefined> => {
    try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        const res = await axios.get(`https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${searchData}`);
        return res.data;
    } catch (error) {
        console.log("Failed to fetch data : ", error);
    }
}
export default async function Images({ searchData }: { searchData: string }) {
    const data = await getImages(searchData);
    if (!data || !data.hits) {
        return <div>No images found.</div>;
    }
    const images: ImageTypes[] = data.hits;
    const cachedSlide = await getCachedImages(images);
    return (
        <div>
            <Slidebox images={images} imagesSlides={cachedSlide} />
        </div>
    )
}
