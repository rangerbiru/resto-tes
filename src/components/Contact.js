import React from "react";
import { useEffect } from "react";

const Contact = () => {
  const urlForm =
    "https://script.google.com/macros/s/AKfycbxRpnEuOuPloIkZ0pbTCx7feqtEuFuZxz-QPQo7BLiI-L4fSd8bhEdg7BFLv81txQni5A/exec";
  const form = document.forms["contact-resto"];

  const sendForm = async (e) => {
    e.preventDefault();
    await fetch(urlForm, { method: "POST", body: new FormData(form) })
      .then((res) => {
        form.reset();
        console.log("Success", res);
      })
      .catch((error) => console.error("Error!", error.message));
  };

  useEffect(() => {
    sendForm();
  }, []);

  // useEffect(() => {
  //   const scriptURL =
  //     "https://script.google.com/macros/s/AKfycbxRpnEuOuPloIkZ0pbTCx7feqtEuFuZxz-QPQo7BLiI-L4fSd8bhEdg7BFLv81txQni5A/exec";
  //   const form = document.forms["contact-resto"];

  //   form.addEventListener("submit", (e) => {
  //     e.preventDefault();
  //     fetch(scriptURL, { method: "POST", body: new FormData(form) })
  //       .then((response) => {
  //         form.reset();
  //         console.log("Success!", response);
  //       })
  //       .catch((error) => console.error("Error!", error.message));
  //   });
  // }, []);

  return (
    <section id="contact" className="flex items-center py-36 px-20">
      <div className="col50 px-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="title text-7xl">Contact</h2>
          <h4 className="sub-title -mt-8 text-5xl">Let's Chat</h4>

          <span className="mt-10 mb-5 text-xs text-gray-300 flex gap-1">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </span>

          <p className="text-center text-gray-400 leading-normal">
            Voluptatibus quaerat laboriosam fugit non Ut consequatur animi est
            molestiae enim a voluptate totam natus modi debitis dicta impedit
            voluptatum quod sapiente illo saepe explicabo quisquam perferendis
            labore et illum suscipit
          </p>
        </div>
      </div>
      <div className="col50 px-4">
        <form name="contact-resto" onSubmit={sendForm}>
          <div class="form-group mb-6">
            <label
              for="exampleInputEmail1"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              name="nama"
              class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Masukkan Nama Anda"
            />
          </div>
          <div class="form-group mb-6">
            <label
              for="exampleInputPassword1"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputPassword1"
              placeholder="Masukkan Email Anda"
            />
          </div>

          <div class="mb-3">
            <label
              for="exampleFormControlTextarea1"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Your Message
            </label>
            <textarea
              name="pesan"
              class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Your message"
            ></textarea>
          </div>

          <button
            // type="submit"
            class="
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
