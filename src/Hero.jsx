import React from 'react';

function Hero() {
    return (
        <section className="relative">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/586dcb5ee6a44c16801fe5229d4894a57cf9a9b1a2580d28571136de39a5c489?placeholderIfAbsent=true&apiKey=fa2fda28f62e4d3c8f3265e901ac76ab" alt="" className="object-contain z-0 self-stretch w-full aspect-[1.28] max-md:max-w-full" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/83443368ce59687724af8253b4da9479afc2848b56825f21e734e59bfa085321?placeholderIfAbsent=true&apiKey=fa2fda28f62e4d3c8f3265e901ac76ab" alt="" className="object-contain z-0 mt-52 max-w-full aspect-[1.06] w-[742px] max-md:mt-10" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0187cd266a383ebf431faaaafb4d36801b6076387b9125153db7bed687204609?placeholderIfAbsent=true&apiKey=fa2fda28f62e4d3c8f3265e901ac76ab" alt="" className="object-contain absolute right-0 z-0 max-w-full aspect-[0.94] h-[821px] top-[299px] w-[771px]" />
            <div className="absolute z-0 text-6xl h-[166px] left-[81px] top-[372px] w-[724px] max-md:max-w-full max-md:text-4xl">
                Join a chat room to help <br /> with depression.{" "}
            </div>
            <div className="absolute z-0 h-[76px] left-[81px] top-[538px] w-[474px] max-md:max-w-full">
                Optihealth connects you to people <br /> like you for emotional support.
            </div>
            <button className="flex overflow-hidden absolute left-16 z-0 gap-2 justify-center items-center px-3 py-5 max-w-full h-16 tracking-tight leading-tight bg-red-600 rounded-3xl border-2 border-solid border-zinc-800 font-[number:var(--sds-typography-heading-font-weight)] min-h-[64px] text-[color:var(--sds-color-text-neutral-on-neutral)] text-[length:var(--sds-typography-heading-size-base)] top-[631px] w-[229px]">
                Get Started
            </button>
            <div className="absolute z-0 w-44 leading-tight text-black font-[number:var(--sds-typography-subtitle-font-weight)] h-[38px] left-[103px] opacity-[var(--sds-size-stroke-border)] text-[length:var(--sds-typography-subtitle-size-base)] top-[695px]">
                Need help?
            </div>
        </section>
    );
}

export default Hero;