import Image from "next/image";

export default function WithNextImageWithoutLazy(){
    return(
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1>Using Next Image Without Lazy Loading</h1>
            <Image
            src="https://afl-delivery.stylelabs.cloud/api/public/content/64e59217518947ac94ed2d4a41cf2620?v=b28ff4b3"
            alt="next image"
            width={800}
            height={800}
            priority
            />
        </div>
    )
}