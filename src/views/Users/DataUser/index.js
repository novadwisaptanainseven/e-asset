import React, { useContext, useEffect, useMemo } from "react";
// import barang from "assets/dummyData/barang";
import customStyles from "datatableStyle/customStyles";
import DataTable from "react-data-table-component";
import { Card, Col, Row, CardHeader, CardBody, Button } from "reactstrap";
import { goToTambah } from "../functions";
import { useHistory } from "react-router";
import { GlobalContext } from "context/Provider";
// import { LoadAnimationBlue } from "assets";
import Loading from "components/Loading";
import { getAllUsers } from "context/actions/Auth/getAllUsers";
import { getCleanTanggal } from "views/Kendaraan/functions";

const Users = ({ path }) => {
  const history = useHistory();
  const { usersState, usersDispatch } = useContext(GlobalContext);
  const { data: dataUsers } = usersState;

  useEffect(() => {
    getAllUsers(usersDispatch);
  }, [usersDispatch]);

  // Columns DataTable
  const columnsDataTable = [
    {
      name: "Username",
      selector: "username",
      sortable: true,
      // maxWidth: "200px",
      wrap: true,
    },
    {
      name: "Created At",
      selector: "createdAt",
      sortable: true,
      wrap: true,
    },
  ];

  const filteredData = useMemo(() => {
    const fixData = [];

    if (dataUsers.data) {
      dataUsers.data.forEach((item) => {
        fixData.push({
          ...item,
          createdAt: getCleanTanggal(item.createdAt),
        });
      });
    }

    return fixData;
  }, [dataUsers]);

  return (
    <>
      <Row>
        <Col>
          <Card className="shadow">
            <CardHeader>
              <h2>Users</h2>
            </CardHeader>
            <CardBody>
              {dataUsers && dataUsers.data.length === 0 ? (
                <Loading />
              ) : (
                <>
                  <Button
                    color="primary"
                    className="btn btn-md mb-2"
                    onClick={() => goToTambah(history, path)}
                  >
                    Tambah Data
                  </Button>
                  <DataTable
                    columns={columnsDataTable}
                    data={filteredData}
                    noHeader
                    responsive={true}
                    customStyles={customStyles}
                    pagination
                  />
                </>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Users;
