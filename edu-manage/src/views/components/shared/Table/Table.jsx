import { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./Table.css";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { AcademicCalenderForm } from "../../AcademicCalender/AcademicCalenderForm/AcademicCalenderForm";
import { Dialog } from "@mui/material";
import StudentEditForm from "../../ProfileManagement/StudentEditForm";
import ProfessorEditForm from "../../ProfileManagement/ProfessorEditForm";
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';


export default function Table({ component, tableData, setTableData, isExport ,setIsExport}) {
  const [columns, setColumns] = useState([]);
  const [acadCalFormOpen, setAcadCalFormOpen] = useState(false);
  const [studFormOpen, setStudFormOpen] = useState(false);
  const [profFormOpen, setProfFormOpen] = useState(false);
  const tableRef=useRef(null);

  useEffect(() => {
    setColumns(tableData.length > 0 ? Object.keys(tableData[0]) : []);
  }, [tableData]);

  useEffect(()=>{
    if(isExport)
    {
      exportExcel(tableData);
      setIsExport(false);
    }
  },[isExport]);

  const paymentStatus = [
    { label: "Paid", value: "Paid" },
    { label: "Unpaid", value: "Unpaid" },
  ];

  

  // Method to handle the change in dropdown
  const handleDropdownChange = (e, rowData, field, rowIndex) => {
    console.log(e.value);
    const updatedData = [...tableData];
    updatedData[rowIndex] = {
      ...updatedData[rowIndex],
      [field]: e.value,
    };
    setTableData(updatedData);
  };

  const handleEdit = () => {
    if (component === "AcademicCalender") {
      setAcadCalFormOpen(true);
    } else if (component === "ProfileManagement") {
      if (columns.includes("Designation")) {
        console.log("isProf");
        setProfFormOpen(true);
      } else {
        console.log("isStud");
        setStudFormOpen(true);
      }
    }
  };

  const handleDelete = () => {};

  // const handleAcadCalFormClose = (isOpen) => {
  //   setAcadCalFormOpen(isOpen);
  // };

  const handleStudFormClose = (isOpen) => {
    setStudFormOpen(isOpen);
  };

  const handleProfFormClose = (isOpen) => {
    setProfFormOpen(isOpen);
  };

  const exportExcel=(data)=>{
   
      const worksheet=XLSX.utils.json_to_sheet(data);
      const workBook=XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workBook,worksheet,'Sheet1');
      const excelBuffer=XLSX.write(workBook,{
        bookType:'xlsx',
        type:'array'
      });

      const blob=new Blob([excelBuffer],{
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });

      saveAs(blob,component+".xlsx");

  };

  // Method to structure the dropdown in the table
  const dropdownBodyTemplate = (rowData, field, rowIndex) => {
    // Conditions for choosing the appropriate style for each payment status
    if (rowData[field] === "Paid") {
      return (
        <div className="paid">
          <Dropdown
            key={rowData.ID + field}
            value={rowData[field]}
            options={paymentStatus}
            onChange={(e) => {
              handleDropdownChange(e, rowData, field, rowIndex);
            }}
          />
        </div>
      );
    } else if (rowData[field] === "Unpaid") {
      return (
        <div className="unpaid">
          <Dropdown
            key={rowData.ID + field}
            value={rowData[field]}
            options={paymentStatus}
            onChange={(e) => {
              handleDropdownChange(e, rowData, field, rowIndex);
            }}
          />
        </div>
      );
    } else {
      return (
        <div>
          <p style={{ color: "black", fontWeight: "bold" }}>-</p>
        </div>
      );
    }
  };

  return (
    <div className="table">
      {/* <Button onClick={()=>exportExcel(tableData)}>Export</Button> */}
      <DataTable
        key={columns.join("-")}
        value={tableData}
        dataKey="ID"
        paginator
        rows={10}
        paginatorTemplate="PrevPageLink PageLinks NextPageLink"
        className="custom-paginator"
        tableStyle={{ minWidth: "50rem", backgroundColor: "#E3EAE9" }}
        ref={tableRef}
      >
        {columns.map((field, index) => {
          if (
            field === "Semester Fee" ||
            field === "Exam Fee" ||
            field === "Arrear Fee" ||
            field === "Fines"
          ) {
            return (
              <Column
                key={field}
                body={(rowData, options) =>
                  dropdownBodyTemplate(rowData, field, options.rowIndex)
                }
                header={field}
              />
            );
          } else if (field === "Payment Link") {
            return (
              <Column
                key={field}
                body={(rowData) => (
                  <a
                    href={rowData[field]}
                    style={{ textDecoration: "none", color: "#286F67" }}
                  >
                    View
                  </a>
                )}
                header={field}
              />
            );
          } else if (field === "Action" && component === "AcademicCalender") {
            return (
              <Column
                key={field}
                header={field}
                body={
                  <Button
                    icon="pi pi-pen-to-square"
                    style={{
                      background: "transparent",
                      color: "black",
                      border: "none",
                    }}
                    onClick={() => handleEdit()}
                  ></Button>
                }
              ></Column>
            );
          } else if (field === "Action" && component === "ProfileManagement") {
            return (
              <Column
                key={field}
                header={field}
                body={
                  <div>
                    <Button
                      icon="pi pi-pen-to-square"
                      style={{
                        background: "transparent",
                        color: "black",
                        border: "none",
                      }}
                      onClick={() => handleEdit()}
                    ></Button>
                    <Button
                      icon="pi pi-trash"
                      style={{
                        background: "transparent",
                        color: "black",
                        border: "none",
                      }}
                      onClick={() => handleDelete()}
                    ></Button>
                  </div>
                }
              ></Column>
            );
          } else if (field === "Remainder") {
            return (
              <Column
                key={field}
                header={field}
                body={(rowData) =>
                  rowData.Remainder !== "Send" ? (
                    <p style={{ color: "black", fontWeight: "bold" }}>-</p>
                  ) : (
                    <p style={{ color: "#286F67" }}>{rowData.Remainder}</p>
                  )
                }
              />
            );
          } else {
            return <Column key={index} field={field} header={field}></Column>;
          }
        })}
      </DataTable>
      {/*Dialog for displaying the form*/}
      <Dialog
        fullWidth
        slotProps={{
          paper: {
            sx: {
              maxWidth: 550,
              borderRadius: 5,
            },
          },
        }}
        open={acadCalFormOpen || studFormOpen || profFormOpen}
      >
        {acadCalFormOpen && (
          <AcademicCalenderForm acadCalOpen={setAcadCalFormOpen} />
        )}

        {studFormOpen && <StudentEditForm studEditOpen={handleStudFormClose} />}

        {profFormOpen && (
          <ProfessorEditForm profEditOpen={handleProfFormClose} />
        )}
      </Dialog>
    </div>
  );
}
