import React from "react";
import Button from "../components/Button";
import { MdAdd } from "react-icons/md";
import { ButtonWrapper } from "../components/Button.style";
import styled from "styled-components";
import Alert from "../components/Alert/Alert";
import ButtonWithIcon from "../components/ButtonWithIcon/ButtonWithIcon";
import { AiOutlineCheck, AiOutlineDownload } from "react-icons/ai";
import DisplayCard from "../components/DisplayCard/DisplayCard";
import Chip from "../components/Chips/Chip";
import LinkButton from "../components/LinkButton/LinkButton";
import Radio, { RadioButton } from "../components/Radio/Radio";
// import CheckBox from "../components/CheckBox/CheckBox";
import LinkCard from "../components/LinkCard/LinkCard";
import Dropdown from "../components/Dropdown/Dropdown";
import Tooltip from "../components/Tooltip/ToolTip";
import { TooltipTarget } from "../components/Tooltip/Tooltip.style";
import ToolTip from "../components/Tooltip/ToolTip";
import Link from "../components/Link/Link";
import { useState } from "react";
import Modal from "../components/Modal/Modal";
import { ModalContent } from "../components/Modal/Modal.style";
import Toggle from "../components/Toggle/Toggle";
import Search from "../components/Search/Search";
import Avatar from "../components/Avatar/Avatar";
import TabContext, {
  Tab,
  TabList,
  TabPanel,
} from "../components/Tab/TabContext";
import Navlink from "../components/Navlink/Navlink";
import { NavLink } from "react-router-dom";
import Table, {
  TableActionPopUp,
  TableBody,
  TableHead,
  TableRow,
  TableWithPagination,
  Td,
  Th,
} from "../components/Table/Table";
import TablePagination from "../components/Table/TablePagination";
// import styles from "../../src/test.module.css";
import FileUpload from "../components/FileUpload/FileUpload";
import Accordion from "../components/Accordion/Accordion";
import { IoIosArrowDown } from "react-icons/io";
import Menu from "../components/Menu/Menu";
import {
  MenuMain,
  MenuTitle,
  MenuTitleItems,
} from "../components/Menu/Menu.styled";
import MenuContainer from "../components/Menu/MenuContainer";
import SubMenu from "../components/Menu/SubMenu";
import ExpandableTable, {
  TableCell,
  TableHeader,
  TBody,
  TCell,
  THeader,
  Tr,
  TRow,
} from "../components/ExpandableTable/ExpandableTable";
import { IoMdArrowDropdown } from "react-icons/io";
import CollapseTable from "../components/CollapseTable/CollapseTable";
import TextField from "../components/TextField/TextField";
import AutoComplete from "../components/AutoComplete/AutoComplete";
import { Label } from "../components/TextField/TextField.style";
import CheckBox from "../components/CheckBox/CheckBox";

// const options = ["Information Technology Decision Maker Survey", "Some big text for dropdown option select ", "Oranges"];
// const newData = ["one", "two", "three"];
const newData = [
  {
    label: "one",
    value: "one11",
  },
  {
    label: "two",
    value: "two22",
  },
];

console.log(newData);
// {label: "one", value: "one"}

const autocompleteData = [
  { label: "1", value: "one" },
  { label: "22", value: "two" },
  { label: "33", value: "three" },
  { label: "43", value: "four" },
  { label: "52", value: "five" },
  { label: "63", value: "six" },
];

