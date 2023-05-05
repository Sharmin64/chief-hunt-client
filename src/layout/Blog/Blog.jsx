import React from 'react';
import Pdf from 'react-to-pdf';

const Blog = () => {
  const ref = React.createRef();
  return (
    <div className='text-center container mx-auto bg-[#e8f3ff] mt-12'>
      <h1 className='text-6xl text-yellow-900'>Blog Page</h1>
      <div ref={ref}>
      <h1 className='text-center text-3xl font-bold text-[#4951d2] font-serif'>Answer to Question blog</h1>
      <div className='card content-center border-spacing-2 rounded p-5'>
        <h2 className='text-3xl text-amber-500'>Tell us differences between uncontrolled and controlled components</h2>
        <p className='break-words'>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally</p>
      </div>
      <div className='card content-center border-spacing-2 rounded p-5'>
        <h2 className='text-3xl text-green-700'>How to validate React props using PropTypes</h2>
        <p className='break-words'>propTypes is used for props validation. If some of the props are not using the correct type that we assigned, we will get a console warning. After we specify validation patterns, we will set App. defaultProps.</p>
      </div>
      <div className='card content-center'>
        <h2 className='text-3xl text-cyan-900'>Tell us the difference between nodejs and express js</h2>
        <p className='break-words'> Express is a minimal and flexible node.js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node.js is detailed as A platform built on Chromes JavaScript runtime for easily building fast, scalable network application.
        besides node js and JavaScript are the key factors  that is why developers consider ExpressJS</p>
      </div>
      <div className='card content-center'>
        <h2 className='text-3xl text-fuchsia-950'>What is a custom hook, and why will you create a custom hook?</h2>
        <p className='break-words'>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.that is the reason I should use custom hook</p>
      </div>
    </div>

      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className=' btn rounded-xl text-3xl py-3 px-6 border-x-2 bg-zinc-600 mt-8' onClick={toPdf}>Download Pdf</button>}
      </Pdf>
    </div>
  );
};

export default Blog;


