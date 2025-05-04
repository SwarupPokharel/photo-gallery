import { type ImageTypes } from "./Images"

export const ImageTile = ({ photo, index, handleClick }: { photo: ImageTypes, index: number, handleClick: Function }) => {
    const text: string = photo?.type;
    const photoType: string = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();


    return (
        <div className="flex flex-wrap justify-center p-2">
            <div className="card bg-base-100 w-full shadow-sm max-w-sm">
                <figure>
                    <img
                        className="object-cover object-center h-40 w-full hover:scale-120 transition-all duration-350 cursor-pointer md:h-48"
                        src={photo.webformatURL}
                        alt={photo.tags}
                        onClick={() => handleClick(index)} />
                </figure>
                <div className="card-body">
                    <div className="badge badge-secondary">{photoType}</div>
                    <p>{photo.tags}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">View: {photo.views}</div>
                        <div className="badge badge-outline">Like: {photo.likes}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
