export default function WithoutNextImage(){
    return(
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1>Without Using Next Image without lazy loading</h1>
            <img
            src="https://afl-delivery.stylelabs.cloud/api/public/content/64e59217518947ac94ed2d4a41cf2620?v=b28ff4b3"
            alt="without next image"
            width={800}
            height={800}
            />
        </div>
    )
}