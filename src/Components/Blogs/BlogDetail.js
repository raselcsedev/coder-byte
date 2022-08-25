import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BlogDetail = () => {


    const ORIGINAL_TEXT =
        `
        In some package.json files, you might see a few lines like this:

{
  //...
  "peerDependencies": {
    "libraryName": "1.x"
  }
}
You might have already seen dependencies and devDependencies, but not peerDependencies.

dependencies are the packages your project depends on.

devDependencies are the packages that are needed during the development phase. Say a testing framework like Jest or other utilities like Babel or ESLint.

In both cases, when you install a package, its dependencies and devDependencies are automatically installed by npm.

peerDependencies are different. They are not automatically installed.

When a dependency is listed in a package as a peerDependency, it is not automatically installed. Instead, the code that includes the package must include it as its dependency.

npm will warn you if you run npm install and it does not find this dependency.

Example: let’s say package a includes dependency b:

a/package.json

{
  //...
  "dependencies": {
    "b": "1.x"
  }
}
Package b in turn wants package c as a peerDependency:

b/package.json

{
  //...
  "peerDependencies": {
    "c": "1.x"
  }
}
In package A, we must therefore add c as a dependency, otherwise when you install package b, npm will give you a warning (and the code will likely fail at runtime):

a/package.json

{
  //...
  "dependencies": {
    "b": "1.x",
    "c": "1.x"
  }
}
The versions must be compatible, so if a peerDependency is listed as 2.x, you can’t install 1.x or another version. It all follows semantic versioning.`


    const splitText = (text, from, to) => [
        text.slice(0, from),
        text.slice(from, to),
        text.slice(to)
    ];

    const HighlightedText = ({ text, from, to }) => {

        const [start, highlight, finish] = splitText(text, from, to);
        return (
            <p>
                {start}
                <span style={{ backgroundColor: "#00ff51ab" }}>{highlight}</span>
                {finish}
            </p>
        );
    };


    const [disabled, setDisabled] = useState(false);
    const [highlightSection, setHighlightSection] = useState({
        from: 0,
        to: 0
    });



    const synth = window.speechSynthesis;
    let utterance = new SpeechSynthesisUtterance(ORIGINAL_TEXT);
    utterance.addEventListener("start", () => setDisabled(true));
    utterance.addEventListener("end", () => setDisabled(false));
    utterance.addEventListener("boundary", ({ charIndex, charLength }) => {
        setHighlightSection({ from: charIndex, to: charIndex + charLength });
    });


    const handlePlay = () => {

        if (!synth) {
            console.error("no tts");
            return;
        }

        synth.speak(utterance);
        synth.resume();
    };

    const handlePause = () => {

        synth.pause()

    }
    const [listen, setListen] = useState(false)

    const handleListen = () => {
        setListen(true)
        setPause(false)
    }
    const [pause, setPause] = useState(true)

    const pauseHandler = () => {
        setPause(true)
        setListen(false)
    }
    const [user] = useAuthState(auth);

    return (
        <div className=''>

            <div className='mx-auto  w-[90%] '>

                <div>

                    <div className='md:flex items-center'>

                        <div className='mr-20'>
                            <p className='text-[gray]'>Published by </p>

                            <div className='flex mr-16 md:mr-0 mb-5 '>
                                <img loading='lazy' className='w-8 h-8 border rounded-full mr-2'
                                    src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220509120600/Learn-Data-Structures-and-Algorithms-Easily.gif'
                                    alt="" />
                                <div className='space-x-1 '>
                                    <span className='font-semibold'>{user?.displayName}</span>
                                    <span className='text-xs'>{'>'}Today </span>
                                </div>

                            </div>
                        </div>

                        <p className='mb-3 md:ml-5'>
                            <p className='text-[gray]'>Tags</p>
                            {/* <p className='text-[black]'>{course?.topic}</p> */}
                        </p>
                    </div>

                    <div className='grid grid-cols-12 gap-5'>
                        <div class="divider mt-6 col-span-5 h-[3%] bg-[brown]"></div>
                        <div class="divider mt-4 col-span-7"></div>
                    </div>
                    <h1 className='text-xl md:text-4xl mb-8 font-semibold'>
                        Peer dependencies in a Node module
                    </h1>
                    <img loading='lazy' className='my-8 border-2 rounded w-[70%]' src="https://i.ibb.co/dj2xGyT/Earth-Hour-Banner-Landscape.png" alt="" />

                </div>
                <div className="my-4 ">

                    {
                        listen && <button onClick={() => { handlePause(); pauseHandler() }} className="border-2 bg-black border-black hover:bg-slate-700 rounded-full w-28 h-10 flex items-center  space-x-1 py-3 pl-3 pr-2 text-white"> <span className='font-semibold '>Paush</span>

                            <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    }
                    {
                        pause && <button onClick={() => { handleListen(); handlePlay() }} className="border-2 border-black bg-black hover:bg-slate-700 rounded-full w-28 h-10 flex items-center  px-3 space-x-2 py-3 text-white"> <span className='font-semibold '>Listen</span>

                            <img className='w-8' src="https://i.ibb.co/vVVrLcZ/listen-on-google-podcasts-icon.png" alt="" />
                        </button>
                    }


                </div>

                <HighlightedText text={ORIGINAL_TEXT} {...highlightSection} />

            </div>

        </div>
    );
};

export default BlogDetail;