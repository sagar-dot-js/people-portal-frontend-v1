import React from "react";
import Button from "../../components/Button";

const IdentityDetails = () => {
  return (
    <div className="information-form flex flex-col">
      <div className=" flex justify-center border-b pb-4 mb-2">
        <h1> Identity Details </h1>
      </div>
      <div>
        <table id="edit-info-table">
          <tr>
            <td>
              <div>
                <p>Adhar Card Name * </p>
                <input type="text" placeholder="HDFC" />
              </div>
            </td>
            <td>
              <div>
                <p>Date of Birth * </p>
                <input type="date" placeholder="Rahuri" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>Adhar Card Number * </p>
                <input type="text" placeholder="963323266463" />
              </div>
            </td>
            <td>
              <div>
                <p>Pancard Number * </p>
                <input type="text" placeholder="SGDFDRF76" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>Driving License Number (Optional) </p>
                <input type="text" placeholder="MH17-EGDTJMW676" />
              </div>
            </td>
            <td>
              <div>
                <p>Passport Number (Optional) </p>
                <input type="text" placeholder="INSDGGEN5677" />
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

export default IdentityDetails;
