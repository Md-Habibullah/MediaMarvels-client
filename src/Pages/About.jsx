import { useState } from "react";


const About = () => {
    const [showMore, setShowMore] = useState(false);

    const showmoreDetailes = () => {
        setShowMore(!showMore)
    }

    return (
        <>
            {/* about */}

            <div style={{ width: '70%', marginTop: '50px', background: 'white', textAlign: 'justify', borderRadius: '1rem', marginBottom: '2.5rem', paddingTop: '1.5rem', paddingBottom: '1.5rem', paddingLeft: '4rem', paddingRight: '4rem' }} className="text-justify md:w-[74%] md:rounded-2xl mx-auto bg-white md:mt-8 md:mb-10 py-10 px-6 md:px-16">
                <h1 className="text-2xl md:text-4xl font-bold text-slate-800">About Us:</h1>
                <div className="text-black mt-5">
                    <p>
                        Welcome to gamersConX, where gaming enthusiasts unite for an unparalleled celebration of all things gaming! At gamersConX, we take pride in curating unforgettable experiences for gamers, developers, and industry aficionados. With a passion for fostering community connections, our events go beyond the traditional gaming convention. We offer a dynamic platform for attendees to immerse themselves in the latest games, cutting-edge technology, and interactive experiences. Born out of a shared love for all things gaming, gamersConX is more than a convention; its a dynamic platform designed to elevate the gaming experience for enthusiasts worldwide. Our story begins with a simple yet powerful idea: create a space where gamers of all backgrounds can converge, share their passion, and be part of a vibrant community.
                    </p> <br />

                    <p>
                        Founded on the belief that gaming is more than just a pastime; it is a culture, gamersConX is dedicated to creating a space where players of all levels can come together to share their love for gaming. Our meticulously planned events feature a diverse array of activities, from intense esports tournaments and hands-on workshops for aspiring game developers to engaging panel discussions with industry experts.What defines gamersConX is our unwavering commitment to inclusivity. We believe that the world of gaming is vast and diverse, and our events reflect this ethos. From electrifying esports tournaments that draw in competitive players to hands-on workshops where aspiring game developers can hone their craft, gamersConX is a melting pot of creativity and skill. Our mission is to cater to every facet of gaming, ensuring that whether you are a casual player, a professional gamer, or an industry expert, there is something uniquely tailored for you.
                    </p> <br />

                    <p>
                        What sets gamersConX apart is our commitment to inclusivity and innovation. We showcase not only blockbuster titles but also provide a spotlight for indie developers, ensuring a diverse and enriching gaming experience for everyone. Our interactive maps, live esports streaming, and exclusive merchandise are just a glimpse of the exciting features that await you. Our events are meticulously curated to offer an immersive experience. Navigate the gaming landscape with our interactive maps, witness the adrenaline-pumping action of live esports streaming, and indulge in the latest exclusive merchandise that captures the spirit of gaming culture. The heart of gamersConX beats with the rhythm of the gaming community, and our dedication to this community is unwavering. {showMore && <>At the core of our philosophy is the belief that gaming is not just a pastime; it is a lifestyle. It is a medium that connects people, transcending geographical boundaries and cultural differences. Through gamersConX, we aim to celebrate this unity and provide a platform where friendships are forged, ideas are exchanged, and memories are made.</>}</p> <br />

                    {
                        showMore && <>
                            <p>
                                At gamersConX, our commitment to the gaming community extends beyond the pixels on the screen. We understand that gaming is not just a hobby; it is a culture, a lifestyle that brings people together in unparalleled ways. Our events are designed to be more than a mere showcase of games; they are a celebration of the shared experiences, friendships, and stories that make gaming a vibrant and evolving phenomenon. As we delve into the future, gamersConX is poised to break new ground. From our pioneering approaches to virtual reality gaming to our dedication to amplifying the voices of indie developers, we strive to be at the forefront of the gaming industry is evolution. Our vision is to create a nexus where gaming enthusiasts can explore the latest trends, immerse themselves in cutting-edge technologies, and participate in the ongoing narrative of the gaming world. What sets gamersConX apart is not just the events we organize but the sense of community we foster.
                            </p> <br />

                            <p>
                                From passionate discussions in our panel sessions to the shared excitement during cosplay showcases, gamersConX is more than an event — it is an interactive tapestry of stories, skills, and shared passions. Join us in this adventure, where every gamer is a protagonist, and every event is a chapter in the ongoing saga of gaming excellence. Together, lets continue to elevate the gaming experience at gamersConX, where the future of gaming unfolds with every click, every cheer, and every shared moment. Welcome to a gaming journey like no other!
                            </p> <br />

                            <p>
                                Join us at gamersConX as we redefine the gaming convention experience. Whether you are a seasoned pro, a casual gamer, or someone simply curious about the gaming world, theres something for everyone. Lets create lasting memories and celebrate the incredible world of gaming together. Welcome to gamersConX where gaming dreams come to life!
                            </p>
                        </>

                    }
                    <button onClick={showmoreDetailes} className="text-black hover:underline font-semibold">{showMore ? "Show less" : "Show More..."}</button>



                </div>

                <div className="flex items-center justify-around mt-8 md:mt-0 mx-auto w-[215px]">
                    <div className="">
                        <h2 className="mr-2 font-bold text-blue-500">CEO: </h2>
                    </div>

                    <a href="https://github.com/md-Habibullah">
                        <div style={{ display: 'flex', alignItems: 'center' }} className="flex items-center">
                            <div className="avatar">
                                <div style={{ width: '44px', borderRadius: '9999px', margin: '10px' }} className="w-11 rounded-full">
                                    <img src="https://i.ibb.co/NS0wWX4/habib.jpg" />
                                </div>
                            </div>

                            <div className=" leading-none">
                                <h2 className="text-black font-semibold ml-1">Md. Habibullah</h2>
                                <h2 className="text-gray-700 text-[10px] mt-0 ml-1">Rangpur, Bangladesh</h2>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="text-gray-500 mt-8">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">Contact US:</h2>
                    <p><span className="font-semibold text-black">Whatsapp:</span> +8801717562***</p>
                    <p><span className="font-semibold text-black">Facebook:</span> https://facebook.com/gamers-conx</p>
                    <p><span className="font-semibold text-black">Email:</span> gamersconx@gmail.com</p>
                </div>

            </div>


        </>
    );
};

export default About;