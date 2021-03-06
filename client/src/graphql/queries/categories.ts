import { gql } from "@apollo/client";

export default gql`
  query Categories {
    categories(country: "US", locale: "en_US") {
      category {
        title
        alias
        parent_categories {
          title
          alias
        }
      }
    }
  }
`;
