import { Link } from "react-router-dom"


const Newsletter = () => {
  return (
    <div>
        <h2 className="text-3xl font-semibold capitalize text-center my-8 mb-8">
            Follow products and discount on Instagram    
        </h2>
        {/* insta grig */}
        <div className="flex flex-wrap gap-4 items-center justify-center mb-20">
            <Link to="/">
                <img src="/images/instagram/img1.png"/>
            </Link>
            <Link to="/">
                <img src="/images/instagram/img2.png"/>
            </Link>
            <Link to="/">
                <img src="/images/instagram/img3.png"/>
            </Link>
            <Link to="/">
                <img src="/images/instagram/img4.png"/>
            </Link>
            <Link to="/">
                <img src="/images/instagram/img5.png"/>
            </Link>
            <Link to="/">
                <img src="/images/instagram/img6.png"/>
            </Link>
        </div>

        {/* NEWS LETTER */}

        <div>
            <h2 className="text-3xl font-semibold capitalize text-center my-8 mb-8">Or subscribe to the newslatte</h2>
            <form className="md:w-1/2 mx-auto text-center">
            <input type="email" name="email" id="email" placeholder="Email address..." className="h-8
                bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5
                placeholder:text-black/50 me-4"/>
                <input type="submit" value={"Submit"} className="bg-black text-white px-6 py-1 rounded-sm"/>
            </form>
        </div>
    </div>
  )
}

export default Newsletter