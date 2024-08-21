import { FC } from 'react';

import Image, { StaticImageData } from 'next/image';


interface BlogPostProps {
  picture: StaticImageData;
  content: string;
}

const BlogPost: FC<BlogPostProps> = ({ picture, content }) => {
  return (
    <div className="bg-white  rounded-lg p-4 mb-4 ">
         <div className="relative  h-64 mb-4">
          <Image
            src={picture} 
            alt="Blog post image" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-t-lg"
          />
        </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default BlogPost;