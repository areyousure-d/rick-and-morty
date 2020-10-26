import { gql } from '@apollo/client';

const getCharacters = gql`
  query getCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        image
        created
      }
    }
  }
`;

const getCharactersInfo = gql`
  query getCharactersInfo {
    characters {
      info {
        count
        pages
        next
        prev
      }
    }
  }
`;

const getCharacterById = gql`
  query getCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      origin {
        id
        name
        type
        dimension
        created
      }
      location {
        id
        name
        type
        dimension
        created
      }
      episode {
        id
        name
        air_date
        episode
        created
      }
      created
    }
  } 
`;

export {
  getCharacters,
  getCharactersInfo,
  getCharacterById,
};

