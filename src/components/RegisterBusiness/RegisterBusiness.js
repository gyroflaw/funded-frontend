import { React, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import Cookies from "universal-cookie";
import {registerABusinessApiCall} from "../../apiCalls/apiCalls";
import SignIn from "../SignIn/SignIn";

function RegisterBusiness() {
  const [modalState, setModalState] = useState(false);
  const [files, setFiles] = useState([]);
  let cookies = new Cookies();
  let user = cookies.get("signedInUser") || "";
  const [address, setAddress] = useState({});

  const submit = async (event, user) => {
    event.preventDefault();
    let addressJson = JSON.stringify(address)
    const formData = new FormData(event.target);
    formData.set("name", formData.get("businessName"));
    formData.set("userId", user.id);
    formData.set("description", formData.get("description"));
    formData.set("address", addressJson)
    // formData.set('bankAccount', {name: "Fifolu"});

    for (let i = 0; i < files.length; i++) {
      formData.append(`images[${i}]`, files[i]);
    }
    await registerABusinessApiCall(formData);
    window.location.href = "/home";
  };

  if (user === "") {
    return <SignIn />;
  } else {
    return (
      <div className="RegisterBusinessContainer">
        <div
          className="RegisterBusinessButton"
          onClick={() => setModalState(true)}
        >
          <button className="bg-green-500 font-semibold text-xl p-2 px-4 text-white rounded-full">
            Register a Business
          </button>
        </div>

        <Modal
          className="modal flex justify-center items-center w-fit absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          isOpen={modalState}
          onRequestClose={() => setModalState(false)}
        >
          <form
            onSubmit={(event) => submit(event, user)}
            className="overflow-y-auto p-4 bg-white w-[400px] p-4 shadow-lg flex flex-col items-center rounded-md"
          >
            <input
              className="form-input"
              type="text"
              placeholder="What is the name of your business"
              name="businessName"
              required
            />

            <textarea
              className="form-input"
              name="description"
              placeholder="Describe the nature of your business"
              style={{ height: 150 }}
              required
            />

            <input
              className="form-input"
              type="file"
              multiple
              placeholder="Upload Multimedia"
              name="images"
              onChange={(event) => setFiles([...files, event.target.files])}
              required
            />

              <br />
              <h6>Address</h6>

              <div className="enterAddress">
                <input
                  className="form-input"
                  type="text"
                  placeholder="Address Line1"
                  name="line1"
                  onChange={(event) =>
                    setAddress({ ...address, line1: event.target.value })
                  }
                  required
                />

                <input
                  className="form-input"
                  type="text"
                  placeholder="Address Line2"
                  name="line2"
                  onChange={(event) =>
                    setAddress({ ...address, line2: event.target.value })
                  }
                />

                <input
                  className="form-input"
                  type="text"
                  placeholder="City"
                  name="city"
                  onChange={(event) =>
                    setAddress({ ...address, city: event.target.value })
                  }
                />

                <input
                  className="form-input"
                  type="text"
                  placeholder="State"
                  name="state"
                  onChange={(event) =>
                    setAddress({ ...address, state: event.target.value })
                  }
                />

                <input
                  className="form-input"
                  type="text"
                  placeholder="Country"
                  name="country"
                  onChange={(event) =>
                    setAddress({ ...address, country: event.target.value })
                  }
                  required
                />

                <input
                  className="form-input"
                  type="text"
                  placeholder="Postal Code"
                  name="postalCode"
                  onChange={(event) =>
                    setAddress({
                      ...address,
                      postalCode: event.target.value,
                    })
                  }
                />
              </div>

            <br />
            <input className="form-btn" type="submit" value="Submit" />
          </form>
        </Modal>
      </div>
    );
  }
}

export default RegisterBusiness;
