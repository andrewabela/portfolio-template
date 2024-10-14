import React from "react";

interface IntroProps {
    tags?: string[];
}

const Tags: React.FC<IntroProps> = ({ tags = [] }) => {
    return (
        <div className='flex flex-wrap'>
            {tags.map((tag, index) => (
                <div key={index} className='lora text-xs text-black bg-white bg-opacity-60 text-opacity-75 rounded-full px-2 py-1 m-1'>{tag}</div>
            ))}
        </div>
    );
}

export default Tags;