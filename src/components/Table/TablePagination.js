import React from "react";
import {
  LeftArrowIconContainer,
  RightArrowIconContainer,
  SelectContainer,
  TablePaginationContainer,
  ItemsPerPageLeftContainer,
  ItemsPerPageRightContainer,
  ItemsPerPageContainer,
  PageVariableContainer,
  TableWithPaginationContainer,
} from "./TablePagination.style.js";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const TablePagination = ({
  rowsPerPage,
  setRowsPerPage,
  pageNumber,
  setPageNumber,
  totalDataCnt,
}) => {
  return (
    <>
      <TablePaginationContainer>
        <ItemsPerPageContainer>
          <ItemsPerPageLeftContainer>
            <div className="flex gap-[10px] items-center">
              <small className=" ">Items per page</small>
              <select
                className="w-[60px] text-[12px]"
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(e.target.value);
                  setPageNumber(1);
                }}
              >
                <option value={2}>2</option>
                <option value={4}>4</option>
                <option value={5}>100</option>
              </select>
            </div>
          </ItemsPerPageLeftContainer>

          <ItemsPerPageRightContainer>
            <small className="">
              {pageNumber * rowsPerPage - rowsPerPage} -{" "}
              {pageNumber * rowsPerPage > totalDataCnt
                ? totalDataCnt
                : pageNumber * rowsPerPage}{" "}
              of {totalDataCnt} items
            </small>
          </ItemsPerPageRightContainer>
        </ItemsPerPageContainer>

        <PageVariableContainer>
          <div className="">
            <SelectContainer
              value={pageNumber}
              onChange={(e) => setPageNumber(e.target.value)}
            >
              {[...Array(Math.ceil(totalDataCnt / rowsPerPage))].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </SelectContainer>
          </div>
          <small>of {Math.ceil(totalDataCnt / rowsPerPage)} pages</small>

          <LeftArrowIconContainer
            onClick={() => {
              pageNumber > 1 && setPageNumber((prev) => prev - 1);
            }}
            active={(pageNumber > 1).toString()}
          />

          <RightArrowIconContainer
            onClick={() => {
              pageNumber < Math.ceil(totalDataCnt / rowsPerPage) &&
                setPageNumber((prev) => prev + 1);
            }}
            active={(
              pageNumber < Math.ceil(totalDataCnt / rowsPerPage)
            ).toString()}
          />
        </PageVariableContainer>
      </TablePaginationContainer>
    </>
  );
};

export default TablePagination;
