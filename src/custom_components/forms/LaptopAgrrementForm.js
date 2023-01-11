import React from "react";
import Button from "../../components/Button";

const LaptopAgrrementForm = () => {
  let handleFileChange;
  let fileInput;
  return (
    <div className="information-form flex flex-col">
      <div className=" flex justify-center border-b pb-4 mb-2">
        <h1> Employee Laptop Agreement Form</h1>
      </div>
      <div>
        <table id="edit-info-table">
          <tr>
            <td className="min-w-[300px]">
              <div>
                <p>Enter Employee Name * </p>
                <input type="text" placeholder="Avinash M. Pawar" />
              </div>
            </td>
            <td>
              <div>
                <p>Apply Date * </p>
                <input type="date" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>Enter Position * </p>
                <input type="text" placeholder="Ui/Ux Designer" />
              </div>
            </td>
            <td>
              <div>
                <p>Enter Department * </p>
                <select>
                  <option>Front-End Developer</option>
                  <option>UI-Ux</option>
                </select>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <p>Enter Contact No. * </p>
                <input type="text" placeholder="Ui/Ux Designer" />
              </div>
            </td>
            <td className="max-w-[250px]">
              <div>
                <p>Signature Upload * </p>

                <div className="upload_container  ">
                  <div className="inputfile_box">
                    <input
                      type="file"
                      id="file"
                      className="inputfile"
                      onChange={() => handleFileChange()}
                      // onChange={(e) => console.log(e.target.files[0].name)}
                    />
                    <label for="file">
                      <span id="file-name" className="file_box">
                        {fileInput}
                      </span>
                      <span className="file_button">Browse</span>
                    </label>
                  </div>
                  <Button variant="filled" className="w-[100px]">
                    Upload
                  </Button>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <p>Device Brand Name * </p>
                <input type="text" placeholder="Apple" />
              </div>
            </td>
            <td>
              <div>
                <p>Device Model Name * </p>
                <input type="text" placeholder="Mac Book Air M1" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>Device Model Number * </p>
                <input type="text" placeholder="MACBOOK1234" />
              </div>
            </td>
            <td>
              <div>
                <p>What accessories came with the laptop? </p>
                <input type="text" placeholder="Device Connenctor" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>Device Issue Date * </p>
                <input type="date" />
              </div>
            </td>
            <td>
              <div>
                <p>Device Releasing HR Name * </p>
                <input type="text" placeholder="Saumil Shah" />
              </div>
            </td>
          </tr>

          <tr>
            <td colspan="2">
              <Button variant="filled" className="w-full">
                Submit
              </Button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default LaptopAgrrementForm;
