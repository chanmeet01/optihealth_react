import React from 'react';

function Logo() {
    return (
        <div className="flex items-center">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/26816adb82669622309b2955821ec6d3b2241bf4658cbff517ac122118291aee?placeholderIfAbsent=true&apiKey=fa2fda28f62e4d3c8f3265e901ac76ab" alt="" className="object-contain w-[65px] h-[71px] mr-4" />
            <div className="text-5xl max-md:text-4xl">
                Opti<span className="text-red-600">Health</span>
            </div>
        </div>
    );
}

export default Logo;