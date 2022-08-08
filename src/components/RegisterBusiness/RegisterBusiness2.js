import { React, useState } from "react";
import Cookies from "universal-cookie";
import {registerABusinessApiCall} from "../../apiCalls/apiCalls";
import setMyBusinessesToStorage from "../../setToStorage/setMyBusinessesToStorage";
import SignIn from "../SignIn/SignIn";
function RegisterBusiness2() {
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
        setMyBusinessesToStorage();
        window.location.href = "/stripe-connect";
      };
      if (user === "") {
        return <SignIn />;
      }
      else{
          let myBusinesses = JSON.parse(localStorage.getItem("myBusinesses")) || [];
          if(myBusinesses.length>0)
          {
            window.location.href = "/stripe-connect";
          }

          return(
        <div className="register-business my-5">
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
      </div>
          )
      }    
        
}
export default RegisterBusiness2;