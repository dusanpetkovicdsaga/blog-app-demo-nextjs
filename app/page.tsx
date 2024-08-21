import Head from 'next/head';
import BlogPost from './BlogPost';
import image1 from '@/app/images/download.jpg'
import image2 from '@/app/images/images.jpg'
import image3 from '@/app/images/download (1).jpg'
import image4 from '@/app/images/images (1).jpg'
import image5 from '@/app/images/images (2).jpg'
import image6 from '@/app/images/images (3).jpg'
import image7 from '@/app/images/images (4).jpg'
import image8 from '@/app/images/images-5.jpg'

export default function Home() {
  return (
    <div className='bg-gray-200 p-20 '>
      <div className="container p-10 bg-gray-50 rounded-lg shadow-lg custom-shadow ">
        <Head>
          <title>Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="" >
          <div className='border-b-2 border-black flex justify-between '>
            <h1 className="text-4xl font-bold m-10">Blog</h1>
            <ul className='flex items-center mr-10 space-x-10'>
              <li>Consectetur</li>
              <li>Oluptatum</li>
              <li>Lorem ipsum</li>
              <li>Exercitationem..</li>
              <li>•</li>
              <li>•</li>
            </ul>
          </div>

          <div className='flex justify-center mt-4'>
            <h1>optifeofo</h1>
          </div>

          <div className='ml-10 mt-10 flex flex-wrap gap-4 mr-10'>
            <h1 className='mb-4 md:mb-0'>Lorem</h1>
            <h1 className='mr-40 d:mb-0'>deserunt.</h1>
            <h1>officiis.</h1>
            <h1>suscipi</h1>
            <h1>poiaf</h1>
            <h1>feiole</h1>
            <h1 className='mr-40'>Lorem</h1>
            <h1>feresqe</h1>
            <h1 className='ml-5'>latoroa</h1>
          </div>

          <div className='mt-10'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
              <BlogPost picture={image1} content="Lorem ipsum" />
              <BlogPost picture={image2} content="Pellentesque euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.Pellentesque euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl." />
              <BlogPost picture={image3} content="Pellentesque euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl." />
            </div>

            <div className='grid grid-cols-1 gap-4 mt-4 md:grid-cols-2'>
              <BlogPost picture={image4} content="Pellentesque euismod, nulla sit amet aliquam lacinia,." />
              <BlogPost picture={image5} content="" />
            </div>

            <div className='grid grid-cols-1 gap-4 mt-4 md:grid-cols-3'>
              <BlogPost picture={image6} content="" />
              <BlogPost picture={image7} content="" />
              <BlogPost picture={image8} content="" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}