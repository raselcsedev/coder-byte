import React from "react";
import ReactPlayer from "react-player";
import * as FaIcons from "react-icons/fa";

const CourseMaterial = () => {
  return (
    <div className="ml-12 pt-20 mb-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
            <h2 className="text-2xl font-semibold mb-6">Data Structure & Algorithm</h2>
           <ReactPlayer width="600px" height="320px" controls url="https://youtu.be/Mz9BlmST31w"></ReactPlayer>
           <div className="flex items-center space-x-6">
           <h2 className="flex items-center mt-4 text-blue-500"><span className="mr-2"><FaIcons.FaList></FaIcons.FaList></span> Save note</h2>
           <h2 className="flex items-center mt-4 text-blue-500">Download <span className="ml-2"><FaIcons.FaAngleDown></FaIcons.FaAngleDown></span></h2>
           </div>
           <div className="divider"></div>
           <h2 className="text-lg font-semibold mb-4">Transcript</h2>

           <div className="flex items-center">
           <div>
           <select class="select select-bordered w-full w-48">
          <option disabled selected>English</option>
          <option>Bangali</option>
          <option>Hindi</option>
          <option>German</option>
          <option>Arabic</option>
          <option>Italian</option>
          <option>Spanish</option>
        </select>
           </div>
            <h2 className="text-xs text-blue-500 font-bold ml-8">Help Us Translate</h2>
           </div>
          
          <p className="mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore minima atque ullam natus qui ducimus officia fugiat distinctio aspernatur repudiandae vitae dolorem, veniam accusantium dignissimos? Non maxime nostrum velit doloribus quisquam, ut rerum amet! Dicta voluptate recusandae id sed, ratione autem aliquid exercitationem dolore ad dolor, officiis architecto, nisi soluta nihil repudiandae quos perferendis consequuntur facilis est optio. Dolor nihil soluta omnis minima iste repellat labore quibusdam tempore. Excepturi voluptatem natus illum quaerat in adipisci quasi est repudiandae consectetur, labore maiores ea nihil numquam possimus error. Natus expedita blanditiis distinctio inventore laboriosam, dolorem deserunt, voluptatem eveniet itaque et consectetur vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, labore voluptate accusantium eligendi fugit, magni voluptates nesciunt saepe ab pariatur non cumque nobis assumenda repellat temporibus reiciendis! Nisi sed magni eius id vero. Fugiat sint quod, molestiae laborum aliquid minima aspernatur facilis, et quo mollitia hic ducimus error quos soluta distinctio, earum a architecto optio. Earum, iusto assumenda aliquam facilis doloribus quis a! Eius, architecto voluptates eum vero incidunt molestiae? Eaque consectetur harum illo aperiam dolor explicabo dignissimos, aut a, ex facere alias perferendis beatae voluptates corrupti atque natus similique, adipisci sint. Ipsa laborum possimus, deleniti officia amet magnam blanditiis.</p>
          <div className="divider"></div>
          <div className="flex items-center space-x-12">
            <h2 className="flex items-center text-blue-500"><span className="mr-2"><FaIcons.FaThumbsUp></FaIcons.FaThumbsUp></span>Like</h2>
            <h2 className="flex items-center text-blue-500"><span className="mr-2"><FaIcons.FaThumbsDown></FaIcons.FaThumbsDown></span>Dislike</h2>
            <h2 className="flex items-center text-blue-500"><span className="mr-2"><FaIcons.FaFlag></FaIcons.FaFlag></span>Report</h2>
            <h2 className="flex items-center text-blue-500"><span className="mr-2"><FaIcons.FaShare></FaIcons.FaShare></span>Share</h2>
          </div>
        </div>
        <div className="lg:ml-20">
            <h2 className="text-xl font-bold">Notes</h2>
            <h2 className="font-bold text-blue-500 flex items-center mt-2">View all notes</h2>
            <h2 className="mt-8 lg:mr-4 font-mono text-gray-500">Click the “Save Note” button below the lecture when you want to capture a screen. You can also highlight and save lines from the transcript below. Add your own notes to anything you’ve captured.</h2>
        </div>
      </div>
    </div>
  );
};

export default CourseMaterial;
