export default function WithoutNextImageWithLazy(){
    return(
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1>Without Using Next Image with Lazy Loading</h1>
            <img
            src="/Web_Header_RED_BLUE_Gradient_Female_Hardhat.webp"
            alt="without next image"
            width={800}
            height={800}
            loading="lazy"
            />
        </div>
    )
}