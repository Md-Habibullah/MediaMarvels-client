

const RatingItem = ({ number }) => {
    const num = parseInt(number)

    let x;
    switch (num) {
        case 1:
            // Code to execute if number is 1
            x = <>
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#FFC101]"
                />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#E0E0E0]"
                />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#E0E0E0]"
                />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#E0E0E0]"
                />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#E0E0E0]"
                />
            </>
            break;


        case 2:
            // Code to execute if number is 2
            x = <>
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#FFC101]"
                />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#FFC101]"
                />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#E0E0E0]"
                />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#E0E0E0]"
                />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#E0E0E0]"
                />
            </>
            break;


        case 3:
            // Code to execute if number is 3
            x = <>
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#FFC101]"
                />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#FFC101]"
                />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#FFC101]"
                />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#E0E0E0]"
                />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#E0E0E0]"
                />
            </>
            break;


        case 4:
            // Code to execute if number is 3
            x = <>
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#FFC101]"
                />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#FFC101]"
                />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#FFC101]"
                />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#FFC101]"
                />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#E0E0E0]"
                />
            </>
            break;


        case 5:
            // Code to execute if number is 3
            x = <>
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#FFC101]"
                />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#FFC101]"
                />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#FFC101]"
                />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#FFC101]"
                />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#FFC101]"
                />
            </>
            break;


        default:
            // Code to execute if number doesn't match any case
            console.log("Number doesn't match any case");
    }
    return x
};

export default RatingItem;