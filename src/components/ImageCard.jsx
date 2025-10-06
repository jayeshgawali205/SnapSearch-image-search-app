import React from "react";

const ImageCard = ({ image }) => {
  if (!image) return null;

  const { webformatURL, user, likes, downloads, tags } = image;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-10 my-8">
      <img src={webformatURL} alt={tags} className="w-full h-60 object-cover" />
      <div className="px-4 py-2">
        <div className="font-bold text-center text-xl mb-2">By {user}</div>
        <div className="flex justify-between text-sm mb-2">
          <div>
            <strong>Likes:</strong> {likes}
          </div>
          <div>
            <strong>Downloads:</strong> {downloads}
          </div>
        </div>
        <div className="pt-4 pb-2">
          {tags
            ?.split(",")
            .slice(0, 5)
            .map((tag) => (
              <span key={tag.trim()}
                className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{tag.trim()}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
