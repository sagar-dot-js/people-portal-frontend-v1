import React from "react";
import Button from "../../components/Button";

const PersonalInformation = () => {
  return (
    <div className="information-form flex flex-col">
      <div className=" flex justify-center border-b pb-4 mb-2">
        <h1>Personal Information</h1>
      </div>
      <div>
        <table id="edit-info-table">
          <tr>
            <td>
              <div>
                <p>Full Name</p>

                <input type="text" placeholder="Sagar Borude" />
              </div>
            </td>
            <td>
              <div>
                <p>Date of Birth * </p>

                <input type="date" placeholder="Sagar Borude" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>Email Id</p>

                <input type="text" placeholder="sagar.html5@gmail.com" />
              </div>
            </td>
            <td>
              <div>
                <p>Alternative Email Id</p>

                <input type="text" placeholder="sagar.html6@gmail.com" />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <p>Contact No.</p>

                <input type="text" placeholder="8805189617" />
              </div>
            </td>
            <td>
              <div>
                <p>Alternative Contact No.</p>

                <input type="text" placeholder="9371761747" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>Gender</p>
                <select>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </td>
            <td>
              <div>
                <p>Blood Group</p>

                <select>
                  <option>A+ </option>
                  <option>B+ </option>
                </select>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>Address</p>

                <input type="text" placeholder="A/p Mumbai" />
              </div>
            </td>
            <td>
              <div>
                <p>Pincode</p>

                <input type="text" placeholder="420004" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>City</p>

                <input type="text" placeholder="Mumbai" />
              </div>
            </td>
            <td>
              <div>
                <p>District</p>

                <input type="text" placeholder="Mumbai" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>State</p>

                <input type="text" placeholder="Maharastra" />
              </div>
            </td>
            <td>
              <div>
                <p>Country</p>

                <input type="text" placeholder="India" />
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <Button
                onClick={(e) => console.log("its working", e)}
                variant="filled"
                className="w-full"
              >
                Save
              </Button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default PersonalInformation;
