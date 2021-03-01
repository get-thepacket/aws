/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCustomers = /* GraphQL */ `
  subscription OnCreateCustomers {
    onCreateCustomers {
      id
      name
      phone
      email
    }
  }
`;
export const onCreateOrders = /* GraphQL */ `
  subscription OnCreateOrders {
    onCreateOrders {
      id
      customerId
      orderDate
    }
  }
`;
