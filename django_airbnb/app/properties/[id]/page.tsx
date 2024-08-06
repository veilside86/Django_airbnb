import Image from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";

const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6>">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src='/beach_1.jpeg'
                    className="object-cover w-full h-full"
                    alt="Beach house"
                />
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property name</h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        8 guests - 4 bedrooms - 3 bathrooms
                    </span>

                    <hr />

                    <div className="py-6 flex item-center space-x-4">
                        <Image
                            src='/profile.png'
                            width={50}
                            height={50}
                            className="rounded-full"
                            alt="Host name"
                        />

                        <p><strong>John Kim</strong> is your host</p>
                    </div>

                    <hr />

                    <p className="mt-6 text-lg">
                        aasoeifja;woiefj a;woeijf ;oawejf o;awijef ;oajsdlkfja s;dlkfj a;lsdjf laskdfj aioehfoa iwehf
                        asdoifij oaisjfo aisjeofj aosiejfaesf
                        ashjfoajeoiwjfiennsdovn afjioawjef
                    </p>
                </div>

                <ReservationSidebar />

            </div>
        </main>
    )
}

export default PropertyDetailPage;