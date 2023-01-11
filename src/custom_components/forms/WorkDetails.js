import React from "react";
import Button from "../../components/Button";

const WorkDetails = () => {
  return (
    <div className="information-form flex flex-col">
      <div className=" flex justify-center border-b pb-4 mb-2">
        <h1> Work Details </h1>
      </div>
      <div>
        <table id="edit-info-table">
          <tr>
            <td>
              <div>
                <p>Position/Job Role </p>
                <input type="text" placeholder="Associate Ui/Ux Designer" />
              </div>
            </td>
            <td>
              <div>
                <p>Date of Joining </p>
                <input type="date" placeholder="Rahuri" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>Department </p>
                <select>
                  <option>Designing</option>
                </select>
              </div>
            </td>
            <td>
              <div>
                <p>Shift Timing </p>
                <select>
                  <option>9:00:00 Am To 7:00:00 Pm</option>
                </select>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>Work Location </p>
                <input type="text" placeholder="Saki Naka, Andheri, Mumbai" />
              </div>
            </td>
            <td>
              <div>
                <p>Grade </p>
                <input type="text" placeholder="A" />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <p>Team Name </p>
                <select>
                  {" "}
                  <option>User Interface Design</option>{" "}
                </select>
              </div>
            </td>
            <td>
              <div>
                <p>Team Leader Name</p>
                <input type="text" placeholder="Ajay" disabled />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>Team Leader Position</p>
                <input type="text" placeholder="Project Manager" disabled />
              </div>
            </td>
            <td>
              <div>
                <p>Team Leader Email</p>
                <input
                  type="text"
                  placeholder="ajay@miratsinsights.com"
                  disabled
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>Team Manager Name</p>
                <input type="text" placeholder="Mayank" disabled />
              </div>
            </td>
            <td>
              <div>
                <p>Team Manager Position / Job Role *</p>
                <input type="text" placeholder="CEO" disabled />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>Team Manager Number*</p>
                <input type="text" placeholder="84543953933" disabled />
              </div>
            </td>
            <td>
              <div>
                <p>Team Manager Email*</p>
                <input
                  type="text"
                  placeholder="mayank@miratsinsights.com"
                  disabled
                />
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

export default WorkDetails;