const data = [
  {
    id: 33333333,
    name: "India project",
    startDate: "June 05 2022",
    status: "approved",
    studyType: "adhoc",
    surveyType: "information tech",
    sampleRequired: 30,
  },
  {
    id: 334,
    name: "India project",
    startDate: "June 05 2022",
    status: "unseen",
    studyType: "adhoc",
    surveyType: "information tech",
    sampleRequired: 30,
  },
  {
    id: 335,
    name: "India project",
    startDate: "June 05 2022",
    status: "seen",
    studyType: "adhoc",
    surveyType: "information tech",
    sampleRequired: 30,
  },
  {
    id: 336,
    name: "India project",
    startDate: "June 05 2022",
    status: "seen",
    studyType: "adhoc",
    surveyType: "information tech",
    sampleRequired: 30,
  },
  {
    id: 337,
    name: "India project",
    startDate: "June 05 2022",
    status: "seen",
    studyType: "adhoc",
    surveyType: "information tech",
    sampleRequired: 30,
  },
  {
    id: 338,
    name: "India project",
    startDate: "June 05 2022",
    status: "seen",
    studyType: "adhoc",
    surveyType: "information tech",
    sampleRequired: 30,
  },
  {
    id: 339,
    name: "India project",
    startDate: "June 05 2022",
    status: "seen",
    studyType: "adhoc",
    surveyType: "information tech",
    sampleRequired: 30,
  },
  {
    id: 340,
    name: "India project",
    startDate: "June 05 2022",
    status: "seen",
    studyType: "adhoc",
    surveyType: "information tech",
    sampleRequired: 30,
  },
];

const accData = [
  {
    id: 1,
    title: "item one",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
  },
  {
    id: 2,
    title: "item two",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
  },
  {
    id: 3,
    title: "item three",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
  },
];

const statusColors = {
  unseen: "error",
  seen: "primary",
  approved: "success",
};

const collapseData = [
  {
    id: 1,
    level: "Crystal",
    supplierName: "supp1",
    countries: [
      {
        level: "Gold",
        countryName: "country1",
        tg: [
          {
            level: "Silver",
            targetGroupName: "tg1",
          },
          {
            level: "Silver",
            targetGroupName: "tg2",
          },
        ],
      },
      {
        level: "Gold",
        countryName: "country2",
        tg: [
          {
            level: "Silver",
            targetGroupName: "tg3",
          },
          {
            level: "Silver",
            targetGroupName: "tg1",
          },
        ],
      },
      {
        level: "Gold",
        countryName: "country3",
      },
    ],
  },
  {
    id: 2,
    level: "Crystal",
    supplierName: "supp2",
    countries: [
      {
        level: "Gold",
        countryName: "country3",
        tg: [
          {
            level: "Silver",
            targetGroupName: "tg1111",
          },
          {
            level: "Silver",
            targetGroupName: "tg2222",
          },
        ],
      },
      {
        level: "Gold",
        countryName: "country4",
        tg: [
          {
            level: "Silver",
            targetGroupName: "tg3333",
          },
          {
            level: "Silver",
            targetGroupName: "tg4444",
          },
        ],
      },
      {
        level: "Gold",
        countryName: "country3",
      },
    ],
  },
];

