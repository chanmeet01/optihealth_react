import React from 'react';

function Features() {
    const features = [
        {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/907e25d4c45645b7f9a3ce42a815f7c7c9989c87069458d863da82b1a78c941f?placeholderIfAbsent=true&apiKey=fa2fda28f62e4d3c8f3265e901ac76ab",
            text: "Chat with more than 100+ friends",
            iconClass: "aspect-[1.15] h-[59px] left-[123px] top-[878px] w-[68px]"
        },
        {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/55c4f60f7b80b7febc27fe50680e6b19759cd809f64a4cf1fe8dee3f3737bc2f?placeholderIfAbsent=true&apiKey=fa2fda28f62e4d3c8f3265e901ac76ab",
            text: "Free mind games to play",
            iconClass: "aspect-[1.03] h-[68px] left-[515px] top-[867px] w-[70px]"
        }
    ];

    return (
        <section className="flex justify-around mt-20">
            {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                    <img loading="lazy" src={feature.icon} alt="" className={`object-contain mr-4 ${feature.iconClass}`} />
                    <div className="leading-10 text-black font-[number:var(--sds-typography-subtitle-font-weight)] opacity-[var(--sds-size-stroke-border)] text-[length:var(--sds-typography-subtitle-size-base)]">
                        {feature.text}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Features;