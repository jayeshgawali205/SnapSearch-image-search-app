import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState("");

    useEffect(() => {
        fetch(
            `https://pixabay.com/api/?key=${
                import.meta.env.VITE_PIXABAY_API_KEY
            }&q=${term}&image_type=photo&pretty=true`
        )
            .then((res) => res.json())
            .then((data) => {
                setImages(data.hits);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, [term]);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ImageSearch searchText={(text) => setTerm(text)} />

            {!isLoading && images.length === 0 && (
                <h1 className="text-2xl sm:text-3xl text-center mx-auto my-16 sm:my-28 px-4">
                    No Images found
                </h1>
            )}

            {isLoading ? (
                <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center mx-auto my-20 sm:my-32 px-4">
                    Loading...
                </h1>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {images.map((image) => (
                        <ImageCard key={image.id} image={image} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
