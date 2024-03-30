import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";



const Profile = () => {
    const { user, logOut } = useContext(AuthContext);
    const { displayName, email, emailVerified, photoURL, uid } = user;

    const signOut = () => {
        logOut()
    }


    return (
        <div className="min-h-[60vh] mt-20 mb-0 md:mb-12 xl:mb-0 max-w-7xl lg:mx-auto mx-5">
            <div className="mt-32">
                <div className="mx-auto flex flex-col justify-center items-center gap-5">
                    <img
                        className={`rounded-full w-[100px] md:w-[170px] ${emailVerified ? "" : "h-[96px] md:h-[164px]"}`}
                        src={photoURL ? photoURL : "https://i.ibb.co/7j59Hhq/avatar.png"}
                        alt={`image of ${displayName}`}
                    />

                </div>



                <div className="mx-auto w-fit mt-10">

                    <h4 className="text-start">
                        <span className="text-lg text-sky-500 font-bold">Username : </span>
                        <span className="text-white text-[21px]"> {displayName ? displayName : "Anonymous"}</span>
                    </h4>
                    <h4 className="text-start">
                        <span className="text-lg text-sky-500 font-bold">Email : </span>
                        <span className="text-white text-[19px]"> {email}</span>
                    </h4>
                    <h4 className="text-start">
                        <span className="text-lg text-sky-500 font-bold">User Id :</span>{" "}
                        <span className="text-white text-[19px]">{uid}</span>
                    </h4>
                    <h4 className="text-start">
                        <span className="text-lg text-sky-500 font-bold">Email Verified : </span>
                        <span className={`${emailVerified ? 'text-blue-700' : 'text-red-600'} text-[19px] font-bold`}>
                            {" "}
                            {emailVerified ? "True" : "False"}
                        </span>
                    </h4>
                    <div className="flex space-x-4">
                        <button onClick={signOut} className="w-[50%] bg-sky-500 text-black hover:text-gray-900 hover:bg-slate-300 rounded-md font-bold text-[13px] py-[5px] mt-6">logout</button>

                        <button onClick={signOut} className="w-[50%] bg-sky-500 text-black hover:text-gray-900 hover:bg-slate-300 rounded-md font-bold text-[13px] py-[5px] mt-6">Switch Account</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;
