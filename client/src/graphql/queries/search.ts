import { gql } from "@apollo/client";
import { businessPreviewFragment } from "./business";

export const searchQuery = gql`
  query search(
    $open_now: Boolean
    $location: String
    $categories: String
    $price: String
    $term: String
    $offset: Int
    $limit: Int
  ) {
    search(
      location: $location
      open_now: $open_now
      categories: $categories
      price: $price
      term: $term
      offset: $offset
      limit: $limit
    ) {
      total
      business {
        ...businessPreviewFragment
      }
    }
  }
  ${businessPreviewFragment}
`;
