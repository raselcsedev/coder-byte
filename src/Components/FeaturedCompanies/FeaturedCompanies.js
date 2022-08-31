import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import { useQuill } from "react-quilljs";
import { useForm } from "react-hook-form";
import "quill/dist/quill.snow.css"; // Add css for snow theme


const FeaturedCompanies = () => {

  return (
    <div>
      <div className='bg-[#171B26] h-[35vh] md:h-[80vh] pt-[10%]'>

        <img className='md:w-[80%] px-4 pt-10 mx-auto' src="https://i.ibb.co/kDHsQxr/scrnli-7-21-2022-12-04-49-PM.png" alt="" />

      </div>

    </div>

  );
};

export default FeaturedCompanies;