const Test = () => {
  const [tabActive, setTabActive] = useState(2);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
    console.log(openModal);
  };

  const [selectedRows, setSelectedRows] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  const handleChange = (e) => {
    // setValue(e.target.value);
    console.log(e);
  };

  // const [dvalue, setDValue]=useState("");
  // const handleListChange = (e, value) => {
  //   setDValue(e,value)
  //   // onChange(e);
  // }

  const handleInputChange = (e) => {
    console.log("working?");
    console.log(e);
  };

  // const [open, setOpen] = useState({
  //   level1: false,
  //   level2: false,
  //   level3: false,
  // });

  const [open, setOpen] = useState({
    level: "",
    id: "",
  });

  console.log(open);

  const [index, setIndex] = useState(0);

  // console.log(dvalue)

  return (
    <>
      <div className="test">
        <h1>test</h1>

        <div className="autocomplete">
          <AutoComplete
            options={autocompleteData}
            onChange={(e) => {
              console.log(e);
            }}
          />
        </div>
        <br />
        <Button
          className="sagar"
          onClick={(e) => console.log("its working", e)}
          variant="filled"
        >
          Filled
        </Button>
        <br />
        <br />
        <Button variant="filled">Show Snackbar</Button>
        <br />
        <br />
        <Button
          onClick={(e) => console.log("its working", e)}
          variant="outlined"
          customWidth="200px"
        >
          Outlined Button
        </Button>
        <br />
        <br />
        <Button
          onClick={(e) => console.log("its working", e)}
          variant="filled"
          disabled
        >
          Filled
        </Button>
        <br />
        <br />
        <Button
          onClick={(e) => console.log("its working", e)}
          variant="outlined"
          customWidth="200px"
          disabled
        >
          Outlined Button
        </Button>
        <br />
        <br />
        <Button variant="alternate">Alternate</Button>
        <br />
        <br />
        <div>
          <Alert variant="success" message="This is a success alert" />
          <br />
          <Alert
            variant="error"
            message="Global variables can be accessed/used through the entire document, while local variables can be used only inside the selector where it is declared."
          />
          <br />
          <Alert
            variant="warning"
            message="This is a warning alert — check it out!"
          />
          <br />
          <Alert
            variant="alternative"
            message="This is a alternate alert — check it out!"
          />
        </div>
        <br />
        <br />
        <div>
          <ButtonWithIcon variant="filledIcon">
            {<AiOutlineCheck />}Filled Icon Button
          </ButtonWithIcon>
          <br />
          <ButtonWithIcon variant="outlinedIcon">
            {<AiOutlineCheck />}Outlined Icon
          </ButtonWithIcon>
          <br />
          <ButtonWithIcon variant="alternateIcon">
            {<AiOutlineCheck />}Alternative Icon
          </ButtonWithIcon>
        </div>

        <br />
        <br />
        <div className="flex">
          <DisplayCard
            customWidth="300px"
            cardHeader="Card Header1"
            cardBody="Card Body"
          ></DisplayCard>
        </div>
        <br />
        <br />

        <Chip variant="filled" color="primary">
          Primary
        </Chip>

        <Chip variant="outlined" color="primary">
          POutlined
        </Chip>
        <Chip variant="filled" color="success">
          Success
        </Chip>
        <Chip variant="outlined" color="success">
          SOutlined
        </Chip>
        <Chip variant="filled" color="warning">
          Warning
        </Chip>
        <Chip variant="outlined" color="warning">
          WOutlined
        </Chip>
        <Chip variant="filled" color="error">
          Error
        </Chip>
        <Chip variant="outlined" color="error">
          EOutlined
        </Chip>
        <br />
        <br />
        <LinkButton href="https://scalablecss.com/styled-components-global-styles/">
          <AiOutlineDownload />
        </LinkButton>
        <br />
        <br />
        <Radio></Radio>
        <Radio disabled></Radio>
        <br />
        {/* <CheckBox disabled></CheckBox>
        <CheckBox></CheckBox> */}

        <CheckBox
          onChange={(e) => {
            console.log(e);
          }}
        />
        <CheckBox
          label="Subscribe to newsletter?"
          onChange={(e) => {
            console.log(e);
          }}
          checked={true}
        />
        <CheckBox
          label="I agree to terms & conditions"
          checked={true}
          disabled
        />
        <CheckBox label="Save form inputs to storage?" />

        <br />
        <br />
        <LinkCard
          href="https://scalablecss.com/styled-components-global-styles/"
          cardTitle="RFQs Support"
          cardBody="Issues/doubts regarding RFQs can be found here"
        />
        <br />
        <br />
        <Dropdown
          dropdownText="Text"
          options={newData}
          // onClick={() => console.log("working?")}
          onChange={(e) => console.log(e)}
        />
        <br />
        <br />
        <ToolTip content="tooltip message" position="right">
          <TooltipTarget>I am a target</TooltipTarget>
        </ToolTip>

        <div>
          <ToolTip content="I am a p tag within a tooltip">
            <p>I am a paragraph tag within a tooltip</p>
          </ToolTip>
        </div>
        <div>
          <Link
            color="black"
            border="underline"
            href="https://scalablecss.com/styled-components-global-styles/"
          >
            underlined link
          </Link>
          <br />
          <Link
            disabled
            onClick={() => console.log("link")}
            color="red"
            border="none"
            href="https://scalablecss.com/styled-components-global-styles/"
          >
            I am a link
          </Link>
        </div>
        {/* <button onClick={openModal}>Open Modal</button> */}
        <Button variant="filled" onClick={openModal}>
          Open Modal
        </Button>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <ModalContent>
            <p>Write your modal content here!</p>
            {/* <p>
            Include popular icons in your React projects easily with
            react-icons, which utilizes ES6 imports that allows you to include
            only the icons that your project is using.
          </p> */}
            <Button variant="outlined">Button</Button>
          </ModalContent>
        </Modal>
        <div className="toggle">
          <Toggle />
        </div>
        <div>
          <Search />
        </div>
        <div className="avatar">
          {/* <Avatar
            className={styles.avatartest}
            size="sm"
            type="text"
            variant="success"
            badge="wfh"
          >
            KS
          </Avatar> */}
          <Avatar size="md" type="text" variant="error" badge="wfh">
            KS
          </Avatar>
          <Avatar size="lg" type="text" variant="warning" badge="wfh">
            KS
          </Avatar>
          <Avatar type="text" variant="primary">
            KS
          </Avatar>
          <Avatar
            type="img"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            variant="success"
            badge="wfh"
            size="sm"
          />
          <Avatar
            type="img"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            variant="error"
            badge="wfh"
          />
          <Avatar
            type="img"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            variant="warning"
            badge="wfh"
          />
          <Avatar
            type="img"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            variant="primary"
            badge="wfh"
          />
        </div>

        {/* tabs */}
        <div>
          <TabContext
            onChange={(value) => setTabActive(value)}
            value={tabActive}
            position="horizontal"
          >
            <TabList>
              <Tab value={1}>Item One</Tab>

              <Tab value={2}>Item Two</Tab>
              <Tab value={3}>Item Three</Tab>
            </TabList>
            <TabPanel value={1}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                quis, exercitationem officiis magni sapiente dignissimos
                voluptate provident omnis ullam esse.
              </p>
              <input type="text" />
            </TabPanel>
            <TabPanel value={2}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                quis, exercitationem officiis magni sapiente dignissimos
                voluptate provident omnis ullam esse.
              </p>
              <input type="text" />
            </TabPanel>
            <TabPanel value={3}>
              <input type="text" />
            </TabPanel>
          </TabContext>
        </div>

        {/* navlinks */}
        <div>
          {/* <NavLink to="/" >testing </NavLink> */}
          <Navlink to="/">Test</Navlink>
          <Navlink to="/dashboard">Dashboard</Navlink>
          <Navlink to="/home">Home</Navlink>
        </div>
        {/* table */}
        <div className="tableTest">
          <TableActionPopUp selectedRows={selectedRows}>
            {/* <button onClick={(e) => console.log(e)}>Edit</button> */}
          </TableActionPopUp>
          <TableWithPagination>
            <Table>
              <TableHead>
                <TableRow>
                  <Th>
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedRows(data);
                        } else setSelectedRows([]);
                      }}
                    />
                  </Th>
                  <Th>ID</Th>
                  <Th>Project Name</Th>
                  <Th>Start date</Th>
                  <Th>Status</Th>
                  <Th>Study type</Th>
                  <Th>Survey type</Th>
                  <Th>Sample required</Th>
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  ?.slice(
                    pageNumber * rowsPerPage - rowsPerPage,
                    pageNumber * rowsPerPage
                  )
                  .map((d, i) => {
                    return (
                      <TableRow key={i}>
                        <Td>
                          <input
                            type="checkbox"
                            checked={
                              selectedRows.filter((r) => r.id === d.id)[0]
                            }
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedRows((prev) => [...prev, d]);
                              } else
                                setSelectedRows((prev) => {
                                  return prev.filter((pd) => {
                                    return pd.id !== d.id;
                                  });
                                });
                            }}
                          />
                          {i + 8888}
                        </Td>
                        {/* <Link
                          href="https://mui.com/material-ui/react-accordion/"
                          color="black"
                          border="underline"
                        >
                          {" "}
                          <Td>{d.id}</Td>
                        </Link> */}
                        {/* <Link
                          color="black"
                          border="underline"
                          href="https://scalablecss.com/styled-components-global-styles/"
                        >
                          underlined link
                        </Link>
                        <br />
                        <Link
                          disabled
                          onClick={() => console.log("link")}
                          color="red"
                          border="none"
                          href="https://scalablecss.com/styled-components-global-styles/"
                        >
                          I am a link
                        </Link> */}

                        <Td>{d.name}</Td>
                        <Td>{d.startDate}</Td>
                        <Td>
                          {" "}
                          <Chip
                            variant="filled"
                            color={statusColors[d.status.toLowerCase()]}
                          >
                            {d.status}
                          </Chip>{" "}
                        </Td>
                        {/* <Td>{d.status}</Td> */}
                        <Td>{d.studyType}</Td>
                        <Td>{d.surveyType}</Td>
                        <Td>{d.sampleRequired}</Td>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPage={rowsPerPage}
              setRowsPerPage={setRowsPerPage}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              totalDataCnt={data.length}
            />
          </TableWithPagination>
        </div>

        {/* upload */}
        {/* <FileUpload>Upload</FileUpload> */}

        {/* accordion */}
        <div>
          <h1>accordion</h1>
          <Accordion>
            {/* {accData?.map((item, index) => (
              <Accordion.Item key={index}>
                <Accordion.Header>
                  <Accordion.Title>{item.title}</Accordion.Title>
                   <Accordion.Icon><IoIosArrowDown/></Accordion.Icon>
                </Accordion.Header>
                <Accordion.Body>
                  <Accordion.Content>{item.content}</Accordion.Content>
                </Accordion.Body>
              </Accordion.Item>  
            ))} */}

            <Accordion.Item>
              <Accordion.Header>
                <Accordion.Title>Title one</Accordion.Title>
                <Accordion.Icon>
                  <IoIosArrowDown />
                </Accordion.Icon>
              </Accordion.Header>
              <Accordion.Body>
                <Accordion.Content>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages,
                </Accordion.Content>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item>
              <Accordion.Header>
                <Accordion.Title>Title two</Accordion.Title>
                <Accordion.Icon>
                  <IoIosArrowDown />
                </Accordion.Icon>
              </Accordion.Header>
              <Accordion.Body>
                <Accordion.Content>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text,{" "}
                </Accordion.Content>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item>
              <Accordion.Header>
                <Accordion.Title>Title three</Accordion.Title>
                <Accordion.Icon>
                  <IoIosArrowDown />
                </Accordion.Icon>
              </Accordion.Header>
              <Accordion.Body>
                <Accordion.Content>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular
                </Accordion.Content>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        {/* <Menu></Menu> */}
        <MenuContainer>
          <Menu title="Title 1" to="">
            <SubMenu title="Subtitle 1">
              <SubMenu title="Subtitle 4"></SubMenu>
              <SubMenu title="Subtitle 5"></SubMenu>
            </SubMenu>
            <SubMenu title="Subtitle 2"></SubMenu>
            <SubMenu title="Subtitle 3"></SubMenu>
          </Menu>
          <Menu title="Title 1">
            <SubMenu title="Subtitle 1">
              <SubMenu title="Subtitle 4"></SubMenu>
              <SubMenu title="Subtitle 5"></SubMenu>
            </SubMenu>
            <SubMenu title="Subtitle 2"></SubMenu>
            <SubMenu title="Subtitle 3"></SubMenu>
          </Menu>
        </MenuContainer>

        {/* expand table */}
        {/* <ExpandableTable>
          <TableHead>
            <TableRow>
              <TableCell>item one</TableCell>
              <TableCell>item one</TableCell>
              <TableCell>item one</TableCell>
              <TableCell>item one</TableCell>
            </TableRow>
          </TableHead>
        </ExpandableTable> */}
        <ExpandableTable>
          <THeader>
            <TRow>
              <TCell>Supplier - Country - Target Audience</TCell>
              <TCell>item 1</TCell>
              <TCell>item 1</TCell>
              <TCell>item 1</TCell>
            </TRow>
          </THeader>
          <TBody>
            {/* {collapseData.map((data) => {
              return (
                <TRow>
                  <TCell>
                    <IoMdArrowDropdown
                      onClick={() =>
                        setOpen((prev) => ({ ...prev, level1: !prev?.level1 }))
                      }
                    />
                    {data.supplierName}
                  </TCell>
                </TRow>
              );
            })} */}
            {/* level and silver gold code */}
            {collapseData?.map((data, i) => {
              return (
                <>
                  <TRow>
                    <TCell>
                      <IoMdArrowDropdown
                        onClick={
                          () =>
                            setOpen({
                              ...open,
                              level: data?.level,
                              id: i,
                            })
                          // setOpen((prev) => ({
                          //   ...prev,
                          //   level1: !prev?.level1,
                          // }))
                        }
                      />
                      {data?.supplierName}
                    </TCell>
                  </TRow>
                  {console.log(open?.level, data?.level, open.id, data.id)}
                  {open?.level === data?.level && open.id + 1 == data?.id ? (
                    <>
                      {" "}
                      {data?.countries?.map((country, ind) => {
                        return (
                          <>
                            <React.Fragment key={i}>
                              <TRow data-level="">
                                <TCell>
                                  <IoMdArrowDropdown
                                    onClick={
                                      () =>
                                        setOpen((prev) => ({
                                          ...prev,
                                          level: !prev?.level,
                                          id: !prev?.ind,
                                        }))
                                      //  setOpen({
                                      //   ...open,
                                      //   level:country?.level,
                                      //   id:ind
                                      //  })
                                    }
                                  />{" "}
                                  {country?.countryName}
                                </TCell>
                              </TRow>
                              {/* {console.log()} */}
                              {/* {open?.level} */}
                              {country?.tg?.map((country, index) => {
                                return (
                                  <>
                                    <TRow>
                                      <TCell>{country?.targetGroupName}</TCell>
                                    </TRow>
                                  </>
                                );
                              })}
                            </React.Fragment>
                          </>
                        );
                      })}
                    </>
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
            {/* kajal */}
            {/* {collapseData.map((data, i) => (
              <>
                {console.log(data)}

                {console.log(data.id, i + 1)}

                <TRow key={i}>
                  <TCell>
                    <IoMdArrowDropdown
                      onClick={() =>
                        setOpen((prev) => ({ ...prev, level1: !prev?.level1 }))
                      }
                    />
                    {data.supplierName}
                  </TCell>
                </TRow>
                {open.level1 && index == i
                  ? data?.countries.map((d, i) => (
                      <React.Fragment key={i}>
                        <TRow data-level="">
                          <TCell>
                            {" "}
                            <IoMdArrowDropdown
                              onClick={() =>
                                setOpen((prev) => ({
                                  ...prev,
                                  level2: !prev?.level2,
                                }))
                              }
                            />{" "}
                            {d?.countryName}
                          </TCell>
                        </TRow>
                        {open.level2
                          ? d?.tg?.map((t, i) => (
                              <TRow>
                                <TCell>{t?.targetGroupName}</TCell>
                              </TRow>
                            ))
                          : null}
                      </React.Fragment>
                    ))
                  : null}
              </>
            ))} */}
            {/* <TRow>
              <TCell>
                <IoMdArrowDropdown
                  onClick={() =>
                    setOpen((prev) => ({ ...prev, level1: !prev?.level1 }))
                  }
                />
                supplier name
              </TCell>
              <TCell>content 1</TCell>
              <TCell>content 1</TCell>
              <TCell>content 1</TCell>
            </TRow>
            {open?.level1 ? (
              <TRow>
                <TCell>
                  {" "}
                  <IoMdArrowDropdown
                    onClick={() =>
                      setOpen((prev) => ({ ...prev, level2: !prev?.level2 }))
                    }
                  />{" "}
                  country name
                </TCell>
                <TCell>content 1</TCell>
                <TCell>content 1</TCell>
                <TCell>content 1</TCell>
              </TRow>
            ) : (
              ""
            )}

            {open?.level2 ? (
              <TRow>
                <TCell>target audience</TCell>
                <TCell>content 1</TCell>
                <TCell>content 1</TCell>
                <TCell>content 1</TCell>
              </TRow>
            ) : (
              ""
            )} */}
          </TBody>
        </ExpandableTable>

        <CollapseTable />

        <div className="textfield">
          <Label>TextField</Label>

          <TextField
            // disabled
            type="text"
            placeholder="Enter Something"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </>
  );
};

export default Test;
