import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FcLike } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pdf from 'react-to-pdf';


const FoodDetails = () => {
  const [disable, setDisable] = useState(false)
 ;
  const handleFavourite = () => {
    toast("Favourite added!")
    setDisable(true)
  }
  const details = useLoaderData()
  const {id, picture,name,description,likes,ingredients,yearsOfExperience} = details
  console.log(details);

  const ref = React.createRef();
  return (
    <div>
      <div className="card mx-auto w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={picture} alt="chef" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>Experiences: {yearsOfExperience}</p>
    <p> Likes: {likes} <span><FcLike className='inline'/></span></p>
          {/*<li> Food Ingredient:{ingredients}</li>
          <p> Details:{description}</p>*/}
          <div ref={ref}>
              <li> Food Ingredient:{ingredients}</li>
              <p> Details:{description}</p>
          </div>
    <div className="card-actions flex mx-4">
            <button onClick={handleFavourite} disabled={disable} className="btn btn-primary">Favorite</button>
            <Pdf  targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className=' btn rounded-xl border-x-2 bg-zinc-600' onClick={toPdf}>Download Pdf</button>}
      </Pdf>
    </div>
  </div>
</div>
<ToastContainer />
    </div>
  );
};

export default FoodDetails;


//<div ref={ref}>
//      <li> Food Ingredient:{ingredients}</li>
//         <p> Details:{description}</p>
//      </div>