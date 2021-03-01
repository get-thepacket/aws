/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomers = /* GraphQL */ `
  query GetCustomers($id: Int!) {
    getCustomers(id: $id) {
      id
      name
      phone
      email
    }
  }
`;
export const listCustomerss = /* GraphQL */ `
  query ListCustomerss {
    listCustomerss {
      id
      name
      phone
      email
    }
  }
`;
export const getOrders = /* GraphQL */ `
  query GetOrders($id: Int!) {
    getOrders(id: $id) {
      id
      customerId
      orderDate
    }
  }
`;
export const listOrderss = /* GraphQL */ `
  query ListOrderss {
    listOrderss {
      id
      customerId
      orderDate
    }
  }
`;
