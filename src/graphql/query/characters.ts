import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      info {
        count
        next
        pages
        prev
      }
      results {
        episode {
          name
        }
        gender
        image
        location {
          name
          dimension
          residents {
            name
          }
        }
        name
        origin {
          name
          dimension
        }
        species
        status
        id
        type
        created
      }
    }
  }
`;
