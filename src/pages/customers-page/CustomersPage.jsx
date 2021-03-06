import React from "react";

import Layout from "../../components/layout/main-page-layout/MainPageLayout";
import Header from "../../components/layout/header/Header";
import CustomersContainer from "../../components/customer/customers-container/CustomersContainer";
import { Title } from "../../components/ui";

const CustomersPage = () => (
  <Layout
    header={<Header />}
    main={
      <div>
        <Title>Your customers</Title>
        <CustomersContainer />
      </div>
    }
  />
);

export default CustomersPage;
